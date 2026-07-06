import { Icon } from "@/components/icon";

const FILTERS = ["Difficulty", "Flavor Profile", "Time"];

export function SearchFilterBar({
  query,
  onQueryChange,
}: {
  query: string;
  onQueryChange: (value: string) => void;
}) {
  return (
    <div className="mb-gutter flex flex-col items-center gap-4 rounded-xl border border-tertiary/10 bg-oat-milk p-4 md:flex-row">
      <div className="relative w-full md:w-1/3">
        <Icon
          name="search"
          className="absolute left-3 top-1/2 -translate-y-1/2 text-outline"
        />
        <input
          type="text"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search methods..."
          className="w-full rounded-lg border-none bg-surface-container-lowest py-2 pl-10 pr-4 font-body-md text-on-surface focus:ring-1 focus:ring-sage-leaf"
        />
      </div>
      <div className="flex w-full flex-wrap gap-2 md:w-auto">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            className="flex items-center gap-2 rounded-lg border border-tertiary/10 bg-surface-container-lowest px-4 py-2 font-label-md text-label-md text-on-surface-variant transition-colors hover:bg-surface-container"
          >
            {filter}
            <Icon name="expand_more" className="text-sm" />
          </button>
        ))}
      </div>
    </div>
  );
}
