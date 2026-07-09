const STORAGE_KEY = "stc:event-rsvps";
const CHANGE_EVENT = "stc:event-rsvps-changed";

export type RsvpStatus = "attending" | "waitlisted" | "none";

export type RsvpRecord = {
  status: RsvpStatus;
  reservationId?: string;
  waitlistEmail?: string;
  notifyOptIn?: boolean;
};

type RsvpStore = Record<string, RsvpRecord>;

function readStore(): RsvpStore {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    // Defensive: earlier versions stored `Record<string, RsvpStatus>` (a plain
    // string per event) instead of `RsvpRecord`. Normalize old shape on read
    // rather than crash on stale localStorage from prior sessions.
    const normalized: RsvpStore = {};
    for (const [id, value] of Object.entries(parsed)) {
      normalized[id] = typeof value === "string" ? { status: value as RsvpStatus } : (value as RsvpRecord);
    }
    return normalized;
  } catch {
    return {};
  }
}

function writeStore(store: RsvpStore): void {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function getTicket(eventId: string): RsvpRecord | undefined {
  return readStore()[eventId];
}

export function getRsvpStatus(
  eventId: string,
  defaultStatus: RsvpStatus = "none"
): RsvpStatus {
  return readStore()[eventId]?.status ?? defaultStatus;
}

export function setRsvpStatus(eventId: string, status: RsvpStatus): void {
  if (typeof window === "undefined") return;
  const store = readStore();
  if (status === "none") {
    delete store[eventId];
  } else {
    store[eventId] = { ...store[eventId], status };
  }
  writeStore(store);
}

export function confirmAttendance(eventId: string, reservationId: string): void {
  if (typeof window === "undefined") return;
  const store = readStore();
  store[eventId] = { status: "attending", reservationId };
  writeStore(store);
}

export function joinWaitlist(
  eventId: string,
  waitlistEmail: string,
  notifyOptIn: boolean
): void {
  if (typeof window === "undefined") return;
  const store = readStore();
  store[eventId] = { status: "waitlisted", waitlistEmail, notifyOptIn };
  writeStore(store);
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
