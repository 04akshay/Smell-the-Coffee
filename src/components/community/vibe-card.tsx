"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/icon";
import {
  isFollowing,
  isPostLiked,
  isSpotSaved,
  toggleFollowing,
  toggleLikedPost,
  toggleSpotSaved,
  subscribeToCommunityInteractions,
} from "@/lib/community-interactions";

type Metric = {
  label: string;
  icon: string;
  filled: number;
  filledClasses: string;
};

function getServerFalse() {
  return false;
}

export function VibeCard({
  id,
  avatar,
  name,
  levelLabel,
  cafeName,
  cafeSlug,
  image,
  message,
  tags,
  metrics,
  likeCount,
  commentCount,
}: {
  id: string;
  avatar: string;
  name: string;
  levelLabel: string;
  cafeName?: string;
  cafeSlug?: string;
  image?: string;
  message: React.ReactNode;
  tags: { label: string; emphasis?: boolean }[];
  metrics?: Metric[];
  likeCount: number;
  commentCount: number;
}) {
  const following = useSyncExternalStore(
    subscribeToCommunityInteractions,
    () => isFollowing(name),
    getServerFalse
  );
  const liked = useSyncExternalStore(
    subscribeToCommunityInteractions,
    () => isPostLiked(id),
    getServerFalse
  );
  const saved = useSyncExternalStore(
    subscribeToCommunityInteractions,
    () => (cafeSlug ? isSpotSaved(cafeSlug) : false),
    getServerFalse
  );

  const displayedLikes = likeCount + (liked ? 1 : 0);

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
          onClick={() => toggleFollowing(name)}
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

      {cafeName && (
        <p className="mb-4 flex items-center gap-1 font-label-caps text-label-caps text-on-surface-variant">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          Checked into{" "}
          {cafeSlug ? (
            <Link href={`/cafe/${cafeSlug}`} className="font-bold text-sage-leaf hover:underline">
              {cafeName}
            </Link>
          ) : (
            <span className="font-bold text-primary">{cafeName}</span>
          )}
        </p>
      )}

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

      <div className="mt-4 flex items-center justify-between border-t border-tertiary/5 pt-3">
        <div className="flex gap-4">
          <button
            onClick={() => toggleLikedPost(id)}
            className={
              liked
                ? "flex items-center gap-1 font-label-md text-label-md text-sage-leaf transition-colors"
                : "flex items-center gap-1 font-label-md text-label-md text-on-surface-variant transition-colors hover:text-primary"
            }
          >
            <Icon name="thumb_up" filled={liked} className="text-[18px]" /> {displayedLikes}
          </button>
          <span className="flex items-center gap-1 font-label-md text-label-md text-on-surface-variant">
            <Icon name="chat_bubble_outline" className="text-[18px]" /> {commentCount}
          </span>
        </div>
        {cafeSlug && (
          <button
            onClick={() => toggleSpotSaved(cafeSlug)}
            className={
              saved
                ? "flex items-center gap-1 rounded-full bg-primary px-3 py-1 font-label-caps text-label-caps text-cream-foam transition-colors"
                : "flex items-center gap-1 rounded-full border border-tertiary/20 px-3 py-1 font-label-caps text-label-caps text-primary transition-colors hover:bg-primary hover:text-cream-foam"
            }
          >
            <Icon name="bookmark" filled={saved} className="text-[14px]" />
            {saved ? "Saved" : "Save Spot"}
          </button>
        )}
      </div>
    </div>
  );
}
