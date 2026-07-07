const STORAGE_KEY = "stc:stamped-cafes";
const CHANGE_EVENT = "stc:stamps-changed";

function readSlugs(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function isCafeStamped(slug: string): boolean {
  return readSlugs().includes(slug);
}

export function addCafeStamp(slug: string): void {
  if (typeof window === "undefined") return;
  const slugs = readSlugs();
  if (!slugs.includes(slug)) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...slugs, slug]));
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }
}

export function subscribeToStamps(callback: () => void): () => void {
  window.addEventListener(CHANGE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CHANGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}
