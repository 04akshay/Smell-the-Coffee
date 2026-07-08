"use client";

import { useRef } from "react";
import { Icon } from "@/components/icon";
import { SessionCard } from "@/components/events/session-card";
import type { EventRecord } from "@/lib/events";

export function UpcomingHorizonsCarousel({ events }: { events: EventRecord[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scrollByCard(direction: 1 | -1) {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * 400, behavior: "smooth" });
  }

  return (
    <section className="mb-section-gap">
      <div className="mb-12 flex items-end justify-between px-2">
        <h3 className="font-display-lg text-[32px] text-roasted-espresso">Upcoming Horizons</h3>
        <div className="hidden gap-4 md:flex">
          <button
            onClick={() => scrollByCard(-1)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-tertiary/10 text-on-surface-variant transition-colors hover:border-bean-origin-gold hover:text-bean-origin-gold"
          >
            <Icon name="arrow_back" />
          </button>
          <button
            onClick={() => scrollByCard(1)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-tertiary/10 text-on-surface-variant transition-colors hover:border-bean-origin-gold hover:text-bean-origin-gold"
          >
            <Icon name="arrow_forward" />
          </button>
        </div>
      </div>
      <div
        ref={scrollerRef}
        className="hide-scrollbar -mx-margin-mobile flex snap-x snap-mandatory gap-8 overflow-x-auto px-margin-mobile pb-4 md:-mx-margin-desktop md:px-margin-desktop"
      >
        {events.map((event) => (
          <SessionCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}
