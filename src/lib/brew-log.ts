const STORAGE_KEY = "stc:brew-log";
const CHANGE_EVENT = "stc:brew-log-changed";

function readLog(): Record<string, number> {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function getBrewCount(slug: string): number {
  return readLog()[slug] ?? 0;
}

export function logBrewCompletion(slug: string): number {
  if (typeof window === "undefined") return 0;
  const log = readLog();
  const next = (log[slug] ?? 0) + 1;
  log[slug] = next;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(log));
  window.dispatchEvent(new Event(CHANGE_EVENT));
  return next;
}

export function subscribeToBrewLog(callback: () => void): () => void {
  window.addEventListener(CHANGE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CHANGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}
