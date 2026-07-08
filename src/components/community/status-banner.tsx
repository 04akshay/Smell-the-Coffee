import { Icon } from "@/components/icon";

export function StatusBanner({
  streakLabel,
  level,
  levelTitle,
  xp,
  xpTarget,
  nextLevelLabel,
}: {
  streakLabel: string;
  level: number;
  levelTitle: string;
  xp: number;
  xpTarget: number;
  nextLevelLabel: string;
}) {
  const pct = Math.min(100, Math.round((xp / xpTarget) * 100));

  return (
    <div className="glass-panel flex flex-col gap-6 rounded-xl p-5 shadow-sm md:flex-row md:items-center">
      <div className="flex flex-col">
        <span className="font-label-caps text-label-caps uppercase tracking-widest text-sage-leaf">
          Current Status
        </span>
        <span className="flex items-center gap-2 font-headline-sm text-headline-sm text-primary">
          <Icon name="local_fire_department" filled className="text-bean-origin-gold" />
          {streakLabel}
        </span>
      </div>
      <div className="hidden h-10 w-px bg-tertiary/10 md:block" />
      <div className="flex w-full flex-col md:w-48">
        <div className="mb-2 flex items-end justify-between">
          <div className="flex flex-col">
            <span className="font-label-caps text-label-caps uppercase tracking-widest text-sage-leaf">
              Level {level} • {levelTitle}
            </span>
            <span className="font-label-md text-label-md text-primary">Next: {nextLevelLabel}</span>
          </div>
          <span className="font-label-caps text-label-caps text-on-surface-variant">
            {xp}/{xpTarget} XP
          </span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-surface-variant">
          <div
            className="h-1.5 rounded-full bg-bean-origin-gold transition-all"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>
    </div>
  );
}
