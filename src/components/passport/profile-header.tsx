import Image from "next/image";
import { Icon } from "@/components/icon";

export function ProfileHeader({
  avatar,
  level,
  name,
  handle,
  bio,
  stats,
  journeyLabel,
  trailName,
  visited,
  total,
}: {
  avatar: string;
  level: number;
  name: string;
  handle: string;
  bio: string;
  stats: { value: string; label: string }[];
  journeyLabel: string;
  trailName: string;
  visited: number;
  total: number;
}) {
  const progress = Math.round((visited / total) * 100);

  return (
    <div className="ambient-shadow mb-12 flex flex-col items-center gap-8 rounded-xl border border-tertiary/10 bg-surface-container-lowest p-8 md:flex-row md:items-start">
      <div className="flex flex-col items-center gap-4 md:items-start">
        <div className="relative h-24 w-24">
          <Image
            src={avatar}
            alt={name}
            fill
            sizes="96px"
            className="rounded-full border-4 border-cream-foam object-cover shadow-sm"
          />
          <div className="absolute -bottom-2 -right-2 z-20 flex items-center gap-1 rounded-full border border-cream-foam bg-bean-origin-gold px-3 py-1 font-label-caps text-[10px] text-on-primary shadow-sm">
            <Icon name="star" filled className="text-[12px]" />
            Lvl {level}
          </div>
        </div>
        <div className="text-center md:text-left">
          <h1 className="font-display-lg-mobile text-headline-md text-primary md:font-display-lg">
            {name}
          </h1>
          <p className="mb-2 font-label-md text-label-md text-primary/70">@{handle}</p>
          <p className="max-w-sm font-body-md text-body-md text-on-surface-variant">{bio}</p>
        </div>
      </div>

      <div className="mt-6 flex w-full flex-grow flex-col justify-center space-y-6 md:mt-0 md:w-auto md:border-l md:border-tertiary/10 md:pl-8">
        <div className="grid grid-cols-3 gap-4 border-b border-tertiary/10 pb-6">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center md:items-start">
              <span className="font-headline-sm text-headline-sm font-bold text-roasted-espresso">
                {stat.value}
              </span>
              <span className="font-label-caps text-label-caps tracking-wider text-on-surface-variant/60">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <div>
          <div className="mb-2 flex items-end justify-between">
            <div>
              <span className="mb-1 inline-block rounded-full bg-secondary-fixed px-3 py-1 font-label-caps text-[10px] uppercase tracking-wider text-on-secondary-container">
                {journeyLabel}
              </span>
              <h2 className="font-label-md text-label-md font-semibold text-roasted-espresso">
                {trailName}
              </h2>
            </div>
            <span className="font-label-md font-bold text-sage-leaf">
              {visited} / {total}
            </span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-surface-variant">
            <div className="h-2 rounded-full bg-sage-leaf" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
}
