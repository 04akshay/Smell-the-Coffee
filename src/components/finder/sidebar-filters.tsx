"use client";

import { useState } from "react";

type FilterGroup = {
  title: string;
  options: string[];
  defaultChecked?: string[];
};

const FILTER_GROUPS: FilterGroup[] = [
  {
    title: "Neighborhood",
    options: ["Safdarjung", "Vasant Vihar", "Hauz Khas", "Connaught Place"],
    defaultChecked: ["Safdarjung"],
  },
  {
    title: "Noise Level",
    options: ["Quiet (Focus)", "Ambient (Chatter)", "Bustling (Loud)"],
    defaultChecked: ["Quiet (Focus)"],
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

function FilterGroupBlock({ group }: { group: FilterGroup }) {
  const [checked, setChecked] = useState(new Set(group.defaultChecked ?? []));

  function toggle(option: string) {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(option)) {
        next.delete(option);
      } else {
        next.add(option);
      }
      return next;
    });
  }

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
              onChange={() => toggle(option)}
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

export function SidebarFilters() {
  return (
    <aside className="hidden shrink-0 md:block md:w-64">
      <div className="sticky top-28 space-y-8">
        {FILTER_GROUPS.map((group) => (
          <FilterGroupBlock key={group.title} group={group} />
        ))}
      </div>
    </aside>
  );
}
