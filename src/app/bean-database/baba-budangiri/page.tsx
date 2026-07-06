import { BeanHero } from "@/components/bean-detail/bean-hero";
import { RadarChart } from "@/components/bean-detail/radar-chart";
import { InfoCard } from "@/components/bean-detail/info-card";
import { PouringNowList } from "@/components/bean-detail/pouring-now-list";
import { SourcedByList } from "@/components/bean-detail/sourced-by-list";

const flavorAxes = [
  { label: "Chocolate", value: 90, description: "Prominent, dark cocoa notes" },
  { label: "Sweetness", value: 75, description: "Balanced, caramel-like" },
  { label: "Body", value: 80, description: "Rich, velvety mouthfeel" },
  { label: "Acidity", value: 40, description: "Mild, subtle citrus hints" },
  { label: "Nutty", value: 60, description: "Subtle roasted almond" },
];

const pouringSpots = [
  { initials: "BB", name: "Blue Tokai, Vasant Vihar", drink: "Espresso & Pour Over" },
  { initials: "QC", name: "Quick Brown Fox, Dhan Mill", drink: "AeroPress Special" },
];

const roasters = [
  { name: "Kapi Kottai", blend: "Curveball Blend" },
  { name: "Savorworks Roasters", blend: "Single Estate Washed" },
];

export default function BabaBudangiriPage() {
  return (
    <main className="mx-auto max-w-container-max px-margin-mobile py-8 pb-32 md:px-margin-desktop md:pb-section-gap">
      <BeanHero
        tag="Single Origin"
        name="Baba Budangiri"
        description="A foundational bean in Indian specialty coffee history, known for its balanced profile and historical significance."
        origin="Chikkamagaluru, India"
        altitude="1200 - 1500m"
        image="https://lh3.googleusercontent.com/aida/AP1WRLtpK5l0NYBZGpWir2vmTZ7nBu1RnaRnDqm4IYoUddWH4xXd3pyeEjGmqFN_PfRsMbY05w8cj-0Cot8Q2olJQtNZLOU_EWTDfwo5TC_Xk5rwOQL6Qj49Q6c44rJY5kcCsprdAOjsC_VHOwML-SirzEFgM0SetEk8wi27tI6ofC5OlcDvWhA6uWy5tj-ww3wqo-jrxiNkEJbIFFJzxsRUvFAWImqYaylxAgRB_2cIyXJ0cRJ841gREVBTW1Ee"
      />

      <section className="mb-8 grid grid-cols-1 gap-gutter md:grid-cols-12">
        <div className="rounded-xl border border-tertiary/10 bg-surface-container-lowest p-6 shadow-[0_4px_24px_rgba(62,39,35,0.08)] md:col-span-8">
          <h2 className="mb-4 font-headline-sm text-headline-sm font-semibold text-primary-container">
            Flavor Profile
          </h2>
          <RadarChart axes={flavorAxes} />
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
            description="Washed / Natural"
          />
          <InfoCard
            icon="local_fire_department"
            iconClasses="text-bean-origin-gold"
            title="Roast"
            description="Medium-Dark recommended for espresso."
          />
        </div>
      </section>

      <section className="grid grid-cols-1 gap-gutter md:grid-cols-2">
        <PouringNowList spots={pouringSpots} />
        <SourcedByList roasters={roasters} />
      </section>
    </main>
  );
}
