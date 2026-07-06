import { EducationHero } from "@/components/bean-database/education-hero";
import { SearchFilterBar } from "@/components/bean-database/search-filter-bar";
import { RegionalFavorites } from "@/components/bean-database/regional-favorites";
import { FlavorNotesGrid } from "@/components/bean-database/flavor-notes-grid";
import { BeanList } from "@/components/bean-database/bean-list";

const featuredBean = {
  origin: "Baba Budangiri",
  name: "Monsoon Malabar AA",
  description:
    "Exposed to monsoon winds, resulting in a distinctively mellow, earthy flavor with practically no acidity.",
  roast: "Medium-Dark",
  process: "Natural",
  href: "/bean-database/baba-budangiri",
};

const secondaryBeans = [
  {
    estate: "Attikan Estate",
    name: "Biligiri Hills Washed",
    description: "Bright acidity with notes of citrus and chocolate.",
  },
  {
    estate: "Coorg",
    name: "Kents Honey Process",
    description: "Sweet, lingering finish with hints of stone fruit.",
  },
  {
    estate: "Araku Valley",
    name: "Andhra Pradesh Organic",
    description: "High altitude, organic, with flavor notes of chocolate and spice.",
  },
  {
    estate: "Karnataka",
    name: "Monsooned Malabar",
    description: "Unique process, heavy body, spicy and earthy notes.",
  },
  {
    estate: "Tamil Nadu",
    name: "Nilgiri Hills",
    description: "Creamy body, subtle citrus acidity, and nutty finish.",
  },
  {
    estate: "Global Guest",
    name: "Ethiopia Yirgacheffe",
    description: "Floral, citrusy, and tea-like profile.",
  },
];

const flavorNotes = [
  { label: "Acidity & Citrus", description: "Bright, zesty, lively", quadrant: "top-left" as const },
  { label: "Sweetness & Cocoa", description: "Chocolate, caramel, honey", quadrant: "top-right" as const },
  { label: "Floral & Delicate", description: "Jasmine, rose, tea-like", quadrant: "bottom-left" as const },
  { label: "Nutty & Earthy", description: "Hazelnut, almond, spice", quadrant: "bottom-right" as const },
];

const beanList = [
  {
    name: "Kalledevarapura Estate Pulp Sun Dried",
    process: "Washed",
    processClasses: "bg-secondary-container text-on-secondary-container",
    notes: "Milk Chocolate, Vanilla, Citrus",
  },
  {
    name: "Gungegiri Estate Arabica",
    process: "Natural",
    processClasses: "bg-oat-milk text-roasted-espresso",
    notes: "Blackberry, Dark Chocolate, Molasses",
  },
  {
    name: "Ratnagiri Estate Peaberry",
    process: "Honey",
    processClasses: "bg-surface-dim text-on-surface-variant",
    notes: "Caramel, Green Apple, Almond",
  },
];

export default function BeanDatabasePage() {
  return (
    <main className="mx-auto max-w-container-max px-margin-mobile pt-margin-desktop md:px-margin-desktop">
      <header className="mb-gutter">
        <h1 className="mb-2 font-display-lg-mobile text-display-lg-mobile font-bold text-roasted-espresso md:font-display-lg md:text-display-lg">
          Bean Database
        </h1>
        <p className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
          Explore the heritage and flavor of your favorite beans.
        </p>
      </header>

      <EducationHero
        tag="Education"
        title="Know Your Beans: The Roasting Process"
        description="From the grassy notes of green beans to the deep, caramelized complexity of a dark roast, understand how temperature transforms the soul of your coffee."
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuB8JsrH6DVLopgAknUwUcOUw954LjAShpkgtF47yjjsyVjknhqahEGO-Q3h19TAHSdVLdTTvR8ou0dcZdkeZQc7vISF4ziJ5dW2SneZ4-Z0PKHLgYVBLkSJU7ZIS63EyrGeZ6lPGnzyT2JOd0OonRRHj19tnlW5Os6w5hCbUpCHeyGuBzggpS1WjZ-kT6o1UC0-ejoQK8llgN33H9YiMGjqpj9Y5yJixqHw7XvgB2fPSxqrEArKaHRxYw"
      />

      <SearchFilterBar />

      <RegionalFavorites featured={featuredBean} secondary={secondaryBeans} />
      <FlavorNotesGrid notes={flavorNotes} />
      <BeanList beans={beanList} />
    </main>
  );
}
