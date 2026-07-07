"use client";

import { useState } from "react";
import { StepTimeline } from "@/components/brewing/step-timeline";
import { TimerFab } from "@/components/brewing/timer-fab";
import { BrewTimerOverlay } from "@/components/brewing/brew-timer-overlay";
import type { BrewGuideRecord } from "@/lib/brewing-guides";

export function BrewTimerLauncher({ guide }: { guide: BrewGuideRecord }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StepTimeline steps={guide.steps} onStart={() => setOpen(true)} />
      <TimerFab onClick={() => setOpen(true)} />
      <BrewTimerOverlay open={open} onClose={() => setOpen(false)} guide={guide} />
    </>
  );
}
