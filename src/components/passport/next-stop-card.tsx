import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icon";

export function NextStopCard({
  image,
  name,
  description,
  location,
  href,
}: {
  image: string;
  name: string;
  description: string;
  location: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="ambient-shadow group relative flex min-h-[240px] cursor-pointer flex-col justify-between overflow-hidden rounded-xl bg-roasted-espresso p-6 text-cream-foam"
    >
      <div className="absolute inset-0 opacity-20 transition-transform duration-700 group-hover:scale-105">
        <Image src={image} alt={name} fill sizes="33vw" className="object-cover" />
      </div>
      <div className="relative z-10">
        <span className="mb-4 inline-flex items-center gap-1 rounded bg-sage-leaf/80 px-2 py-1 font-label-caps text-label-caps font-bold uppercase tracking-wider text-cream-foam backdrop-blur-sm">
          <Icon name="explore" className="text-[14px]" /> Next Stop
        </span>
        <h3 className="mb-2 font-headline-md text-headline-md font-semibold">{name}</h3>
        <p className="mb-4 line-clamp-2 font-body-md text-body-md text-tertiary-fixed-dim">
          {description}
        </p>
      </div>
      <div className="relative z-10 mt-auto flex items-center justify-between border-t border-cream-foam/20 pt-4">
        <span className="flex items-center gap-1 font-label-md text-label-md">
          <Icon name="location_on" className="text-[16px]" /> {location}
        </span>
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cream-foam text-roasted-espresso transition-colors group-hover:bg-secondary-fixed">
          <Icon name="arrow_forward" className="text-[18px]" />
        </span>
      </div>
    </Link>
  );
}
