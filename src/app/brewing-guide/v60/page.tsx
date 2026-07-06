import Image from "next/image";
import { GuideHero } from "@/components/brewing/guide-hero";
import { EquipmentChecklist } from "@/components/brewing/equipment-checklist";
import { RecipeCard } from "@/components/brewing/recipe-card";
import { StepTimeline } from "@/components/brewing/step-timeline";
import { TimerFab } from "@/components/brewing/timer-fab";

const equipment = [
  "V60 Dripper",
  "Paper Filter",
  "Gooseneck Kettle",
  "Digital Scale",
  "20g Fresh Coffee",
];

const steps = [
  {
    timeLabel: "0:00 - Bloom",
    title: "Saturate Grounds",
    description:
      "Pour 40g water in a slow spiral starting from the center outward to evenly saturate the grounds. Wait 30 seconds for the coffee to bloom.",
    active: true,
  },
  {
    timeLabel: "0:30 - First Pour",
    title: "Building Volume",
    description:
      "Begin a steady, continuous circular pour, bringing the total weight up to 150g. Keep the water level consistent.",
  },
  {
    timeLabel: "1:15 - Second Pour",
    title: "Final Volume",
    description:
      "Gently pour the remaining water in tight circles until the scale reads 300g. Give the dripper a slight swirl to level the bed.",
  },
  {
    timeLabel: "3:00 - Draw Down",
    title: "Filter Through",
    description:
      "Allow all the water to filter through the coffee bed completely. You should be left with a flat bed of grounds.",
  },
];

export default function V60GuidePage() {
  return (
    <main className="mx-auto max-w-container-max px-margin-mobile pt-8 md:px-margin-desktop md:pt-12">
      <GuideHero
        title="Mastering the V60 Pour-Over"
        image="https://lh3.googleusercontent.com/aida/AP1WRLuw_Ky6-1IWVv5gtg_kvck8W-jec5vvVxxznWsvcGpFoJPI4fZGwCLyRAB-JmXIYczlej3nub9-cwCP4zwv-F3jJWnAGYlIfNjFeHLjrcPyxjVbSXLPUMpS4BzfUGtIFCB0OBX3FplqapRCgymveE1Mn7u1XOlTYpUbELSuY-d3LHhw7XctotddDP6CfTTZUj5-faliipzuNP33HyZn0PmwQI435_vmjY1hjlyAafRkYTRfBXQDlEHZs7cp"
        time="3:30 mins"
        difficulty="Intermediate"
        flavor="Bright & Floral"
      />

      <div className="mb-section-gap grid grid-cols-1 gap-gutter md:grid-cols-12">
        <div className="flex flex-col gap-8 md:col-span-4">
          <EquipmentChecklist items={equipment} />
          <RecipeCard dose="20g Coffee" yieldAmount="300ml Water" ratio="1:15" grind="Medium-Fine" />
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
          <StepTimeline steps={steps} />
        </div>
      </div>

      <TimerFab />
    </main>
  );
}
