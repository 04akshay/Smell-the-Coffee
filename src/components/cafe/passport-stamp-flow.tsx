"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Icon } from "@/components/icon";
import { addCafeStamp } from "@/lib/passport-stamps";

type Step = "verify" | "ritual" | "authenticating" | "success";

type Bean = {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  round: boolean;
  color: string;
};

function generateBeans(): Bean[] {
  const colors = [
    "var(--color-sage-leaf)",
    "var(--color-roasted-espresso)",
    "var(--color-bean-origin-gold)",
    "var(--color-oat-milk)",
  ];
  return Array.from({ length: 28 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: Math.random() * 10 + 6,
    duration: Math.random() * 2.5 + 2.5,
    delay: Math.random() * 1.5,
    round: Math.random() > 0.5,
    color: colors[i % 4],
  }));
}

const STEP_ORDER: Step[] = ["verify", "ritual", "authenticating", "success"];

function ProgressDots({ step }: { step: Step }) {
  const activeIndex = STEP_ORDER.indexOf(step);
  return (
    <div className="flex items-center justify-center gap-3">
      {STEP_ORDER.map((s, i) => (
        <div
          key={s}
          className={
            i <= activeIndex
              ? "h-1.5 w-1.5 rounded-full bg-bean-origin-gold"
              : "h-1.5 w-1.5 rounded-full bg-roasted-espresso/10"
          }
        />
      ))}
    </div>
  );
}

