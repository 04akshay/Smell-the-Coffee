import { notFound } from "next/navigation";
import { CafeHero } from "@/components/cafe/cafe-hero";
import { CafeInsights } from "@/components/cafe/cafe-insights";
import { CafeGallery } from "@/components/cafe/cafe-gallery";
import { CafeLocationPassport } from "@/components/cafe/cafe-location-passport";
import { cafes, getCafeBySlug } from "@/lib/cafes";

export function generateStaticParams() {
  return cafes
    .filter((cafe) => cafe.slug !== "roastery-coffee-house")
    .map((cafe) => ({ slug: cafe.slug }));
}

export default async function CafeDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cafe = getCafeBySlug(slug);

  if (!cafe) {
    notFound();
  }

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
      />
    </main>
  );
}
