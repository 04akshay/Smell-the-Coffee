"use client";

import { useMemo, useState } from "react";
import { SearchFilterBar } from "@/components/brewing/search-filter-bar";
import { FeaturedGuide } from "@/components/brewing/featured-guide";
import { GuideCard } from "@/components/brewing/guide-card";
import type { BrewGuideRecord } from "@/lib/brewing-guides";

export function BrewingGuideView({ guides }: { guides: BrewGuideRecord[] }) {
  const [query, setQuery] = useState("");
  const featured = guides.find((guide) => guide.slug === "v60")!;

  const visibleGuides = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return guides;
    return guides.filter(
      (guide) =>
        guide.name.toLowerCase().includes(q) ||
        guide.category.toLowerCase().includes(q) ||
        guide.flavorTags.some((tag) => tag.toLowerCase().includes(q))
    );
  }, [guides, query]);

  return (
    <main className="mx-auto max-w-container-max px-margin-mobile py-gutter pb-32 md:px-margin-desktop">
      <header className="mb-gutter">
        <h1 className="mb-base font-display-lg-mobile text-display-lg-mobile font-bold tracking-[-0.01em] text-roasted-espresso md:font-display-lg md:text-display-lg md:tracking-[-0.02em]">
          Brewing Guides
        </h1>
        <p className="mb-gutter max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
          Master the art of extraction. Explore curated methods for every bean
          and mood, from crisp pour-overs to rich immersions.
        </p>
        <SearchFilterBar query={query} onQueryChange={setQuery} />
      </header>

      <FeaturedGuide
        tag="Featured Classic"
        title="The Perfect V60 Pour-Over"
        description="Achieve crystalline clarity and vibrant acidity with this fundamental pour-over technique. The cone shape and spiral ribs demand precision, rewarding you with a profoundly clean cup."
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuBX9qxaO0faM2rO_HwhsnwY7XVMXOHavTL8lucDAzSTAj1EAloJ4WI611ZOuSGgOh_yOl1HH-i9E5U2x7rFuGc3oa2zvicodxSPxTxc3t4lWii3863UYvYtSiG7SUfpne-A2AwdzT2R_z4bN_15n5c8YekTpwX_xsQj32wp5eEHtRLNKVDspNspcH3Bb3zKlAnBK3RKGxhn6CJh3WSxJhPa_FCW3S3rF9rwJlxSntC9wRUv-Xmfjw4bbA"
        time={featured.timeLabel}
        difficulty={featured.difficulty}
        href={`/brewing-guide/${featured.slug}`}
      />

      <div>
        <h3 className="mb-6 font-headline-sm text-headline-sm font-semibold text-roasted-espresso">
          All Methods
        </h3>
        {visibleGuides.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {visibleGuides.map((guide) => (
              <GuideCard
                key={guide.slug}
                guide={{
                  name: guide.name,
                  category: guide.category,
                  description: guide.description,
                  image: guide.image,
                  flavorTags: guide.flavorTags,
                  difficulty: guide.difficulty,
                  time: guide.time,
                  href: `/brewing-guide/${guide.slug}`,
                }}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2 rounded-xl border border-dashed border-tertiary/20 py-24 text-center">
            <p className="font-headline-sm text-headline-sm font-semibold text-roasted-espresso">
              No methods match this search
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Try a different method, category, or flavor.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
