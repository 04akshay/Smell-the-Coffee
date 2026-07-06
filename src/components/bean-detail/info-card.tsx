import { Icon } from "@/components/icon";

export function InfoCard({
  icon,
  iconClasses,
  title,
  description,
}: {
  icon: string;
  iconClasses: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex-1 rounded-xl border border-tertiary/10 bg-surface-container-low p-4">
      <Icon name={icon} className={`mb-2 text-3xl ${iconClasses}`} />
      <h3 className="mb-1 font-headline-sm text-headline-sm font-semibold text-primary-container">
        {title}
      </h3>
      <p className="font-body-md text-body-md text-on-surface-variant">{description}</p>
    </div>
  );
}
