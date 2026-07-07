import type { BrewGuideRecord, BrewStep } from "@/lib/brewing-guides";

export type StepBoundary = { step: BrewStep; startSec: number; endSec: number };

function parseLeadingTime(label: string): number {
  const match = label.match(/^(\d+):(\d{2})/);
  if (!match) return 0;
  return parseInt(match[1], 10) * 60 + parseInt(match[2], 10);
}

export function getTotalSeconds(guide: BrewGuideRecord): number {
  return parseLeadingTime(guide.timeLabel);
}

export function getStepBoundaries(guide: BrewGuideRecord): StepBoundary[] {
  const totalSec = getTotalSeconds(guide);
  return guide.steps.map((step, i) => {
    const startSec = parseLeadingTime(step.timeLabel);
    const next = guide.steps[i + 1];
    const endSec = next ? parseLeadingTime(next.timeLabel) : totalSec;
    return { step, startSec, endSec };
  });
}

export function getCurrentStepIndex(elapsedSec: number, boundaries: StepBoundary[]): number {
  for (let i = boundaries.length - 1; i >= 0; i--) {
    if (elapsedSec >= boundaries[i].startSec) return i;
  }
  return 0;
}

export function formatMMSS(totalSeconds: number): string {
  const clamped = Math.max(0, Math.round(totalSeconds));
  const mins = Math.floor(clamped / 60);
  const secs = clamped % 60;
  return `${mins}:${String(secs).padStart(2, "0")}`;
}
