import Image from "next/image";
import { Icon } from "@/components/icon";

export function CafeHero({
  region,
  name,
  description,
  image,
  rating,
}: {
  region: string;
  name: string;
  description: string;
  image: string;
  rating: number;
}) {
  return (
    <section className="grid grid-cols-1 gap-gutter md:grid-cols-12">
      <div className="flex flex-col justify-center md:col-span-7">
        <span className="mb-4 inline-block w-max rounded-full bg-sage-leaf px-3 py-1 font-label-caps text-label-caps font-bold uppercase tracking-[0.05em] text-on-secondary">
          {region}
        </span>
        <h1 className="mb-4 font-display-lg-mobile text-display-lg-mobile font-bold tracking-[-0.01em] text-roasted-espresso md:font-display-lg md:text-display-lg md:tracking-[-0.02em]">
          {name}
        </h1>
        <p className="mb-8 max-w-xl font-body-lg text-body-lg text-on-surface-variant">
          {description}
        </p>
        <div className="flex gap-4">
          <button className="rounded-lg bg-roasted-espresso px-6 py-3 font-label-md text-label-md text-cream-foam shadow-sm transition-colors hover:bg-tertiary-container">
            Plan Visit
          </button>
          <button className="rounded-lg border border-sage-leaf px-6 py-3 font-label-md text-label-md text-sage-leaf transition-colors hover:bg-secondary-fixed">
            Check-in Passport
          </button>
        </div>
      </div>
      <div className="relative h-[400px] overflow-hidden rounded-xl shadow-sm md:col-span-5">
        <Image
          src={image}
          alt={name}
          fill
          priority
          sizes="(min-width: 768px) 40vw, 100vw"
          className="object-cover"
        />
        <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-lg border border-tertiary/10 bg-cream-foam/90 p-3 backdrop-blur-sm">
          <Icon name="star" filled className="text-bean-origin-gold" />
          <span className="font-headline-sm text-headline-sm font-semibold text-roasted-espresso">
            {rating}
          </span>
        </div>
      </div>
    </section>
  );
}
