import Image from "next/image";
import { Icon } from "@/components/icon";

export function SessionCard({
  day,
  month,
  title,
  time,
  description,
  image,
  attendeeAvatars,
  attendeeCount,
}: {
  day: string;
  month: string;
  title: string;
  time: string;
  description: string;
  image: string;
  attendeeAvatars: string[];
  attendeeCount: number;
}) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-tertiary/10 bg-cream-foam shadow-sm transition-shadow hover:shadow-md">
      <div className="absolute left-4 top-4 z-20 rounded-lg bg-roasted-espresso p-2 text-center text-cream-foam shadow-md">
        <div className="font-label-caps text-label-caps">{month}</div>
        <div className="font-headline-md text-headline-md leading-none">{day}</div>
      </div>

      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-grow flex-col p-6">
        <h3 className="mb-2 font-headline-sm text-headline-sm text-roasted-espresso">
          {title}
        </h3>
        <div className="mb-3 flex items-center gap-2 font-label-md text-label-md text-on-surface-variant">
          <Icon name="schedule" className="text-base" />
          <span>{time}</span>
        </div>
        <p className="mb-6 line-clamp-2 flex-grow font-body-md text-body-md text-on-surface-variant">
          {description}
        </p>
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex -space-x-2">
              {attendeeAvatars.map((avatar) => (
                <div
                  key={avatar}
                  className="relative h-6 w-6 overflow-hidden rounded-full border-2 border-cream-foam"
                >
                  <Image src={avatar} alt="" fill sizes="24px" className="object-cover" />
                </div>
              ))}
            </div>
            <span className="ml-2 font-label-caps text-[10px] text-on-surface-variant">
              +{attendeeCount}
            </span>
          </div>
          <button className="rounded-lg bg-roasted-espresso px-4 py-2 font-label-md text-label-md text-cream-foam transition-colors hover:bg-primary-container">
            RSVP
          </button>
        </div>
      </div>
    </div>
  );
}
