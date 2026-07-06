"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "./icon";

const moods = [
  "Laptop Friendly",
  "Minimalist",
  "Industrial",
  "Pet Friendly",
  "Pour Over Focus",
];

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAukVNuxZ_4L0gvqWrYz0fN77gpYRxagKWWpi9EEYY-574eJpRXbuYlFEV6oMvj_Xqt8fXjaQKPfYQu2JToy2sB2SvpQshcbmx7uFZOlXF9d2N5ubUJLQn7sEDI-xInlemehGrCBSHSuKbaFqYayzD8nwUnn1GzcyCp2bi16QVV97tyJQrGSLc1E66Sipi5wpRcBKzd3ufJ7rQdArQu9lZyXhp2GSd-VUjDw3m03at3euG2H1lztQnqOw";

export function HeroSearch() {
  const [activeMood, setActiveMood] = useState("Laptop Friendly");
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    const search = params.toString();
    router.push(search ? `/finder?${search}` : "/finder");
  }

  return (
    <section className="relative flex min-h-[614px] flex-col items-center justify-center overflow-hidden rounded-xl p-8 text-center">
      <div className="absolute inset-0 z-0">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
        />
        <div className="absolute inset-0 bg-cream-foam/60 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center gap-6">
        <h1 className="font-display-lg-mobile text-display-lg-mobile font-bold tracking-[-0.01em] text-roasted-espresso md:font-display-lg md:text-display-lg md:tracking-[-0.02em]">
          Find Your Perfect Pour
        </h1>
        <p className="max-w-xl font-body-lg text-body-lg text-on-surface-variant">
          Discover specialty cafes tailored to your taste, mood, and workflow
          across the city.
        </p>

        <form
          onSubmit={handleSearch}
          className="mt-4 flex w-full items-center rounded-xl border-b-2 border-transparent bg-oat-milk p-2 shadow-sm transition-colors focus-within:border-sage-leaf"
        >
          <Icon name="search" className="ml-3 mr-2 text-outline" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by coffee type, cafe name, or roaster..."
            className="w-full border-none bg-transparent px-2 py-3 font-body-md text-body-md text-roasted-espresso placeholder:text-outline-variant focus:ring-0"
          />
          <button
            type="submit"
            className="ml-2 rounded-lg bg-roasted-espresso px-6 py-3 font-label-md text-label-md text-cream-foam transition-colors hover:bg-primary-container"
          >
            Find
          </button>
        </form>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <span className="mr-2 self-center font-label-caps text-label-caps font-bold uppercase tracking-[0.05em] text-on-surface-variant">
            Mood:
          </span>
          {moods.map((mood) => (
            <button
              key={mood}
              onClick={() => setActiveMood(mood)}
              className={
                mood === activeMood
                  ? "rounded-full bg-sage-leaf px-4 py-2 font-label-caps text-label-caps font-bold text-cream-foam transition-opacity hover:opacity-90"
                  : "rounded-full border border-tertiary/10 bg-surface-container-high px-4 py-2 font-label-caps text-label-caps font-bold text-on-surface-variant transition-colors hover:bg-surface-variant"
              }
            >
              {mood}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
