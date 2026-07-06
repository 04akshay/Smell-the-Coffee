import Link from "next/link";
import { Icon } from "@/components/icon";

type Spot = {
  initials: string;
  name: string;
  drink: string;
  cafeHref?: string;
};

export function PouringNowList({ spots }: { spots: Spot[] }) {
  return (
    <div>
      <h2 className="mb-6 flex items-center gap-2 font-headline-sm text-headline-sm font-semibold text-primary-container">
        <Icon name="local_cafe" className="text-sage-leaf" /> Pouring Now in Delhi
      </h2>
      <div className="space-y-4">
        {spots.map((spot) => {
          const content = (
            <>
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-oat-milk font-headline-sm text-headline-sm font-bold text-primary-container">
                {spot.initials}
              </div>
              <div>
                <div className="font-label-md text-label-md font-bold text-primary-container">
                  {spot.name}
                </div>
                <div className="text-sm font-body-md text-body-md text-on-surface-variant">
                  {spot.drink}
                </div>
              </div>
            </>
          );
          const className =
            "flex items-center gap-4 rounded-lg border border-tertiary/10 bg-surface-container-lowest p-4 transition-colors hover:border-bean-origin-gold";

          return spot.cafeHref ? (
            <Link key={spot.name} href={spot.cafeHref} className={className}>
              {content}
            </Link>
          ) : (
            <div key={spot.name} className={className}>
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
}
