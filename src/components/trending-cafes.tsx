import Link from "next/link";
import { Icon } from "./icon";
import { getCafeBySlug } from "@/lib/cafes";

const featured = getCafeBySlug("roastery-coffee-house")!;
const smallCafes = [
  getCafeBySlug("subko-cacao-mill")!,
  getCafeBySlug("devans-south-indian")!,
];

export function TrendingCafes() {
  return (
    <section className="flex flex-col gap-6">
      <div className="mb-4 flex items-end justify-between">
        <h2 className="font-headline-md text-headline-md font-semibold text-roasted-espresso">
          Trending Delhi Cafes
        </h2>
        <Link
          href="/finder"
          className="flex items-center font-label-md text-label-md text-sage-leaf hover:underline"
        >
          View All <Icon name="arrow_forward" className="ml-1 text-sm" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
        <Link
          href={`/cafe/${featured.slug}`}
          className="group relative flex min-h-[400px] flex-col overflow-hidden rounded-xl border border-tertiary/10 bg-surface-bright md:col-span-2"
        >
          <div
            className="w-full flex-grow bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url('${featured.image}')` }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-roasted-espresso/90 via-roasted-espresso/20 to-transparent" />
          <div className="absolute bottom-0 left-0 z-10 flex w-full flex-col gap-2 p-6 text-cream-foam">
            <div className="mb-2 flex gap-2">
              {featured.tags.slice(0, 2).map((tag, i) => (
                <span
                  key={tag}
                  className={
                    i === 0
                      ? "rounded-full bg-sage-leaf px-3 py-1 font-label-caps text-label-caps font-bold text-cream-foam"
                      : "rounded-full bg-surface-tint/80 px-3 py-1 font-label-caps text-label-caps font-bold text-cream-foam backdrop-blur-sm"
                  }
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="font-headline-md text-headline-md font-semibold">
              {featured.name}
            </h3>
            <p className="flex items-center gap-1 font-body-md text-body-md text-inverse-on-surface/90">
              <Icon name="location_on" className="text-[16px]" />
              {featured.neighborhood}
            </p>
          </div>
        </Link>

        <div className="flex flex-col gap-gutter">
          {smallCafes.map((cafe) => (
            <Link
              key={cafe.slug}
              href={`/cafe/${cafe.slug}`}
              className="group relative min-h-[188px] flex-1 overflow-hidden rounded-xl border border-tertiary/10 bg-surface-bright"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${cafe.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-roasted-espresso/80 to-transparent" />
              <div className="absolute bottom-0 left-0 z-10 w-full p-4 text-cream-foam">
                <h3 className="font-headline-sm text-headline-sm font-semibold">
                  {cafe.name}
                </h3>
                <p className="font-label-md text-label-md text-inverse-on-surface/90">
                  {cafe.neighborhood}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
