import Image from "next/image";
import { Icon } from "@/components/icon";

export function EducationHero({
  tag,
  title,
  description,
  image,
}: {
  tag: string;
  title: string;
  description: string;
  image: string;
}) {
  return (
    <section className="mb-section-gap">
      <div className="group relative h-[400px] w-full overflow-hidden rounded-xl shadow-sm md:h-[500px]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-roasted-espresso/90 via-roasted-espresso/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-6 text-cream-foam md:p-12">
          <span className="mb-4 inline-block rounded-full bg-sage-leaf/90 px-3 py-1 font-label-caps text-label-caps uppercase tracking-wider backdrop-blur-sm">
            {tag}
          </span>
          <h2 className="mb-3 font-headline-md text-headline-md font-semibold text-cream-foam">
            {title}
          </h2>
          <p className="mb-6 max-w-xl font-body-md text-body-md text-surface-variant opacity-90">
            {description}
          </p>
          <button className="inline-flex items-center gap-2 rounded-lg bg-cream-foam px-6 py-3 font-label-md text-label-md text-roasted-espresso transition-colors hover:bg-oat-milk">
            <span>Read Full Guide</span>
            <Icon name="arrow_forward" className="text-[18px]" />
          </button>
        </div>
      </div>
    </section>
  );
}
