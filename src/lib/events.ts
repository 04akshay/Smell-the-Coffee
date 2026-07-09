export type EventRecord = {
  id: string;
  day: string;
  month: string;
  isoStart: string;
  isoEnd: string;
  title: string;
  category: string;
  levelTag?: string;
  location: string;
  timeLabel: string;
  description: string;
  image: string;
  attendeeAvatars: string[];
  attendeeCount: number;
  defaultStatus?: "attending" | "waitlisted";
  capacityFull?: boolean;
};

export type HostedEvent = {
  id: string;
  title: string;
  category: string;
  dateLabel: string;
  location: string;
  attendeeCount: number;
  capacity: number;
  image: string;
};

export const featuredEvent: EventRecord = {
  id: "eastside-throwdown",
  day: "24",
  month: "Oct",
  isoStart: "2026-10-24T19:00:00",
  isoEnd: "2026-10-24T22:00:00",
  title: "The Eastside Throwdown",
  category: "Throwdown",
  levelTag: "All Levels",
  location: "Sightglass Coffee Roasters",
  timeLabel: "Tonight, 7:00 PM",
  description:
    "Watch the city's best baristas battle it out in our annual latte art throwdown. Expect high energy, heavy pours, and an exclusive natural process tasting bar.",
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCLLtyK16yUOlPRF3xwD9AJUokyqlQTy0WQn-dzRKcxC9BKthkmjUnl0Za396-ytZ969-I4RjJuiFFJHWE25EIQ77noIk0zIlNWJq9ttwgzkWHoeNwJxtAs_Ibw5TrEMo1NxDmEOBQsREIaIRQmiFf2kz7r8mQSkwEWG2paBaM38QOiHtC0CErlwq9mEAWXnKMoDIs7GtAlEZt--d_R4UMbFoHCBNqAl53DZ12V5I0Kpm-mBwVnGYt9xw",
  attendeeAvatars: [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAua80pTRbI-HEgweziCRRHGQ48zGhzUOXz-Ll5Xrc3nIifAY0Y2wBZkZVfpxQ8PYRvjqWt3YxVItDaXcEvUw0FrLlHsXfvNEfnILyHLFnXfU3WYnDTQ9mlaQlTs8Tgg9UjdmOqfovIVS5wXvOP-b0hHiAJmTQGA26zhQLbUkAZg8PuVhg5EV5vDaSxSZxzZXKYTvd_iTaCMlVGJ6KsNnmB0661dCtqJpE9dZbs3Z6kfFdnkLngzJZw1A",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD-PzXZL6jXs6heczmAo25r501NQmAWnoTOC8UDcOt5IDbkagSWB9FkCH3TyBDE4CN2N7AdlnGcGVRBtuc8vlvVAv4Rv7W-3SxEj5QxScEpk8mY9atT9DiLNSoZdTCYNHDwiHUypRN1_5_eNneuUTZlAQDG03XUHVazX20lLGSh-jH4rDZaBuVYbMYz2SgEZtYJYTdaL_uj7bEuIQlWAi1lD2ehJyb9a3vuoRX1u7cBSTQuorc5tlHeIg",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDxsNuYkSVtrriMDv2cLIts8JkR9konPEWuLW_v9R8curapHREmfamiQpwuXg0kq1tQtRPMl64KohuKhyemVz_LjFxgAh-Q4rh9ho4Rpgz6o4BFl2oVx-Is88XuAfwuoCFQyhRYNq1dIAmeJ_FOyWT6CUoa5gbjQ7JwuqsOcK1jAA97HdKaSX4Q6qsiAJop-bNqh4-R_kdYk412dk53ehU7kCTb2mEwH8kBdKyhzkrZghoBhFh8YfK3zg",
  ],
  attendeeCount: 124,
  defaultStatus: "attending",
};

