import { Icon } from "@/components/icon";

export function EquipmentChecklist({ items }: { items: string[] }) {
  return (
    <section className="rounded-lg border border-tertiary/10 bg-cream-foam p-6">
      <h2 className="mb-4 flex items-center gap-2 font-headline-sm text-headline-sm font-semibold text-roasted-espresso">
        <Icon name="checklist" /> Equipment Checklist
      </h2>
      <ul className="space-y-3 font-body-md text-body-md text-on-surface-variant">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <Icon name="check_circle" className="mt-0.5 text-[20px] text-sage-leaf" />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
