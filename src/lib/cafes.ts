export type CafeRecord = {
  slug: string;
  name: string;
  region: string;
  neighborhood: string;
  tags: string[];
  roaster: string;
  distanceKm: number;
  rating: number;
  brewInfo: string;
  seating: string;
  image: string;
  description: string;
  vibe: { description: string; tags: string[] };
  utility: { label: string; value: string }[];
  coffee: { origins: string; signatures: string };
  gallery: { src: string; alt: string }[];
  galleryTotalCount: number;
  mapImage: string;
  address: string;
  checkInCount: number;
};

export const cafes: CafeRecord[] = [
  {
    slug: "roastery-coffee-house",
    name: "Roastery Coffee House",
    region: "Delhi, India",
    neighborhood: "Khan Market",
    tags: ["Khan Market", "Workspace", "Quiet"],
    roaster: "Onyx Coffee Lab",
    distanceKm: 3.2,
    rating: 4.8,
    brewInfo: "Cranberry Cold Brew, V60",
    seating: "Ample",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD4c6udrzB1K8JbNS7f6HAYB5TGzQHFT5ai8nCyXrsz0hgPFebRJ19Z0eDmZ_h0RNiBdHXty5BUYvJbYUlV_OD5PqnnkUqhogqNerhlZtooe7PQs9WkKyqCO9NlZ7eU9QbUlTojuftHdGaY3rBK9c3akkVTsQyIOfjgE9dN9gbOH4oSG9NwTu5_DSMJsewLMSYuf2sZNGAE70_A3qEkdUGgV6tca5jcvyyAHBRRnFxcZ_mrSEdIZjogOg",
    description:
      "A serene oasis in the bustling city, offering meticulously crafted pour-overs and an expansive leafy courtyard. Ideal for deep work or lingering conversations.",
    vibe: {
      description:
        "Calm, botanical, and spacious. The architecture blends colonial heritage with minimalist modern design.",
      tags: ["Low Noise", "Natural Light"],
    },
    utility: [
      { label: "Wi-Fi Speed", value: "Fast (150 Mbps)" },
      { label: "Plug Points", value: "Abundant" },
      { label: "Seating", value: "Ergonomic" },
    ],
    coffee: {
      origins: "Ethiopia, Karnataka (Estate Blend)",
      signatures: "Cranberry Cold Brew, V60 Pour-over",
    },
    gallery: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCb0Hgg_6MVxeFndLET_NKkyhz8cTF7RilX-2TgWqTYQemMCpshJy7lXcyJSh9B8WkDQtPkLB2UU0WNqxMihD7HGF-XO9c-fI9GrSfUa0SwX6eQb7oHv4l6R0MiEdKK86MZHinzyV2_okkvcmrzGfxkiO_DCOBA5KWPAmIzz0gG4S1q2uvMTJum-gcjPl6VmGLpRIsvFArYNpZmVrdcThqL4WwUwLftG1SaOi2wbKl6xOL0GxnG1RpZ3w",
        alt: "A barista pouring a V60 pour-over coffee",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOndbxgoJFj3yenozBDB4mPDzYLWwT0J5ilz-VuH3h_TQiQU0lmh4_kzBuTk9SiwW3kH3XUDyqJzSXHl4pPRqtssHkRP8yCissfcTXqmtBfAUvfhyWbJEzpFIkteGPgsjqqPRWLaYKbOKek1-5g61rXqPQJeicCPvtOvWtwy0X0mMIOiEDUfrZMUTZymi0DhAvt3iw3VmBpt9b0fdOHCi8R5EgDGedBptlqtVwj_Zwf7-t4K8Vqjw_TA",
        alt: "Cake and cappuccino on a wooden table",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDL8YrDz3kzTI0hrUnvHblC2XBWYDPteBYHp81hOlFdqUmGBjGcS4Ln24r_vpmdEVy0G8gfcYPKvA9PpQ9qTgcWTAHYAs1u6iWQ87qwAKUiDdrZj43-4A57_C55D57ZpCymhhhyxREUlimxiYrQtmC_02V3Etec1aj1uFe3UWp__Gi63-M6cCnW4r7D2sUUaPoJ7QkNEvEdnwOK3WwGezxmzlPLAlqvtGoTyCPBBgc_OZY5tO2yapBhyA",
        alt: "Cafe interior with leather seating",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQXz3SIWmmPg26hWZ2JSRvUe-wii_s5-xfJuvSDfH0ij3CKoMMONTPZ6bdzj8BI6QseLaWR83edw0mvuDyyWAlnwKG77tbJosMrn24B9CKm5hqSeozBj5KkfsF9XSvf15z8LRD9gkpBTVVCQWRNhB3LlKqm-lAFRtpEzXULA_ZllXLACajl28chqf8h2Wd5RtdD0chCiXPA9VrAnAf7KQboGG7IXvlJw_djLjBtxnyQrJf3BIsVIsJeQ",
        alt: "Cold brew coffee in a ribbed glass",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxnnKxqnwNRQpYANUc5bxaIOWWlnvF-xAxMjewdKIjpDnfmYVJuRat8F_pBa5y33YxWbLsakXApY0oxPu0kt8KArnKzAEk5z9aNNBlyCiuzHk3pNtiS4-ZM6RyzU_EsspMoAzsKDcnOdPEezaTVqR0oSRDlMk2Qf4IHaknrRlCENr8vTRpVAyOosXpNGLKAzuwuJZJtlsNVc955-NZyNGzSypSr1iqgDTqgVWstIW77wDdBsLaGZRHPw",
        alt: "Cafe entrance with greenery",
      },
    ],
    galleryTotalCount: 12,
    mapImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAYD0zxAiM2mZBH32yiwo-xBOuYT7nRAi-ox7lhYOIAzbQAv6IY9SPdMFeoIoZXX9vMmt3R0f57Mn7IQ_stsacaKZfJmQj0U1sOJyBrdBPvEAZnczzcDBGwxwoCWwCVEeCRX94D_Vt7qsiz-0OjX6xLgeQjKs0wOjZoNO_rEY7c5tOJldm0qdXiPFSTl7bKtocgU6J5KKfXdONcmxBD9DDdrzHkAMyac0_2w3GPDfsQVwMcF97w04j9OQ",
    address: "Khan Market, Rabindra Nagar, New Delhi, Delhi 110003, India",
    checkInCount: 243,
  },
  {
    slug: "blue-tokai-safdarjung",
    name: "Blue Tokai Safdarjung",
    region: "Delhi, India",
    neighborhood: "Safdarjung",
    tags: ["Safdarjung", "Workspace", "Quiet"],
    roaster: "Onyx Coffee Lab",
    distanceKm: 5.1,
    rating: 4.8,
    brewInfo: "Pour Over, Espresso",
    seating: "Ample",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDmt3oFq57HzGc0SB7IhXkQVekQTMSMye-LbUVwWr6gOgnDFqOAWLYgHch936xkWrLEzQ5Xvu9TGNv2fyPWMbCeOzHEBW-6prHkLP1yKlRqVEx9nqJEOIvLMo4UCw-SUzV4qE9qTadpyz3tJreKNgV-wm3Q_KiA3-SPMmg48olgCe3pDrN5aK1H6sYrkbsWI4TvLuIrUuPM3RA1sJjsh5p7M1aJP-ImNDgpUMcrjKDZjFeuJlPUtJ9Q7g",
    description:
      "The neighborhood roastery's original flagship — exposed brick, a working roaster visible from the counter, and a rotating single-origin filter bar for people who read the tasting notes before ordering.",
    vibe: {
      description:
        "Industrial-warm with the smell of fresh roast in the air most mornings. Quiet enough for a full workday.",
      tags: ["Roast On-Site", "Quiet"],
    },
    utility: [
      { label: "Wi-Fi Speed", value: "Fast (120 Mbps)" },
      { label: "Plug Points", value: "Plentiful" },
      { label: "Seating", value: "Communal Tables" },
    ],
    coffee: {
      origins: "Karnataka, Chikkamagaluru",
      signatures: "Filter Bar Rotation, Espresso Tonic",
    },
    gallery: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCb0Hgg_6MVxeFndLET_NKkyhz8cTF7RilX-2TgWqTYQemMCpshJy7lXcyJSh9B8WkDQtPkLB2UU0WNqxMihD7HGF-XO9c-fI9GrSfUa0SwX6eQb7oHv4l6R0MiEdKK86MZHinzyV2_okkvcmrzGfxkiO_DCOBA5KWPAmIzz0gG4S1q2uvMTJum-gcjPl6VmGLpRIsvFArYNpZmVrdcThqL4WwUwLftG1SaOi2wbKl6xOL0GxnG1RpZ3w",
        alt: "A barista pouring a V60 pour-over coffee",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDL8YrDz3kzTI0hrUnvHblC2XBWYDPteBYHp81hOlFdqUmGBjGcS4Ln24r_vpmdEVy0G8gfcYPKvA9PpQ9qTgcWTAHYAs1u6iWQ87qwAKUiDdrZj43-4A57_C55D57ZpCymhhhyxREUlimxiYrQtmC_02V3Etec1aj1uFe3UWp__Gi63-M6cCnW4r7D2sUUaPoJ7QkNEvEdnwOK3WwGezxmzlPLAlqvtGoTyCPBBgc_OZY5tO2yapBhyA",
        alt: "Cafe interior with leather seating",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQXz3SIWmmPg26hWZ2JSRvUe-wii_s5-xfJuvSDfH0ij3CKoMMONTPZ6bdzj8BI6QseLaWR83edw0mvuDyyWAlnwKG77tbJosMrn24B9CKm5hqSeozBj5KkfsF9XSvf15z8LRD9gkpBTVVCQWRNhB3LlKqm-lAFRtpEzXULA_ZllXLACajl28chqf8h2Wd5RtdD0chCiXPA9VrAnAf7KQboGG7IXvlJw_djLjBtxnyQrJf3BIsVIsJeQ",
        alt: "Cold brew coffee in a ribbed glass",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxnnKxqnwNRQpYANUc5bxaIOWWlnvF-xAxMjewdKIjpDnfmYVJuRat8F_pBa5y33YxWbLsakXApY0oxPu0kt8KArnKzAEk5z9aNNBlyCiuzHk3pNtiS4-ZM6RyzU_EsspMoAzsKDcnOdPEezaTVqR0oSRDlMk2Qf4IHaknrRlCENr8vTRpVAyOosXpNGLKAzuwuJZJtlsNVc955-NZyNGzSypSr1iqgDTqgVWstIW77wDdBsLaGZRHPw",
        alt: "Cafe entrance with greenery",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAt9M02qYAp837YGKVhgt0etC1dYeJy3OkYcTmdxOVb0nqdH_Ol4ZVcILG4xwJwW3c_eNDjbdOZb8flzSZnjHdDcPX0ffvJrVn3AgFw4phQt2kL50i1J8WYHgpj0txxl9fyRodN7D39Lh4wtFFYiVOnp3OWQNjzKbV9QklC2Eq2bff1ccJ0qUOr4QLKS5ZDCwddeovpCe1E-mZJKI3iQU2XfdlceeEcDUEu_58facRN7fcAfSMaXsLJzA",
        alt: "V60 batch brew station",
      },
    ],
    galleryTotalCount: 9,
    mapImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAYD0zxAiM2mZBH32yiwo-xBOuYT7nRAi-ox7lhYOIAzbQAv6IY9SPdMFeoIoZXX9vMmt3R0f57Mn7IQ_stsacaKZfJmQj0U1sOJyBrdBPvEAZnczzcDBGwxwoCWwCVEeCRX94D_Vt7qsiz-0OjX6xLgeQjKs0wOjZoNO_rEY7c5tOJldm0qdXiPFSTl7bKtocgU6J5KKfXdONcmxBD9DDdrzHkAMyac0_2w3GPDfsQVwMcF97w04j9OQ",
    address: "Aurobindo Market, Safdarjung Enclave, New Delhi, Delhi 110029, India",
    checkInCount: 187,
  },
  {
    slug: "perch-wine-coffee-bar",
    name: "Perch Wine & Coffee Bar",
    region: "Delhi, India",
    neighborhood: "Vasant Vihar",
    tags: ["Vasant Vihar", "Date Spot", "Ambient"],
    roaster: "Sey Coffee",
    distanceKm: 7.4,
    rating: 4.7,
    brewInfo: "Cold Brew, Aeropress",
    seating: "Limited",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCBH_AEu-TQss26lCMIF0PRgSQMbxRcUEsJZZ9ME-9_Yw2_6w4fCkCfFXdc7vlMyWYzGIMKW_7jOi-UXJN9IsXZJPfmhZZ1EGqjlJX1fq5V3J7bMnc0fpt5esXbNXpQSgnvS5TOWgUvvxzsr2_lPjr_36pqvJ807tiU80j3KXkLu5ApCZsVRVutmvHtXMuZSLjkdlxcMCwxco34mnooW5eLRngiaeFticQdrcDgJfxCFyh70uxnweFr0Q",
    description:
      "Coffee by day, natural wine by night, on a plant-filled terrace that hides you from the street. The kind of place you linger through a golden hour.",
    vibe: {
      description:
        "Warm and intimate with low lighting and soft jazz. Built for two people and a long conversation.",
      tags: ["Terrace Seating", "Golden Hour"],
    },
    utility: [
      { label: "Wi-Fi Speed", value: "Moderate (60 Mbps)" },
      { label: "Plug Points", value: "Few" },
      { label: "Seating", value: "Cozy" },
    ],
    coffee: {
      origins: "Colombia, Yirgacheffe",
      signatures: "Orange Blossom Cold Brew, Aeropress Flight",
    },
    gallery: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQXz3SIWmmPg26hWZ2JSRvUe-wii_s5-xfJuvSDfH0ij3CKoMMONTPZ6bdzj8BI6QseLaWR83edw0mvuDyyWAlnwKG77tbJosMrn24B9CKm5hqSeozBj5KkfsF9XSvf15z8LRD9gkpBTVVCQWRNhB3LlKqm-lAFRtpEzXULA_ZllXLACajl28chqf8h2Wd5RtdD0chCiXPA9VrAnAf7KQboGG7IXvlJw_djLjBtxnyQrJf3BIsVIsJeQ",
        alt: "Cold brew coffee in a ribbed glass",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOndbxgoJFj3yenozBDB4mPDzYLWwT0J5ilz-VuH3h_TQiQU0lmh4_kzBuTk9SiwW3kH3XUDyqJzSXHl4pPRqtssHkRP8yCissfcTXqmtBfAUvfhyWbJEzpFIkteGPgsjqqPRWLaYKbOKek1-5g61rXqPQJeicCPvtOvWtwy0X0mMIOiEDUfrZMUTZymi0DhAvt3iw3VmBpt9b0fdOHCi8R5EgDGedBptlqtVwj_Zwf7-t4K8Vqjw_TA",
        alt: "Cake and cappuccino on a wooden table",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxnnKxqnwNRQpYANUc5bxaIOWWlnvF-xAxMjewdKIjpDnfmYVJuRat8F_pBa5y33YxWbLsakXApY0oxPu0kt8KArnKzAEk5z9aNNBlyCiuzHk3pNtiS4-ZM6RyzU_EsspMoAzsKDcnOdPEezaTVqR0oSRDlMk2Qf4IHaknrRlCENr8vTRpVAyOosXpNGLKAzuwuJZJtlsNVc955-NZyNGzSypSr1iqgDTqgVWstIW77wDdBsLaGZRHPw",
        alt: "Cafe entrance with greenery",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAz9rdCaS7AtJBO8yJQPIk38uZEzUcqH304bXM251_NW6X9q7koYv1sKkQLWhlfBGHM6hfTyzlsPGgcyquYolOWYZmmarAL6PALlSm3lLjtsJpMFNkYK6BQS5FyauZs8pvry-43lOhtW2DmN5Lq-ymYx0QbXEes1qyKQTut7qemW9plpWRFbwGNNxKRKdBdnKaOEKmcYajjkT3-rY3AKZYDRlXxF-TLvALdvEO0A1Pyqe_1qvgvzYUwxQ",
        alt: "Filter coffee being poured",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiKCM51nPwO2UXAJIDdn_Qf2GxNGIV8y-OAXj3Vr7i7mMkclQU11tnAt-PzPXCFEgFSK4tVr-aZJtcmZ-IfA5u9CxoRighNuPHktu2yARtcEuJ2-bEgpKaPqDPG-IKWsHUSnoSmrr1b_Rng5oyTejUG_Avpdu1UDc7yBvHitYN54fyAZR7LdaMBVqZo82KK1ntYjDdOFrQwmLPoXMaaP1kr7QYMxZIRYzxfZiZWnoTmN0vPtlYzNxHXA",
        alt: "Terrace seating at dusk",
      },
    ],
    galleryTotalCount: 8,
    mapImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAYD0zxAiM2mZBH32yiwo-xBOuYT7nRAi-ox7lhYOIAzbQAv6IY9SPdMFeoIoZXX9vMmt3R0f57Mn7IQ_stsacaKZfJmQj0U1sOJyBrdBPvEAZnczzcDBGwxwoCWwCVEeCRX94D_Vt7qsiz-0OjX6xLgeQjKs0wOjZoNO_rEY7c5tOJldm0qdXiPFSTl7bKtocgU6J5KKfXdONcmxBD9DDdrzHkAMyac0_2w3GPDfsQVwMcF97w04j9OQ",
    address: "Basant Lok Market, Vasant Vihar, New Delhi, Delhi 110057, India",
    checkInCount: 156,
  },
  {
    slug: "subko-cacao-mill",
    name: "Subko Cacao Mill",
    region: "Delhi, India",
    neighborhood: "Hauz Khas",
    tags: ["Hauz Khas", "Social", "Bustling"],
    roaster: "Intelligentsia",
    distanceKm: 6.8,
    rating: 4.9,
    brewInfo: "Manual Brew, Cacao",
    seating: "Ample",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDpVLEdi1jUao4YWO7UZsVi06CBJAihopUIHJXSxvHVyTfWzW3sbMbM_hfC3LbFJd34HafHJRTfY_AWWAB4vW7POn0UIAXU_ZBqbynHvaRJ6FrGxKT9xQE0Z_SuKjhWuQxhLa6gYrEI57ATESgAyilug4i6fMphEFV6Xc_1hR-fYbN4hb4q-XWEYBWswtZOzprjVMi-v0gKzEJtg6jwIUQDy2cjm-h6pG26fSqnf6OboZ0ylBt5lmPczw",
    description:
      "Bean-to-bar and bean-to-cup under one roof — Subko mills its own cacao next to the espresso machine. Loud, social, and always full on weekends.",
    vibe: {
      description:
        "Bustling and social with an open kitchen energy. Great for groups, not for a quiet afternoon of reading.",
      tags: ["Open Kitchen", "Group Friendly"],
    },
    utility: [
      { label: "Wi-Fi Speed", value: "Fast (100 Mbps)" },
      { label: "Plug Points", value: "Moderate" },
      { label: "Seating", value: "Communal Benches" },
    ],
    coffee: {
      origins: "Karnataka, Kerala (Estate Direct)",
      signatures: "Cacao Nib Cortado, Manual Brew Bar",
    },
    gallery: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpVLEdi1jUao4YWO7UZsVi06CBJAihopUIHJXSxvHVyTfWzW3sbMbM_hfC3LbFJd34HafHJRTfY_AWWAB4vW7POn0UIAXU_ZBqbynHvaRJ6FrGxKT9xQE0Z_SuKjhWuQxhLa6gYrEI57ATESgAyilug4i6fMphEFV6Xc_1hR-fYbN4hb4q-XWEYBWswtZOzprjVMi-v0gKzEJtg6jwIUQDy2cjm-h6pG26fSqnf6OboZ0ylBt5lmPczw",
        alt: "Cacao mill and espresso bar",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-70DnJ7HGkmjYTrxFgg4WI8b3EVS6rkiOjQXjJowUaqKqa5fRuqsM3NPtpm4xBsno_0odfFq1ENRsozNN7ajsd-g_o470AmJvHEyXEZHs2lK-o_kxD6vr8J5F6WiIawqmGQ82Zj-atXXuYf3JrUr0yvLruAZgoX15l6bkPBVxDHx0Uru9IrO03it_uWGt2dAzla9MmjEuvvGKwBj1HjMpsUrxT5qvhpnstD-abJjICgM7Jqltsrd4DA",
        alt: "Communal bench seating",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDL8YrDz3kzTI0hrUnvHblC2XBWYDPteBYHp81hOlFdqUmGBjGcS4Ln24r_vpmdEVy0G8gfcYPKvA9PpQ9qTgcWTAHYAs1u6iWQ87qwAKUiDdrZj43-4A57_C55D57ZpCymhhhyxREUlimxiYrQtmC_02V3Etec1aj1uFe3UWp__Gi63-M6cCnW4r7D2sUUaPoJ7QkNEvEdnwOK3WwGezxmzlPLAlqvtGoTyCPBBgc_OZY5tO2yapBhyA",
        alt: "Cafe interior with leather seating",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAt9M02qYAp837YGKVhgt0etC1dYeJy3OkYcTmdxOVb0nqdH_Ol4ZVcILG4xwJwW3c_eNDjbdOZb8flzSZnjHdDcPX0ffvJrVn3AgFw4phQt2kL50i1J8WYHgpj0txxl9fyRodN7D39Lh4wtFFYiVOnp3OWQNjzKbV9QklC2Eq2bff1ccJ0qUOr4QLKS5ZDCwddeovpCe1E-mZJKI3iQU2XfdlceeEcDUEu_58facRN7fcAfSMaXsLJzA",
        alt: "V60 batch brew station",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAiyrTJ2QJT2x1NEWBiNuJXCJWnvnitxEeUFskqCNJTjl8I26ywFmkly-YT98N_OsNLwHfVDdYzBJ9DW4kHkG2fG7KtEt44b0lyOCmf9Lic_EthX1djo637Sb1UZCueaA-oj-8m69FvJmK3NBE8yyU6xdZrHgLNv-q7IQL1P95-YQT0XlFbikyspd0gAiBjB4x9WpkNx8CceZr69N3W7NxQXg1HEHNLezerhbeYi9v_QF8M6JvkghwkDw",
        alt: "Industrial-style cafe interior",
      },
    ],
    galleryTotalCount: 14,
    mapImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAYD0zxAiM2mZBH32yiwo-xBOuYT7nRAi-ox7lhYOIAzbQAv6IY9SPdMFeoIoZXX9vMmt3R0f57Mn7IQ_stsacaKZfJmQj0U1sOJyBrdBPvEAZnczzcDBGwxwoCWwCVEeCRX94D_Vt7qsiz-0OjX6xLgeQjKs0wOjZoNO_rEY7c5tOJldm0qdXiPFSTl7bKtocgU6J5KKfXdONcmxBD9DDdrzHkAMyac0_2w3GPDfsQVwMcF97w04j9OQ",
    address: "N-18, Hauz Khas Village, New Delhi, Delhi 110016, India",
    checkInCount: 312,
  },
  {
    slug: "quick-brown-fox",
    name: "Quick Brown Fox",
    region: "Delhi, India",
    neighborhood: "Dhan Mill",
    tags: ["Dhan Mill", "Reading Nook", "Quiet"],
    roaster: "Sey Coffee",
    distanceKm: 8.9,
    rating: 4.6,
    brewInfo: "V60, Batch Brew",
    seating: "Moderate",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAt9M02qYAp837YGKVhgt0etC1dYeJy3OkYcTmdxOVb0nqdH_Ol4ZVcILG4xwJwW3c_eNDjbdOZb8flzSZnjHdDcPX0ffvJrVn3AgFw4phQt2kL50i1J8WYHgpj0txxl9fyRodN7D39Lh4wtFFYiVOnp3OWQNjzKbV9QklC2Eq2bff1ccJ0qUOr4QLKS5ZDCwddeovpCe1E-mZJKI3iQU2XfdlceeEcDUEu_58facRN7fcAfSMaXsLJzA",
    description:
      "Tucked inside the Dhan Mill design district, a book-lined nook that treats a slow V60 the way it treats a good paperback — unhurried.",
    vibe: {
      description:
        "Reading-nook quiet with warm reading lamps at every table. A favorite for solo mornings.",
      tags: ["Book Shelves", "Low Noise"],
    },
    utility: [
      { label: "Wi-Fi Speed", value: "Fast (110 Mbps)" },
      { label: "Plug Points", value: "Abundant" },
      { label: "Seating", value: "Armchairs & Nooks" },
    ],
    coffee: {
      origins: "Chikkamagaluru, Coorg",
      signatures: "AeroPress Special, V60 Flight",
    },
    gallery: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAt9M02qYAp837YGKVhgt0etC1dYeJy3OkYcTmdxOVb0nqdH_Ol4ZVcILG4xwJwW3c_eNDjbdOZb8flzSZnjHdDcPX0ffvJrVn3AgFw4phQt2kL50i1J8WYHgpj0txxl9fyRodN7D39Lh4wtFFYiVOnp3OWQNjzKbV9QklC2Eq2bff1ccJ0qUOr4QLKS5ZDCwddeovpCe1E-mZJKI3iQU2XfdlceeEcDUEu_58facRN7fcAfSMaXsLJzA",
        alt: "V60 batch brew station",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDL8YrDz3kzTI0hrUnvHblC2XBWYDPteBYHp81hOlFdqUmGBjGcS4Ln24r_vpmdEVy0G8gfcYPKvA9PpQ9qTgcWTAHYAs1u6iWQ87qwAKUiDdrZj43-4A57_C55D57ZpCymhhhyxREUlimxiYrQtmC_02V3Etec1aj1uFe3UWp__Gi63-M6cCnW4r7D2sUUaPoJ7QkNEvEdnwOK3WwGezxmzlPLAlqvtGoTyCPBBgc_OZY5tO2yapBhyA",
        alt: "Cafe interior with leather seating",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOndbxgoJFj3yenozBDB4mPDzYLWwT0J5ilz-VuH3h_TQiQU0lmh4_kzBuTk9SiwW3kH3XUDyqJzSXHl4pPRqtssHkRP8yCissfcTXqmtBfAUvfhyWbJEzpFIkteGPgsjqqPRWLaYKbOKek1-5g61rXqPQJeicCPvtOvWtwy0X0mMIOiEDUfrZMUTZymi0DhAvt3iw3VmBpt9b0fdOHCi8R5EgDGedBptlqtVwj_Zwf7-t4K8Vqjw_TA",
        alt: "Cake and cappuccino on a wooden table",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxnnKxqnwNRQpYANUc5bxaIOWWlnvF-xAxMjewdKIjpDnfmYVJuRat8F_pBa5y33YxWbLsakXApY0oxPu0kt8KArnKzAEk5z9aNNBlyCiuzHk3pNtiS4-ZM6RyzU_EsspMoAzsKDcnOdPEezaTVqR0oSRDlMk2Qf4IHaknrRlCENr8vTRpVAyOosXpNGLKAzuwuJZJtlsNVc955-NZyNGzSypSr1iqgDTqgVWstIW77wDdBsLaGZRHPw",
        alt: "Cafe entrance with greenery",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQXz3SIWmmPg26hWZ2JSRvUe-wii_s5-xfJuvSDfH0ij3CKoMMONTPZ6bdzj8BI6QseLaWR83edw0mvuDyyWAlnwKG77tbJosMrn24B9CKm5hqSeozBj5KkfsF9XSvf15z8LRD9gkpBTVVCQWRNhB3LlKqm-lAFRtpEzXULA_ZllXLACajl28chqf8h2Wd5RtdD0chCiXPA9VrAnAf7KQboGG7IXvlJw_djLjBtxnyQrJf3BIsVIsJeQ",
        alt: "Cold brew coffee in a ribbed glass",
      },
    ],
    galleryTotalCount: 7,
    mapImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAYD0zxAiM2mZBH32yiwo-xBOuYT7nRAi-ox7lhYOIAzbQAv6IY9SPdMFeoIoZXX9vMmt3R0f57Mn7IQ_stsacaKZfJmQj0U1sOJyBrdBPvEAZnczzcDBGwxwoCWwCVEeCRX94D_Vt7qsiz-0OjX6xLgeQjKs0wOjZoNO_rEY7c5tOJldm0qdXiPFSTl7bKtocgU6J5KKfXdONcmxBD9DDdrzHkAMyac0_2w3GPDfsQVwMcF97w04j9OQ",
    address: "Dhan Mill Compound, Chhatarpur, New Delhi, Delhi 110074, India",
    checkInCount: 98,
  },
  {
    slug: "devans-south-indian",
    name: "Devan's South Indian",
    region: "Delhi, India",
    neighborhood: "Lodhi Colony",
    tags: ["Lodhi Colony", "Heritage", "Ambient"],
    roaster: "Intelligentsia",
    distanceKm: 4.5,
    rating: 4.8,
    brewInfo: "Filter Coffee",
    seating: "Limited",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAz9rdCaS7AtJBO8yJQPIk38uZEzUcqH304bXM251_NW6X9q7koYv1sKkQLWhlfBGHM6hfTyzlsPGgcyquYolOWYZmmarAL6PALlSm3lLjtsJpMFNkYK6BQS5FyauZs8pvry-43lOhtW2DmN5Lq-ymYx0QbXEes1qyKQTut7qemW9plpWRFbwGNNxKRKdBdnKaOEKmcYajjkT3-rY3AKZYDRlXxF-TLvALdvEO0A1Pyqe_1qvgvzYUwxQ",
    description:
      "A heritage darshini-style filter coffee counter with a decades-old steel dabara and a tumbler technique that hasn't changed since it opened. Dark roast, no compromises.",
    vibe: {
      description:
        "Old-Delhi heritage energy — brisk service, a few steel tables, and regulars who've been coming for years.",
      tags: ["Heritage", "Dark Roast"],
    },
    utility: [
      { label: "Wi-Fi Speed", value: "None" },
      { label: "Plug Points", value: "Limited" },
      { label: "Seating", value: "Steel Tables" },
    ],
    coffee: {
      origins: "Chikkamagaluru, Coorg (Peaberry Blend)",
      signatures: "Dabara Filter Coffee, Degree Coffee",
    },
    gallery: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAz9rdCaS7AtJBO8yJQPIk38uZEzUcqH304bXM251_NW6X9q7koYv1sKkQLWhlfBGHM6hfTyzlsPGgcyquYolOWYZmmarAL6PALlSm3lLjtsJpMFNkYK6BQS5FyauZs8pvry-43lOhtW2DmN5Lq-ymYx0QbXEes1qyKQTut7qemW9plpWRFbwGNNxKRKdBdnKaOEKmcYajjkT3-rY3AKZYDRlXxF-TLvALdvEO0A1Pyqe_1qvgvzYUwxQ",
        alt: "Filter coffee being poured",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxnnKxqnwNRQpYANUc5bxaIOWWlnvF-xAxMjewdKIjpDnfmYVJuRat8F_pBa5y33YxWbLsakXApY0oxPu0kt8KArnKzAEk5z9aNNBlyCiuzHk3pNtiS4-ZM6RyzU_EsspMoAzsKDcnOdPEezaTVqR0oSRDlMk2Qf4IHaknrRlCENr8vTRpVAyOosXpNGLKAzuwuJZJtlsNVc955-NZyNGzSypSr1iqgDTqgVWstIW77wDdBsLaGZRHPw",
        alt: "Cafe entrance with greenery",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-70DnJ7HGkmjYTrxFgg4WI8b3EVS6rkiOjQXjJowUaqKqa5fRuqsM3NPtpm4xBsno_0odfFq1ENRsozNN7ajsd-g_o470AmJvHEyXEZHs2lK-o_kxD6vr8J5F6WiIawqmGQ82Zj-atXXuYf3JrUr0yvLruAZgoX15l6bkPBVxDHx0Uru9IrO03it_uWGt2dAzla9MmjEuvvGKwBj1HjMpsUrxT5qvhpnstD-abJjICgM7Jqltsrd4DA",
        alt: "Communal bench seating",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDL8YrDz3kzTI0hrUnvHblC2XBWYDPteBYHp81hOlFdqUmGBjGcS4Ln24r_vpmdEVy0G8gfcYPKvA9PpQ9qTgcWTAHYAs1u6iWQ87qwAKUiDdrZj43-4A57_C55D57ZpCymhhhyxREUlimxiYrQtmC_02V3Etec1aj1uFe3UWp__Gi63-M6cCnW4r7D2sUUaPoJ7QkNEvEdnwOK3WwGezxmzlPLAlqvtGoTyCPBBgc_OZY5tO2yapBhyA",
        alt: "Cafe interior with leather seating",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAiyrTJ2QJT2x1NEWBiNuJXCJWnvnitxEeUFskqCNJTjl8I26ywFmkly-YT98N_OsNLwHfVDdYzBJ9DW4kHkG2fG7KtEt44b0lyOCmf9Lic_EthX1djo637Sb1UZCueaA-oj-8m69FvJmK3NBE8yyU6xdZrHgLNv-q7IQL1P95-YQT0XlFbikyspd0gAiBjB4x9WpkNx8CceZr69N3W7NxQXg1HEHNLezerhbeYi9v_QF8M6JvkghwkDw",
        alt: "Industrial-style cafe interior",
      },
    ],
    galleryTotalCount: 6,
    mapImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAYD0zxAiM2mZBH32yiwo-xBOuYT7nRAi-ox7lhYOIAzbQAv6IY9SPdMFeoIoZXX9vMmt3R0f57Mn7IQ_stsacaKZfJmQj0U1sOJyBrdBPvEAZnczzcDBGwxwoCWwCVEeCRX94D_Vt7qsiz-0OjX6xLgeQjKs0wOjZoNO_rEY7c5tOJldm0qdXiPFSTl7bKtocgU6J5KKfXdONcmxBD9DDdrzHkAMyac0_2w3GPDfsQVwMcF97w04j9OQ",
    address: "Meharchand Market, Lodhi Colony, New Delhi, Delhi 110003, India",
    checkInCount: 421,
  },
  {
    slug: "the-artful-baker",
    name: "The Artful Baker",
    region: "Delhi, India",
    neighborhood: "Khan Market",
    tags: ["Khan Market", "Bakery", "Bustling"],
    roaster: "Onyx Coffee Lab",
    distanceKm: 3.4,
    rating: 4.5,
    brewInfo: "Espresso, Batch",
    seating: "Moderate",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDiKCM51nPwO2UXAJIDdn_Qf2GxNGIV8y-OAXj3Vr7i7mMkclQU11tnAt-PzPXCFEgFSK4tVr-aZJtcmZ-IfA5u9CxoRighNuPHktu2yARtcEuJ2-bEgpKaPqDPG-IKWsHUSnoSmrr1b_Rng5oyTejUG_Avpdu1UDc7yBvHitYN54fyAZR7LdaMBVqZo82KK1ntYjDdOFrQwmLPoXMaaP1kr7QYMxZIRYzxfZiZWnoTmN0vPtlYzNxHXA",
    description:
      "Fresh sourdough and pastry cases up front, a full espresso bar in back. Weekend queues out the door for the almond croissant alone.",
    vibe: {
      description:
        "Bustling bakery energy — bright, fast turnover, best for a quick pastry-and-espresso stop rather than settling in.",
      tags: ["Bakery Counter", "Fast Turnover"],
    },
    utility: [
      { label: "Wi-Fi Speed", value: "Moderate (50 Mbps)" },
      { label: "Plug Points", value: "Few" },
      { label: "Seating", value: "High Tables" },
    ],
    coffee: {
      origins: "Brazil, Karnataka (House Blend)",
      signatures: "Almond Croissant Espresso Pairing, Batch Brew",
    },
    gallery: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiKCM51nPwO2UXAJIDdn_Qf2GxNGIV8y-OAXj3Vr7i7mMkclQU11tnAt-PzPXCFEgFSK4tVr-aZJtcmZ-IfA5u9CxoRighNuPHktu2yARtcEuJ2-bEgpKaPqDPG-IKWsHUSnoSmrr1b_Rng5oyTejUG_Avpdu1UDc7yBvHitYN54fyAZR7LdaMBVqZo82KK1ntYjDdOFrQwmLPoXMaaP1kr7QYMxZIRYzxfZiZWnoTmN0vPtlYzNxHXA",
        alt: "Bakery counter with pastries",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOndbxgoJFj3yenozBDB4mPDzYLWwT0J5ilz-VuH3h_TQiQU0lmh4_kzBuTk9SiwW3kH3XUDyqJzSXHl4pPRqtssHkRP8yCissfcTXqmtBfAUvfhyWbJEzpFIkteGPgsjqqPRWLaYKbOKek1-5g61rXqPQJeicCPvtOvWtwy0X0mMIOiEDUfrZMUTZymi0DhAvt3iw3VmBpt9b0fdOHCi8R5EgDGedBptlqtVwj_Zwf7-t4K8Vqjw_TA",
        alt: "Cake and cappuccino on a wooden table",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAiyrTJ2QJT2x1NEWBiNuJXCJWnvnitxEeUFskqCNJTjl8I26ywFmkly-YT98N_OsNLwHfVDdYzBJ9DW4kHkG2fG7KtEt44b0lyOCmf9Lic_EthX1djo637Sb1UZCueaA-oj-8m69FvJmK3NBE8yyU6xdZrHgLNv-q7IQL1P95-YQT0XlFbikyspd0gAiBjB4x9WpkNx8CceZr69N3W7NxQXg1HEHNLezerhbeYi9v_QF8M6JvkghwkDw",
        alt: "Industrial-style cafe interior",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-70DnJ7HGkmjYTrxFgg4WI8b3EVS6rkiOjQXjJowUaqKqa5fRuqsM3NPtpm4xBsno_0odfFq1ENRsozNN7ajsd-g_o470AmJvHEyXEZHs2lK-o_kxD6vr8J5F6WiIawqmGQ82Zj-atXXuYf3JrUr0yvLruAZgoX15l6bkPBVxDHx0Uru9IrO03it_uWGt2dAzla9MmjEuvvGKwBj1HjMpsUrxT5qvhpnstD-abJjICgM7Jqltsrd4DA",
        alt: "Communal bench seating",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQXz3SIWmmPg26hWZ2JSRvUe-wii_s5-xfJuvSDfH0ij3CKoMMONTPZ6bdzj8BI6QseLaWR83edw0mvuDyyWAlnwKG77tbJosMrn24B9CKm5hqSeozBj5KkfsF9XSvf15z8LRD9gkpBTVVCQWRNhB3LlKqm-lAFRtpEzXULA_ZllXLACajl28chqf8h2Wd5RtdD0chCiXPA9VrAnAf7KQboGG7IXvlJw_djLjBtxnyQrJf3BIsVIsJeQ",
        alt: "Cold brew coffee in a ribbed glass",
      },
    ],
    galleryTotalCount: 10,
    mapImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAYD0zxAiM2mZBH32yiwo-xBOuYT7nRAi-ox7lhYOIAzbQAv6IY9SPdMFeoIoZXX9vMmt3R0f57Mn7IQ_stsacaKZfJmQj0U1sOJyBrdBPvEAZnczzcDBGwxwoCWwCVEeCRX94D_Vt7qsiz-0OjX6xLgeQjKs0wOjZoNO_rEY7c5tOJldm0qdXiPFSTl7bKtocgU6J5KKfXdONcmxBD9DDdrzHkAMyac0_2w3GPDfsQVwMcF97w04j9OQ",
    address: "50-B, Khan Market, New Delhi, Delhi 110003, India",
    checkInCount: 205,
  },
];

export function getCafeBySlug(slug: string): CafeRecord | undefined {
  return cafes.find((cafe) => cafe.slug === slug);
}
