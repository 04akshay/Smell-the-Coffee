import { HeroSearch } from "@/components/hero-search";
import { TrendingCafes } from "@/components/trending-cafes";

export default function Home() {
  return (
    <main className="noise-bg mx-auto flex max-w-container-max flex-col gap-section-gap px-margin-mobile py-8 md:px-margin-desktop">
      <HeroSearch />
      <TrendingCafes />
    </main>
  );
}
