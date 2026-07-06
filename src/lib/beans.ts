export type FlavorAxis = { label: string; value: number; description: string };
export type PouringSpot = { cafeSlug: string; name: string; initials: string; drink: string };
export type Roaster = { name: string; blend: string };

export type BeanRecord = {
  slug: string;
  name: string;
  bentoName: string;
  estate: string;
  tag: string;
  region: string;
  process: "Washed" | "Natural" | "Honey" | "Monsooned";
  processClasses: string;
  roast: string;
  origin: string;
  altitude: string;
  bentoDescription: string;
  heroDescription: string;
  notes: string;
  image: string;
  flavorAxes: FlavorAxis[];
  pouringSpots: PouringSpot[];
  sourcedBy: Roaster[];
};

const BABA_BUDANGIRI_IMAGE =
  "https://lh3.googleusercontent.com/aida/AP1WRLtpK5l0NYBZGpWir2vmTZ7nBu1RnaRnDqm4IYoUddWH4xXd3pyeEjGmqFN_PfRsMbY05w8cj-0Cot8Q2olJQtNZLOU_EWTDfwo5TC_Xk5rwOQL6Qj49Q6c44rJY5kcCsprdAOjsC_VHOwML-SirzEFgM0SetEk8wi27tI6ofC5OlcDvWhA6uWy5tj-ww3wqo-jrxiNkEJbIFFJzxsRUvFAWImqYaylxAgRB_2cIyXJ0cRJ841gREVBTW1Ee";

const CAFE_INTERIOR_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDL8YrDz3kzTI0hrUnvHblC2XBWYDPteBYHp81hOlFdqUmGBjGcS4Ln24r_vpmdEVy0G8gfcYPKvA9PpQ9qTgcWTAHYAs1u6iWQ87qwAKUiDdrZj43-4A57_C55D57ZpCymhhhyxREUlimxiYrQtmC_02V3Etec1aj1uFe3UWp__Gi63-M6cCnW4r7D2sUUaPoJ7QkNEvEdnwOK3WwGezxmzlPLAlqvtGoTyCPBBgc_OZY5tO2yapBhyA";

const POUR_OVER_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCb0Hgg_6MVxeFndLET_NKkyhz8cTF7RilX-2TgWqTYQemMCpshJy7lXcyJSh9B8WkDQtPkLB2UU0WNqxMihD7HGF-XO9c-fI9GrSfUa0SwX6eQb7oHv4l6R0MiEdKK86MZHinzyV2_okkvcmrzGfxkiO_DCOBA5KWPAmIzz0gG4S1q2uvMTJum-gcjPl6VmGLpRIsvFArYNpZmVrdcThqL4WwUwLftG1SaOi2wbKl6xOL0GxnG1RpZ3w";

const COLD_BREW_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBQXz3SIWmmPg26hWZ2JSRvUe-wii_s5-xfJuvSDfH0ij3CKoMMONTPZ6bdzj8BI6QseLaWR83edw0mvuDyyWAlnwKG77tbJosMrn24B9CKm5hqSeozBj5KkfsF9XSvf15z8LRD9gkpBTVVCQWRNhB3LlKqm-lAFRtpEzXULA_ZllXLACajl28chqf8h2Wd5RtdD0chCiXPA9VrAnAf7KQboGG7IXvlJw_djLjBtxnyQrJf3BIsVIsJeQ";

