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

export function FeaturedEvent({ event }: { event: EventRecord }) {
  const [open, setOpen] = useState(false);
  const status = useSyncExternalStore(
    subscribeToEventRsvps,
    () => getRsvpStatus(event.id, event.defaultStatus),
    getServerStatus
  );
  const attending = status === "attending";
  const waitlisted = status === "waitlisted";

  return (
    <section className="relative mb-32">
      <span className="mb-6 block text-center font-label-caps text-label-caps uppercase tracking-[0.2em] text-bean-origin-gold md:absolute md:left-0 md:top-0 md:z-20 md:mb-0 md:w-max md:rounded-br-3xl md:bg-cream-foam/90 md:px-6 md:py-3 md:text-left md:backdrop-blur-md">
        Featured Ritual
      </span>
      <div className="ambient-shadow relative flex flex-col overflow-hidden rounded-[2.5rem] bg-surface-container-lowest md:h-[560px] md:flex-row">
        <div className="relative order-1 h-[360px] overflow-hidden md:order-2 md:h-full md:w-3/5">
          <Image
            src={event.image}
            alt={event.title}
            fill
            priority
            sizes="(min-width: 768px) 60vw, 100vw"
            className="object-cover transition-transform duration-1000 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-roasted-espresso/80 via-transparent to-transparent md:bg-gradient-to-r md:from-roasted-espresso/90 md:via-roasted-espresso/10" />
        </div>

        <div className="relative z-10 order-2 flex flex-col justify-center bg-roasted-espresso p-8 text-cream-foam md:order-1 md:-mr-12 md:w-2/5 md:rounded-r-[4rem] md:p-16 md:shadow-[20px_0_40px_rgba(0,0,0,0.3)]">
          <div className="mb-6 flex items-center font-label-md text-label-md tracking-wide text-bean-origin-gold">
            <Icon name="calendar_today" className="mr-2 text-[20px]" />
            {event.timeLabel}
          </div>
          <h2 className="mb-4 font-display-lg text-[32px] font-bold leading-tight text-cream-foam md:text-[48px]">
            {event.title}
          </h2>
          <div className="mb-4 flex items-center gap-2 font-body-md text-body-md text-oat-milk/80">
            <Icon name="location_on" className="text-lg" />
            <span>{event.location}</span>
          </div>
          <p className="mb-10 font-body-lg text-body-lg italic leading-relaxed text-oat-milk/80">
            {event.description}
          </p>

          <div className="mb-10 flex -space-x-4">
            {event.attendeeAvatars.map((avatar) => (
              <div
                key={avatar}
                className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-roasted-espresso shadow-lg"
              >
                <Image src={avatar} alt="" fill sizes="48px" className="object-cover" />
              </div>
            ))}
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-roasted-espresso bg-bean-origin-gold/20 font-label-caps text-label-caps text-bean-origin-gold backdrop-blur-sm">
              +{event.attendeeCount}
            </div>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setOpen(true)}
            className={
              attending || waitlisted
                ? "group/btn flex w-fit items-center justify-center gap-3 rounded-full border-2 border-bean-origin-gold px-8 py-4 font-label-md text-label-md font-bold text-bean-origin-gold transition-colors"
                : "group/btn flex w-fit items-center justify-center gap-3 rounded-full bg-bean-origin-gold px-8 py-4 font-label-md text-label-md font-bold text-roasted-espresso transition-colors hover:bg-cream-foam"
            }
          >
            {attending ? "View Your Pass" : waitlisted ? "You're Waitlisted" : "Immerse Yourself"}
            <Icon
              name={attending || waitlisted ? "check_circle" : "arrow_forward"}
              filled={attending || waitlisted}
              className="text-[20px] transition-transform duration-300 group-hover/btn:translate-x-1"
            />
          </motion.button>
        </div>
      </div>

      <RsvpModal open={open} onClose={() => setOpen(false)} event={event} />
    </section>
  );
}
