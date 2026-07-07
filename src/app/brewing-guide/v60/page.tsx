import Image from "next/image";
import { GuideHero } from "@/components/brewing/guide-hero";
import { EquipmentChecklist } from "@/components/brewing/equipment-checklist";
import { RecipeCard } from "@/components/brewing/recipe-card";
import { BrewTimerLauncher } from "@/components/brewing/brew-timer-launcher";
import { getBrewGuideBySlug } from "@/lib/brewing-guides";

const guide = getBrewGuideBySlug("v60")!;

export default function V60GuidePage() {
  return (
    <main className="mx-auto max-w-container-max px-margin-mobile pt-8 md:px-margin-desktop md:pt-12">
      <GuideHero
        title={guide.heroTitle}
        image="https://lh3.googleusercontent.com/aida/AP1WRLuw_Ky6-1IWVv5gtg_kvck8W-jec5vvVxxznWsvcGpFoJPI4fZGwCLyRAB-JmXIYczlej3nub9-cwCP4zwv-F3jJWnAGYlIfNjFeHLjrcPyxjVbSXLPUMpS4BzfUGtIFCB0OBX3FplqapRCgymveE1Mn7u1XOlTYpUbELSuY-d3LHhw7XctotddDP6CfTTZUj5-faliipzuNP33HyZn0PmwQI435_vmjY1hjlyAafRkYTRfBXQDlEHZs7cp"
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
              src="https://lh3.googleusercontent.com/aida/AP1WRLvXS4DfWuIldjYtfAqwxlQMgAfiiVsC-4pACmUOmRQk_uXtWfk6usNJBsrSq_xnpXPXkf95F7MiVH_R6hLSWI0PYm7XahUesNbf7fgg6oBnjgpsQOkJc9YW4Ta_YYJNXoJMj2dlNY4EKDRdim9gOT-U3fGCbtFhIZtNaXsJlRR9Rm1FdNW2UEgsYDsDEuNy3vnXysHwqNGtLShntzH54mTg-_qj6Re_jI3WeH1xMWJbJkDetNrDI-f7efsJ"
              alt=""
              fill
              sizes="33vw"
              className="object-contain opacity-50 mix-blend-multiply"
            />
          </div>
        </div>

        <div className="md:col-span-8">
          <BrewTimerLauncher guide={guide} />
        </div>
      </div>
    </main>
  );
}
