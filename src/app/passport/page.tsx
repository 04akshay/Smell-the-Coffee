import { ProfileHeader } from "@/components/passport/profile-header";
import { TrophyCase } from "@/components/passport/trophy-case";
import { ActiveTrails } from "@/components/passport/active-trails";
import { StatCard } from "@/components/passport/stat-card";
import { FriendBoard } from "@/components/passport/friend-board";
import { RecentActivity } from "@/components/passport/recent-activity";
import { NextStopCard } from "@/components/passport/next-stop-card";

const profile = {
  avatar:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCG0EofOyEJOenFuVB5aqDnKQPaA-6ehffzu4cq-a3mz7FEzLdUH0GukiCzdgZROHZtjay9Jl4ka0BZJa53ctYm6wJD-biRLpxCggsyk2IFLSK3BPNSKMa-SYkFmWflyAUlF8qJmsub88PQxYemmlFrSe-p7A9Ds3sWYSuZj2bEsJ3in_ktnF7LaSYaMDZUVF4qAUNl4oAJP0uL2GXRedP-W4vxKpdu2V6unyqEWEwy26ToCaNMttshmA",
  level: 5,
  name: "Alex Bean",
  handle: "alexb",
  bio: "Remote worker & espresso enthusiast hunting for the perfect pour-over. Usually found near an outlet.",
  stats: [
    { value: "42", label: "CAFES" },
    { value: "128", label: "VIBES" },
    { value: "3k", label: "PTS" },
  ],
  journeyLabel: "Active Journey",
  trailName: "Delhi Coffee Trail",
  visited: 12,
  total: 20,
};

const stamps = [
  {
    label: "10 Cafes Visited",
    icon: "emoji_events",
    iconClasses: "bg-bean-origin-gold/20 text-bean-origin-gold",
    description: "Visited 10 unique specialty cafes.",
  },
  {
    label: "Pour-over Pro",
    icon: "water_drop",
    iconClasses: "bg-sage-leaf/20 text-sage-leaf",
    description: "Ordered 5 different V60 pour-overs.",
  },
  {
    label: "South Delhi Trail",
    icon: "map",
    iconClasses: "bg-primary-fixed-dim/40 text-primary-container",
    description: "Completed all stops in South Delhi.",
  },
  {
    label: "Roaster's Choice",
    icon: "lock",
    iconClasses: "",
    locked: true,
  },
];

const activeTrails = [
  {
    name: "The Eastside Espresso Run",
    completedLabel: "4/5 COMPLETED",
    badgeClasses: "bg-primary-fixed text-on-primary-fixed",
    description: "Discover the finest single-origin pulls east of the river.",
    progress: 80,
    progressLabelClasses: "text-sage-leaf",
    progressBarClasses: "bg-sage-leaf",
  },
  {
    name: "The Hidden Gems",
    completedLabel: "1/4 COMPLETED",
    badgeClasses: "bg-surface-container-low text-on-surface-variant",
    description: "Hole-in-the-wall spots with zero pretense and amazing drip.",
    progress: 25,
    progressLabelClasses: "text-bean-origin-gold",
    progressBarClasses: "bg-bean-origin-gold",
  },
];

const friends = [
  {
    rank: 1,
    initials: "SJ",
    name: "Sarah J.",
    badges: 34,
    avatarClasses: "bg-surface-variant text-on-surface-variant",
    rankBadgeClasses: "bg-bean-origin-gold text-cream-foam",
  },
  {
    rank: 2,
    initials: "YOU",
    name: "You",
    badges: 12,
    isYou: true,
    avatarClasses: "bg-roasted-espresso text-cream-foam",
    rankBadgeClasses: "bg-outline text-cream-foam",
  },
  {
    rank: 3,
    initials: "MK",
    name: "Marcus K.",
    badges: 9,
    avatarClasses: "bg-surface-variant text-on-surface-variant",
    rankBadgeClasses: "bg-tertiary-fixed-dim text-roasted-espresso",
  },
];

const recentActivity = [
  {
    kind: "avatar" as const,
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBi9dESdilY71sOA1JdZDfWr8rINskIjHjlpdY6uH8S6DaCFBtprMa8izYBt90AQaD7F8fWVuBd5R5qUICGjN2dxfakLSLz8z0prSa9_algE4yeB2nEoNYtb-t0TdwJssSxlinSbwhYtivxj0g09kT7RD62v905dCBKg9yrzrkgFeCD_F2T9zVhHOAiZiDLMmt_W_nIhl2l-OWIneiyCFPVsKJMK4tJPDwkrh0RQoR85981lMlhBrhv-A",
    alt: "Sarah",
    actor: "Sarah",
    action: "logged a vibe at",
    link: "Sightglass Coffee",
    timestamp: "2 hours ago",
  },
  {
    kind: "icon" as const,
    icon: "bolt",
    iconClasses: "bg-bean-origin-gold text-on-primary",
    actor: "Dave",
    action: "unlocked the",
    highlight: "Caffeine Fiend badge.",
    timestamp: "5 hours ago",
  },
  {
    kind: "avatar" as const,
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCMRxIsMGplcDRBM3bfPpQIzRy6dBMmnuJ3erS14ycAOf9sdnYgHVqM21BnBL9_h1ErG1gXBn6fHdI7gykT2OfT7CCz1trtsFQXEHp_XVmyYFBFqPKptApX4rPCh7aohv9o7y6L-h6OZBNDu_GjdF3m3CAPee64OsvLIdo08Qkyw2mKSFuvwf0rVuldZpdFQ8VyoZaSZct6Np9pj7vOxgX37Ov9PX-XDcbvsX1CJN4tkXciNdyV0ZMVDg",
    alt: "Jordan",
    actor: "Jordan",
    action: "RSVP'd to",
    link: "Latte Art Throwdown",
    timestamp: "Yesterday",
  },
];

const nextStop = {
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAOFCE9CldwVM5SmjErfZ5_OGaI6z3tAYQiUu4bOzhuMBrNSCOKcTbSUvhtlUzCHU5B6RKjtUOxZmtaQIGeUELQwMIC-gYSMtioxjiZPvieZ2A-ayxKnSqUXp-tXockktDHxDLrUSHzl9zSeu6MvhDPtbABNgEbBy4x0886dLu_rgm8pype2mowKrW_8I1ksVpACXUcEO9s1YFNuucCHgmOJkbuN7SW8HBkt7G3i9kHcjWPB7BEUlfxjw",
  name: "Devan's South Indian Filter",
  description:
    "Based on your love for dark roasts, this heritage roastery in Lodhi Colony is a must-visit.",
  location: "Lodhi Colony",
  href: "/cafe/devans-south-indian",
};

export default function PassportPage() {
  return (
    <main className="mx-auto max-w-container-max px-margin-mobile pb-16 pt-8 md:px-margin-desktop">
      <ProfileHeader {...profile} />

      <div className="grid grid-cols-1 gap-gutter md:grid-cols-12">
        <div className="flex flex-col gap-gutter md:col-span-8">
          <TrophyCase stamps={stamps} />
          <ActiveTrails trails={activeTrails} />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <StatCard label="Favorite Bean" value="Ethiopian Yirgacheffe" />
            <StatCard label="Brew Style" value="Aeropress" />
          </div>
        </div>
        <div className="flex flex-col gap-gutter md:col-span-4">
          <FriendBoard friends={friends} />
          <RecentActivity activity={recentActivity} />
          <NextStopCard {...nextStop} />
        </div>
      </div>
    </main>
  );
}
