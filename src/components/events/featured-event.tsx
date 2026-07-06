import Image from "next/image";
import { Icon } from "@/components/icon";

export function FeaturedEvent({
  day,
  month,
  title,
  location,
  description,
  image,
  attendeeAvatars,
  attendeeCount,
}: {
  day: string;
  month: string;
  title: string;
  location: string;
  description: string;
  image: string;
  attendeeAvatars: string[];
  attendeeCount: number;
}) {
  return (
    <section className="relative mb-section-gap">
      <div className="relative z-10 flex flex-col overflow-hidden rounded-xl border border-tertiary/10 bg-cream-foam shadow-sm md:flex-row">
        <div className="absolute left-4 top-4 z-20 rounded-lg bg-roasted-espresso p-2 text-center text-cream-foam shadow-md">
          <div className="font-label-caps text-label-caps">{month}</div>
          <div className="font-headline-md text-headline-md leading-none">{day}</div>
        </div>

        <div className="relative h-64 md:h-[400px] md:w-3/5">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 768px) 60vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center p-gutter md:w-2/5">
          <div className="mb-4 inline-flex w-max items-center gap-1 rounded-full bg-sage-leaf/10 px-3 py-1 font-label-caps text-label-caps text-sage-leaf">
            <Icon name="star" className="text-[14px]" />
            FEATURED
          </div>
          <h2 className="mb-2 font-headline-md text-headline-md text-roasted-espresso md:text-[32px] md:leading-10">
            {title}
          </h2>
          <div className="mb-4 flex items-center gap-2 font-body-md text-body-md text-on-surface-variant">
            <Icon name="location_on" className="text-lg" />
            <span>{location}</span>
          </div>
          <p className="mb-6 font-body-md text-body-md text-on-surface-variant">
            {description}
          </p>
          <div className="mt-auto flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex -space-x-2">
                {attendeeAvatars.map((avatar) => (
                  <div
                    key={avatar}
                    className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-cream-foam"
                  >
                    <Image src={avatar} alt="" fill sizes="32px" className="object-cover" />
                  </div>
                ))}
              </div>
              <span className="ml-3 font-label-caps text-label-caps text-on-surface-variant">
                +{attendeeCount} attending
              </span>
            </div>
            <button className="rounded-lg bg-roasted-espresso px-6 py-3 font-label-md text-label-md text-cream-foam transition-colors hover:bg-primary-container">
              RSVP NOW
            </button>
          </div>
        </div>
      </div>
      <div className="absolute left-4 top-4 -z-10 hidden h-full w-full rounded-xl bg-tertiary/5 md:block" />
    </section>
  );
}
