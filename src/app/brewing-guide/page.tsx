import { SearchFilterBar } from "@/components/brewing/search-filter-bar";
import { FeaturedGuide } from "@/components/brewing/featured-guide";
import { GuideCard, type BrewGuide } from "@/components/brewing/guide-card";

const guides: BrewGuide[] = [
  {
    name: "V60",
    category: "Pour Over",
    description:
      "A conical paper filter method that highlights bright, floral notes and clean acidity.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD9yVj9j26spOmAtu-FP35Zmj6D-tNCWmdwp11S7Gy6jwOb_dOnu6E-ql1qwP_wZ08hMx3-0lxqOcV3VXIMrA38hEKynM0zUkBEYxtsLfcRtHylegjj9tD_YUsLlba8xar0rQ0OBbHuvkv6nouFcsSn7998fqwrQvEPqiyVd86MJg1qAciHyMtAAscxaaT3wDbjbC0FbTs0wUmaE_Ls1kn-YskXhQ0Kpq8FAwGlpqpXdb4QEkC4OxJWdw",
    flavorTags: ["Bright", "Clean"],
    difficulty: "Intermediate",
    time: "3:30m",
    href: "/brewing-guide/v60",
  },
  {
    name: "AeroPress",
    category: "Immersion",
    description:
      "Versatile and forgiving, perfect for a full-bodied, espresso-like shot or a clean, mellow cup.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAsoWw6fvQpdQVYKVNo699k3e6k4Nvy8zS-wxJRz6j8AuVhvuB08lBYrLIfYCh0HZrESeE2zReLLPZ-Vwp0Df9wNGPLOt--2AFe7lgtYTJQgozHYibmHG6owOXUiTEPPELPnY_8OyNX4L_l27tXkidd4nluNimWCnMYqxA4zWSQpeicw3SOm2cAuNaOTLl9cWatl-WoClImAVj1-X4SMQW6gLxsiOP_dHGqWDGwedM2yY8PUETzoc6zSQ",
    flavorTags: ["Versatile", "Full-bodied"],
    difficulty: "Easy",
    time: "2:00m",
  },
  {
    name: "Chemex",
    category: "Pour Over",
    description:
      "Elegant and refined, producing a remarkably clean cup with bright notes and no sediment.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBbg4TL5xqUY76joqXm-w2q-otO7sC5OcnEnaCRe5FG-jLdlMoRB1hxKEBur1NO8vlYUEiXwQMd0nt-zBOP1gqiMVDCyYip_I9nA2k5qc9En-Tne2dnOS9DoL7IL8d10rC3KoxiCS6pTx2OnW1Agzrufoxl1a57drU51AhVsr6PNsP_FOeIduMHxySQGV3sKMf1pHyPwUfRqCfE9saeircRN9TRfTexUq70kkB1qf2qS0kzUIgdXSN2cQ",
    flavorTags: ["Clean", "Elegant"],
    difficulty: "Advanced",
    time: "4:30m",
  },
  {
    name: "French Press",
    category: "Immersion",
    description:
      "A classic immersion method for a rich, full-bodied coffee with heavy mouthfeel.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDIOlFHZJFwFKBsbVyCfVOvlTIImadccP9dEXR1xa63s86YdS0mdGdGV5H3oSOIlTI3YSW77Gvf_V-ZE93vV71C45YL43nMUPUwkuftr2sXHkF5uIAeX8_kpxd7uxKjPZtrGpvjfhWAOFFgWPwhZNHVRZXTHP6vXDkbZBDXIWLSz7VWvGWoqjIOiUqNl4jWhvZVedoaYkcooGGVweMZw-cbNBuMu3ef9I70d99PTZ41-mW9eUubAZXQZA",
    flavorTags: ["Rich", "Full-bodied"],
    difficulty: "Easy",
    time: "4:00m",
  },
];

export default function BrewingGuidePage() {
  return (
    <main className="mx-auto max-w-container-max px-margin-mobile py-gutter pb-32 md:px-margin-desktop">
      <header className="mb-gutter">
        <h1 className="mb-base font-display-lg-mobile text-display-lg-mobile font-bold tracking-[-0.01em] text-roasted-espresso md:font-display-lg md:text-display-lg md:tracking-[-0.02em]">
          Brewing Guides
        </h1>
        <p className="mb-gutter max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
          Master the art of extraction. Explore curated methods for every bean
          and mood, from crisp pour-overs to rich immersions.
        </p>
        <SearchFilterBar />
      </header>

      <FeaturedGuide
        tag="Featured Classic"
        title="The Perfect V60 Pour-Over"
        description="Achieve crystalline clarity and vibrant acidity with this fundamental pour-over technique. The cone shape and spiral ribs demand precision, rewarding you with a profoundly clean cup."
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuBX9qxaO0faM2rO_HwhsnwY7XVMXOHavTL8lucDAzSTAj1EAloJ4WI611ZOuSGgOh_yOl1HH-i9E5U2x7rFuGc3oa2zvicodxSPxTxc3t4lWii3863UYvYtSiG7SUfpne-A2AwdzT2R_z4bN_15n5c8YekTpwX_xsQj32wp5eEHtRLNKVDspNspcH3Bb3zKlAnBK3RKGxhn6CJh3WSxJhPa_FCW3S3rF9rwJlxSntC9wRUv-Xmfjw4bbA"
        time="3:30 mins"
        difficulty="Intermediate"
        href="/brewing-guide/v60"
      />

      <div>
        <h3 className="mb-6 font-headline-sm text-headline-sm font-semibold text-roasted-espresso">
          All Methods
        </h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {guides.map((guide) => (
            <GuideCard key={guide.name} guide={guide} />
          ))}
        </div>
      </div>
    </main>
  );
}
