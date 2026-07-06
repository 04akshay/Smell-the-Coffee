import { FilterBar } from "@/components/finder/filter-bar";
import { CafeListCard, type CafeListing } from "@/components/finder/cafe-list-card";
import { FinderMap } from "@/components/finder/finder-map";

const cafes: CafeListing[] = [
  {
    name: "The Catalyst Roasters",
    distance: "0.8 mi",
    rating: 4.9,
    description:
      "Precision brewing meets calm workspace. Featuring single-origin Ethiopian and Colombian beans.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBipxpXXc4Oft0IzdFSSGpSuB5R5r3YZMaSGEvhmMzJSvauSkgpdkUmfvBaIF5LUtsCzMGx0RiKz6Vw1HMbiTh3qWoc0X2Gdh9jCIBiGWnTGK2YcrNXKRqyHEN_cyrfsonfBB2yjVx3jbm_PLf_PiHQ6xbkbSLL76T0Y9ec8efzEXlGJiJvosewOUsHFIVZFrwIiL9dwE7OMAhrKriY0SAVgi9z6Y65yJ4WBDOwObEl7G6ZHhJjWl898A",
    brewMethods: [
      { icon: "water_drop", label: "V60" },
      { icon: "science", label: "Siphon" },
    ],
    tags: [
      { label: "Laptop Friendly", emphasis: true },
      { label: "Minimalist" },
      { label: "Quiet" },
    ],
  },
  {
    name: "Midnight Brew Co.",
    distance: "1.2 mi",
    rating: 4.7,
    description:
      "Atmospheric destination focusing on slow bar methods and rare seasonal micro-lots.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBBV74cns61b-xH903OXXkX9IrySQbqA-B8HexGEMR4tmEtrgcTp3oHcmH4gGOtst0G61aVrppp6f9BlJ7oyY4iSTY7rNDUfe-TwlntYnaEwEhkP7JS48oTdQEA4yUI_z39XSBacLf2bO2vcTzjbTE0cVEGD0Hc5xOMq-d0n7hLqwMuIgQ-7NtY6jS019HsUk9X5H2bZLBSRAGeS4UGfK8l9jk8NeWmEOzGY2lPeOF5gJtmiv03reQ-pA",
    brewMethods: [
      { icon: "coffee_maker", label: "Phin" },
      { icon: "ac_unit", label: "Cold Brew" },
    ],
    tags: [
      { label: "Date Spot", emphasis: true },
      { label: "Moody" },
      { label: "Lively" },
    ],
  },
];

export default function FinderPage() {
  return (
    <main className="flex h-[calc(100vh-4rem)] flex-col overflow-hidden md:h-[calc(100vh-5rem)] md:flex-row">
      <section className="relative z-10 flex w-full shrink-0 flex-col overflow-hidden border-r border-tertiary/10 bg-cream-foam shadow-[4px_0_24px_rgba(62,39,35,0.03)] md:w-1/2 lg:w-5/12 xl:w-1/3">
        <FilterBar resultCount={42} />
        <div className="flex-1 space-y-6 overflow-y-auto p-gutter pb-32 md:pb-gutter">
          {cafes.map((cafe) => (
            <CafeListCard key={cafe.name} cafe={cafe} />
          ))}
        </div>
      </section>

      <FinderMap markerLabel={cafes[0].name} />
    </main>
  );
}
