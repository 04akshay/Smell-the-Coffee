import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icon";

export function FeaturedGuide({
  tag,
  title,
  description,
  image,
  time,
  difficulty,
  href,
}: {
  tag: string;
  title: string;
  description: string;
  image: string;
  time: string;
  difficulty: string;
  href: string;
}) {
  return (
    <section className="mb-section-gap">
      <div className="relative flex min-h-[400px] items-end overflow-hidden rounded-2xl">
        <Image src={image} alt={title} fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-roasted-espresso/90 via-roasted-espresso/40 to-transparent" />
        <div className="relative z-10 w-full max-w-3xl p-margin-mobile md:p-margin-desktop">
          <div className="mb-4 inline-block rounded-full bg-sage-leaf/80 px-3 py-1 font-label-caps text-label-caps uppercase tracking-wider text-cream-foam backdrop-blur-sm">
            {tag}
          </div>
          <h2 className="mb-2 font-headline-md text-display-lg-mobile font-semibold text-cream-foam">
            {title}
          </h2>
          <p className="mb-6 max-w-xl font-body-md text-body-md text-surface-container-high">
            {description}
          </p>
          <div className="flex items-center gap-4">
            <Link
              href={href}
              className="flex items-center gap-2 rounded-lg bg-cream-foam px-6 py-3 font-label-md text-label-md text-roasted-espresso transition-colors hover:bg-surface-container-highest"
            >
              <Icon name="play_circle" />
              Start Guide
            </Link>
            <div className="flex items-center gap-4 font-label-caps text-label-caps text-surface-container-highest">
              <span className="flex items-center gap-1">
                <Icon name="schedule" className="text-sm" /> {time}
              </span>
              <span className="flex items-center gap-1">
                <Icon name="signal_cellular_alt" className="text-sm" /> {difficulty}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
