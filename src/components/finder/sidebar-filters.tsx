export type FilterGroup = {
  title: string;
  options: string[];
};

export const FILTER_GROUPS: FilterGroup[] = [
  {
    title: "Neighborhood",
    options: ["Safdarjung", "Vasant Vihar", "Hauz Khas", "Connaught Place"],
  },
  {
    title: "Noise Level",
    options: ["Quiet (Focus)", "Ambient (Chatter)", "Bustling (Loud)"],
  },
  {
    title: "Vibe",
    options: ["Workspace", "Date Spot", "Reading Nook"],
  },
  {
    title: "Roaster Used",
    options: ["Onyx Coffee Lab", "Sey Coffee", "Intelligentsia"],
  },
];

export type SelectedFilters = Record<string, Set<string>>;

function FilterGroupBlock({
  group,
  checked,
  onToggle,
}: {
  group: FilterGroup;
  checked: Set<string>;
  onToggle: (option: string) => void;
}) {
  return (
    <div>
      <h4 className="mb-4 border-b border-tertiary/10 pb-2 font-label-caps text-label-caps uppercase tracking-widest text-roasted-espresso">
        {group.title}
      </h4>
      <div className="space-y-3">
        {group.options.map((option) => (
          <label key={option} className="group flex cursor-pointer items-center gap-3">
            <input
              type="checkbox"
              checked={checked.has(option)}
              onChange={() => onToggle(option)}
              className="h-4 w-4 rounded border-outline-variant bg-transparent text-roasted-espresso focus:ring-2 focus:ring-roasted-espresso"
            />
            <span className="font-body-md text-body-md text-on-surface-variant transition-colors group-hover:text-roasted-espresso">
              {option}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}

export function SidebarFilters({
  selected,
  onToggle,
}: {
  selected: SelectedFilters;
  onToggle: (groupTitle: string, option: string) => void;
}) {
  return (
    <aside className="hidden shrink-0 md:block md:w-64">
      <div className="sticky top-28 space-y-8">
        {FILTER_GROUPS.map((group) => (
          <FilterGroupBlock
            key={group.title}
            group={group}
            checked={selected[group.title] ?? new Set()}
            onToggle={(option) => onToggle(group.title, option)}
          />
        ))}
      </div>
    </aside>
  );
}
