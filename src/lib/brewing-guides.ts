export type BrewStep = {
  timeLabel: string;
  title: string;
  description: string;
  targetGrams: number;
  active?: boolean;
};

export type BrewGuideRecord = {
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
  flavorTags: string[];
  difficulty: string;
  time: string;
  timeLabel: string;
  flavorLabel: string;
  heroTitle: string;
  equipment: string[];
  recipe: { dose: string; yieldAmount: string; ratio: string; grind: string; flowNote: string };
  steps: BrewStep[];
};

export const brewGuides: BrewGuideRecord[] = [
  {
    slug: "v60",
    name: "V60",
    category: "Pour Over",
    description:
      "A conical paper filter method that highlights bright, floral notes and clean acidity.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD9yVj9j26spOmAtu-FP35Zmj6D-tNCWmdwp11S7Gy6jwOb_dOnu6E-ql1qwP_wZ08hMx3-0lxqOcV3VXIMrA38hEKynM0zUkBEYxtsLfcRtHylegjj9tD_YUsLlba8xar0rQ0OBbHuvkv6nouFcsSn7998fqwrQvEPqiyVd86MJg1qAciHyMtAAscxaaT3wDbjbC0FbTs0wUmaE_Ls1kn-YskXhQ0Kpq8FAwGlpqpXdb4QEkC4OxJWdw",
    flavorTags: ["Bright", "Clean"],
    difficulty: "Intermediate",
    time: "3:30m",
    timeLabel: "3:30 mins",
    flavorLabel: "Bright & Floral",
    heroTitle: "Mastering the V60 Pour-Over",
    equipment: ["V60 Dripper", "Paper Filter", "Gooseneck Kettle", "Digital Scale", "20g Fresh Coffee"],
    recipe: {
      dose: "20g Coffee",
      yieldAmount: "300ml Water",
      ratio: "1:15",
      grind: "Medium-Fine",
      flowNote: "Slow & steady (approx 5g/sec)",
    },
    steps: [
      {
        timeLabel: "0:00 - Bloom",
        title: "Saturate Grounds",
        description:
          "Pour 40g water in a slow spiral starting from the center outward to evenly saturate the grounds. Wait 30 seconds for the coffee to bloom.",
        targetGrams: 40,
        active: true,
      },
      {
        timeLabel: "0:30 - First Pour",
        title: "Building Volume",
        description:
          "Begin a steady, continuous circular pour, bringing the total weight up to 150g. Keep the water level consistent.",
        targetGrams: 150,
      },
      {
        timeLabel: "1:15 - Second Pour",
        title: "Final Volume",
        description:
          "Gently pour the remaining water in tight circles until the scale reads 300g. Give the dripper a slight swirl to level the bed.",
        targetGrams: 300,
      },
      {
        timeLabel: "3:00 - Draw Down",
        title: "Filter Through",
        description:
          "Allow all the water to filter through the coffee bed completely. You should be left with a flat bed of grounds.",
        targetGrams: 300,
      },
    ],
  },
  {
    slug: "aeropress",
    name: "AeroPress",
    category: "Immersion",
    description:
      "Versatile and forgiving, perfect for a full-bodied, espresso-like shot or a clean, mellow cup.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAsoWw6fvQpdQVYKVNo699k3e6k4Nvy8zS-wxJRz6j8AuVhvuB08lBYrLIfYCh0HZrESeE2zReLLPZ-Vwp0Df9wNGPLOt--2AFe7lgtYTJQgozHYibmHG6owOXUiTEPPELPnY_8OyNX4L_l27tXkidd4nluNimWCnMYqxA4zWSQpeicw3SOm2cAuNaOTLl9cWatl-WoClImAVj1-X4SMQW6gLxsiOP_dHGqWDGwedM2yY8PUETzoc6zSQ",
    flavorTags: ["Versatile", "Full-bodied"],
    difficulty: "Easy",
    time: "2:00m",
    timeLabel: "2:00 mins",
    flavorLabel: "Full-Bodied & Smooth",
    heroTitle: "The Everyday AeroPress",
    equipment: ["AeroPress", "Paper Filter", "Stirring Paddle", "Digital Scale", "17g Fresh Coffee"],
    recipe: {
      dose: "17g Coffee",
      yieldAmount: "220ml Water",
      ratio: "1:13",
      grind: "Medium-Fine",
      flowNote: "Steady pour, then full immersion",
    },
    steps: [
      {
        timeLabel: "0:00 - Bloom",
        title: "Saturate Grounds",
        description:
          "With the AeroPress inverted, add grounds and pour 30g water. Stir gently for 10 seconds and let it bloom for 20 seconds.",
        targetGrams: 30,
        active: true,
      },
      {
        timeLabel: "0:30 - Full Pour",
        title: "Fill to Volume",
        description:
          "Pour the remaining water up to 220g total. Stir for another 10 seconds to make sure all grounds are saturated.",
        targetGrams: 220,
      },
      {
        timeLabel: "1:00 - Steep",
        title: "Attach & Wait",
        description:
          "Wet the paper filter, attach the cap, and let the coffee steep undisturbed for 30 seconds.",
        targetGrams: 220,
      },
      {
        timeLabel: "1:30 - Press",
        title: "Flip & Press",
        description:
          "Flip onto your cup and press slowly and steadily over 30 seconds, stopping as soon as you hear a hiss.",
        targetGrams: 220,
      },
    ],
  },
  {
    slug: "chemex",
    name: "Chemex",
    category: "Pour Over",
    description:
      "Elegant and refined, producing a remarkably clean cup with bright notes and no sediment.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBbg4TL5xqUY76joqXm-w2q-otO7sC5OcnEnaCRe5FG-jLdlMoRB1hxKEBur1NO8vlYUEiXwQMd0nt-zBOP1gqiMVDCyYip_I9nA2k5qc9En-Tne2dnOS9DoL7IL8d10rC3KoxiCS6pTx2OnW1Agzrufoxl1a57drU51AhVsr6PNsP_FOeIduMHxySQGV3sKMf1pHyPwUfRqCfE9saeircRN9TRfTexUq70kkB1qf2qS0kzUIgdXSN2cQ",
    flavorTags: ["Clean", "Elegant"],
    difficulty: "Advanced",
    time: "4:30m",
    timeLabel: "4:30 mins",
    flavorLabel: "Clean & Bright",
    heroTitle: "The Elegant Chemex",
    equipment: ["Chemex", "Chemex Filter", "Gooseneck Kettle", "Digital Scale", "Burr Grinder"],
    recipe: {
      dose: "30g Coffee",
      yieldAmount: "500ml Water",
      ratio: "1:16.7",
      grind: "Medium-Coarse",
      flowNote: "Slow & steady (approx 4g/sec)",
    },
    steps: [
      {
        timeLabel: "0:00 - Bloom",
        title: "Saturate Grounds",
        description:
          "Pour 60g water in a slow spiral to saturate the bed evenly. Wait 45 seconds for the coffee to bloom and degas.",
        targetGrams: 60,
        active: true,
      },
      {
        timeLabel: "0:45 - First Pour",
        title: "Building Volume",
        description:
          "Pour in slow concentric circles, bringing the total weight up to 200g. Avoid pouring directly on the filter.",
        targetGrams: 200,
      },
      {
        timeLabel: "2:00 - Second Pour",
        title: "Continue Building",
        description: "Continue pouring in stages, bringing the total weight up to 350g.",
        targetGrams: 350,
      },
      {
        timeLabel: "3:00 - Final Pour",
        title: "Finish & Drain",
        description:
          "Pour the remaining water up to 500g total, then let the bed drain completely before removing the filter.",
        targetGrams: 500,
      },
    ],
  },
  {
    slug: "french-press",
    name: "French Press",
    category: "Immersion",
    description:
      "A classic immersion method for a rich, full-bodied coffee with heavy mouthfeel.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDIOlFHZJFwFKBsbVyCfVOvlTIImadccP9dEXR1xa63s86YdS0mdGdGV5H3oSOIlTI3YSW77Gvf_V-ZE93vV71C45YL43nMUPUwkuftr2sXHkF5uIAeX8_kpxd7uxKjPZtrGpvjfhWAOFFgWPwhZNHVRZXTHP6vXDkbZBDXIWLSz7VWvGWoqjIOiUqNl4jWhvZVedoaYkcooGGVweMZw-cbNBuMu3ef9I70d99PTZ41-mW9eUubAZXQZA",
    flavorTags: ["Rich", "Full-bodied"],
    difficulty: "Easy",
    time: "4:00m",
    timeLabel: "4:00 mins",
    flavorLabel: "Rich & Heavy",
    heroTitle: "The Classic French Press",
    equipment: ["French Press", "Coarse Grinder", "Digital Scale", "Stirring Spoon", "Timer"],
    recipe: {
      dose: "30g Coffee",
      yieldAmount: "500ml Water",
      ratio: "1:16.7",
      grind: "Coarse",
      flowNote: "Full immersion — no active pour",
    },
    steps: [
      {
        timeLabel: "0:00 - Add & Bloom",
        title: "Saturate Grounds",
        description:
          "Add coarse grounds to the press, then pour all 500g water in one go to fully saturate. Give it one gentle stir.",
        targetGrams: 500,
        active: true,
      },
      {
        timeLabel: "0:30 - Steep",
        title: "Cover & Wait",
        description: "Place the lid on with the plunger pulled up, and let it steep undisturbed for 4 minutes.",
        targetGrams: 500,
      },
      {
        timeLabel: "4:00 - Break the Crust",
        title: "Stir & Skim",
        description:
          "Gently stir the crust of grounds that has formed on top, then skim off any floating foam.",
        targetGrams: 500,
      },
      {
        timeLabel: "4:15 - Press & Serve",
        title: "Plunge Slowly",
        description:
          "Press the plunger down slowly and evenly, then pour immediately to avoid over-extraction.",
        targetGrams: 500,
      },
    ],
  },
];

export function getBrewGuideBySlug(slug: string): BrewGuideRecord | undefined {
  return brewGuides.find((guide) => guide.slug === slug);
}
