import { Icon } from "@/components/icon";

type Step = {
  timeLabel: string;
  title: string;
  description: string;
  active?: boolean;
};

export function StepTimeline({ steps }: { steps: Step[] }) {
  return (
    <section className="relative rounded-lg border border-tertiary/10 bg-cream-foam p-6 md:p-8">
      <div className="hidden items-center justify-between md:flex">
        <h2 className="mb-8 flex items-center gap-2 font-headline-md text-headline-md font-semibold text-roasted-espresso">
          <Icon name="water_drop" /> Step-by-Step Ritual
        </h2>
        <button className="timer-glow mb-8 flex items-center gap-2 rounded-lg bg-primary-container px-6 py-3 font-label-md text-label-md text-on-primary-container transition-colors hover:bg-roasted-espresso hover:text-cream-foam">
          <Icon name="play_circle" /> Start Brew Timer
        </button>
      </div>
      <h2 className="mb-8 flex items-center gap-2 font-headline-md text-headline-md font-semibold text-roasted-espresso md:hidden">
        <Icon name="water_drop" /> Step-by-Step Ritual
      </h2>

      <div className="relative space-y-8">
        <div className="absolute left-4 top-0 h-full w-0.5 -translate-x-1/2 bg-tertiary/10 md:left-1/2" />

        {steps.map((step, i) => {
          const onRight = i % 2 === 0;
          return (
            <div
              key={step.title}
              className="group relative grid grid-cols-[2rem_1fr] items-start gap-4 md:grid-cols-[1fr_2rem_1fr] md:gap-x-6"
            >
              <div
                className={
                  step.active
                    ? "z-10 col-start-1 flex h-8 w-8 items-center justify-center rounded-full border-4 border-surface bg-primary-container font-label-caps text-xs text-on-primary-container md:col-start-2"
                    : "z-10 col-start-1 flex h-8 w-8 items-center justify-center rounded-full border-4 border-surface bg-surface-variant font-label-caps text-xs text-on-surface-variant transition-colors group-hover:bg-primary-container group-hover:text-on-primary-container md:col-start-2"
                }
              >
                {i + 1}
              </div>
              <div
                className={
                  onRight
                    ? "col-start-2 rounded-lg border border-tertiary/10 bg-surface p-4 shadow-sm md:col-start-3 md:text-left"
                    : "col-start-2 rounded-lg border border-tertiary/10 bg-surface p-4 shadow-sm md:col-start-1 md:text-right"
                }
              >
                <div className="mb-1 font-label-caps text-label-caps text-sage-leaf">
                  {step.timeLabel}
                </div>
                <h3 className="mb-2 font-headline-sm text-headline-sm font-semibold text-roasted-espresso">
                  {step.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
