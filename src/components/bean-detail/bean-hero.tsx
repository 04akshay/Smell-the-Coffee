import Image from "next/image";

export function BeanHero({
  tag,
  name,
  description,
  origin,
  altitude,
  image,
}: {
  tag: string;
  name: string;
  description: string;
  origin: string;
  altitude: string;
  image: string;
}) {
  return (
    <section className="mb-8 grid grid-cols-1 gap-gutter md:grid-cols-12">
      <div className="flex flex-col justify-center md:col-span-5">
        <span className="mb-4 inline-block w-fit rounded-full bg-sage-leaf/10 px-3 py-1 font-label-caps text-label-caps text-sage-leaf">
          {tag}
        </span>
        <h1 className="mb-2 font-display-lg-mobile text-display-lg-mobile font-bold text-primary-container md:font-display-lg md:text-display-lg">
          {name}
        </h1>
        <p className="mb-6 font-body-lg text-body-lg text-on-surface-variant">{description}</p>
        <div className="mb-8 flex gap-6 border-l-2 border-bean-origin-gold pl-4">
          <div>
            <div className="mb-1 font-label-caps text-label-caps text-on-surface-variant">
              ORIGIN
            </div>
            <div className="font-label-md text-label-md text-primary-container">{origin}</div>
          </div>
          <div>
            <div className="mb-1 font-label-caps text-label-caps text-on-surface-variant">
              ALTITUDE
            </div>
            <div className="font-label-md text-label-md text-primary-container">{altitude}</div>
          </div>
        </div>
        <button className="w-fit rounded-lg bg-roasted-espresso px-6 py-3 font-label-md text-label-md text-cream-foam transition-colors hover:bg-tertiary-container">
          Add to Passport
        </button>
      </div>
      <div className="relative h-64 overflow-hidden rounded-xl border border-tertiary/10 md:col-span-7 md:h-[500px]">
        <Image src={image} alt={name} fill sizes="(min-width: 768px) 58vw, 100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-roasted-espresso/40 to-transparent" />
      </div>
    </section>
  );
}