function Confetti() {
  const [beans, setBeans] = useState<Bean[]>([]);

  useEffect(() => {
    const id = setTimeout(() => setBeans(generateBeans()), 0);
    return () => clearTimeout(id);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {beans.map((bean) => (
        <div
          key={bean.id}
          className="confetti-bean"
          style={{
            left: `${bean.left}%`,
            width: bean.size,
            height: bean.size,
            backgroundColor: bean.color,
            borderRadius: bean.round ? "50%" : "2px",
            animationDuration: `${bean.duration}s`,
            animationDelay: `${bean.delay}s`,
            opacity: 0.7,
          }}
        />
      ))}
    </div>
  );
}

export function PassportStampFlow({
  open,
  onClose,
  cafeSlug,
  cafeName,
  neighborhood,
  badgeName,
}: {
  open: boolean;
  onClose: () => void;
  cafeSlug: string;
  cafeName: string;
  neighborhood: string;
  badgeName: string;
}) {
  const router = useRouter();
  const reducedMotion = useReducedMotion();
  const [step, setStep] = useState<Step>("verify");
  const [ritualComplete, setRitualComplete] = useState(false);
  const [shareState, setShareState] = useState<"idle" | "copied">("idle");
  const progressPct = 40 + ((cafeSlug.length * 7) % 50);

  // Reset step state whenever the modal transitions from closed to open —
  // adjusted during render (not in an effect) per React's guidance on
  // resetting state when a value changes.
  const [wasOpen, setWasOpen] = useState(open);
  if (open !== wasOpen) {
    setWasOpen(open);
    if (open) {
      setStep("verify");
      setRitualComplete(false);
      setShareState("idle");
    }
  }

  useEffect(() => {
    if (step !== "authenticating") return;
    const timer = setTimeout(() => {
      addCafeStamp(cafeSlug);
      setStep("success");
    }, 1200);
    return () => clearTimeout(timer);
  }, [step, cafeSlug]);

  function handleTapSeal() {
    setRitualComplete(true);
  }

  function handleConfirm() {
    if (!ritualComplete) return;
    setStep("authenticating");
  }

  async function handleShare() {
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: `${cafeName} — Smell the Coffee`,
          text: `I just earned the "${badgeName}" stamp at ${cafeName}.`,
          url,
        });
        return;
      } catch {
        // user cancelled or share failed; fall through to clipboard
      }
    }
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      await navigator.clipboard.writeText(url);
      setShareState("copied");
      setTimeout(() => setShareState("idle"), 2000);
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-roasted-espresso/30 p-margin-mobile backdrop-blur-md"
        >
          {step === "success" && !reducedMotion && <Confetti />}

          {step !== "success" && (
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-cream-foam text-roasted-espresso shadow-lg transition-transform hover:bg-oat-milk active:scale-90"
            >
              <Icon name="close" />
            </button>
          )}

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="relative w-full max-w-md overflow-hidden rounded-xl border border-tertiary/10 bg-cream-foam shadow-2xl"
          >
            <AnimatePresence mode="wait">
              {step === "verify" && (
                <motion.div
                  key="verify"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col"
                >
                  <div className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-roasted-espresso text-oat-milk">
                        <Icon name="location_on" className="text-4xl" />
                      </div>
                    </div>
                    <h2 className="mb-1 font-headline-md text-headline-md text-roasted-espresso">
                      Verify Location
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {cafeName}, Delhi
                    </p>
                  </div>

                  <div className="map-texture relative mx-6 flex h-48 items-center justify-center overflow-hidden rounded-lg border border-outline-variant bg-surface-container-high">
                    <div className="relative z-20 flex flex-col items-center">
                      <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-sage-leaf shadow-lg">
                        {!reducedMotion && (
                          <span className="absolute inset-0 animate-ping rounded-full bg-sage-leaf opacity-60" />
                        )}
                        <Icon
                          name="person_pin_circle"
                          filled
                          className="relative text-cream-foam"
                        />
                      </div>
                      <div className="mt-4 rounded-full border border-sage-leaf/20 bg-cream-foam/90 px-3 py-1 shadow-sm backdrop-blur">
                        <p className="font-label-caps text-label-caps uppercase tracking-wider text-sage-leaf">
                          Syncing Vibe Coordinates...
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 p-6 text-center">
                    <p className="font-body-lg text-body-lg leading-relaxed text-roasted-espresso">
                      &ldquo;Are you here right now? We&apos;re checking your
                      vibe coordinates.&rdquo;
                    </p>
                    <p className="font-label-md text-label-md italic text-on-surface-variant">
                      Location data ensures you&apos;re physically at {cafeName}{" "}
                      to claim your artisanal digital stamp.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 p-6 pt-0">
                    <button
                      onClick={() => setStep("ritual")}
                      className="group flex w-full items-center justify-center gap-2 rounded-lg bg-roasted-espresso py-4 font-headline-sm text-headline-sm text-cream-foam transition-all hover:opacity-90 active:scale-95"
                    >
                      <span>Yes, I&apos;m here — Get My Stamp</span>
                      <Icon
                        name="stars"
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </button>
                    <button
                      onClick={onClose}
                      className="w-full rounded-lg border border-outline py-3 font-label-md text-label-md text-on-surface-variant transition-colors hover:bg-surface-container"
                    >
                      Not here? Browse menu instead
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-2 border-t border-tertiary/5 bg-surface-container-low px-6 py-4">
                    <Icon name="verified_user" className="text-sm text-outline" />
                    <span className="font-label-caps text-label-caps text-outline">
                      ENCRYPTED COFFEE PASSPORT SYNC
                    </span>
                  </div>
                </motion.div>
              )}

              {(step === "ritual" || step === "authenticating") && (
                <motion.div
                  key="ritual"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col items-center px-8 py-10 text-center"
                >
                  <span className="mb-3 font-label-caps text-label-caps uppercase tracking-[0.2em] text-on-surface-variant">
                    Authenticity Verification
                  </span>
                  <h2 className="mb-3 font-display-lg-mobile text-display-lg-mobile text-roasted-espresso">
                    Digital Stamp Ritual
                  </h2>
                  <p className="mb-8 max-w-xs font-body-md text-body-md text-on-surface-variant">
                    {step === "ritual"
                      ? "Tap the holographic seal to validate your visit to this origin."
                      : "Authenticating your visit..."}
                  </p>

                  <motion.div
                    animate={
                      reducedMotion ? undefined : { y: [0, -8, 0] }
                    }
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative mb-8"
                  >
                    <button
                      onClick={handleTapSeal}
                      disabled={step === "authenticating"}
                      aria-label="Tap to seal your visit"
                      className="relative flex h-56 w-56 items-center justify-center overflow-hidden rounded-full border border-white/50 bg-cream-foam/60 shadow-xl backdrop-blur-md transition-transform active:scale-95"
                      style={
                        ritualComplete
                          ? { boxShadow: "0 0 50px rgba(198, 166, 100, 0.5)" }
                          : undefined
                      }
                    >
                      <div
                        className={
                          ritualComplete
                            ? "holographic-shimmer absolute inset-0 opacity-60"
                            : "absolute inset-0 opacity-0"
                        }
                      />
                      <div className="relative z-10 flex flex-col items-center">
                        {step === "authenticating" ? (
                          <Icon
                            name="progress_activity"
                            className="animate-spin text-6xl text-roasted-espresso"
                          />
                        ) : (
                          <>
                            <Icon
                              name="potted_plant"
                              filled
                              className="text-6xl text-roasted-espresso opacity-80"
                            />
                            <div className="my-3 h-px w-10 bg-roasted-espresso/20" />
                            <span className="font-label-caps text-[10px] uppercase tracking-[0.3em] text-roasted-espresso/60">
                              {ritualComplete ? "Impression Set" : "Tap to Seal"}
                            </span>
                          </>
                        )}
                      </div>
                    </button>
                  </motion.div>

                  <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-cream-foam px-6 py-3 shadow-sm">
                    <Icon name="location_on" className="text-sm text-roasted-espresso" />
                    <span className="font-label-md text-label-md text-roasted-espresso">
                      {cafeName} • {neighborhood}
                    </span>
                  </div>

                  <div className="flex w-full flex-col items-center gap-4 md:flex-row md:justify-center">
                    <button
                      onClick={onClose}
                      disabled={step === "authenticating"}
                      className="py-3 font-label-md text-label-md uppercase tracking-widest text-on-surface-variant transition-colors hover:text-roasted-espresso disabled:opacity-30"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleConfirm}
                      disabled={!ritualComplete || step === "authenticating"}
                      className="w-full rounded-lg bg-roasted-espresso py-4 font-label-md text-label-md uppercase tracking-widest text-cream-foam shadow-xl transition-all disabled:cursor-not-allowed disabled:opacity-30 md:w-64"
                    >
                      {step === "authenticating"
                        ? "Authenticating..."
                        : ritualComplete
                          ? "Impression Ready"
                          : "Confirm Impression"}
                    </button>
                  </div>

                  <div className="mt-8">
                    <ProgressDots step={step} />
                  </div>
                </motion.div>
              )}

              {step === "success" && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="relative flex flex-col items-center px-8 py-10 text-center"
                >
                  <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-30">
                    <div className="h-64 w-64 animate-pulse rounded-full bg-bean-origin-gold blur-[80px]" />
                  </div>

                  <motion.div
                    initial={{ scale: 0, rotate: 0 }}
                    animate={{ scale: 1, rotate: -8 }}
                    transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.1 }}
                    className="relative mb-8"
                  >
                    <div className="flex h-40 w-40 flex-col items-center justify-center rounded-full border-4 border-roasted-espresso bg-cream-foam p-4 shadow-xl">
                      <div className="flex h-full w-full flex-col items-center justify-center rounded-full border-2 border-roasted-espresso p-2">
                        <Icon
                          name="coffee_maker"
                          filled
                          className="mb-1 text-5xl text-roasted-espresso"
                        />
                        <div className="text-center font-label-caps text-[9px] leading-tight text-roasted-espresso">
                          {badgeName.toUpperCase()}
                          <br />
                          {new Date().getFullYear()}
                        </div>
                      </div>
                    </div>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 10, delay: 0.4 }}
                      className="absolute -right-3 -top-3 flex items-center gap-1 rounded-full bg-sage-leaf px-3 py-1 text-cream-foam shadow-lg"
                    >
                      <Icon name="bolt" className="text-sm" />
                      <span className="font-label-caps text-label-caps">+25 XP</span>
                    </motion.div>
                  </motion.div>

                  <h2 className="mb-3 font-display-lg-mobile text-display-lg-mobile text-roasted-espresso">
                    Passport Stamped!
                  </h2>
                  <p className="mb-8 max-w-sm font-body-lg text-body-lg text-on-surface-variant">
                    You&apos;ve just unlocked the{" "}
                    <span className="font-bold text-roasted-espresso">
                      &ldquo;{badgeName}&rdquo;
                    </span>{" "}
                    stamp at <span className="italic">{cafeName}</span>.
                  </p>

                  <div className="mb-8 w-full rounded-xl border border-tertiary/10 bg-surface-container-low p-6 shadow-sm">
                    <div className="flex flex-col items-center gap-4">
                      <div className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant">
                        <Icon name="stars" filled className="text-bean-origin-gold" />
                        <span>
                          You&apos;ve earned <strong>+25 XP</strong>
                        </span>
                      </div>
                      <div className="w-full max-w-xs space-y-2">
                        <div className="h-2 w-full overflow-hidden rounded-full bg-surface-container-high">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${progressPct}%` }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                            className="h-full rounded-full bg-sage-leaf"
                          />
                        </div>
                        <p className="font-label-caps text-label-caps text-on-surface-variant">
                          1 check-in away from the{" "}
                          <span className="font-bold uppercase text-roasted-espresso">
                            {neighborhood} Local
                          </span>{" "}
                          badge
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
                    <button
                      onClick={() => {
                        onClose();
                        router.push("/passport");
                      }}
                      className="flex w-full items-center justify-center gap-2 rounded-lg bg-roasted-espresso px-10 py-4 font-label-md text-label-md text-cream-foam transition-all hover:opacity-90 active:scale-95 sm:w-auto"
                    >
                      <Icon name="menu_book" />
                      View My Passport
                    </button>
                    <button
                      onClick={handleShare}
                      className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-sage-leaf px-10 py-4 font-label-md text-label-md text-sage-leaf transition-all hover:bg-sage-leaf hover:text-cream-foam active:scale-95 sm:w-auto"
                    >
                      <Icon name={shareState === "copied" ? "check" : "share"} />
                      {shareState === "copied" ? "Link Copied!" : "Share Your Vibe"}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
