import { notFound } from "next/navigation";
import { BeanHero } from "@/components/bean-detail/bean-hero";
import { RadarChart } from "@/components/bean-detail/radar-chart";
import { InfoCard } from "@/components/bean-detail/info-card";
import { PouringNowList } from "@/components/bean-detail/pouring-now-list";
import { SourcedByList } from "@/components/bean-detail/sourced-by-list";
import { beans, getBeanBySlug } from "@/lib/beans";

export function generateStaticParams() {
  return beans
    .filter((bean) => bean.slug !== "baba-budangiri")
    .map((bean) => ({ slug: bean.slug }));
}

export default async function BeanDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const bean = getBeanBySlug(slug);

  if (!bean) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-container-max px-margin-mobile py-8 pb-32 md:px-margin-desktop md:pb-section-gap">
      <BeanHero
        tag={bean.tag}
        name={bean.name}
        description={bean.heroDescription}
        origin={bean.origin}
        altitude={bean.altitude}
        image={bean.image}
      />

      <section className="mb-8 grid grid-cols-1 gap-gutter md:grid-cols-12">
        <div className="rounded-xl border border-tertiary/10 bg-surface-container-lowest p-6 shadow-[0_4px_24px_rgba(62,39,35,0.08)] md:col-span-8">
          <h2 className="mb-4 font-headline-sm text-headline-sm font-semibold text-primary-container">
            Flavor Profile
          </h2>
          <RadarChart axes={bean.flavorAxes} />
          <div className="mt-4 flex flex-wrap justify-center gap-4 font-label-caps text-sm text-on-surface-variant">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full border border-[#3e2723] bg-[#3e2723] opacity-20" />
              Sensory Profile Area
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#3e2723]" />
              Interactive Data Points
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:col-span-4">
          <InfoCard
            icon="water_drop"
            iconClasses="text-sage-leaf"
            title="Process"
            description={bean.process}
          />
          <InfoCard
            icon="local_fire_department"
            iconClasses="text-bean-origin-gold"
            title="Roast"
            description={`${bean.roast} recommended.`}
          />
        </div>
      </section>

      <section className="grid grid-cols-1 gap-gutter md:grid-cols-2">
        <PouringNowList
          spots={bean.pouringSpots.map((spot) => ({
            initials: spot.initials,
            name: spot.name,
            drink: spot.drink,
            cafeHref: `/cafe/${spot.cafeSlug}`,
          }))}
        />
        <SourcedByList roasters={bean.sourcedBy} />
      </section>
    </main>
  );
}
