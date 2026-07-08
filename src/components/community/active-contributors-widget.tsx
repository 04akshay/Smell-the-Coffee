import Link from "next/link";
import { Icon } from "@/components/icon";

const contributors = [
  {
    initials: "SJ",
    name: "Sarah J.",
    role: "Master Scout",
    updates: 42,
    avatarClasses: "bg-bean-origin-gold/20 text-bean-origin-gold border-2 border-bean-origin-gold",
    roleClasses: "text-sage-leaf",
    highlight: true,
  },
  {
    initials: "YOU",
    name: "You",
    role: "Vibe Checker",
    updates: 28,
    avatarClasses: "bg-roasted-espresso text-cream-foam border border-tertiary/20",
    roleClasses: "text-on-surface-variant",
  },
  {
    initials: "MK",
    name: "Marcus K.",
    role: "Vibe Checker",
    updates: 15,
    avatarClasses: "bg-surface-variant text-on-surface-variant border border-tertiary/20",
    roleClasses: "text-on-surface-variant",
  },
];

export function ActiveContributorsWidget() {
  return (
    <div className="rounded-xl border border-tertiary/10 bg-oat-milk p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="flex items-center gap-2 font-headline-sm text-headline-sm text-primary">
          <Icon name="sensors" className="text-roasted-espresso" />
          Active Sensors
        </h2>
        <span className="font-label-caps text-label-caps text-on-surface-variant">This Week</span>
      </div>
      <div className="space-y-4">
        {contributors.map((person) => (
          <div key={person.name} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${person.avatarClasses}`}
              >
                {person.initials}
              </div>
              <div className="flex flex-col">
                <span className="font-label-md font-bold text-primary">{person.name}</span>
                <span className={`font-label-caps text-[10px] ${person.roleClasses}`}>
                  {person.role}
                </span>
              </div>
            </div>
            <span
              className={
                person.highlight
                  ? "rounded-sm bg-surface-container-highest px-2 py-1 font-label-caps text-primary"
                  : "rounded-sm bg-surface-container-highest px-2 py-1 font-label-caps text-on-surface-variant"
              }
            >
              {person.updates} Updates
            </span>
          </div>
        ))}
      </div>
      <Link
        href="/passport"
        className="mt-4 block text-center font-label-caps text-label-caps uppercase tracking-widest text-sage-leaf transition-colors hover:text-primary"
      >
        View Leaderboard
      </Link>
    </div>
  );
}
