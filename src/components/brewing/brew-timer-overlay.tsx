"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Icon } from "@/components/icon";
import type { BrewGuideRecord } from "@/lib/brewing-guides";
import {
  getStepBoundaries,
  getTotalSeconds,
  getCurrentStepIndex,
  formatMMSS,
  type StepBoundary,
} from "@/lib/brew-timer";
import { getBrewCount, logBrewCompletion, subscribeToBrewLog } from "@/lib/brew-log";
import { useSyncExternalStore } from "react";

const MASTERY_TARGET = 3;

function getPhaseName(timeLabel: string): string {
  return timeLabel.replace(/^\d+:\d{2}\s*-\s*/, "");
}

function getPhaseVerb(phaseName: string): string {
  const lower = phaseName.toLowerCase();
  if (lower.includes("bloom")) return "Blooming";
  if (lower.includes("pour")) return "Pouring";
  if (lower.includes("steep") || lower.includes("wait") || lower.includes("rest")) return "Steeping";
  if (lower.includes("press") || lower.includes("plunge")) return "Pressing";
  if (lower.includes("drain") || lower.includes("draw") || lower.includes("filter")) return "Draining";
  if (lower.includes("crust") || lower.includes("stir") || lower.includes("skim")) return "Finishing";
  return phaseName;
}

function getServerBrewCount() {
  return 0;
}

