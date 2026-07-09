"use client";

import { useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Icon } from "@/components/icon";
import type { EventRecord } from "@/lib/events";
import { buildGoogleCalendarUrl } from "@/lib/events";
import {
  confirmAttendance,
  getRsvpSnapshotRaw,
  getTicket,
  joinWaitlist,
  subscribeToEventRsvps,
} from "@/lib/event-rsvp";

function ordinal(n: number): string {
  if (n > 3 && n < 21) return `${n}th`;
  switch (n % 10) {
    case 1:
      return `${n}st`;
    case 2:
      return `${n}nd`;
    case 3:
      return `${n}rd`;
    default:
      return `${n}th`;
  }
}

function formatDisplayDate(iso: string): string {
  const date = new Date(iso);
  const month = date.toLocaleDateString("en-US", { month: "long" });
  return `${month} ${ordinal(date.getDate())}, ${date.getFullYear()}`;
}

function formatDisplayTime(iso: string): string {
  const date = new Date(iso);
  return date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
}

function generateReservationId(): string {
  return `STC-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
}

function getServerSnapshot() {
  return "";
}

function RsvpModalInner({ event, onClose }: { event: EventRecord; onClose: () => void }) {
  const reducedMotion = useReducedMotion();
  // useSyncExternalStore requires a snapshot with stable identity when
  // nothing changed. getTicket() returns a freshly-parsed object every call,
  // so we subscribe to the raw JSON string (a primitive, stable by value)
  // and derive the ticket via a plain call in the render body instead.
  useSyncExternalStore(subscribeToEventRsvps, getRsvpSnapshotRaw, getServerSnapshot);
  const ticket = getTicket(event.id);
  const status = ticket?.status ?? event.defaultStatus ?? "none";

  const [submitting, setSubmitting] = useState(false);
  const [email, setEmail] = useState(ticket?.waitlistEmail ?? "");
  const [notify, setNotify] = useState(ticket?.notifyOptIn ?? true);
  const [shareState, setShareState] = useState<"idle" | "copied">("idle");
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function handleTiltMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 10, y: y * -10 });
  }

  function handleConfirm() {
    confirmAttendance(event.id, generateReservationId());
  }

  function handleWaitlistSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      joinWaitlist(event.id, email, notify);
      setSubmitting(false);
    }, 1200);
  }

  async function handleShare() {
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: `${event.title} — Smell the Coffee`,
          text: `Join me at ${event.title} on ${formatDisplayDate(event.isoStart)}.`,
          url,
        });
        return;
      } catch {
        // cancelled or unsupported; fall through to clipboard
      }
    }
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(url);
        setShareState("copied");
        setTimeout(() => setShareState("idle"), 2000);
      } catch {
        // clipboard permission denied or unavailable; leave button state unchanged
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-roasted-espresso/40 p-margin-mobile backdrop-blur-md"
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-cream-foam text-roasted-espresso shadow-lg transition-transform hover:bg-oat-milk active:scale-90"
      >
        <Icon name="close" />
      </button>

      <AnimatePresence mode="wait">
        {status === "attending" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex w-full max-w-md flex-col items-center py-8 text-center"
          >
            <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-bean-origin-gold/30 bg-bean-origin-gold/10">
              <Icon name="check_circle" filled className="text-5xl text-bean-origin-gold" />
            </div>
            <h1 className="mb-2 font-display-lg text-display-lg-mobile text-roasted-espresso">
              Your Ritual is Logged
            </h1>
            <p className="mb-8 max-w-sm font-body-lg text-body-lg text-on-surface-variant">
              Your spot is secured. Here&apos;s your digital pass for arrival.
            </p>

            <motion.div
              animate={reducedMotion ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-full"
            >
              <motion.div
                onMouseMove={handleTiltMove}
                onMouseLeave={() => setTilt({ x: 0, y: 0 })}
                animate={{ rotateX: tilt.y, rotateY: tilt.x }}
                style={{ transformPerspective: 1000 }}
                className="flex w-full flex-col overflow-hidden rounded-2xl border border-outline-variant/30 bg-cream-foam shadow-[0_20px_50px_rgba(44,27,24,0.15)]"
              >
                <div className="ticket-topographic relative flex h-40 flex-col justify-end bg-roasted-espresso p-6 text-left">
                  <span className="absolute right-4 top-4 rounded-full bg-bean-origin-gold px-3 py-1 font-label-caps text-label-caps uppercase tracking-widest text-roasted-espresso">
                    Confirmed
                  </span>
                  <h2 className="font-headline-md text-headline-md text-cream-foam">
                    {event.title}
                  </h2>
                  <p className="font-label-md text-label-md text-cream-foam/70">
                    {event.category}
                    {event.levelTag ? ` • ${event.levelTag}` : ""}
                  </p>
                </div>
                <div className="ticket-perforation border-t-2 border-dashed border-outline-variant/50" />
                <div className="space-y-4 p-6 text-left">
                  <div className="grid grid-cols-2 gap-gutter">
                    <div>
                      <p className="mb-1 font-label-caps text-[10px] uppercase text-on-surface-variant/60">
                        Reservation ID
                      </p>
                      <p className="font-body-md font-bold text-roasted-espresso">
                        {ticket?.reservationId ?? "—"}
                      </p>
                    </div>
                    <div>
                      <p className="mb-1 font-label-caps text-[10px] uppercase text-on-surface-variant/60">
                        Date &amp; Time
                      </p>
                      <p className="font-body-md font-bold text-roasted-espresso">
                        {formatDisplayTime(event.isoStart)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 rounded-lg border border-tertiary/5 bg-surface-container-low p-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-white shadow-sm">
                      <Icon name="qr_code_2" className="text-bean-origin-gold" />
                    </div>
                    <div>
                      <p className="mb-1 font-label-caps text-[10px] leading-none text-on-surface-variant/60">
                        SCAN AT ENTRANCE
                      </p>
                      <p className="font-label-md font-semibold text-roasted-espresso">
                        Member Pass Enabled
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <div className="mt-8 flex w-full flex-col gap-3">
              <a
                href={buildGoogleCalendarUrl(event)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-roasted-espresso py-4 font-label-md font-semibold text-cream-foam transition-colors hover:bg-primary-container"
              >
                <Icon name="calendar_add_on" />
                Sync to Calendar
              </a>
              <button
                onClick={handleShare}
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-sage-leaf/30 py-3 font-label-md font-semibold text-sage-leaf transition-colors hover:bg-sage-leaf/5"
              >
                <Icon name={shareState === "copied" ? "check" : "share"} className="text-[20px]" />
                {shareState === "copied" ? "Link Copied!" : "Share with your Crew"}
              </button>
            </div>

            {event.attendeeAvatars.length > 0 && (
              <div className="mt-10 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {event.attendeeAvatars.slice(0, 3).map((avatar) => (
                    <div
                      key={avatar}
                      className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-cream-foam"
                    >
                      <Image src={avatar} alt="" fill sizes="32px" className="object-cover" />
                    </div>
                  ))}
                </div>
                <p className="font-label-caps text-label-caps text-on-surface-variant">
                  Joining {event.attendeeCount} other ritualists
                </p>
              </div>
            )}
          </motion.div>
        ) : status === "waitlisted" ? (
          <motion.div
            key="waitlisted"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-2xl rounded-xl border border-tertiary/10 bg-surface-container-low p-8 text-center shadow-sm md:p-12"
          >
            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-sage-leaf px-4 py-1.5 font-label-caps text-label-caps text-cream-foam">
              <Icon name="check_circle" filled className="text-[16px]" />
              ON THE WAITLIST
            </div>
            <h1 className="mb-4 font-display-lg text-display-lg-mobile text-roasted-espresso md:text-display-lg">
              You&apos;re on the list!
            </h1>
            <p className="mx-auto mb-8 max-w-lg font-body-lg text-body-lg text-on-surface-variant">
              We&apos;ll {ticket?.notifyOptIn !== false ? "email " + (ticket?.waitlistEmail || "you") : "let you know"} the moment a spot opens up for{" "}
              <strong className="text-roasted-espresso">{event.title}</strong>.
            </p>
            <button
              onClick={onClose}
              className="mx-auto flex items-center justify-center gap-2 rounded-lg bg-roasted-espresso px-8 py-3 font-label-md font-semibold text-cream-foam transition-colors hover:bg-primary-container"
            >
              Got It
            </button>
          </motion.div>
        ) : event.capacityFull ? (
          <motion.div
            key="waitlist-form"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-2xl rounded-xl border border-tertiary/10 bg-surface-container-low p-8 text-center shadow-sm md:p-12"
          >
            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-sage-leaf px-4 py-1.5 font-label-caps text-label-caps text-cream-foam">
              <Icon name="groups" className="text-[16px]" />
              AT CAPACITY
            </div>
            <h1 className="mb-4 font-display-lg text-display-lg-mobile text-roasted-espresso md:text-display-lg">
              {event.title}
            </h1>
            <p className="mx-auto mb-10 max-w-lg font-body-lg text-body-lg text-on-surface-variant">
              We&apos;ve reached maximum capacity for this session. Join the waitlist to be
              first in line if a spot opens up.
            </p>

            <div className="mb-10 flex items-center justify-center gap-4 rounded-lg border border-tertiary/5 bg-oat-milk px-6 py-4">
              <Icon name="timer" filled className="text-roasted-espresso" />
              <p className="font-label-md text-label-md text-roasted-espresso">
                Current Position:{" "}
                <span className="font-bold">You&apos;ll be #{event.attendeeCount + 1}</span> on
                the list
              </p>
            </div>

            <form onSubmit={handleWaitlistSubmit} className="space-y-6 text-left">
              <div className="group relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full rounded-t-lg border-0 border-b-2 border-outline-variant bg-oat-milk px-4 py-4 font-body-md text-body-md transition-all focus:border-roasted-espresso focus:ring-0"
                />
              </div>
              <label className="group flex cursor-pointer items-center gap-3">
                <input
                  type="checkbox"
                  checked={notify}
                  onChange={(e) => setNotify(e.target.checked)}
                  className="h-5 w-5 rounded border-outline-variant text-roasted-espresso focus:ring-roasted-espresso"
                />
                <span className="font-label-md text-label-md text-on-surface-variant transition-colors group-hover:text-roasted-espresso">
                  Notify me of future sessions and exclusive bean releases
                </span>
              </label>
              <button
                type="submit"
                disabled={submitting}
                className="flex w-full items-center justify-center gap-3 rounded-lg bg-roasted-espresso py-5 font-headline-sm text-headline-sm text-cream-foam transition-all hover:bg-primary-container active:scale-[0.98] disabled:opacity-80"
              >
                {submitting ? (
                  <>
                    <Icon name="progress_activity" className="animate-spin" />
                    Adding...
                  </>
                ) : (
                  <>
                    Join Waitlist
                    <Icon name="chevron_right" />
                  </>
                )}
              </button>
            </form>
            <p className="mt-8 font-label-caps text-[11px] uppercase tracking-widest text-on-surface-variant/60">
              No email is sent externally in this preview — your spot in line is saved locally.
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="invite"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid w-full max-w-4xl grid-cols-1 overflow-hidden rounded-xl border border-tertiary/5 bg-cream-foam shadow-[0_32px_64px_-12px_rgba(44,27,24,0.2)] md:grid-cols-2"
          >
            <div className="relative h-64 overflow-hidden md:h-auto">
              <Image
                src={event.image}
                alt={event.title}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-roasted-espresso/70 to-transparent" />
              <div className="absolute bottom-6 left-6 text-cream-foam">
                <span className="mb-3 inline-block rounded-full bg-bean-origin-gold/90 px-3 py-1 font-label-caps text-label-caps text-primary">
                  {event.category}
                </span>
                <h3 className="font-headline-md text-headline-md font-bold leading-tight">
                  {event.title}
                </h3>
              </div>
            </div>

            <div className="flex flex-col justify-center p-8 md:p-12">
              <h1 className="mb-4 font-display-lg text-display-lg-mobile leading-tight text-roasted-espresso">
                Reserve Your Spot
              </h1>
              <p className="mb-8 max-w-sm font-body-lg text-body-lg text-on-surface-variant">
                {event.description}
              </p>

              <div className="mb-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-oat-milk text-roasted-espresso">
                    <Icon name="calendar_today" />
                  </div>
                  <div>
                    <p className="font-label-caps text-label-caps text-on-surface-variant opacity-60">
                      DATE
                    </p>
                    <p className="font-body-md font-bold text-roasted-espresso">
                      {formatDisplayDate(event.isoStart)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-oat-milk text-roasted-espresso">
                    <Icon name="schedule" />
                  </div>
                  <div>
                    <p className="font-label-caps text-label-caps text-on-surface-variant opacity-60">
                      TIME
                    </p>
                    <p className="font-body-md font-bold text-roasted-espresso">
                      {event.timeLabel}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-oat-milk text-roasted-espresso">
                    <Icon name="location_on" />
                  </div>
                  <div>
                    <p className="font-label-caps text-label-caps text-on-surface-variant opacity-60">
                      LOCATION
                    </p>
                    <p className="font-body-md font-bold text-roasted-espresso">
                      {event.location}
                    </p>
                  </div>
                </div>
              </div>

              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={handleConfirm}
                className="flex w-full items-center justify-center gap-3 rounded-lg bg-roasted-espresso py-5 font-label-md text-label-md font-bold uppercase tracking-widest text-cream-foam transition-all duration-300 hover:shadow-[0_20px_40px_-10px_rgba(198,166,100,0.4)]"
              >
                Confirm Ritual
                <Icon name="priority_high" filled />
              </motion.button>
              <p className="mt-6 text-center font-label-caps text-label-caps text-on-surface-variant opacity-40">
                Exclusive to Coffee Passport Holders
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function RsvpModal({
  open,
  onClose,
  event,
}: {
  open: boolean;
  onClose: () => void;
  event: EventRecord;
}) {
  return (
    <AnimatePresence>
      {open && <RsvpModalInner key={event.id} event={event} onClose={onClose} />}
    </AnimatePresence>
  );
}
