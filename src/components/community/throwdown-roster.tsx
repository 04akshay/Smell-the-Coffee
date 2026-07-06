import Image from "next/image";
import { Icon } from "@/components/icon";

type Throwdown = {
  status: string;
  statusClasses: string;
  decorative?: boolean;
  title: string;
  location: string;
  avatars: string[];
  overflowCount?: number;
  ctaLabel: string;
};

export function ThrowdownRoster({ throwdowns }: { throwdowns: Throwdown[] }) {
  return (
    <div className="rounded-xl border-b-4 border-roasted-espresso bg-oat-milk p-6">
      <div className="mb-6 flex items-center gap-2">
        <Icon name="emoji_events" className="text-roasted-espresso" />
        <h2 className="font-headline-sm text-headline-sm text-primary">Throwdown Roster</h2>
      </div>
      <div className="space-y-4">
        {throwdowns.map((event) => (
          <div
            key={event.title}
            className="relative overflow-hidden rounded-lg border border-tertiary/5 bg-surface-container-lowest p-4 shadow-sm"
          >
            {event.decorative && (
              <div className="absolute right-0 top-0 h-12 w-12 translate-x-6 -translate-y-6 rotate-45 bg-sage-leaf" />
            )}
            <div className="flex flex-col">
              <span className={`mb-1 font-label-caps text-label-caps font-bold ${event.statusClasses}`}>
                {event.status}
              </span>
              <h4 className="mb-1 font-label-md text-label-md font-bold text-primary">{event.title}</h4>
              <p className="mb-3 text-sm text-on-surface-variant">@ {event.location}</p>
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  {event.avatars.map((avatar) => (
                    <div
                      key={avatar}
                      className="relative h-6 w-6 overflow-hidden rounded-full border border-surface-container-lowest"
                    >
                      <Image src={avatar} alt="" fill sizes="24px" className="object-cover" />
                    </div>
                  ))}
                  {event.overflowCount && (
                    <div className="flex h-6 w-6 items-center justify-center rounded-full border border-surface-container-lowest bg-surface-variant text-[10px] font-bold text-on-surface-variant">
                      +{event.overflowCount}
                    </div>
                  )}
                </div>
                <span className="cursor-pointer font-label-caps text-label-caps text-roasted-espresso underline">
                  {event.ctaLabel}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-6 w-full rounded-lg bg-roasted-espresso py-3 font-label-md text-label-md text-cream-foam shadow-[0_4px_12px_rgba(62,39,35,0.15)] transition-colors hover:bg-primary">
        Host an Event
      </button>
    </div>
  );
}
