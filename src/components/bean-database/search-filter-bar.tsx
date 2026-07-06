import { Icon } from "@/components/icon";

const FILTERS = [
  { label: "Region", icon: "public" },
  { label: "Roast Level", icon: "local_fire_department" },
  { label: "Process", icon: "water_drop" },
];

export function SearchFilterBar({
  query,
  onQueryChange,
}: {
  query: string;
  onQueryChange: (value: string) => void;
}) {
  return (
    <section className="glass-panel sticky top-16 z-30 -mx-margin-mobile mb-gutter px-margin-mobile py-4 md:top-20 md:-mx-margin-desktop md:px-margin-desktop">
      <div className="mx-auto flex max-w-container-max flex-col items-center gap-4 md:flex-row md:justify-between">
        <div className="relative w-full md:w-1/2 lg:w-1/3">
          <Icon
            name="search"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-outline"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search beans by name or flavor..."
            className="w-full rounded-t-lg border-b border-outline-variant bg-surface-container-low py-3 pl-12 pr-4 font-body-md text-roasted-espresso placeholder:text-outline-variant focus:border-roasted-espresso focus:ring-0"
          />
        </div>
        <div className="hide-scrollbar flex w-full gap-2 overflow-x-auto md:w-auto">
          {FILTERS.map((filter) => (
            <button
              key={filter.label}
              className="flex items-center gap-2 whitespace-nowrap rounded-full border border-outline-variant bg-surface px-4 py-2 font-label-md text-label-md text-on-surface-variant transition-all hover:border-roasted-espresso hover:bg-oat-milk hover:text-roasted-espresso"
            >
              <Icon name={filter.icon} className="text-[18px]" /> {filter.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
