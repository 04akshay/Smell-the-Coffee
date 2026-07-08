"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Tab = "discover" | "mine";

export function EventTabs({
  discover,
  mine,
}: {
  discover: React.ReactNode;
  mine: React.ReactNode;
}) {
  const [tab, setTab] = useState<Tab>("discover");

  return (
    <div>
      <div className="mx-auto mb-16 flex w-fit items-center rounded-full border border-tertiary/5 bg-surface-container-low p-1">
        {(
          [
            ["discover", "Discover Events"],
            ["mine", "My Events"],
          ] as [Tab, string][]
        ).map(([value, label]) => (
          <button
            key={value}
            onClick={() => setTab(value)}
            className="relative rounded-full px-8 py-2.5 font-label-md text-label-md font-bold transition-colors"
          >
            {tab === value && (
              <motion.div
                layoutId="event-tab-pill"
                className="absolute inset-0 rounded-full bg-roasted-espresso shadow-lg"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            <span
              className={
                tab === value
                  ? "relative z-10 text-cream-foam"
                  : "relative z-10 text-on-surface-variant"
              }
            >
              {label}
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {tab === "discover" ? discover : mine}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