export const beans: BeanRecord[] = [
  {
    slug: "baba-budangiri",
    name: "Baba Budangiri",
    bentoName: "Monsoon Malabar AA",
    estate: "Baba Budangiri",
    tag: "Single Origin",
    region: "Chikkamagaluru, Karnataka",
    process: "Natural",
    processClasses: "bg-oat-milk text-roasted-espresso",
    roast: "Medium-Dark",
    origin: "Chikkamagaluru, India",
    altitude: "1200 - 1500m",
    bentoDescription:
      "Exposed to monsoon winds, resulting in a distinctively mellow, earthy flavor with practically no acidity.",
    heroDescription:
      "A foundational bean in Indian specialty coffee history, known for its balanced profile and historical significance.",
    notes: "Chocolate, Caramel, Mild Nutty",
    image: BABA_BUDANGIRI_IMAGE,
    flavorAxes: [
      { label: "Chocolate", value: 90, description: "Prominent, dark cocoa notes" },
      { label: "Sweetness", value: 75, description: "Balanced, caramel-like" },
      { label: "Body", value: 80, description: "Rich, velvety mouthfeel" },
      { label: "Acidity", value: 40, description: "Mild, subtle citrus hints" },
      { label: "Nutty", value: 60, description: "Subtle roasted almond" },
    ],
    pouringSpots: [
      { cafeSlug: "blue-tokai-safdarjung", name: "Blue Tokai, Safdarjung", initials: "BT", drink: "Espresso & Pour Over" },
      { cafeSlug: "quick-brown-fox", name: "Quick Brown Fox, Dhan Mill", initials: "QC", drink: "AeroPress Special" },
    ],
    sourcedBy: [
      { name: "Kapi Kottai", blend: "Curveball Blend" },
      { name: "Savorworks Roasters", blend: "Single Estate Washed" },
    ],
  },
  {
    slug: "biligiri-hills-washed",
    name: "Biligiri Hills Washed",
    bentoName: "Biligiri Hills Washed",
    estate: "Attikan Estate",
    tag: "Single Origin",
    region: "Biligiri Hills, Karnataka",
    process: "Washed",
    processClasses: "bg-secondary-container text-on-secondary-container",
    roast: "Light-Medium",
    origin: "Biligiri Hills, Karnataka",
    altitude: "1400 - 1700m",
    bentoDescription: "Bright acidity with notes of citrus and chocolate.",
    heroDescription:
      "Grown in the shade of the Biligiri Ranganatha hills, this washed lot is prized for a clean cup and a citrus-forward brightness rare in South Indian coffee.",
    notes: "Citrus, Chocolate, Bright Acidity",
    image: POUR_OVER_IMAGE,
    flavorAxes: [
      { label: "Chocolate", value: 55, description: "Light milk chocolate finish" },
      { label: "Sweetness", value: 60, description: "Delicate, citrus-tinged sweetness" },
      { label: "Body", value: 50, description: "Tea-like, clean body" },
      { label: "Acidity", value: 85, description: "Bright, citric acidity" },
      { label: "Nutty", value: 35, description: "Faint hazelnut undertone" },
    ],
    pouringSpots: [
      { cafeSlug: "roastery-coffee-house", name: "Roastery Coffee House, Khan Market", initials: "RC", drink: "V60 Pour-over" },
      { cafeSlug: "perch-wine-coffee-bar", name: "Perch Wine & Coffee Bar, Vasant Vihar", initials: "PW", drink: "Aeropress Flight" },
    ],
    sourcedBy: [
      { name: "Northgate Roasters", blend: "Single Estate Washed" },
      { name: "Old World Coffee Co.", blend: "Bright Cup Series" },
    ],
  },
  {
    slug: "kents-honey-process",
    name: "Kents Honey Process",
    bentoName: "Kents Honey Process",
    estate: "Coorg",
    tag: "Single Origin",
    region: "Coorg, Karnataka",
    process: "Honey",
    processClasses: "bg-surface-dim text-on-surface-variant",
    roast: "Medium",
    origin: "Coorg, Karnataka",
    altitude: "1000 - 1300m",
    bentoDescription: "Sweet, lingering finish with hints of stone fruit.",
    heroDescription:
      "Kent varietal cherries left to dry with their mucilage intact, giving this Coorg lot a syrupy sweetness and a long stone-fruit finish.",
    notes: "Stone Fruit, Honey, Long Finish",
    image: COLD_BREW_IMAGE,
    flavorAxes: [
      { label: "Chocolate", value: 45, description: "Light cocoa undertone" },
      { label: "Sweetness", value: 90, description: "Syrupy, honey-like sweetness" },
      { label: "Body", value: 65, description: "Medium, rounded body" },
      { label: "Acidity", value: 50, description: "Soft, stone-fruit acidity" },
      { label: "Nutty", value: 40, description: "Light walnut note" },
    ],
    pouringSpots: [
      { cafeSlug: "subko-cacao-mill", name: "Subko Cacao Mill, Hauz Khas", initials: "SM", drink: "Manual Brew Bar" },
      { cafeSlug: "the-artful-baker", name: "The Artful Baker, Khan Market", initials: "AB", drink: "Batch Brew" },
    ],
    sourcedBy: [
      { name: "Third Coast Roasting", blend: "Honey Lot Reserve" },
      { name: "Kapi Kottai", blend: "Seasonal Honey Series" },
    ],
  },
  {
    slug: "andhra-pradesh-organic",
    name: "Andhra Pradesh Organic",
    bentoName: "Andhra Pradesh Organic",
    estate: "Araku Valley",
    tag: "Single Origin",
    region: "Araku Valley, Andhra Pradesh",
    process: "Natural",
    processClasses: "bg-oat-milk text-roasted-espresso",
    roast: "Medium-Dark",
    origin: "Araku Valley, Andhra Pradesh",
    altitude: "900 - 1100m",
    bentoDescription: "High altitude, organic, with flavor notes of chocolate and spice.",
    heroDescription:
      "Grown by tribal cooperatives in the Araku Valley without synthetic inputs, this organic-certified lot leans into deep chocolate and warm spice.",
    notes: "Chocolate, Spice, Earthy",
    image: CAFE_INTERIOR_IMAGE,
    flavorAxes: [
      { label: "Chocolate", value: 80, description: "Deep, bittersweet cocoa" },
      { label: "Sweetness", value: 55, description: "Molasses-like sweetness" },
      { label: "Body", value: 75, description: "Full, syrupy body" },
      { label: "Acidity", value: 35, description: "Low, rounded acidity" },
      { label: "Nutty", value: 65, description: "Roasted almond and clove" },
    ],
    pouringSpots: [
      { cafeSlug: "devans-south-indian", name: "Devan's South Indian, Lodhi Colony", initials: "DS", drink: "Dabara Filter Coffee" },
      { cafeSlug: "roastery-coffee-house", name: "Roastery Coffee House, Khan Market", initials: "RC", drink: "Estate Blend Filter" },
    ],
    sourcedBy: [
      { name: "Hillcrest Roasters", blend: "Organic Estate Direct" },
      { name: "Savorworks Roasters", blend: "Tribal Cooperative Lot" },
    ],
  },
  {
    slug: "monsooned-malabar",
    name: "Monsooned Malabar",
    bentoName: "Monsooned Malabar",
    estate: "Karnataka",
    tag: "Single Origin",
    region: "Malabar Coast, Karnataka",
    process: "Monsooned",
    processClasses: "bg-secondary-container text-on-secondary-container",
    roast: "Dark",
    origin: "Malabar Coast, Karnataka",
    altitude: "Sea Level - 300m",
    bentoDescription: "Unique process, heavy body, spicy and earthy notes.",
    heroDescription:
      "Warehoused on the Malabar coast and exposed to monsoon humidity for months, this process swells the beans into a heavy-bodied, low-acid cup with an unmistakable earthy spice.",
    notes: "Spice, Earthy, Heavy Body",
    image: COLD_BREW_IMAGE,
    flavorAxes: [
      { label: "Chocolate", value: 60, description: "Dark, smoky cocoa" },
      { label: "Sweetness", value: 40, description: "Muted, savory sweetness" },
      { label: "Body", value: 95, description: "Heavy, syrupy body" },
      { label: "Acidity", value: 15, description: "Almost no acidity" },
      { label: "Nutty", value: 70, description: "Spiced, earthy nuttiness" },
    ],
    pouringSpots: [
      { cafeSlug: "blue-tokai-safdarjung", name: "Blue Tokai, Safdarjung", initials: "BT", drink: "Espresso Tonic" },
      { cafeSlug: "subko-cacao-mill", name: "Subko Cacao Mill, Hauz Khas", initials: "SM", drink: "Cacao Nib Cortado" },
    ],
    sourcedBy: [
      { name: "Old World Coffee Co.", blend: "Monsoon Reserve" },
      { name: "Mira Roasting House", blend: "Coastal Warehouse Lot" },
    ],
  },
  {
    slug: "nilgiri-hills",
    name: "Nilgiri Hills",
    bentoName: "Nilgiri Hills",
    estate: "Tamil Nadu",
    tag: "Single Origin",
    region: "Nilgiri Hills, Tamil Nadu",
    process: "Washed",
    processClasses: "bg-oat-milk text-roasted-espresso",
    roast: "Medium",
    origin: "Nilgiri Hills, Tamil Nadu",
    altitude: "1800 - 2100m",
    bentoDescription: "Creamy body, subtle citrus acidity, and nutty finish.",
    heroDescription:
      "High-grown in the Blue Mountains, this washed lot has the cool-climate clarity you'd expect at altitude, with a creamy body that keeps it from tipping too bright.",
    notes: "Creamy, Citrus, Nutty Finish",
    image: POUR_OVER_IMAGE,
    flavorAxes: [
      { label: "Chocolate", value: 50, description: "Mild milk chocolate" },
      { label: "Sweetness", value: 65, description: "Rounded, creamy sweetness" },
      { label: "Body", value: 70, description: "Creamy, full mouthfeel" },
      { label: "Acidity", value: 55, description: "Subtle citrus brightness" },
      { label: "Nutty", value: 75, description: "Toasted hazelnut finish" },
    ],
    pouringSpots: [
      { cafeSlug: "quick-brown-fox", name: "Quick Brown Fox, Dhan Mill", initials: "QC", drink: "V60 Flight" },
      { cafeSlug: "roastery-coffee-house", name: "Roastery Coffee House, Khan Market", initials: "RC", drink: "V60 Pour-over" },
    ],
    sourcedBy: [
      { name: "Hillcrest Roasters", blend: "Blue Mountain Lot" },
      { name: "Third Coast Roasting", blend: "High Grown Reserve" },
    ],
  },
  {
    slug: "ethiopia-yirgacheffe",
    name: "Ethiopia Yirgacheffe",
    bentoName: "Ethiopia Yirgacheffe",
    estate: "Global Guest",
    tag: "Guest Origin",
    region: "Yirgacheffe, Ethiopia",
    process: "Washed",
    processClasses: "bg-surface-dim text-on-surface-variant",
    roast: "Light",
    origin: "Yirgacheffe, Ethiopia",
    altitude: "1900 - 2200m",
    bentoDescription: "Floral, citrusy, and tea-like profile.",
    heroDescription:
      "A guest-origin lot from the birthplace of coffee — the archetypal Yirgacheffe cup, all jasmine, bergamot, and a delicate tea-like body.",
    notes: "Jasmine, Bergamot, Tea-Like",
    image: CAFE_INTERIOR_IMAGE,
    flavorAxes: [
      { label: "Chocolate", value: 25, description: "Barely-there cocoa" },
      { label: "Sweetness", value: 60, description: "Delicate floral sweetness" },
      { label: "Body", value: 35, description: "Light, tea-like body" },
      { label: "Acidity", value: 90, description: "Vibrant, citric acidity" },
      { label: "Nutty", value: 20, description: "Minimal nuttiness" },
    ],
    pouringSpots: [
      { cafeSlug: "perch-wine-coffee-bar", name: "Perch Wine & Coffee Bar, Vasant Vihar", initials: "PW", drink: "Orange Blossom Cold Brew" },
      { cafeSlug: "subko-cacao-mill", name: "Subko Cacao Mill, Hauz Khas", initials: "SM", drink: "Manual Brew Bar" },
    ],
    sourcedBy: [
      { name: "Mira Roasting House", blend: "Guest Origin Series" },
      { name: "Northgate Roasters", blend: "Yirgacheffe Washed Lot" },
    ],
  },
  {
    slug: "kalledevarapura-estate",
    name: "Kalledevarapura Estate Pulp Sun Dried",
    bentoName: "Kalledevarapura Estate Pulp Sun Dried",
    estate: "Kalledevarapura Estate",
    tag: "Single Estate",
    region: "Chikkamagaluru, Karnataka",
    process: "Washed",
    processClasses: "bg-secondary-container text-on-secondary-container",
    roast: "Medium",
    origin: "Chikkamagaluru, Karnataka",
    altitude: "1100 - 1400m",
    bentoDescription: "Pulp sun-dried lot with a clean, dessert-like sweetness.",
    heroDescription:
      "Pulped, then dried directly in the sun rather than washed clean — a hybrid process that keeps this estate lot's cup clean while adding a dessert-like sweetness.",
    notes: "Milk Chocolate, Vanilla, Citrus",
    image: POUR_OVER_IMAGE,
    flavorAxes: [
      { label: "Chocolate", value: 70, description: "Milk chocolate sweetness" },
      { label: "Sweetness", value: 75, description: "Vanilla, dessert-like" },
      { label: "Body", value: 60, description: "Balanced, medium body" },
      { label: "Acidity", value: 55, description: "Gentle citrus lift" },
      { label: "Nutty", value: 45, description: "Light almond note" },
    ],
    pouringSpots: [
      { cafeSlug: "roastery-coffee-house", name: "Roastery Coffee House, Khan Market", initials: "RC", drink: "Cranberry Cold Brew" },
      { cafeSlug: "the-artful-baker", name: "The Artful Baker, Khan Market", initials: "AB", drink: "Espresso Pairing" },
    ],
    sourcedBy: [
      { name: "Savorworks Roasters", blend: "Estate Direct Washed" },
      { name: "Kapi Kottai", blend: "Pulp Sun Dried Lot" },
    ],
  },
  {
    slug: "gungegiri-estate-arabica",
    name: "Gungegiri Estate Arabica",
    bentoName: "Gungegiri Estate Arabica",
    estate: "Gungegiri Estate",
    tag: "Single Estate",
    region: "Chikkamagaluru, Karnataka",
    process: "Natural",
    processClasses: "bg-oat-milk text-roasted-espresso",
    roast: "Dark",
    origin: "Chikkamagaluru, Karnataka",
    altitude: "1300 - 1600m",
    bentoDescription: "Natural process arabica with jammy, boozy fruit notes.",
    heroDescription:
      "Dried whole on raised beds until the fruit turns nearly to raisin, this natural-process arabica leans into jammy blackberry and dark chocolate depth.",
    notes: "Blackberry, Dark Chocolate, Molasses",
    image: COLD_BREW_IMAGE,
    flavorAxes: [
      { label: "Chocolate", value: 85, description: "Dark, molasses-tinged cocoa" },
      { label: "Sweetness", value: 80, description: "Jammy, fruit-forward sweetness" },
      { label: "Body", value: 85, description: "Heavy, syrupy body" },
      { label: "Acidity", value: 30, description: "Low, fermented-fruit acidity" },
      { label: "Nutty", value: 50, description: "Roasted walnut undertone" },
    ],
    pouringSpots: [
      { cafeSlug: "subko-cacao-mill", name: "Subko Cacao Mill, Hauz Khas", initials: "SM", drink: "Cacao Nib Cortado" },
      { cafeSlug: "devans-south-indian", name: "Devan's South Indian, Lodhi Colony", initials: "DS", drink: "Degree Coffee" },
    ],
    sourcedBy: [
      { name: "Third Coast Roasting", blend: "Natural Estate Lot" },
      { name: "Old World Coffee Co.", blend: "Raisined Arabica Series" },
    ],
  },
  {
    slug: "ratnagiri-estate-peaberry",
    name: "Ratnagiri Estate Peaberry",
    bentoName: "Ratnagiri Estate Peaberry",
    estate: "Ratnagiri Estate",
    tag: "Peaberry",
    region: "Ratnagiri, Maharashtra",
    process: "Honey",
    processClasses: "bg-surface-dim text-on-surface-variant",
    roast: "Medium",
    origin: "Ratnagiri, Maharashtra",
    altitude: "600 - 900m",
    bentoDescription: "Peaberry lot with a bright, almond-toned sweetness.",
    heroDescription:
      "A rare peaberry sort from Maharashtra's coastal hills — small, dense, single-seeded cherries that concentrate sweetness into a caramel-and-almond cup.",
    notes: "Caramel, Green Apple, Almond",
    image: CAFE_INTERIOR_IMAGE,
    flavorAxes: [
      { label: "Chocolate", value: 50, description: "Light caramelized cocoa" },
      { label: "Sweetness", value: 80, description: "Caramel, honeyed sweetness" },
      { label: "Body", value: 55, description: "Rounded, medium body" },
      { label: "Acidity", value: 60, description: "Crisp green apple acidity" },
      { label: "Nutty", value: 70, description: "Roasted almond finish" },
    ],
    pouringSpots: [
      { cafeSlug: "quick-brown-fox", name: "Quick Brown Fox, Dhan Mill", initials: "QC", drink: "Batch Brew" },
      { cafeSlug: "perch-wine-coffee-bar", name: "Perch Wine & Coffee Bar, Vasant Vihar", initials: "PW", drink: "Aeropress Flight" },
    ],
    sourcedBy: [
      { name: "Mira Roasting House", blend: "Peaberry Reserve" },
      { name: "Hillcrest Roasters", blend: "Coastal Peaberry Lot" },
    ],
  },
];

export function getBeanBySlug(slug: string): BeanRecord | undefined {
  return beans.find((bean) => bean.slug === slug);
}
