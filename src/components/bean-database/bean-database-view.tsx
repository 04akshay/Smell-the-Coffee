"use client";

import { useMemo, useState } from "react";
import { EducationHero } from "@/components/bean-database/education-hero";
import { SearchFilterBar } from "@/components/bean-database/search-filter-bar";
import { RegionalFavorites } from "@/components/bean-database/regional-favorites";
import { FlavorNotesGrid } from "@/components/bean-database/flavor-notes-grid";
import { BeanList } from "@/components/bean-database/bean-list";
import type { BeanRecord } from "@/lib/beans";

const flavorNotes = [
  { label: "Acidity & Citrus", description: "Bright, zesty, lively", quadrant: "top-left" as const },
  { label: "Sweetness & Cocoa", description: "Chocolate, caramel, honey", quadrant: "top-right" as const },
  { label: "Floral & Delicate", description: "Jasmine, rose, tea-like", quadrant: "bottom-left" as const },
  { label: "Nutty & Earthy", description: "Hazelnut, almond, spice", quadrant: "bottom-right" as const },
];

export function BeanDatabaseView({
  featured,
  secondary,
  indexBeans,
}: {
  featured: BeanRecord;
  secondary: BeanRecord[];
  indexBeans: BeanRecord[];
}) {
  const [query, setQuery] = useState("");

  const visibleBeans = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = q
      ? indexBeans.filter(
          (bean) =>
            bean.name.toLowerCase().includes(q) ||
            bean.notes.toLowerCase().includes(q) ||
            bean.process.toLowerCase().includes(q)
        )
      : indexBeans;

    return filtered.map((bean) => ({
      name: bean.name,
      process: bean.process,
      processClasses: bean.processClasses,
      notes: bean.notes,
      href: `/bean-database/${bean.slug}`,
    }));
  }, [indexBeans, query]);

  return (
    <>
      <EducationHero
        tag="Education"
        title="Know Your Beans: The Roasting Process"
        description="From the grassy notes of green beans to the deep, caramelized complexity of a dark roast, understand how temperature transforms the soul of your coffee."
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuB8JsrH6DVLopgAknUwUcOUw954LjAShpkgtF47yjjsyVjknhqahEGO-Q3h19TAHSdVLdTTvR8ou0dcZdkeZQc7vISF4ziJ5dW2SneZ4-Z0PKHLgYVBLkSJU7ZIS63EyrGeZ6lPGnzyT2JOd0OonRRHj19tnlW5Os6w5hCbUpCHeyGuBzggpS1WjZ-kT6o1UC0-ejoQK8llgN33H9YiMGjqpj9Y5yJixqHw7XvgB2fPSxqrEArKaHRxYw"
      />

      <SearchFilterBar query={query} onQueryChange={setQuery} />

      <RegionalFavorites
        featured={{
          origin: featured.estate,
          name: featured.bentoName,
          description: featured.bentoDescription,
          roast: featured.roast,
          process: featured.process,
          href: `/bean-database/${featured.slug}`,
        }}
        secondary={secondary.map((bean) => ({
          estate: bean.estate,
          name: bean.bentoName,
          description: bean.bentoDescription,
          href: `/bean-database/${bean.slug}`,
        }))}
      />
      <FlavorNotesGrid notes={flavorNotes} />
      <BeanList beans={visibleBeans} />
    </>
  );
}