export const upcomingEvents: EventRecord[] = [
  {
    id: "beginners-cupping",
    day: "28",
    month: "Oct",
    isoStart: "2026-10-28T10:00:00",
    isoEnd: "2026-10-28T12:00:00",
    title: "Intro to Specialty Cupping",
    category: "Tasting",
    levelTag: "Beginner",
    location: "Roasters Guild HQ",
    timeLabel: "10:00 AM - 12:00 PM",
    description:
      "Learn the sensory basics of tasting coffee like a pro. We'll explore 4 distinct single-origin roasts.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA-NoYxiw_20q6pfPUrmAOdvLs1HcIjHioeI0KTRCMsdrQtHajLCuAbKlvtA9w1q9fUDTbEBEs7Q2Om_a4Lh9U2Tc_doUBsk54UThmy8ew0tET6DrMK2S5k3s2uMP4qP3BD6poDVf7alzZLkzTHncI43TaPxK2pgimqs_tGSbLWN8BZDlQgG1ucff6GYbUS1B4pboZU1H7pmZWF4Ls-at5ZceG6ncshgzDOLIhVTk_64TpYoFd_cT8lrg",
    attendeeAvatars: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDO-aqhAbqe0jEX2NUNNxJCLGEwlfoP_ZlSivD9Sdq-YrsoxLataUHlkSfKIjD37Pet8azffmoYi7RTg8FZm1a2LF2sxOMb5wBQHoeDjjk3-0bWMDvXD1kXl0Sr3012F-Q77sZz4jG4PrUetOarWII06P5RM4LwELJtrYmiMVT9rqg4fQFqxQu3LhqFO7T_wK2bT7RqWaoEaYp-jqeufjV-SIf1BNHdVB21Kj8eSer9myI1YQ7XzTvqew",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA5zHiBMjO8P_tTfidJLSCbSuI741oBKeCAkgXuS-iDKN9N_j5_9r7oQqc-TPEs8eTat4_-bAodM9Qz1KMpSRQ6ImszgGe19d6LHWOIOPTMFl3XlGCseAJ7ALR4Vijg1zcN9WAPy3PxmDjdd6h4xn3J4plTDPuYVZEkPdNbAiQbOZXgHbo6Co-OD_bYEd0Snv4yqixZJ4opiahBy3I2uIaz_VVx2R2da1c6LlboF8MlIRd-54gYxs02DA",
    ],
    attendeeCount: 14,
  },
  {
    id: "roasters-meet-greet",
    day: "02",
    month: "Nov",
    isoStart: "2026-11-02T18:30:00",
    isoEnd: "2026-11-02T21:00:00",
    title: "V60 & Chemex Masterclass",
    category: "Workshop",
    levelTag: "Hands-on",
    location: "The Daily Grind Cafe",
    timeLabel: "6:30 PM - 9:00 PM",
    description:
      "Chat directly with the head roaster while dialing in a V60 and Chemex side by side. Discuss sourcing, profiles, and pour technique.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCsdgOcof1zjRc_9NxuCs1iDXGFAAJkVufmGUrbKBWvVs-rdAqKzAo-i9ijC7aFNuNpKgN0y50O4FcCKXLVS6n8GdiN_bR9fT5B7VhQPNCiSvrsgO7PwjqBmBAOUBTgRev1Es8EQJIqfMwQ0ox44peGJuq4i_z2v9n2WJz2fW3x_U9rHXQ_i-5fWHqDu_rFFVi-0TIrhp2rX7ZnHTT-M4-PKlkzKi4Cg118yrDtu21BQ5Xll3WFBA4OzA",
    attendeeAvatars: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDdXa6MerIIHAp0Fp_4be0eCFDVS3YQbT0PVsxOfA7e5crcXL_a56PleofjcaBV9fmM4kAkyCjb_e4GEMTvhatdqmiNerRweefeE0Wl338PcN1gBqGbinZrnMZJRYqxNxG0r0FLb-RZRMMYT7GrKAk0UEg_hGFGGgql6dTbCJj-zjwWgoRSIqy3Q8aEtWOEx3YHfYr3Lpa7bdCZ_qwsX0B4TIsXcpZeNla5WsxjkaTzLpWhnIDBAAiLXg",
    ],
    attendeeCount: 5,
    capacityFull: true,
  },
  {
    id: "origin-series-ethiopia",
    day: "15",
    month: "Nov",
    isoStart: "2026-11-15T17:00:00",
    isoEnd: "2026-11-15T19:00:00",
    title: "Origin Series: Ethiopian Yirgacheffe",
    category: "Lecture",
    location: "Beanery Co-op Workspace",
    timeLabel: "5:00 PM - 7:00 PM",
    description:
      "A deep dive into the Yirgacheffe growing region — altitude, processing, and why it tastes the way it does in your cup.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCQga6cZ7Zn7hYlYNjsRW9J0FiKouv_aN_bZ8x1oVUaOiz8Zi5DcEgPKf6G2zAF5Mux6Y7seaju3ztGVEeNpygDs24UJrGuXs9_398j8sUdOvVdfPqTI53vyWg7bQiRuEOnx6aaYtgzcd4iPllzX78Q_Dx8cwxi7syh0uic6pXw1cHhsgvRk-WErdShiWMCJ4Xh7H43OCHRR-1jkcnANeC___TzBj6aGZPQIh63CsdnB5AW-K6NZp4chw",
    attendeeAvatars: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAhqQbFRcB88xzZ4RxRPEi3cyN4zFKoXQ3h8Gt_BaQaMDZEdYO13gUGGGobFh6uBlsSnLa4hcQO1fQfStHYSG7ZQ3xHh7L9AV8eThhbAgAQHYuZCbGspyhULi92e7DuG0tt5AKjCSp09dbHhfcqBMLgw_9GRnfqviHe3-_bp4--3o_PiFxNUfw2jjxLknm8TCymRO0tospx06UVK1joUgTTH_PjgOq3fPW1gIEAtVwOcIQJftRzOMrX0g",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBtz2e-c2nLZ-rvsiUqHUuds0TK2CKQBegpzBVaVRF1Jtd4HwZ99HN476biF2-EwTitI-QVf_-L8Y3FYkFfaGND0YQ8YcJ_thumnbbDiokcb7wsnwcsk2OgQ4Yor463-OwFjY1CEOshxyW87DpYq9jrmDNjgUVgX_GnITr8N35dvRBl-32w8ovzVJ3foayk0-rIWzw5h-uUou3lAb24q4mIl3Vtz5rDoX-qsDz1y0Ippnl16Fk92sFCog",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCi3yWSCm6kcaJw9_tN3z0fUVQI_TR4HFFgQ4TqAkuWQHaWXzyUE9cRmQiiPD8jGPz0qFvwMhj3bgXO5Kie0UnX2D9kkPiN2izJzyNvXzsaeJnL6N7Fypxw_3I27vJzmYXT_2g0tnV9fu3Ui-CbHch3WXIDCE_WHs8hqTc5F8olVpk7EtrygNG0vm1QS4PnIONm3ERex-chnZEmZAcU6g43WoVMGAXwULmzQe6blw09pwNkBu2Iv4IgYQ",
    ],
    attendeeCount: 42,
  },
];

