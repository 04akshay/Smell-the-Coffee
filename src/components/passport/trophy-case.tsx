import { Icon } from "@/components/icon";

type Stamp = {
  label: string;
  icon: string;
  iconClasses: string;
  description?: string;
  locked?: boolean;
};

export function TrophyCase({ stamps }: { stamps: Stamp[] }) {
  return (
    <section className="ambient-shadow overflow-hidden rounded-xl border border-tertiary/10 bg-surface-container-lowest p-6 md:p-8">
      <div className="mb-6 flex items-baseline justify-between">
        <h3 className="font-headline-sm text-headline-sm font-bold text-roasted-espresso">
          Earned Stamps
        </h3>
        <button className="font-label-md text-label-md font-semibold text-primary transition-colors hover:text-primary-container">
          View All
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stamps.map((stamp) =>
          stamp.locked ? (
            <div
              key={stamp.label}
              className="passport-stamp flex aspect-square flex-col items-center justify-center border border-dashed border-outline-variant bg-surface-container p-4 text-center opacity-60"
            >
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-surface-variant text-outline">
                <Icon name="lock" />
              </div>
              <span className="font-label-md text-label-md leading-tight text-on-surface-variant">
                {stamp.label}
              </span>
            </div>
          ) : (
            <div
              key={stamp.label}
              className="passport-stamp group relative flex aspect-square flex-col items-center justify-center border border-tertiary/10 bg-oat-milk p-4 text-center"
            >
              <div
                className={`mb-2 flex h-12 w-12 items-center justify-center rounded-full ${stamp.iconClasses}`}
              >
                <Icon name={stamp.icon} filled />
              </div>
              <span className="font-label-md text-label-md font-semibold leading-tight text-roasted-espresso">
                {stamp.label}
              </span>
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-cream-foam/95 p-2 text-center text-xs text-on-surface-variant opacity-0 transition-opacity group-hover:opacity-100">
                {stamp.description}
              </div>
            </div>
          ),
        )}
      </div>
    </section>
  );
}
