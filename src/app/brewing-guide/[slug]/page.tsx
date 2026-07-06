import { notFound } from "next/navigation";
import Image from "next/image";
import { GuideHero } from "@/components/brewing/guide-hero";
import { EquipmentChecklist } from "@/components/brewing/equipment-checklist";
import { RecipeCard } from "@/components/brewing/recipe-card";
import { StepTimeline } from "@/components/brewing/step-timeline";
import { TimerFab } from "@/components/brewing/timer-fab";
import { brewGuides, getBrewGuideBySlug } from "@/lib/brewing-guides";

export function generateStaticParams() {
  return brewGuides
    .filter((guide) => guide.slug !== "v60")
    .map((guide) => ({ slug: guide.slug }));
}

export default async function BrewGuideDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getBrewGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-container-max px-margin-mobile pt-8 md:px-margin-desktop md:pt-12">
      <GuideHero
        title={guide.heroTitle}
        image={guide.image}
        time={guide.timeLabel}
        difficulty={guide.difficulty}
        flavor={guide.flavorLabel}
      />

      <div className="mb-section-gap grid grid-cols-1 gap-gutter md:grid-cols-12">
        <div className="flex flex-col gap-8 md:col-span-4">
          <EquipmentChecklist items={guide.equipment} />
          <RecipeCard
            dose={guide.recipe.dose}
            yieldAmount={guide.recipe.yieldAmount}
            ratio={guide.recipe.ratio}
            grind={guide.recipe.grind}
          />
          <div className="relative hidden h-64 w-full md:block">
            <Image
              src={guide.image}
              alt=""
              fill
              sizes="33vw"
              className="object-contain opacity-50 mix-blend-multiply"
            />
          </div>
        </div>

        <div className="md:col-span-8">
          <StepTimeline steps={guide.steps} />
        </div>
      </div>

      <TimerFab />
    </main>
  );
}
