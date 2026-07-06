import Link from "next/link";
import { Icon } from "@/components/icon";

type FeaturedBean = {
  origin: string;
  name: string;
  description: string;
  roast: string;
  process: string;
  href: string;
};

type SecondaryBean = {
  estate: string;
  name: string;
  description: string;
};

export function RegionalFavorites({
  featured,
  secondary,
}: {
  featured: FeaturedBean;
  secondary: SecondaryBean[];
}) {
  return (
    <section className="mb-section-gap">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h3 className="font-headline-sm text-headline-sm font-semibold text-roasted-espresso">
            Regional Favorites
          </h3>
          <p className="mt-1 font-body-md text-body-md text-on-surface-variant">
            Trending beans near Delhi &amp; NCR
          </p>
        </div>
        <a
          href="#"
          className="flex items-center gap-1 font-label-md text-label-md text-sage-leaf transition-colors hover:text-roasted-espresso"
        >
          View Map <Icon name="arrow_forward" className="text-[18px]" />
        </a>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Link
          href={featured.href}
          className="group relative flex h-64 cursor-pointer flex-col justify-between overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-variant/40 p-6 md:col-span-2 md:h-80"
        >
          <div className="flex items-start justify-between">
            <span className="rounded-full bg-roasted-espresso px-3 py-1 font-label-caps text-label-caps uppercase text-cream-foam">
              {featured.origin}
            </span>
            <Icon
              name="open_in_new"
              className="text-roasted-espresso opacity-0 transition-opacity group-hover:opacity-100"
            />
          </div>
          <div>
            <h4 className="mb-2 font-headline-md text-headline-md font-semibold text-roasted-espresso">
              {featured.name}
            </h4>
            <p className="mb-4 line-clamp-2 max-w-md font-body-md text-body-md text-on-surface-variant">
              {featured.description}
            </p>
            <div className="flex gap-2">
              <span className="inline-flex items-center gap-1 rounded border border-outline-variant/50 bg-surface px-2 py-1 font-label-caps text-[10px] text-on-surface-variant">
                <Icon name="local_fire_department" className="text-[14px]" /> {featured.roast}
              </span>
              <span className="inline-flex items-center gap-1 rounded border border-outline-variant/50 bg-surface px-2 py-1 font-label-caps text-[10px] text-on-surface-variant">
                <Icon name="water_drop" className="text-[14px]" /> {featured.process}
              </span>
            </div>
          </div>
        </Link>

        <div className="flex flex-col gap-6">
          {secondary.map((bean) => (
            <div
              key={bean.name}
              className="group cursor-pointer rounded-xl border border-outline-variant/30 bg-surface-container-low p-5 transition-colors hover:border-bean-origin-gold/50"
            >
              <span className="mb-2 block font-label-caps text-xs uppercase tracking-widest text-sage-leaf">
                {bean.estate}
              </span>
              <h4 className="mb-1 font-headline-sm text-headline-sm font-semibold text-roasted-espresso">
                {bean.name}
              </h4>
              <p className="line-clamp-1 font-body-md text-sm text-on-surface-variant">
                {bean.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
