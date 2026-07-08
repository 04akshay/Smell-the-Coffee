"use client";

import { useMemo, useState } from "react";
import { Icon } from "@/components/icon";
import { VibeCard } from "@/components/community/vibe-card";

type VibeCardData = {
  id: string;
  avatar: string;
  name: string;
  levelLabel: string;
  cafeName?: string;
  cafeSlug?: string;
  image?: string;
  message: React.ReactNode;
  tags: { label: string; emphasis?: boolean }[];
  metrics?: { label: string; icon: string; filled: number; filledClasses: string }[];
  likeCount: number;
  commentCount: number;
};

type SortOption = "recent" | "liked";

export function LivePulseSection({ cards }: { cards: VibeCardData[] }) {
  const [sort, setSort] = useState<SortOption>("recent");
  const [sortOpen, setSortOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeTags, setActiveTags] = useState<Set<string>>(new Set());

  const allTags = useMemo(() => {
    const set = new Set<string>();
    cards.forEach((card) => card.tags.forEach((tag) => set.add(tag.label)));
    return Array.from(set);
  }, [cards]);

  function toggleTag(tag: string) {
    setActiveTags((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) next.delete(tag);
      else next.add(tag);
      return next;
    });
  }

  const visibleCards = useMemo(() => {
    const filtered =
      activeTags.size === 0
        ? cards
        : cards.filter((card) => card.tags.some((tag) => activeTags.has(tag.label)));

    const sorted = [...filtered];
    if (sort === "liked") {
      sorted.sort((a, b) => b.likeCount - a.likeCount);
    }
    return sorted;
  }, [cards, activeTags, sort]);

  return (
    <section>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-headline-md text-headline-md text-primary">Live Pulse</h2>
        <div className="flex gap-4">
          <div className="relative">
            <button
              onClick={() => {
                setSortOpen((v) => !v);
                setFilterOpen(false);
              }}
              className="flex items-center gap-1 font-label-md text-label-md text-sage-leaf transition-colors hover:text-primary"
            >
              Sort
              <Icon name="sort" className="text-[18px]" />
            </button>
            {sortOpen && (
              <div className="absolute right-0 z-20 mt-2 w-44 rounded-lg border border-tertiary/10 bg-cream-foam p-2 shadow-lg">
                {(["recent", "liked"] as SortOption[]).map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setSort(option);
                      setSortOpen(false);
                    }}
                    className={
                      sort === option
                        ? "flex w-full items-center gap-2 rounded-md bg-oat-milk px-3 py-2 text-left font-label-md text-label-md text-primary"
                        : "flex w-full items-center gap-2 rounded-md px-3 py-2 text-left font-label-md text-label-md text-on-surface-variant hover:bg-surface-container"
                    }
                  >
                    {option === "recent" ? "Most Recent" : "Most Liked"}
                    {sort === option && <Icon name="check" className="ml-auto text-[16px]" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => {
                setFilterOpen((v) => !v);
                setSortOpen(false);
              }}
              className="flex items-center gap-1 font-label-md text-label-md text-sage-leaf transition-colors hover:text-primary"
            >
              Filter
              {activeTags.size > 0 && (
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-sage-leaf text-[10px] text-cream-foam">
                  {activeTags.size}
                </span>
              )}
              <Icon name="filter_list" className="text-[18px]" />
            </button>
            {filterOpen && (
              <div className="absolute right-0 z-20 mt-2 w-56 rounded-lg border border-tertiary/10 bg-cream-foam p-3 shadow-lg">
                <p className="mb-2 font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant">
                  Filter by vibe
                </p>
                <div className="flex flex-wrap gap-2">
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={
                        activeTags.has(tag)
                          ? "rounded-full bg-sage-leaf px-3 py-1 font-label-caps text-label-caps text-cream-foam"
                          : "rounded-full bg-surface-container px-3 py-1 font-label-caps text-label-caps text-on-surface-variant hover:bg-surface-container-high"
                      }
                    >
                      {tag}
                    </button>
                  ))}
                </div>
                {activeTags.size > 0 && (
                  <button
                    onClick={() => setActiveTags(new Set())}
                    className="mt-3 font-label-caps text-label-caps text-sage-leaf hover:underline"
                  >
                    Clear filters
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {visibleCards.length > 0 ? (
        <div className="masonry-grid">
          {visibleCards.map((card) => (
            <VibeCard key={card.id} {...card} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-tertiary/20 py-16 text-center">
          <p className="font-body-md text-body-md text-on-surface-variant">
            No check-ins match this vibe right now.
          </p>
        </div>
      )}
    </section>
  );
}
