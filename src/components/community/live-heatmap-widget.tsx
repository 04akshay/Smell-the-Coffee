import Link from "next/link";
import { Icon } from "@/components/icon";
import { cafes } from "@/lib/cafes";

const trending = [...cafes].sort((a, b) => b.rating - a.rating).slice(0, 3);

export function LiveHeatmapWidget() {
  return (
    <div className="relative overflow-hidden rounded-xl bg-primary p-6 text-cream-foam shadow-md">
      <div className="absolute -right-10 -top-10 opacity-10">
        <Icon name="map" className="text-[120px]" />
      </div>
      <div className="relative z-10">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-headline-sm text-headline-sm">Live Heatmap: Delhi</h2>
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-bean-origin-gold opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-bean-origin-gold" />
          </span>
        </div>
        <p className="mb-4 font-body-md text-sm text-surface-dim">
          Trending spots based on ratings &amp; community check-ins.
        </p>
        <div className="space-y-3">
          {trending.map((cafe, i) => (
            <Link
              key={cafe.slug}
              href={`/cafe/${cafe.slug}`}
              className="flex items-center justify-between rounded-lg bg-white/5 p-3 transition-colors hover:bg-white/10"
            >
              <div className="flex items-center gap-3">
                <div
                  className={
                    i === 0
                      ? "flex h-8 w-8 items-center justify-center rounded bg-bean-origin-gold font-bold text-primary"
                      : "flex h-8 w-8 items-center justify-center rounded border border-white/20 font-bold text-cream-foam"
                  }
                >
                  {i + 1}
                </div>
                <div className="flex flex-col">
                  <span className="font-label-md font-bold">{cafe.name}</span>
                  <span className="font-label-caps text-[10px] text-surface-dim">
                    {cafe.tags[1]} • {cafe.tags[2] ?? cafe.tags[0]}
                  </span>
                </div>
              </div>
              {i === 0 && (
                <span className="flex items-center font-label-caps text-bean-origin-gold">
                  <Icon name="local_fire_department" filled className="text-[14px]" /> Hot
                </span>
              )}
            </Link>
          ))}
        </div>
        <Link
          href="/finder"
          className="mt-4 block text-center font-label-caps text-label-caps uppercase tracking-widest text-bean-origin-gold transition-colors hover:text-white"
        >
          View Full Map
        </Link>
      </div>
    </div>
  );
}
