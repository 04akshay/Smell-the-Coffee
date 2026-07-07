"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CafeCard, type DirectoryCafe } from "@/components/finder/cafe-card";
import { FinderEmptyState } from "@/components/finder/empty-state";
import {
  SidebarFilters,
  FILTER_GROUPS,
  type SelectedFilters,
} from "@/components/finder/sidebar-filters";
import type { CafeRecord } from "@/lib/cafes";

const SORT_OPTIONS = ["Newest Added", "Highest Rated", "Closest to Me"] as const;
type SortOption = (typeof SORT_OPTIONS)[number];

function toDirectoryCafe(cafe: CafeRecord): DirectoryCafe {
  return {
    name: cafe.name,
    image: cafe.image,
    rating: cafe.rating,
    tags: cafe.tags,
    brewInfo: cafe.brewInfo,
    seating: cafe.seating,
    href: `/cafe/${cafe.slug}`,
  };
}

function matchesGroup(cafe: CafeRecord, groupTitle: string, options: Set<string>) {
  if (options.size === 0) return true;

  switch (groupTitle) {
    case "Neighborhood":
      return options.has(cafe.neighborhood);
    case "Noise Level":
      return Array.from(options).some((option) =>
        cafe.tags.includes(option.split(" (")[0])
      );
    case "Vibe":
      return Array.from(options).some((option) => cafe.tags.includes(option));
    case "Roaster Used":
      return options.has(cafe.roaster);
    default:
      return true;
  }
}

export function FinderView({ cafes }: { cafes: CafeRecord[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.trim().toLowerCase() ?? "";
  const [selected, setSelected] = useState<SelectedFilters>({});
  const [sort, setSort] = useState<SortOption>("Newest Added");

  function clearAll() {
    setSelected({});
    router.push("/finder");
  }

  function quickVibe(term: string) {
    setSelected({});
    router.push(`/finder?q=${encodeURIComponent(term)}`);
  }

  function toggle(groupTitle: string, option: string) {
    setSelected((prev) => {
      const next = new Set(prev[groupTitle] ?? []);
      if (next.has(option)) {
        next.delete(option);
      } else {
        next.add(option);
      }
      return { ...prev, [groupTitle]: next };
    });
  }

  const visibleCafes = useMemo(() => {
    const filtered = cafes.filter((cafe) => {
      const matchesQuery =
        query.length === 0 ||
        cafe.name.toLowerCase().includes(query) ||
        cafe.roaster.toLowerCase().includes(query) ||
        cafe.tags.some((tag) => tag.toLowerCase().includes(query));

      return (
        matchesQuery &&
        FILTER_GROUPS.every((group) =>
          matchesGroup(cafe, group.title, selected[group.title] ?? new Set())
        )
      );
    });

    const sorted = [...filtered];
    if (sort === "Highest Rated") {
      sorted.sort((a, b) => b.rating - a.rating);
    } else if (sort === "Closest to Me") {
      sorted.sort((a, b) => a.distanceKm - b.distanceKm);
    }
    return sorted;
  }, [cafes, selected, sort, query]);

  const activeFilterCount = Object.values(selected).reduce(
    (sum, set) => sum + set.size,
    0
  );

  return (
    <main className="mx-auto flex w-full max-w-container-max flex-col gap-12 px-4 pb-16 pt-8 md:flex-row md:px-margin-desktop">
      <SidebarFilters selected={selected} onToggle={toggle} />

      <div className="min-w-0 flex-1">
        <div className="mb-8 flex flex-col justify-between gap-4 border-b border-tertiary/10 pb-4 md:flex-row md:items-end">
          <div>
            <h1 className="mb-1 font-display-lg text-display-lg-mobile text-roasted-espresso md:text-display-lg">
              Cafe Directory
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Showing {visibleCafes.length} of {cafes.length} Cafes in Delhi
              {query && <> for &ldquo;{query}&rdquo;</>}
              {activeFilterCount > 0 && (
                <button
                  onClick={() => setSelected({})}
                  className="ml-3 text-sage-leaf underline-offset-2 hover:underline"
                >
                  Clear filters
                </button>
              )}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant">
              Sort By
            </span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className="cursor-pointer rounded-md border border-outline-variant bg-surface-bright py-1.5 pl-3 pr-8 text-body-md text-roasted-espresso focus:border-roasted-espresso focus:ring-roasted-espresso"
            >
              {SORT_OPTIONS.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>

        {visibleCafes.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {visibleCafes.map((cafe) => (
              <CafeCard key={cafe.slug} cafe={toDirectoryCafe(cafe)} />
            ))}
          </div>
        ) : (
          <FinderEmptyState onClearAll={clearAll} onQuickVibe={quickVibe} />
        )}
      </div>
    </main>
  );
}
