const STORAGE_KEY = "stc:event-rsvps";
const CHANGE_EVENT = "stc:event-rsvps-changed";

export type RsvpStatus = "attending" | "waitlisted" | "none";

function readOverrides(): Record<string, RsvpStatus> {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function getRsvpStatus(
  eventId: string,
  defaultStatus: RsvpStatus = "none"
): RsvpStatus {
  const overrides = readOverrides();
  return overrides[eventId] ?? defaultStatus;
}

export function setRsvpStatus(eventId: string, status: RsvpStatus): void {
  if (typeof window === "undefined") return;
  const overrides = readOverrides();
  overrides[eventId] = status;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(overrides));
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function getRsvpSnapshotRaw(): string {
  if (typeof window === "undefined") return "";
  try {
    return window.localStorage.getItem(STORAGE_KEY) ?? "";
  } catch {
    return "";
  }
}

export function subscribeToEventRsvps(callback: () => void): () => void {
  window.addEventListener(CHANGE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CHANGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}
