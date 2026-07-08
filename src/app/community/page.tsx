import { StatusBanner } from "@/components/community/status-banner";
import { LivePulseSection } from "@/components/community/live-pulse-section";
import { EditorialItem } from "@/components/community/editorial-item";
import { ThrowdownRoster } from "@/components/community/throwdown-roster";
import { LiveHeatmapWidget } from "@/components/community/live-heatmap-widget";
import { ActiveContributorsWidget } from "@/components/community/active-contributors-widget";
import { WeeklyPollWidget } from "@/components/community/weekly-poll-widget";
import { Footer } from "@/components/community/footer";

const vibeCards = [
  {
    id: "elena-roastery",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAT1oKd9Dn_6H1pvqGAM7TpgkmLE_-BFR8A5VscTJHBjQaoW2oz225ovaKZ76ey9_dpHu6V-BRMHspgslyEHCZhvMvXYAxsijuZF9ssI_TkkD-9o9t6w_4Pm9g5ICfVEseDC1kXAfVQ-BUa22goqiELnJQ8dAoQpDohbBUd1-8FEcCbJtwC0VvExkd2JYf20Sq_eGhZb39HFE0rT0hGxBdSKeZw41t2qspbQHcc8-d8vJkYfsRwPOF7zQ",
    name: "Elena R.",
    levelLabel: "Level 8 • Chemex Novice",
    cafeName: "Roastery Coffee House",
    cafeSlug: "roastery-coffee-house",
    message: <>The natural light here is incredible right now. Perfect for getting some focused work done. ☀️💻</>,
    tags: [{ label: "Productive Vibe", emphasis: true }, { label: "Laptop Friendly" }],
    metrics: [
      { label: "Noise", icon: "volume_up", filled: 2, filledClasses: "bg-bean-origin-gold" },
      { label: "Seating", icon: "event_seat", filled: 3, filledClasses: "bg-sage-leaf" },
    ],
    likeCount: 24,
    commentCount: 3,
  },
  {
    id: "marcus-perch",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBTXMqB89mX0z2QY5EFOK9jM-Uyr7x-p8gxiPIx5p52x2NvHIl7V1JsyK4wFfBJvVnQbrCJBgq3eOBNLTi-feTxBvQs9MhxOodP3VnIeTHNEyS-YQRSK-WVBx7Uj9vjTeHEF5k6yAw7CNpWzHNIAYs5YdhVUthOSM4P36__ZSdALpqBXmepwKGMwDO_xnQo0UuFGoOH44plJ-wp9H33LXTsJJW8iAJIlLsYYADdR8sJQqshXP_WbaWITg",
    name: "Marcus T.",
    levelLabel: "Level 18 • Roaster",
    cafeName: "Perch Wine & Coffee Bar",
    cafeSlug: "perch-wine-coffee-bar",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDHSSyCjYdjskdIwj2KMobbacA43EoQs5PWpOGB5_eGonL0UEcPOlFdM_50CPBN-vfmMTZ-5q6HPyo9XZIpEHnab2mTWl2q5wVzyggy4oVgqVtoXn2fdGuh5AM4uhEW1CPZKr5kmYZoAuev5FmzQSk-gqM5Ep12I9dH7HLHAQjMaBDdxPF-cMsA7Tq6NIR30-cNJo2aQMBu9tU3n3jNDItq7lAINENxhRd4Iy4Uh71p3tYFWnmqDFuN0Q",
    message: <>Dialing in the new Ethiopian Yirgacheffe. Blueberry notes are popping today.</>,
    tags: [{ label: "Social Vibe", emphasis: true }, { label: "No Laptops" }],
    metrics: [
      { label: "Noise", icon: "volume_up", filled: 3, filledClasses: "bg-bean-origin-gold" },
      { label: "Seating", icon: "event_seat", filled: 1, filledClasses: "bg-sage-leaf" },
    ],
    likeCount: 56,
    commentCount: 12,
  },
];

const editorials = [
  {
    tag: "Location Intel",
    tagClasses: "text-bean-origin-gold",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDjdAtyAb3WotmSPWPshWz85XafTALMOhLbB9cvl8AhbRK22E5wpk8apqI2OLRhcTVqpKvEJzFzfMMirDN1R9LOLSQ5YwLcyip-jgIwX2BLjjSUDjSXTPNdX3bs2pMAjKrJWsQgPzvznFNruzdMunx8tdGkjNez2mMrU6ZS6FdiNnYG1bOepaeBjeBrV8hAo7Gd6UK5ap6MV9-j4sMtqVwjA6L2tXHV5pb6rOwcQ8GRRQf_hK7PfXmb5g",
    title: "Hidden Courtyards: The Best Secret Patios for Summer Sipping",
    description:
      "A curated guide to the most secluded, verdant outdoor seating areas hidden behind the city's best roasters.",
    author: "Sarah L.",
    readTime: "5 min read",
  },
  {
    tag: "Technical Logs",
    tagClasses: "text-sage-leaf",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC-dmzWUbO6V5xdYUS81vaelXPLUbyrxZYOxWlJLs8qDC4u_oD83K826y6gkOtUObKmJPPrIG6cnHndxgrgVTTkqhZ1MGvM-DGvSkeJbNEEqMHBZiwzng2y_40-M75OMAeqtt-Po6EqLYV7v1U4V34qwZDwnqxkoLpVdMW9qROefCzv53CuJpUDNRrmTxtd7y1y9BhkzUDFbp6NEClatJBxzP6sTQQS8qAmVUMV91VaTLV0MvB0nPRZew",
    title: "Burr Alignment: A Practical Guide to Consistency",
    description:
      "Stop blaming your beans. Here is a step-by-step breakdown of how to properly align your flat burrs for zero-retention perfection.",
    author: "David W.",
    readTime: "12 min read",
  },
];

