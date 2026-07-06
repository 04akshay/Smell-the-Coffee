import { CafeHero } from "@/components/cafe/cafe-hero";
import { CafeInsights } from "@/components/cafe/cafe-insights";
import { CafeGallery } from "@/components/cafe/cafe-gallery";
import { CafeLocationPassport } from "@/components/cafe/cafe-location-passport";

const cafe = {
  region: "Delhi, India",
  name: "Roastery Coffee House",
  description:
    "A serene oasis in the bustling city, offering meticulously crafted pour-overs and an expansive leafy courtyard. Ideal for deep work or lingering conversations.",
  heroImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD4c6udrzB1K8JbNS7f6HAYB5TGzQHFT5ai8nCyXrsz0hgPFebRJ19Z0eDmZ_h0RNiBdHXty5BUYvJbYUlV_OD5PqnnkUqhogqNerhlZtooe7PQs9WkKyqCO9NlZ7eU9QbUlTojuftHdGaY3rBK9c3akkVTsQyIOfjgE9dN9gbOH4oSG9NwTu5_DSMJsewLMSYuf2sZNGAE70_A3qEkdUGgV6tca5jcvyyAHBRRnFxcZ_mrSEdIZjogOg",
  rating: 4.8,
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
};

export default function CafeDetailPage() {
  return (
    <main className="mx-auto max-w-container-max space-y-section-gap px-margin-mobile pb-32 pt-8 md:px-margin-desktop md:pb-24">
      <CafeHero
        region={cafe.region}
        name={cafe.name}
        description={cafe.description}
        image={cafe.heroImage}
        rating={cafe.rating}
      />
      <CafeInsights vibe={cafe.vibe} utility={cafe.utility} coffee={cafe.coffee} />
      <CafeGallery images={cafe.gallery} totalCount={cafe.galleryTotalCount} />
      <CafeLocationPassport
        mapImage={cafe.mapImage}
        address={cafe.address}
        checkInCount={cafe.checkInCount}
      />
    </main>
  );
}
