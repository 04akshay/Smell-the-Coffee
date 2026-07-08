"use client";

import { useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@/components/icon";
import {
  featuredEvent,
  hostedEvents,
  upcomingEvents,
  buildGoogleCalendarUrl,
  type HostedEvent,
} from "@/lib/events";
import { getRsvpSnapshotRaw, getRsvpStatus, setRsvpStatus, subscribeToEventRsvps } from "@/lib/event-rsvp";

function getServerSnapshot() {
  return "";
}

function HostingCard({ event }: { event: HostedEvent }) {
  const [open, setOpen] = useState(false);
  const [copyState, setCopyState] = useState<"idle" | "copied">("idle");
  const full = event.attendeeCount >= event.capacity;

  async function handleCopyInvite() {
    const url = `${typeof window !== "undefined" ? window.location.origin : ""}/events#${event.id}`;
    if (typeof navigator === "undefined" || !navigator.clipboard) return;
    try {
      await navigator.clipboard.writeText(url);
      setCopyState("copied");
      setTimeout(() => setCopyState("idle"), 2000);
    } catch {
      // clipboard permission denied or unavailable; leave button state unchanged
    }
  }

  return (
    <div className="overflow-hidden rounded-[2rem] border border-tertiary/10 bg-surface-container-lowest shadow-sm transition-shadow hover:shadow-md">
      <div className="flex flex-col md:flex-row">
        <div className="relative h-48 w-full md:h-64 md:w-2/5">
          <Image src={event.image} alt={event.title} fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
          <span className="absolute left-4 top-4 rounded-full bg-sage-leaf px-3 py-1 font-label-caps text-[10px] uppercase tracking-widest text-cream-foam">
            {event.category}
          </span>
        </div>
        <div className="flex flex-grow flex-col justify-between p-6">
          <div>
            <p className="mb-2 font-label-caps text-bean-origin-gold">{event.dateLabel}</p>
            <h4 className="mb-2 font-headline-sm text-headline-sm text-primary">{event.title}</h4>
            <div className="flex items-center gap-2 font-label-md text-on-surface-variant">
              <Icon name="group" className="text-[18px]" />
              <span>
                {event.attendeeCount} / {event.capacity} Attendees{full && " (Full)"}
              </span>
            </div>
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="mt-6 w-full rounded-lg border border-tertiary/10 bg-oat-milk py-2 text-center font-label-md text-primary transition-colors hover:bg-surface-variant"
          >
            {open ? "Hide Details" : "Manage"}
          </button>
        </div>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-tertiary/10 bg-oat-milk/50"
          >
            <div className="flex items-center justify-between p-6">
              <p className="font-label-md text-on-surface-variant">
                Share this ritual with the community.
              </p>
              <button
                onClick={handleCopyInvite}
                className="flex items-center gap-2 rounded-lg bg-roasted-espresso px-4 py-2 font-label-md text-label-md text-cream-foam transition-colors hover:bg-primary-container"
              >
                <Icon name={copyState === "copied" ? "check" : "link"} className="text-[18px]" />
                {copyState === "copied" ? "Link Copied!" : "Copy Invite Link"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function MyEventsView() {
  useSyncExternalStore(subscribeToEventRsvps, getRsvpSnapshotRaw, getServerSnapshot);

  const allEvents = [featuredEvent, ...upcomingEvents];
  const attending = allEvents.filter((e) => getRsvpStatus(e.id, e.defaultStatus) === "attending");
  const waitlisted = allEvents.filter((e) => getRsvpStatus(e.id, e.defaultStatus) === "waitlisted");

  return (
    <div>
      <div className="mb-16 flex items-center gap-4">
        <h3 className="font-headline-md text-primary">Hosting</h3>
        <div className="h-px flex-grow bg-tertiary/10" />
      </div>
      <div className="mb-section-gap grid grid-cols-1 gap-gutter md:grid-cols-2">
        {hostedEvents.map((event) => (
          <HostingCard key={event.id} event={event} />
        ))}
      </div>

      <div className="mb-16 flex items-center gap-4">
        <h3 className="font-headline-md text-primary">Attending</h3>
        <div className="h-px flex-grow bg-tertiary/10" />
      </div>
      {attending.length > 0 ? (
        <div className="mb-section-gap grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-3">
          {attending.map((event) => (
            <div
              key={event.id}
              className="flex h-full flex-col overflow-hidden rounded-xl border border-tertiary/10 bg-surface transition-colors hover:border-tertiary/30"
            >
              <div className="relative h-48 w-full">
                <Image src={event.image} alt={event.title} fill sizes="33vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-md bg-cream-foam px-2 py-1 font-label-caps text-[10px] text-primary">
                  Confirmed
                </span>
              </div>
              <div className="flex flex-grow flex-col justify-between p-5">
                <div>
                  <p className="mb-1 font-label-caps text-bean-origin-gold">
                    {event.month} {event.day}, 2026
                  </p>
                  <h4 className="mb-3 font-headline-sm text-headline-sm leading-tight text-primary">
                    {event.title}
                  </h4>
                  <p className="flex items-center gap-1 font-label-md text-on-surface-variant">
                    <Icon name="location_on" className="text-[16px]" />
                    {event.location}
                  </p>
                </div>
                <div className="mt-6 flex flex-col gap-2">
                  <a
                    href={buildGoogleCalendarUrl(event)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-lg border border-sage-leaf py-2 font-label-md text-sage-leaf transition-colors hover:bg-sage-leaf/5"
                  >
                    <Icon name="calendar_add_on" className="text-[18px]" />
                    Add to Calendar
                  </a>
                  <button
                    onClick={() => setRsvpStatus(event.id, "none")}
                    className="font-label-caps text-[11px] text-on-surface-variant transition-colors hover:text-primary"
                  >
                    Cancel RSVP
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="mb-section-gap font-body-md text-on-surface-variant">
          Nothing yet — RSVP to a ritual in Discover Events and it&apos;ll show up here.
        </p>
      )}

      {waitlisted.length > 0 && (
        <>
          <div className="mb-16 flex items-center gap-4">
            <h3 className="font-headline-md text-primary">Waitlisted</h3>
            <div className="h-px flex-grow bg-tertiary/10" />
          </div>
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-3">
            {waitlisted.map((event, i) => (
              <div
                key={event.id}
                className="flex h-full flex-col overflow-hidden rounded-xl border border-tertiary/10 bg-surface opacity-90"
              >
                <div className="relative h-48 w-full">
                  <Image src={event.image} alt={event.title} fill sizes="33vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-md bg-surface-variant px-2 py-1 font-label-caps text-[10px] text-on-surface-variant">
                    Waitlisted
                  </span>
                </div>
                <div className="flex flex-grow flex-col justify-between p-5">
                  <div>
                    <p className="mb-1 font-label-caps text-bean-origin-gold">
                      {event.month} {event.day}, 2026
                    </p>
                    <h4 className="mb-3 font-headline-sm text-headline-sm leading-tight text-primary">
                      {event.title}
                    </h4>
                    <p className="flex items-center gap-1 font-label-md text-on-surface-variant">
                      <Icon name="location_on" className="text-[16px]" />
                      {event.location}
                    </p>
                  </div>
                  <div className="mt-6 flex flex-col gap-2">
                    <p className="font-label-caps text-[11px] italic text-on-surface-variant">
                      Position #{i + 1} on the waitlist
                    </p>
                    <button
                      onClick={() => setRsvpStatus(event.id, "none")}
                      className="text-left font-label-caps text-[11px] text-on-surface-variant transition-colors hover:text-primary"
                    >
                      Leave Waitlist
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