export const hostedEvents: HostedEvent[] = [
  {
    id: "advanced-espresso-extraction",
    title: "Advanced Espresso Extraction",
    category: "Workshop",
    dateLabel: "Dec 05, 2026 • 10:00 AM",
    location: "Home Studio",
    attendeeCount: 12,
    capacity: 15,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCb0Hgg_6MVxeFndLET_NKkyhz8cTF7RilX-2TgWqTYQemMCpshJy7lXcyJSh9B8WkDQtPkLB2UU0WNqxMihD7HGF-XO9c-fI9GrSfUa0SwX6eQb7oHv4l6R0MiEdKK86MZHinzyV2_okkvcmrzGfxkiO_DCOBA5KWPAmIzz0gG4S1q2uvMTJum-gcjPl6VmGLpRIsvFArYNpZmVrdcThqL4WwUwLftG1SaOi2wbKl6xOL0GxnG1RpZ3w",
  },
  {
    id: "home-roasting-101",
    title: "Home Roasting 101",
    category: "Class",
    dateLabel: "Dec 12, 2026 • 2:00 PM",
    location: "Roastery Coffee House",
    attendeeCount: 8,
    capacity: 8,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB8JsrH6DVLopgAknUwUcOUw954LjAShpkgtF47yjjsyVjknhqahEGO-Q3h19TAHSdVLdTTvR8ou0dcZdkeZQc7vISF4ziJ5dW2SneZ4-Z0PKHLgYVBLkSJU7ZIS63EyrGeZ6lPGnzyT2JOd0OonRRHj19tnlW5Os6w5hCbUpCHeyGuBzggpS1WjZ-kT6o1UC0-ejoQK8llgN33H9YiMGjqpj9Y5yJixqHw7XvgB2fPSxqrEArKaHRxYw",
  },
];

export function getEventById(id: string): EventRecord | undefined {
  if (featuredEvent.id === id) return featuredEvent;
  return upcomingEvents.find((event) => event.id === id);
}

export function buildGoogleCalendarUrl(event: EventRecord): string {
  // isoStart/isoEnd are floating local times (no timezone data tracked),
  // so format without a trailing "Z" — Google Calendar then renders them
  // in the viewer's own local timezone instead of mislabeling them as UTC.
  const format = (iso: string) => iso.replace(/[-:]/g, "");
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: event.title,
    dates: `${format(event.isoStart)}/${format(event.isoEnd)}`,
    details: event.description,
    location: event.location,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
