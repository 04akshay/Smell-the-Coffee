import { FeaturedEvent } from "@/components/events/featured-event";
import { SessionCard } from "@/components/events/session-card";
import { Icon } from "@/components/icon";

const featured = {
  day: "24",
  month: "Oct",
  title: "The Eastside Throwdown",
  location: "Sightglass Coffee Roasters",
  description:
    "Watch the city's best baristas battle it out in our annual latte art throwdown. Expect high energy, heavy pours, and an exclusive natural process tasting bar.",
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCLLtyK16yUOlPRF3xwD9AJUokyqlQTy0WQn-dzRKcxC9BKthkmjUnl0Za396-ytZ969-I4RjJuiFFJHWE25EIQ77noIk0zIlNWJq9ttwgzkWHoeNwJxtAs_Ibw5TrEMo1NxDmEOBQsREIaIRQmiFf2kz7r8mQSkwEWG2paBaM38QOiHtC0CErlwq9mEAWXnKMoDIs7GtAlEZt--d_R4UMbFoHCBNqAl53DZ12V5I0Kpm-mBwVnGYt9xw",
  attendeeAvatars: [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAua80pTRbI-HEgweziCRRHGQ48zGhzUOXz-Ll5Xrc3nIifAY0Y2wBZkZVfpxQ8PYRvjqWt3YxVItDaXcEvUw0FrLlHsXfvNEfnILyHLFnXfU3WYnDTQ9mlaQlTs8Tgg9UjdmOqfovIVS5wXvOP-b0hHiAJmTQGA26zhQLbUkAZg8PuVhg5EV5vDaSxSZxzZXKYTvd_iTaCMlVGJ6KsNnmB0661dCtqJpE9dZbs3Z6kfFdnkLngzJZw1A",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD-PzXZL6jXs6heczmAo25r501NQmAWnoTOC8UDcOt5IDbkagSWB9FkCH3TyBDE4CN2N7AdlnGcGVRBtuc8vlvVAv4Rv7W-3SxEj5QxScEpk8mY9atT9DiLNSoZdTCYNHDwiHUypRN1_5_eNneuUTZlAQDG03XUHVazX20lLGSh-jH4rDZaBuVYbMYz2SgEZtYJYTdaL_uj7bEuIQlWAi1lD2ehJyb9a3vuoRX1u7cBSTQuorc5tlHeIg",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDxsNuYkSVtrriMDv2cLIts8JkR9konPEWuLW_v9R8curapHREmfamiQpwuXg0kq1tQtRPMl64KohuKhyemVz_LjFxgAh-Q4rh9ho4Rpgz6o4BFl2oVx-Is88XuAfwuoCFQyhRYNq1dIAmeJ_FOyWT6CUoa5gbjQ7JwuqsOcK1jAA97HdKaSX4Q6qsiAJop-bNqh4-R_kdYk412dk53ehU7kCTb2mEwH8kBdKyhzkrZghoBhFh8YfK3zg",
  ],
  attendeeCount: 45,
};

