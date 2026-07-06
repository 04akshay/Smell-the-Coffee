import { Icon } from "./icon";

const featured = {
  name: "The Roastery Haus",
  location: "Hauz Khas Village • 92 Ambience Score",
  tags: ["Industrial", "Single Origin"],
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAiyrTJ2QJT2x1NEWBiNuJXCJWnvnitxEeUFskqCNJTjl8I26ywFmkly-YT98N_OsNLwHfVDdYzBJ9DW4kHkG2fG7KtEt44b0lyOCmf9Lic_EthX1djo637Sb1UZCueaA-oj-8m69FvJmK3NBE8yyU6xdZrHgLNv-q7IQL1P95-YQT0XlFbikyspd0gAiBjB4x9WpkNx8CceZr69N3W7NxQXg1HEHNLezerhbeYi9v_QF8M6JvkghwkDw",
};

const smallCards = [
  {
    name: "Third Wave Studio",
    location: "Vasant Vihar",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBPmqWJENTn06WxSCHNdpOF0n1TBSWj7YEjmBogC8Bj_uqpkHK8hy6Ls9bVn2dP7YIlkFLbQoEB8DqFZ8BaVEWqDIs0dcRN5jyperJujwrg_pM8z9_VS56uL3MTv2mLPymHcdLIkjJBjDrSRCwiCis5UGm06zLy-WCd4KVjc4NRpcDfro3W3pBjfYa9pOSjIfXWD2V6T5HCK_NA-WMekbcZAaVwqOiazhSI9sDJ4EHaXwlBASurqzZF9A",
  },
  {
    name: "Artisan Grind",
    location: "Connaught Place",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD-70DnJ7HGkmjYTrxFgg4WI8b3EVS6rkiOjQXjJowUaqKqa5fRuqsM3NPtpm4xBsno_0odfFq1ENRsozNN7ajsd-g_o470AmJvHEyXEZHs2lK-o_kxD6vr8J5F6WiIawqmGQ82Zj-atXXuYf3JrUr0yvLruAZgoX15l6bkPBVxDHx0Uru9IrO03it_uWGt2dAzla9MmjEuvvGKwBj1HjMpsUrxT5qvhpnstD-abJjICgM7Jqltsrd4DA",
  },
];

export function TrendingCafes() {
  return (
    <section className="flex flex-col gap-6">
      <div className="mb-4 flex items-end justify-between">
        <h2 className="font-headline-md text-headline-md font-semibold text-roasted-espresso">
          Trending Delhi Cafes
        </h2>
        <a
          href="#"
          className="flex items-center font-label-md text-label-md text-sage-leaf hover:underline"
        >
          View All <Icon name="arrow_forward" className="ml-1 text-sm" />
        </a>
      </div>

      <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
        <div className="group relative flex min-h-[400px] flex-col overflow-hidden rounded-xl border border-tertiary/10 bg-surface-bright md:col-span-2">
          <div
            className="w-full flex-grow bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url('${featured.image}')` }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-roasted-espresso/90 via-roasted-espresso/20 to-transparent" />
          <div className="absolute bottom-0 left-0 z-10 flex w-full flex-col gap-2 p-6 text-cream-foam">
            <div className="mb-2 flex gap-2">
              {featured.tags.map((tag, i) => (
                <span
                  key={tag}
                  className={
                    i === 0
                      ? "rounded-full bg-sage-leaf px-3 py-1 font-label-caps text-label-caps font-bold text-cream-foam"
                      : "rounded-full bg-surface-tint/80 px-3 py-1 font-label-caps text-label-caps font-bold text-cream-foam backdrop-blur-sm"
                  }
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="font-headline-md text-headline-md font-semibold">
              {featured.name}
            </h3>
            <p className="flex items-center gap-1 font-body-md text-body-md text-inverse-on-surface/90">
              <Icon name="location_on" className="text-[16px]" />
              {featured.location}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-gutter">
          {smallCards.map((cafe) => (
            <div
              key={cafe.name}
              className="group relative min-h-[188px] flex-1 overflow-hidden rounded-xl border border-tertiary/10 bg-surface-bright"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${cafe.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-roasted-espresso/80 to-transparent" />
              <div className="absolute bottom-0 left-0 z-10 w-full p-4 text-cream-foam">
                <h3 className="font-headline-sm text-headline-sm font-semibold">
                  {cafe.name}
                </h3>
                <p className="font-label-md text-label-md text-inverse-on-surface/90">
                  {cafe.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
