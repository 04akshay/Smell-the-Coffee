"use client";

import { useState } from "react";
import { Icon } from "@/components/icon";

const FILTERS = ["Work Friendly", "Pour Over", "$$", "Minimalist"];

export function FilterBar({ resultCount }: { resultCount: number }) {
  const [active, setActive] = useState(new Set(["Work Friendly"]));

  function toggle(filter: string) {
    setActive((prev) => {
      const next = new Set(prev);
      if (next.has(filter)) {
        next.delete(filter);
      } else {
        next.add(filter);
      }
      return next;
    });
  }

  return (
    <div className="z-20 shrink-0 border-b border-tertiary/10 bg-cream-foam/95 p-gutter backdrop-blur-sm">
      <div className="mb-4 flex items-end justify-between">
        <div>
          <h1 className="mb-1 font-headline-md text-headline-md font-semibold text-roasted-espresso">
            Explore Cafes
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Showing {resultCount} specialty spots
          </p>
        </div>
        <button className="flex items-center gap-2 font-label-md text-label-md text-sage-leaf transition-colors hover:text-roasted-espresso">
          <Icon name="tune" className="text-[18px]" />
          Filters
        </button>
      </div>

      <div className="hide-scrollbar flex gap-2 overflow-x-auto pb-2 pt-1">
        {FILTERS.map((filter) => {
          const isActive = active.has(filter);
          return (
            <button
              key={filter}
              onClick={() => toggle(filter)}
              className={
                isActive
                  ? "shrink-0 whitespace-nowrap rounded-full bg-roasted-espresso px-4 py-1.5 font-label-md text-label-md text-cream-foam transition-colors"
                  : "shrink-0 whitespace-nowrap rounded-full border border-outline-variant px-4 py-1.5 font-label-md text-label-md text-on-surface transition-colors hover:bg-oat-milk"
              }
            >
              {filter}
            </button>
          );
        })}
      </div>
    </div>
  );
}
