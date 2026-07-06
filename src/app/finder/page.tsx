import { Suspense } from "react";
import { FinderView } from "@/components/finder/finder-view";
import { cafes } from "@/lib/cafes";

export default function FinderPage() {
  return (
    <Suspense fallback={null}>
      <FinderView cafes={cafes} />
    </Suspense>
  );
}
