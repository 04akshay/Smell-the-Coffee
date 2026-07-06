import { SidebarFilters } from "@/components/finder/sidebar-filters";
import { CafeCard, type DirectoryCafe } from "@/components/finder/cafe-card";

const cafes: DirectoryCafe[] = [
  {
    name: "Roastery Coffee House",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD4c6udrzB1K8JbNS7f6HAYB5TGzQHFT5ai8nCyXrsz0hgPFebRJ19Z0eDmZ_h0RNiBdHXty5BUYvJbYUlV_OD5PqnnkUqhogqNerhlZtooe7PQs9WkKyqCO9NlZ7eU9QbUlTojuftHdGaY3rBK9c3akkVTsQyIOfjgE9dN9gbOH4oSG9NwTu5_DSMJsewLMSYuf2sZNGAE70_A3qEkdUGgV6tca5jcvyyAHBRRnFxcZ_mrSEdIZjogOg",
    rating: 4.8,
    tags: ["Khan Market", "Workspace", "Quiet"],
    brewInfo: "Cranberry Cold Brew, V60",
    seating: "Ample",
    href: "/cafe/roastery-coffee-house",
  },
  {
    name: "Blue Tokai Safdarjung",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDmt3oFq57HzGc0SB7IhXkQVekQTMSMye-LbUVwWr6gOgnDFqOAWLYgHch936xkWrLEzQ5Xvu9TGNv2fyPWMbCeOzHEBW-6prHkLP1yKlRqVEx9nqJEOIvLMo4UCw-SUzV4qE9qTadpyz3tJreKNgV-wm3Q_KiA3-SPMmg48olgCe3pDrN5aK1H6sYrkbsWI4TvLuIrUuPM3RA1sJjsh5p7M1aJP-ImNDgpUMcrjKDZjFeuJlPUtJ9Q7g",
    rating: 4.8,
    tags: ["Safdarjung", "Workspace", "Quiet"],
    brewInfo: "Pour Over, Espresso",
    seating: "Ample",
  },
  {
    name: "Perch Wine & Coffee Bar",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCBH_AEu-TQss26lCMIF0PRgSQMbxRcUEsJZZ9ME-9_Yw2_6w4fCkCfFXdc7vlMyWYzGIMKW_7jOi-UXJN9IsXZJPfmhZZ1EGqjlJX1fq5V3J7bMnc0fpt5esXbNXpQSgnvS5TOWgUvvxzsr2_lPjr_36pqvJ807tiU80j3KXkLu5ApCZsVRVutmvHtXMuZSLjkdlxcMCwxco34mnooW5eLRngiaeFticQdrcDgJfxCFyh70uxnweFr0Q",
    rating: 4.7,
    tags: ["Vasant Vihar", "Date Spot", "Ambient"],
    brewInfo: "Cold Brew, Aeropress",
    seating: "Limited",
  },
  {
    name: "Subko Cacao Mill",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDpVLEdi1jUao4YWO7UZsVi06CBJAihopUIHJXSxvHVyTfWzW3sbMbM_hfC3LbFJd34HafHJRTfY_AWWAB4vW7POn0UIAXU_ZBqbynHvaRJ6FrGxKT9xQE0Z_SuKjhWuQxhLa6gYrEI57ATESgAyilug4i6fMphEFV6Xc_1hR-fYbN4hb4q-XWEYBWswtZOzprjVMi-v0gKzEJtg6jwIUQDy2cjm-h6pG26fSqnf6OboZ0ylBt5lmPczw",
    rating: 4.9,
    tags: ["Hauz Khas", "Social", "Bustling"],
    brewInfo: "Manual Brew, Cacao",
    seating: "Ample",
  },
  {
    name: "Quick Brown Fox",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAt9M02qYAp837YGKVhgt0etC1dYeJy3OkYcTmdxOVb0nqdH_Ol4ZVcILG4xwJwW3c_eNDjbdOZb8flzSZnjHdDcPX0ffvJrVn3AgFw4phQt2kL50i1J8WYHgpj0txxl9fyRodN7D39Lh4wtFFYiVOnp3OWQNjzKbV9QklC2Eq2bff1ccJ0qUOr4QLKS5ZDCwddeovpCe1E-mZJKI3iQU2XfdlceeEcDUEu_58facRN7fcAfSMaXsLJzA",
    rating: 4.6,
    tags: ["Dhan Mill", "Reading Nook", "Quiet"],
    brewInfo: "V60, Batch Brew",
    seating: "Moderate",
  },
  {
    name: "Devan's South Indian",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAz9rdCaS7AtJBO8yJQPIk38uZEzUcqH304bXM251_NW6X9q7koYv1sKkQLWhlfBGHM6hfTyzlsPGgcyquYolOWYZmmarAL6PALlSm3lLjtsJpMFNkYK6BQS5FyauZs8pvry-43lOhtW2DmN5Lq-ymYx0QbXEes1qyKQTut7qemW9plpWRFbwGNNxKRKdBdnKaOEKmcYajjkT3-rY3AKZYDRlXxF-TLvALdvEO0A1Pyqe_1qvgvzYUwxQ",
    rating: 4.8,
    tags: ["Lodhi Colony", "Heritage", "Ambient"],
    brewInfo: "Filter Coffee",
    seating: "Limited",
  },
  {
    name: "The Artful Baker",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDiKCM51nPwO2UXAJIDdn_Qf2GxNGIV8y-OAXj3Vr7i7mMkclQU11tnAt-PzPXCFEgFSK4tVr-aZJtcmZ-IfA5u9CxoRighNuPHktu2yARtcEuJ2-bEgpKaPqDPG-IKWsHUSnoSmrr1b_Rng5oyTejUG_Avpdu1UDc7yBvHitYN54fyAZR7LdaMBVqZo82KK1ntYjDdOFrQwmLPoXMaaP1kr7QYMxZIRYzxfZiZWnoTmN0vPtlYzNxHXA",
    rating: 4.5,
    tags: ["Khan Market", "Bakery", "Bustling"],
    brewInfo: "Espresso, Batch",
    seating: "Moderate",
  },
];

export default function FinderPage() {
  return (
    <main className="mx-auto flex w-full max-w-container-max flex-col gap-12 px-4 pb-16 pt-8 md:flex-row md:px-margin-desktop">
      <SidebarFilters />

      <div className="min-w-0 flex-1">
        <div className="mb-8 flex flex-col justify-between gap-4 border-b border-tertiary/10 pb-4 md:flex-row md:items-end">
          <div>
            <h1 className="mb-1 font-display-lg text-display-lg-mobile text-roasted-espresso md:text-display-lg">
              Cafe Directory
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Showing {cafes.length} Cafes in Delhi
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant">
              Sort By
            </span>
            <select className="cursor-pointer rounded-md border border-outline-variant bg-surface-bright py-1.5 pl-3 pr-8 text-body-md text-roasted-espresso focus:border-roasted-espresso focus:ring-roasted-espresso">
              <option>Newest Added</option>
              <option>Highest Rated</option>
              <option>Closest to Me</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cafes.map((cafe) => (
            <CafeCard key={cafe.name} cafe={cafe} />
          ))}
        </div>
      </div>
    </main>
  );
}