const throwdowns = [
  {
    status: "Tonight • 7:00 PM",
    statusClasses: "text-sage-leaf",
    decorative: true,
    title: "Latte Art Smackdown",
    location: "Prologue Coffee Bar",
    avatars: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAooa1IWGDfnBuqxnrGZzUG-mHgxyz5K3aXQpjL-IDXDTknUHNvdMD7HWFrupFtXF8wXuNDRWDKsQXQeOeWV_N_DK6pVz8bxzUQq2cvAGnH7AEIjTfBI4ZEFEdfvllg_BuiXnMpZT_u9G9y6D49kgAsQJ3_o0ihGICh6ORkO5ao9Sotv8g5TFwravw8xgJPnhJwr_iMrw9qPyJSWmqbpe0gPHoJt-SSe7ob7d6epM1-1hRfQZpc0p7iOQ",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDKh-JprrzhS32k4n6Kqh9LpOU1n7fSDPCrhX_U4reJiQcPL2TqSpTyarH3WfWvEzoVDSD7lla3pLHgL8ldtBYIg_wyHDR21n5pYOmHXkYzAB6Wds02QCJAlX2Rg7q8E0dqDa0WVe9V_fWeOA6o8t-AVFJZdHuXKaN4jwErafZip6sjnHpGDa6nqVkkLoTgqvIO2yS9qAMAPe7zaeBiGyKRLjHaZTk1nyi6MrTW7LgFliGB53uuudfdHg",
    ],
    overflowCount: 8,
    ctaLabel: "RSVP",
  },
  {
    status: "Saturday • 10:00 AM",
    statusClasses: "text-on-tertiary-container",
    title: "Public Cupping: Gesha Varietals",
    location: "The Roastery",
    avatars: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBMs1HPIdKRYJbFTWzbYHLvxhVFLI1cgpd3zfja63SVwqOfz8p2LAHjGGrKByGUSVkwlsppKqTcF2dmXLN7ogjmGA508jFL7Cpd3sNcXzVpQPsKFK2qQTho-9ops9VB1nEPry8X53ibL2MB-BE7P1x71VDF4LaqI2eK18i_BgcfaUbtiB3EqH4imPqwEhWYGNZcZfgxibeK4QSvtTB3DHcEcMgS07wi61gDli_CvzGDsmWc2hCtdjb8GQ",
    ],
    overflowCount: 2,
    ctaLabel: "Waitlist",
  },
];

export default function CommunityPage() {
  return (
    <>
      <main className="mx-auto flex max-w-container-max flex-col gap-section-gap px-margin-mobile py-section-gap md:px-margin-desktop">
        <header className="flex flex-col items-end justify-between gap-6 border-b border-tertiary/10 pb-8 md:flex-row">
          <div>
            <h1 className="mb-2 font-display-lg-mobile text-display-lg-mobile font-bold text-primary md:font-display-lg md:text-display-lg">
              Community Hub
            </h1>
            <p className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
              The pulse of the specialty coffee scene. Connect, explore, and level up your
              brewing journey.
            </p>
          </div>
          <StatusBanner
            streakLabel="14 Day Vibe Streak"
            level={14}
            levelTitle="Barista Pro"
            xp={240}
            xpTarget={500}
            nextLevelLabel="Roaster"
          />
        </header>

        <div className="grid grid-cols-1 gap-gutter lg:grid-cols-12">
          <div className="flex flex-col gap-section-gap lg:col-span-8">
            <LivePulseSection cards={vibeCards} />

            <section>
              <div className="mb-6 flex items-center justify-between border-b border-tertiary/10 pb-4">
                <h2 className="font-headline-md text-headline-md text-primary">
                  Member Editorials
                </h2>
                <a
                  href="#"
                  className="font-label-md text-label-md text-sage-leaf transition-colors hover:text-primary"
                >
                  View All
                </a>
              </div>
              <div className="flex flex-col gap-6">
                {editorials.map((editorial) => (
                  <EditorialItem key={editorial.title} {...editorial} />
                ))}
              </div>
            </section>
          </div>

          <div className="flex flex-col gap-8 lg:col-span-4">
            <LiveHeatmapWidget />
            <ThrowdownRoster throwdowns={throwdowns} />
            <ActiveContributorsWidget />
            <WeeklyPollWidget />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
