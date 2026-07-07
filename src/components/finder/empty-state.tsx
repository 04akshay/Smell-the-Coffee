"use client";

import { useState } from "react";
import Image from "next/image";
import { Icon } from "@/components/icon";

const QUICK_VIBES = [
  { label: "Laptop Friendly", icon: "laptop_mac", query: "workspace" },
  { label: "Quiet Corner", icon: "menu_book", query: "quiet" },
  { label: "Outdoor Seating", icon: "sunny", query: "outdoor seating" },
  { label: "Quick Fix", icon: "bolt", query: "quick fix" },
];

const ILLUSTRATION =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBx0r_tI8AC5ovgeEjOnQztETwAJRgzNkxaPZjvvOtJly3M9kNzbma4zzAEoN7PuTyr4v25p517gFPCghJuLd6d_-FIs3lA6im2_3QPr2auzZjl0_FY_pgvnuwm5mpYQe5a4kad---AHwMYiAQYGQwULFu_VKjIHT-V_utmiTUZkZDhDGOkItr2WF5mBqBGLPrtdOJ3IdXCwH3Afrw9_pZRTZgik-MBNVE8f6E_P1gd1IRiTF-AlPVEzg";

export function FinderEmptyState({
  onClearAll,
  onQuickVibe,
}: {
  onClearAll: () => void;
  onQuickVibe: (query: string) => void;
}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 10, y: y * 10 });
  }

  return (
    <div className="coffee-pattern relative flex flex-col items-center overflow-hidden rounded-xl py-section-gap text-center">
      <div className="relative mb-12 inline-block">
        <div className="absolute -inset-4 -z-10 animate-pulse rounded-full bg-oat-milk/50 blur-2xl" />
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setTilt({ x: 0, y: 0 })}
          style={{
            transform: `translateY(-4px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
            transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
          className="mx-auto flex h-64 w-64 items-center justify-center overflow-hidden rounded-full border border-tertiary/10 bg-cream-foam md:h-80 md:w-80"
        >
          <Image
            src={ILLUSTRATION}
            alt="A minimal flat vector illustration of a specialty coffee cup knocked over with a playful splash"
            width={320}
            height={320}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute -top-4 left-0 rotate-12 rounded-full bg-sage-leaf px-4 py-1 text-label-caps font-label-caps text-white shadow-lg">
          REFILL NEEDED
        </div>
      </div>

      <div className="max-w-lg space-y-6 px-margin-mobile">
        <h2 className="font-display-lg text-display-lg-mobile text-roasted-espresso md:text-display-lg">
          Looks like we&apos;re out of beans.
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          We couldn&apos;t find any results for your current filters. Try
          adjusting your{" "}
          <span className="font-semibold italic text-sage-leaf">vibe</span>,
          neighborhood, or search term.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row">
          <button
            onClick={onClearAll}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-roasted-espresso px-8 py-4 font-label-md text-label-md text-cream-foam transition-all hover:scale-[1.02] hover:bg-primary-container hover:shadow-xl active:scale-[0.98] sm:w-auto"
          >
            <Icon name="filter_alt_off" className="text-[20px]" />
            Clear All Filters
          </button>
          <button
            onClick={onClearAll}
            className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-sage-leaf px-8 py-4 font-label-md text-label-md text-sage-leaf transition-all active:scale-[0.98] sm:w-auto"
          >
            <Icon name="explore" className="text-[20px]" />
            Browse All Cafes
          </button>
        </div>
      </div>

      <div className="mt-16 w-full max-w-lg border-t border-tertiary/5 pt-8">
        <p className="mb-4 text-label-caps font-label-caps text-on-tertiary-container">
          OR TRY A POPULAR VIBE
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {QUICK_VIBES.map((vibe) => (
            <button
              key={vibe.label}
              onClick={() => onQuickVibe(vibe.query)}
              className="flex items-center gap-1 rounded-full bg-surface-container px-4 py-2 font-label-md text-label-md text-on-surface-variant transition-colors hover:bg-oat-milk"
            >
              <Icon name={vibe.icon} className="text-[16px]" />
              {vibe.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
