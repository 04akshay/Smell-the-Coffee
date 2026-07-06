import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icon";

export type DirectoryCafe = {
  name: string;
  image: string;
  rating: number;
  tags: string[];
  brewInfo: string;
  seating: string;
  href?: string;
};

export function CafeCard({ cafe }: { cafe: DirectoryCafe }) {
  const content = (
    <>
      <div className="relative mb-4 h-56 w-full overflow-hidden rounded-lg bg-surface-container">
        <Image
          src={cafe.image}
          alt={cafe.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-roasted-espresso/40 opacity-0 transition-opacity group-hover:opacity-100">
          <span className="translate-y-4 rounded-full bg-cream-foam px-6 py-2 font-label-md text-label-md text-roasted-espresso transition-all duration-300 group-hover:translate-y-0 hover:bg-surface-bright">
            View Profile
          </span>
        </div>
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded bg-cream-foam/90 px-2 py-1 font-label-caps text-label-caps text-roasted-espresso shadow-sm backdrop-blur">
          <Icon name="star" filled className="text-[14px] text-bean-origin-gold" />
          {cafe.rating}
        </div>
      </div>
      <h3 className="mb-1 font-headline-md text-headline-sm text-roasted-espresso transition-colors group-hover:text-sage-leaf">
        {cafe.name}
      </h3>
      <div className="mb-3 flex flex-wrap items-center gap-x-2 gap-y-1 font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant">
        {cafe.tags.map((tag, i) => (
          <span key={tag} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden>•</span>}
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-auto flex items-center gap-4 border-t border-tertiary/5 pt-2 font-label-md text-label-md text-on-surface-variant">
        <div className="flex items-center gap-1">
          <Icon name="water_drop" className="text-[16px]" />
          <span>{cafe.brewInfo}</span>
        </div>
        <div className="ml-auto flex items-center gap-1">
          <Icon name="chair" className="text-[16px]" />
          <span>{cafe.seating}</span>
        </div>
      </div>
    </>
  );

  const className = "group flex cursor-pointer flex-col";

  if (cafe.href) {
    return (
      <Link href={cafe.href} className={className}>
        {content}
      </Link>
    );
  }

  return <div className={className}>{content}</div>;
}
