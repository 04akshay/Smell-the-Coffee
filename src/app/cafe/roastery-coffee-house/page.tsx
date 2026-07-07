import { CafeHero } from "@/components/cafe/cafe-hero";
import { CafeInsights } from "@/components/cafe/cafe-insights";
import { CafeGallery } from "@/components/cafe/cafe-gallery";
import { CafeLocationPassport } from "@/components/cafe/cafe-location-passport";
import { getCafeBySlug } from "@/lib/cafes";

const cafe = getCafeBySlug("roastery-coffee-house")!;

export default function CafeDetailPage() {
  return (
    <main className="mx-auto max-w-container-max space-y-section-gap px-margin-mobile pb-32 pt-8 md:px-margin-desktop md:pb-24">
      <CafeHero
        region={cafe.region}
        name={cafe.name}
        description={cafe.description}
        image={cafe.image}
        rating={cafe.rating}
      />
      <CafeInsights vibe={cafe.vibe} utility={cafe.utility} coffee={cafe.coffee} />
      <CafeGallery images={cafe.gallery} totalCount={cafe.galleryTotalCount} />
      <CafeLocationPassport
        mapImage={cafe.mapImage}
        address={cafe.address}
        checkInCount={cafe.checkInCount}
        cafeSlug={cafe.slug}
        cafeName={cafe.name}
        neighborhood={cafe.neighborhood}
        badgeName={cafe.badgeName}
      />
    </main>
  );
}
