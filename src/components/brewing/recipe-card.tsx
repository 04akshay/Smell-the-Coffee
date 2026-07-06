import { Icon } from "@/components/icon";

export function RecipeCard({
  dose,
  yieldAmount,
  ratio,
  grind,
}: {
  dose: string;
  yieldAmount: string;
  ratio: string;
  grind: string;
}) {
  const stats = [
    { label: "Dose", value: dose },
    { label: "Yield", value: yieldAmount },
    { label: "Ratio", value: ratio },
    { label: "Grind", value: grind },
  ];

  return (
    <section className="rounded-lg bg-oat-milk p-6">
      <h2 className="mb-4 flex items-center gap-2 font-headline-sm text-headline-sm font-semibold text-roasted-espresso">
        <Icon name="science" /> The Recipe
      </h2>
      <div className="grid grid-cols-2 gap-4 font-body-md text-body-md text-on-surface-variant">
        {stats.map((stat) => (
          <div key={stat.label}>
            <span className="mb-1 block font-label-caps text-xs uppercase text-outline">
              {stat.label}
            </span>
            <span className="font-bold text-roasted-espresso">{stat.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
