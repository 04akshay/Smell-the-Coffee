import { Icon } from "@/components/icon";

export function StatusBanner({
  streakLabel,
  level,
  levelTitle,
}: {
  streakLabel: string;
  level: number;
  levelTitle: string;
}) {
  return (
    <div className="glass-panel flex items-center gap-6 rounded-xl p-4 shadow-sm">
      <div className="flex flex-col">
        <span className="font-label-caps text-label-caps uppercase tracking-widest text-sage-leaf">
          Current Status
        </span>
        <span className="flex items-center gap-2 font-headline-sm text-headline-sm text-primary">
          <Icon name="local_fire_department" filled className="text-bean-origin-gold" />
          {streakLabel}
        </span>
      </div>
      <div className="h-10 w-px bg-tertiary/10" />
      <div className="flex flex-col">
        <span className="font-label-caps text-label-caps uppercase tracking-widest text-sage-leaf">
          Level {level}
        </span>
        <span className="font-headline-sm text-headline-sm text-primary">{levelTitle}</span>
      </div>
    </div>
  );
}
