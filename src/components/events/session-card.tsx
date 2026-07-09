"use client";

import { useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Icon } from "@/components/icon";
import type { EventRecord } from "@/lib/events";
import { getRsvpStatus, subscribeToEventRsvps } from "@/lib/event-rsvp";
import { RsvpModal } from "@/components/events/rsvp-modal";

function getServerStatus() {
  return "none" as const;
}

export function SessionCard({ event }: { event: EventRecord }) {
  const [open, setOpen] = useState(false);
  const status = useSyncExternalStore(
    subscribeToEventRsvps,
    () => getRsvpStatus(event.id, event.defaultStatus),
    getServerStatus
  );

  const label =
    status === "attending"
      ? "View Pass"
      : status === "waitlisted"
        ? "Waitlisted"
        : event.capacityFull
          ? "Join Waitlist"
          : "Reserve";

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group relative flex h-full w-[85vw] shrink-0 snap-start flex-col overflow-hidden rounded-[2rem] border border-tertiary/10 bg-surface-container-lowest shadow-sm transition-shadow hover:shadow-md md:w-[380px]"
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          sizes="(min-width: 768px) 380px, 85vw"
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute left-4 top-4 min-w-[3.5rem] rounded-xl bg-cream-foam/90 p-2 text-center shadow-lg backdrop-blur-md">
          <div className="font-label-caps text-[10px] font-bold uppercase tracking-wider text-bean-origin-gold">
            {event.month}
          </div>
          <div className="mt-1 font-headline-sm text-[22px] font-bold leading-none text-roasted-espresso">
            {event.day}
          </div>
        </div>
      </div>

      <div className="flex flex-grow flex-col justify-between bg-cream-foam p-6">
        <div>
          <div className="mb-3 flex gap-3">
            <span className="font-label-caps text-[12px] font-bold uppercase tracking-widest text-bean-origin-gold">
              {event.category}
            </span>
            {event.levelTag && (
              <span className="font-label-caps text-[12px] uppercase tracking-widest text-on-surface-variant/50">
                {event.levelTag}
              </span>
            )}
          </div>
          <h3 className="mb-3 font-headline-md text-[22px] leading-tight text-roasted-espresso transition-colors duration-300 group-hover:text-bean-origin-gold">
            {event.title}
          </h3>
          <div className="mb-4 flex items-center font-label-md text-label-md font-light text-on-surface-variant">
            <Icon name="location_on" className="mr-2 text-[18px] text-bean-origin-gold" />
            {event.location}
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-tertiary/10 pt-6">
          <div className="flex -space-x-3">
            {event.attendeeAvatars.map((avatar) => (
              <div
                key={avatar}
                className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-cream-foam"
              >
                <Image src={avatar} alt="" fill sizes="32px" className="object-cover" />
              </div>
            ))}
            <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-cream-foam bg-surface-variant font-label-caps text-[10px] text-on-surface-variant">
              +{event.attendeeCount}
            </div>
          </div>
          <button
            onClick={() => setOpen(true)}
            className={
              status !== "none"
                ? "flex items-center gap-1 font-label-md text-label-md font-bold text-sage-leaf"
                : "group/link flex items-center gap-1 font-label-md text-label-md font-bold text-roasted-espresso transition-colors hover:text-bean-origin-gold"
            }
          >
            {label}
            <Icon
              name={status !== "none" ? "check_circle" : "arrow_forward"}
              filled={status !== "none"}
              className="text-[16px] transition-transform group-hover/link:translate-x-1"
            />
          </button>
        </div>
      </div>

      <RsvpModal open={open} onClose={() => setOpen(false)} event={event} />
    </motion.div>
  );
}