const sessions = [
  {
    day: "28",
    month: "Oct",
    title: "Beginner's Cupping",
    time: "10:00 AM - 12:00 PM",
    description:
      "Learn the sensory basics of tasting coffee like a pro. We'll explore 4 distinct single-origin roasts.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA-NoYxiw_20q6pfPUrmAOdvLs1HcIjHioeI0KTRCMsdrQtHajLCuAbKlvtA9w1q9fUDTbEBEs7Q2Om_a4Lh9U2Tc_doUBsk54UThmy8ew0tET6DrMK2S5k3s2uMP4qP3BD6poDVf7alzZLkzTHncI43TaPxK2pgimqs_tGSbLWN8BZDlQgG1ucff6GYbUS1B4pboZU1H7pmZWF4Ls-at5ZceG6ncshgzDOLIhVTk_64TpYoFd_cT8lrg",
    attendeeAvatars: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDO-aqhAbqe0jEX2NUNNxJCLGEwlfoP_ZlSivD9Sdq-YrsoxLataUHlkSfKIjD37Pet8azffmoYi7RTg8FZm1a2LF2sxOMb5wBQHoeDjjk3-0bWMDvXD1kXl0Sr3012F-Q77sZz4jG4PrUetOarWII06P5RM4LwELJtrYmiMVT9rqg4fQFqxQu3LhqFO7T_wK2bT7RqWaoEaYp-jqeufjV-SIf1BNHdVB21Kj8eSer9myI1YQ7XzTvqew",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA5zHiBMjO8P_tTfidJLSCbSuI741oBKeCAkgXuS-iDKN9N_j5_9r7oQqc-TPEs8eTat4_-bAodM9Qz1KMpSRQ6ImszgGe19d6LHWOIOPTMFl3XlGCseAJ7ALR4Vijg1zcN9WAPy3PxmDjdd6h4xn3J4plTDPuYVZEkPdNbAiQbOZXgHbo6Co-OD_bYEd0Snv4yqixZJ4opiahBy3I2uIaz_VVx2R2da1c6LlboF8MlIRd-54gYxs02DA",
    ],
    attendeeCount: 8,
  },
  {
    day: "02",
    month: "Nov",
    title: "Roaster's Meet & Greet",
    time: "6:30 PM - 9:00 PM",
    description:
      "Chat directly with the head roaster at Verve. Discuss sourcing, profiles, and the future of specialty coffee.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCsdgOcof1zjRc_9NxuCs1iDXGFAAJkVufmGUrbKBWvVs-rdAqKzAo-i9ijC7aFNuNpKgN0y50O4FcCKXLVS6n8GdiN_bR9fT5B7VhQPNCiSvrsgO7PwjqBmBAOUBTgRev1Es8EQJIqfMwQ0ox44peGJuq4i_z2v9n2WJz2fW3x_U9rHXQ_i-5fWHqDu_rFFVi-0TIrhp2rX7ZnHTT-M4-PKlkzKi4Cg118yrDtu21BQ5Xll3WFBA4OzA",
    attendeeAvatars: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDdXa6MerIIHAp0Fp_4be0eCFDVS3YQbT0PVsxOfA7e5crcXL_a56PleofjcaBV9fmM4kAkyCjb_e4GEMTvhatdqmiNerRweefeE0Wl338PcN1gBqGbinZrnMZJRYqxNxG0r0FLb-RZRMMYT7GrKAk0UEg_hGFGGgql6dTbCJj-zjwWgoRSIqy3Q8aEtWOEx3YHfYr3Lpa7bdCZ_qwsX0B4TIsXcpZeNla5WsxjkaTzLpWhnIDBAAiLXg",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDqh-zlUmCcRymaew7N_J7QBpEG6v1GERbPUoEi65_Tr7DjcqsI67bFPoaC-AHexdaG5i2e8l5K_ZAq20vzgWg8Q6GWv7pjaY9xXtp3CPgYaTlSFVyn0O76lJvCKOeWmRjhUgx1wDIdA0Pb6WFhiBGEQdWDeXHe3Ks0OSC0U0vYOqmDy8c-A53Xn0GX9ZzbKRfsduJXeYGDlDOf8amHOQQRh5pAeomPvNpHMo0tCyyuVmFW5PanWg3DZQ",
    ],
    attendeeCount: 21,
  },
];

export default function EventsPage() {
  return (
    <main className="mx-auto max-w-container-max px-margin-mobile pb-16 pt-8 md:px-margin-desktop">
      <header className="mb-gutter">
        <h1 className="font-display-lg text-display-lg-mobile text-roasted-espresso md:text-display-lg">
          Event Roster
        </h1>
      </header>

      <FeaturedEvent {...featured} />

      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-headline-sm text-headline-sm text-roasted-espresso">
          Upcoming Sessions
        </h2>
        <button className="flex h-10 w-10 items-center justify-center rounded-full border border-tertiary/10 bg-cream-foam text-on-surface-variant shadow-sm transition-colors hover:bg-oat-milk">
          <Icon name="filter_list" />
        </button>
      </div>

      <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
        {sessions.map((session) => (
          <SessionCard key={session.title} {...session} />
        ))}
      </div>
    </main>
  );
}
