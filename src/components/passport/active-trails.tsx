import { Icon } from "@/components/icon";

type Trail = {
  name: string;
  completedLabel: string;
  badgeClasses: string;
  description: string;
  progress: number;
  progressLabelClasses: string;
  progressBarClasses: string;
};

export function ActiveTrails({ trails }: { trails: Trail[] }) {
  return (
    <section>
      <div className="mb-6 flex items-center gap-2">
        <Icon name="conversion_path" className="text-3xl text-sage-leaf" />
        <h2 className="font-display-lg-mobile text-display-lg-mobile text-roasted-espresso md:font-headline-md md:text-headline-md">
          Active Trails
        </h2>
      </div>

      <div className="flex flex-col gap-6">
        {trails.map((trail) => (
          <div
            key={trail.name}
            className="ambient-shadow flex flex-col justify-between gap-6 rounded-xl border border-tertiary/10 bg-surface-container-lowest p-6 md:flex-row md:items-center md:p-8"
          >
            <div className="flex-grow">
              <div className="mb-2 flex items-start gap-4">
                <h3 className="font-headline-md text-headline-md font-semibold text-roasted-espresso">
                  {trail.name}
                </h3>
                <span
                  className={`rounded-full px-3 py-1 font-label-caps text-[10px] font-bold uppercase tracking-wider ${trail.badgeClasses}`}
                >
                  {trail.completedLabel}
                </span>
              </div>
              <p className="font-body-md text-on-surface-variant">{trail.description}</p>
            </div>

            <div className="w-full md:w-64">
              <div className="mb-2 flex items-center justify-between">
                <span className="font-label-md text-on-surface-variant">Progress</span>
                <span className={`font-label-md font-bold ${trail.progressLabelClasses}`}>
                  {trail.progress}%
                </span>
              </div>
              <div className="h-3 w-full overflow-hidden rounded-full bg-surface-variant">
                <div
                  className={`h-3 rounded-full ${trail.progressBarClasses}`}
                  style={{ width: `${trail.progress}%` }}
                />
              </div>
            </div>

            <button className="text-outline transition-colors hover:text-roasted-espresso">
              <Icon name="expand_more" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
