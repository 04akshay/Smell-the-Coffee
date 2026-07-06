import Image from "next/image";
import { Icon } from "@/components/icon";

export type CafeListing = {
  name: string;
  distance: string;
  rating: number;
  description: string;
  image: string;
  brewMethods: { icon: string; label: string }[];
  tags: { label: string; emphasis?: boolean }[];
};

export function CafeListCard({ cafe }: { cafe: CafeListing }) {
  return (
    <div className="group cursor-pointer overflow-hidden rounded-lg border border-tertiary/10 bg-surface-bright transition-all duration-300 hover:border-sage-leaf/50">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={cafe.image}
          alt={cafe.name}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded bg-cream-foam/90 px-2 py-1 font-label-caps text-label-caps text-roasted-espresso shadow-sm backdrop-blur">
          <Icon name="star" filled className="text-[14px] text-bean-origin-gold" />
          {cafe.rating}
        </div>
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-start justify-between">
          <h3 className="font-headline-sm text-headline-sm font-semibold text-roasted-espresso transition-colors group-hover:text-sage-leaf">
            {cafe.name}
          </h3>
          <span className="font-label-md text-label-md text-on-surface-variant">
            {cafe.distance}
          </span>
        </div>
        <p className="mb-4 line-clamp-2 font-body-md text-body-md text-on-surface-variant">
          {cafe.description}
        </p>
        <div className="mb-4 flex gap-3 text-on-surface-variant">
          {cafe.brewMethods.map((method) => (
            <div key={method.label} className="flex items-center gap-1" title={method.label}>
              <Icon name={method.icon} className="text-[18px]" />
              <span className="font-label-md text-label-md">{method.label}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {cafe.tags.map((tag) => (
            <span
              key={tag.label}
              className={
                tag.emphasis
                  ? "rounded bg-secondary-fixed/50 px-2 py-1 font-label-caps text-label-caps tracking-wider text-sage-leaf"
                  : "rounded bg-oat-milk px-2 py-1 font-label-caps text-label-caps tracking-wider text-on-surface-variant"
              }
            >
              {tag.label.toUpperCase()}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
