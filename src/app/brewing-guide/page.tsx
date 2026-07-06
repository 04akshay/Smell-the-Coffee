import { BrewingGuideView } from "@/components/brewing/brewing-guide-view";
import { brewGuides } from "@/lib/brewing-guides";

export default function BrewingGuidePage() {
  return <BrewingGuideView guides={brewGuides} />;
}