function BrewTimerModal({
  guide,
  onClose,
}: {
  guide: BrewGuideRecord;
  onClose: () => void;
}) {
  const router = useRouter();
  const reducedMotion = useReducedMotion();
  const [elapsedSec, setElapsedSec] = useState(0);
  const [running, setRunning] = useState(true);
  const [shareState, setShareState] = useState<"idle" | "copied">("idle");
  const loggedRef = useRef(false);

  const totalSec = getTotalSeconds(guide);
  const boundaries = useMemo(() => getStepBoundaries(guide), [guide]);
  const isComplete = elapsedSec >= totalSec;
  const currentIndex = getCurrentStepIndex(elapsedSec, boundaries);
  const currentBoundary = boundaries[currentIndex];
  const overallProgress = totalSec > 0 ? elapsedSec / totalSec : 0;

  const brewCount = useSyncExternalStore(
    subscribeToBrewLog,
    () => getBrewCount(guide.slug),
    getServerBrewCount
  );

  useEffect(() => {
    if (!running || isComplete) return;
    let last = performance.now();
    const id = setInterval(() => {
      const now = performance.now();
      const delta = (now - last) / 1000;
      last = now;
      setElapsedSec((prev) => Math.min(totalSec, prev + delta));
    }, 100);
    return () => clearInterval(id);
  }, [running, isComplete, totalSec]);

  useEffect(() => {
    if (isComplete && !loggedRef.current) {
      loggedRef.current = true;
      logBrewCompletion(guide.slug);
    }
  }, [isComplete, guide.slug]);

  function jumpToStep(index: number) {
    const clamped = Math.max(0, Math.min(boundaries.length - 1, index));
    setElapsedSec(boundaries[clamped].startSec);
  }

  function handleSkipPrevious() {
    if (elapsedSec - currentBoundary.startSec > 1.5) {
      setElapsedSec(currentBoundary.startSec);
    } else {
      jumpToStep(currentIndex - 1);
    }
  }

  function handleSkipNext() {
    if (currentIndex >= boundaries.length - 1) {
      setElapsedSec(totalSec);
    } else {
      jumpToStep(currentIndex + 1);
    }
  }

  async function handleShare() {
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: `${guide.name} — Smell the Coffee`,
          text: `I just brewed a ${guide.name} in ${guide.timeLabel}.`,
          url,
        });
        return;
      } catch {
        // cancelled or unsupported; fall through to clipboard
      }
    }
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      await navigator.clipboard.writeText(url);
      setShareState("copied");
      setTimeout(() => setShareState("idle"), 2000);
    }
  }

  const phaseName = getPhaseName(currentBoundary.step.timeLabel);
  const stateLabel = isComplete ? "Complete" : running ? getPhaseVerb(phaseName) : "Paused";
  const remainingToMastery = Math.max(0, MASTERY_TARGET - brewCount);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 overflow-y-auto"
    >
      <div className="absolute inset-0">
        <Image
          src={guide.image}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-surface/70 backdrop-blur-md" />
      </div>

      <div className="relative z-10 flex min-h-full flex-col px-margin-mobile py-6 md:px-margin-desktop md:py-10">
        {!isComplete && (
          <header className="mx-auto flex w-full max-w-container-max items-center justify-between">
            <button
              onClick={onClose}
              className="flex items-center gap-2 text-on-surface transition-colors hover:text-roasted-espresso"
            >
              <Icon name="close" />
              <span className="font-label-md text-label-md uppercase tracking-wider">
                {running ? "End Brew" : "Cancel Brew"}
              </span>
            </button>
            <div className="text-center">
              <h1 className="font-headline-sm text-headline-sm text-roasted-espresso">
                {guide.name}
              </h1>
              <p className="font-label-caps text-label-caps text-on-surface-variant">
                Step {currentIndex + 1}: {phaseName}
              </p>
            </div>
            <div className="w-24" />
          </header>
        )}

        <div className="mx-auto flex w-full max-w-container-max flex-1 flex-col items-center justify-center py-8">
          <AnimatePresence mode="wait">
            {!isComplete ? (
              <motion.div
                key="active"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="grid w-full grid-cols-1 items-center gap-gutter lg:grid-cols-12"
              >
                {/* Left: Current Phase + Target */}
                <div className="order-2 flex flex-col gap-8 lg:order-1 lg:col-span-4">
                  <div className="rounded-xl border border-outline-variant bg-surface-container-low p-6">
                    <h2 className="mb-6 flex items-center gap-2 font-headline-sm text-headline-sm text-roasted-espresso">
                      <Icon name="timeline" filled className="text-bean-origin-gold" />
                      Current Phase
                    </h2>
                    <div className="relative flex flex-col gap-4">
                      <div className="absolute left-[11px] top-6 bottom-6 z-0 w-0.5 bg-surface-variant" />
                      {boundaries.map((b, i) => {
                        const status =
                          i < currentIndex ? "done" : i === currentIndex ? "active" : "pending";
                        const label = getPhaseName(b.step.timeLabel);
                        return (
                          <div
                            key={b.step.timeLabel}
                            className={
                              status === "active"
                                ? "relative z-10 -ml-4 flex items-start gap-4 rounded-lg border border-bean-origin-gold/30 bg-cream-foam p-4 shadow-sm"
                                : status === "done"
                                  ? "relative z-10 flex items-start gap-4 opacity-60"
                                  : "relative z-10 flex items-start gap-4 opacity-40"
                            }
                          >
                            <div
                              className={
                                status === "done"
                                  ? "mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage-leaf text-cream-foam"
                                  : status === "active"
                                    ? "brew-pulse-ring mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-bean-origin-gold text-cream-foam"
                                    : "mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-surface-variant text-on-surface-variant"
                              }
                            >
                              {status === "done" ? (
                                <Icon name="check" className="text-[14px]" />
                              ) : status === "active" ? (
                                <div className="h-2 w-2 rounded-full bg-cream-foam" />
                              ) : (
                                <div className="h-2 w-2 rounded-full bg-on-surface-variant" />
                              )}
                            </div>
                            <div>
                              <div
                                className={
                                  status === "active"
                                    ? "font-label-caps text-label-caps text-bean-origin-gold"
                                    : "font-label-caps text-label-caps text-on-surface-variant"
                                }
                              >
                                {formatMMSS(b.startSec)} - {formatMMSS(b.endSec)}
                              </div>
                              <div className="font-headline-md text-headline-md text-roasted-espresso">
                                {label}
                              </div>
                              <div className="font-body-md text-body-md text-on-surface-variant">
                                {b.step.description}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="rounded-xl border border-tertiary/10 bg-oat-milk p-6">
                    <h3 className="mb-2 font-label-caps text-label-caps text-on-surface-variant">
                      Current Target
                    </h3>
                    <div className="flex items-baseline gap-2">
                      <span className="font-display-lg text-display-lg tracking-tighter text-roasted-espresso">
                        {currentBoundary.step.targetGrams}
                      </span>
                      <span className="font-body-lg text-body-lg text-on-surface-variant">
                        grams total
                      </span>
                    </div>
                    <p className="mt-2 font-body-md text-body-md text-secondary">
                      Flow rate: {guide.recipe.flowNote}
                    </p>
                  </div>
                </div>

                {/* Right: Timer disc */}
                <div className="relative order-1 flex min-h-[500px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-surface-variant bg-cream-foam p-8 shadow-[0_8px_32px_rgba(62,39,35,0.08)] lg:order-2 lg:col-span-8">
                  <div className="relative z-10 mb-8 flex h-72 w-72 items-center justify-center">
                    <div
                      className={
                        reducedMotion
                          ? "absolute inset-0 rounded-full border-4 border-bean-origin-gold/20"
                          : "brew-pulse-ring absolute inset-0 rounded-full border-4 border-bean-origin-gold/20"
                      }
                    />
                    <svg viewBox="0 0 100 100" className="absolute inset-4 -rotate-90">
                      <circle
                        cx="50"
                        cy="50"
                        r="46"
                        fill="none"
                        stroke="var(--color-surface-variant)"
                        strokeWidth="3"
                      />
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="46"
                        fill="none"
                        stroke="var(--color-roasted-espresso)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeDasharray={2 * Math.PI * 46}
                        animate={{
                          strokeDashoffset: 2 * Math.PI * 46 * (1 - overallProgress),
                        }}
                        transition={{ duration: 0.2, ease: "linear" }}
                      />
                    </svg>
                    <div className="relative z-20 flex flex-col items-center">
                      <span className="font-display-lg text-display-lg tracking-tighter text-roasted-espresso drop-shadow-sm">
                        {formatMMSS(elapsedSec)}
                      </span>
                      <span className="mt-1 rounded bg-cream-foam/80 px-2 py-0.5 font-label-caps text-label-caps uppercase tracking-widest text-bean-origin-gold backdrop-blur-sm">
                        {stateLabel}
                      </span>
                    </div>
                  </div>

                  <div className="z-10 mb-8 w-full max-w-md">
                    <div className="mb-2 flex justify-between font-label-caps text-label-caps text-on-surface-variant">
                      <span>0:00</span>
                      <span>{formatMMSS(totalSec)}</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-surface-variant">
                      <motion.div
                        className="h-full rounded-full bg-roasted-espresso"
                        animate={{ width: `${Math.min(100, overallProgress * 100)}%` }}
                        transition={{ duration: 0.2, ease: "linear" }}
                      />
                    </div>
                  </div>

                  <div className="z-10 flex items-center gap-4">
                    {running ? (
                      <>
                        <button
                          onClick={() => setElapsedSec((s) => Math.max(0, s - 10))}
                          className="flex h-14 w-14 items-center justify-center rounded-full border border-outline-variant bg-surface-container text-roasted-espresso shadow-sm transition-colors hover:bg-surface-variant"
                        >
                          <Icon name="replay_10" filled />
                        </button>
                        <button
                          onClick={() => setRunning(false)}
                          className="flex h-16 w-16 items-center justify-center rounded-full bg-bean-origin-gold text-cream-foam shadow-[0_4px_12px_rgba(198,166,100,0.3)] transition-transform hover:scale-105"
                        >
                          <Icon name="pause" filled className="text-[32px]" />
                        </button>
                        <button
                          onClick={() => setElapsedSec((s) => Math.min(totalSec, s + 10))}
                          className="flex h-14 w-14 items-center justify-center rounded-full border border-outline-variant bg-surface-container text-roasted-espresso shadow-sm transition-colors hover:bg-surface-variant"
                        >
                          <Icon name="forward_10" filled />
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={handleSkipPrevious}
                          className="flex h-12 w-12 items-center justify-center rounded-full border border-outline text-on-surface transition-colors hover:bg-surface-variant"
                        >
                          <Icon name="skip_previous" />
                        </button>
                        <button
                          onClick={() => setRunning(true)}
                          className="flex h-20 w-20 items-center justify-center rounded-full bg-roasted-espresso text-cream-foam shadow-lg transition-transform hover:scale-105 hover:bg-primary"
                        >
                          <Icon name="play_arrow" filled className="text-4xl" />
                        </button>
                        <button
                          onClick={handleSkipNext}
                          className="flex h-12 w-12 items-center justify-center rounded-full border border-outline text-on-surface transition-colors hover:bg-surface-variant"
                        >
                          <Icon name="skip_next" />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="complete"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-md rounded-xl border border-tertiary/10 bg-cream-foam/90 p-8 shadow-lg backdrop-blur-md"
              >
                <div className="relative mb-8 flex items-center justify-between">
                  <div className="absolute left-0 right-0 top-1/2 -z-10 h-0.5 -translate-y-1/2 bg-bean-origin-gold" />
                  {boundaries.map((b) => (
                    <div key={b.step.timeLabel} className="flex flex-col items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-bean-origin-gold text-cream-foam shadow-md">
                        <Icon name="check" filled className="text-sm" />
                      </div>
                      <span className="font-label-caps text-label-caps text-on-surface-variant">
                        {getPhaseName(b.step.timeLabel)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mb-8 text-center">
                  <div className="mb-2 font-display-lg text-[56px] leading-none tracking-tighter text-roasted-espresso">
                    {formatMMSS(totalSec)}
                  </div>
                  <div className="font-body-lg text-body-lg text-on-surface-variant">
                    {guide.name} Target: {guide.timeLabel}
                  </div>
                </div>

                <div className="flex flex-col items-center text-center">
                  <Icon
                    name="verified"
                    filled
                    className={
                      reducedMotion
                        ? "mb-4 text-6xl text-bean-origin-gold"
                        : "brew-glow mb-4 text-6xl text-bean-origin-gold"
                    }
                  />
                  <h2 className="mb-2 font-headline-md text-headline-md text-roasted-espresso">
                    Brew Complete
                  </h2>
                  <div className="mb-4 rounded-full border border-secondary-container bg-secondary-container/40 px-3 py-1 font-label-caps text-label-caps text-on-secondary-container">
                    +50 XP Awarded
                  </div>
                  <p className="mb-8 font-body-md text-body-md text-on-surface-variant">
                    {remainingToMastery > 0
                      ? `Brewed ${brewCount} of ${MASTERY_TARGET} times — ${remainingToMastery} more for the ${guide.name} Explorer badge.`
                      : `${guide.name} mastered! You've brewed this method ${brewCount} times.`}
                  </p>

                  <div className="flex w-full flex-col gap-4">
                    <button
                      onClick={() => {
                        onClose();
                        router.push("/passport");
                      }}
                      className="flex w-full items-center justify-center gap-2 rounded-lg bg-bean-origin-gold py-4 font-label-md text-label-md text-roasted-espresso shadow-lg transition-all hover:opacity-90"
                    >
                      <Icon name="import_contacts" filled />
                      Log to Passport
                    </button>
                    <button
                      onClick={handleShare}
                      className="flex w-full items-center justify-center gap-2 rounded-lg border border-outline py-4 font-label-md text-label-md text-roasted-espresso transition-all hover:bg-surface-container"
                    >
                      <Icon name={shareState === "copied" ? "check" : "share"} />
                      {shareState === "copied" ? "Link Copied!" : "Share Vibe"}
                    </button>
                    <button
                      onClick={onClose}
                      className="font-label-md text-label-md text-on-surface-variant transition-colors hover:text-roasted-espresso"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

export function BrewTimerOverlay({
  open,
  onClose,
  guide,
}: {
  open: boolean;
  onClose: () => void;
  guide: BrewGuideRecord;
}) {
  return (
    <AnimatePresence>
      {open && <BrewTimerModal key={guide.slug} guide={guide} onClose={onClose} />}
    </AnimatePresence>
  );
}
