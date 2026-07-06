"use client";

import { useState } from "react";
import Image from "next/image";
import { Icon } from "@/components/icon";

type Metric = {
  label: string;
  icon: string;
  filled: number;
  filledClasses: string;
};

export function VibeCard({
  avatar,
  name,
  levelLabel,
  image,
  message,
  tags,
  metrics,
}: {
  avatar: string;
  name: string;
  levelLabel: string;
  image?: string;
  message: React.ReactNode;
  tags: { label: string; emphasis?: boolean }[];
  metrics?: Metric[];
}) {
  const [following, setFollowing] = useState(false);

  return (
    <div className="masonry-item rounded-xl border border-tertiary/10 bg-surface-container-lowest p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-4 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full">
            <Image src={avatar} alt={name} fill sizes="40px" className="object-cover" />
          </div>
          <div>
            <h3 className="font-label-md text-label-md font-bold text-primary">{name}</h3>
            <p className="font-label-caps text-label-caps text-on-surface-variant">{levelLabel}</p>
          </div>
        </div>
        <button
          onClick={() => setFollowing((v) => !v)}
          className={
            following
              ? "rounded-full bg-sage-leaf px-3 py-1 font-label-caps text-label-caps text-cream-foam transition-colors"
              : "rounded-full border border-sage-leaf px-3 py-1 font-label-caps text-label-caps text-sage-leaf transition-colors hover:bg-sage-leaf hover:text-cream-foam"
          }
        >
          {following ? "Following" : "Follow"}
        </button>
      </div>

      {image && (
        <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg">
          <Image src={image} alt="" fill sizes="(min-width: 1024px) 33vw, 50vw" className="object-cover" />
        </div>
      )}

      <p className="mb-4 font-body-md text-body-md text-on-surface">{message}</p>

      <div className="mb-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag.label}
            className={
              tag.emphasis
                ? "rounded-full bg-sage-leaf px-3 py-1 font-label-caps text-label-caps text-cream-foam"
                : "rounded-full bg-surface-container-high px-3 py-1 font-label-caps text-label-caps text-on-surface-variant"
            }
          >
            {tag.label}
          </span>
        ))}
      </div>

      {metrics && (
        <div className="space-y-3 border-t border-tertiary/5 pt-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="flex items-center justify-between font-label-caps text-label-caps"
            >
              <span className="flex items-center gap-1 text-on-surface-variant">
                <Icon name={metric.icon} className="text-[14px]" /> {metric.label}
              </span>
              <div className="flex gap-1">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={
                      i < metric.filled
                        ? `h-2 w-4 rounded-full ${metric.filledClasses}`
                        : "h-2 w-4 rounded-full bg-surface-variant"
                    }
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
