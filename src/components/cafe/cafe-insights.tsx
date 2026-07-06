import { Icon } from "@/components/icon";

export function CafeInsights({
  vibe,
  utility,
  coffee,
}: {
  vibe: { description: string; tags: string[] };
  utility: { label: string; value: string }[];
  coffee: { origins: string; signatures: string };
}) {
  return (
    <section>
      <h2 className="mb-8 border-b border-tertiary/10 pb-4 font-headline-md text-headline-md font-semibold text-roasted-espresso">
        Cafe Insights
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="flex flex-col gap-4 rounded-xl border border-tertiary/10 bg-surface-bright p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <Icon name="spa" className="text-3xl text-sage-leaf" />
            <h3 className="font-headline-sm text-headline-sm font-semibold text-roasted-espresso">
              Vibe &amp; Ambience
            </h3>
          </div>
          <p className="flex-grow font-body-md text-body-md text-on-surface-variant">
            {vibe.description}
          </p>
          <div className="mt-auto flex flex-wrap gap-2">
            {vibe.tags.map((tag) => (
              <span
                key={tag}
                className="rounded bg-oat-milk px-2 py-1 font-label-caps text-label-caps font-bold uppercase tracking-[0.05em] text-on-surface-variant"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 rounded-xl border border-tertiary/10 bg-surface-bright p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <Icon name="devices" className="text-3xl text-sage-leaf" />
            <h3 className="font-headline-sm text-headline-sm font-semibold text-roasted-espresso">
              Work &amp; Utility
            </h3>
          </div>
          <ul className="flex-grow space-y-3 font-body-md text-body-md text-on-surface-variant">
            {utility.map((item, i) => (
              <li
                key={item.label}
                className={
                  i < utility.length - 1
                    ? "flex items-center justify-between border-b border-tertiary/5 pb-2"
                    : "flex items-center justify-between"
                }
              >
                <span>{item.label}</span>
                <span className="font-medium text-roasted-espresso">
                  {item.value}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4 rounded-xl border border-tertiary/10 bg-surface-bright p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <Icon name="local_cafe" className="text-3xl text-sage-leaf" />
            <h3 className="font-headline-sm text-headline-sm font-semibold text-roasted-espresso">
              The Coffee
            </h3>
          </div>
          <div className="flex-grow space-y-4">
            <div>
              <p className="mb-1 font-label-caps text-label-caps font-bold uppercase tracking-[0.05em] text-on-surface-variant">
                ORIGINS
              </p>
              <p className="font-body-md text-body-md text-roasted-espresso">
                {coffee.origins}
              </p>
            </div>
            <div>
              <p className="mb-1 font-label-caps text-label-caps font-bold uppercase tracking-[0.05em] text-on-surface-variant">
                SIGNATURES
              </p>
              <p className="font-body-md text-body-md text-roasted-espresso">
                {coffee.signatures}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
