"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icon";

export type BrewGuide = {
  name: string;
  category: string;
  description: string;
  image: string;
  flavorTags: string[];
  difficulty: string;
  time: string;
  href?: string;
};

export function GuideCard({ guide }: { guide: BrewGuide }) {
  const [bookmarked, setBookmarked] = useState(false);

  const content = (
    <>
      <div className="relative aspect-video overflow-hidden bg-oat-milk">
        <Image
          src={guide.image}
          alt={guide.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setBookmarked((v) => !v);
          }}
          className="absolute right-4 top-4 text-white drop-shadow-md transition-colors hover:text-cream-foam"
        >
          <Icon name="bookmark" filled={bookmarked} />
        </button>
      </div>
      <div className="flex flex-grow flex-col p-6">
        <div className="mb-2 flex items-start justify-between">
          <h4 className="font-headline-sm text-headline-sm font-semibold text-roasted-espresso">
            {guide.name}
          </h4>
          <span className="rounded bg-surface-container px-2 py-1 font-label-caps text-[10px] uppercase text-on-surface-variant">
            {guide.category}
          </span>
        </div>
        <p className="mb-4 line-clamp-2 font-body-md text-sm text-on-surface-variant">
          {guide.description}
        </p>
        <div className="mt-auto space-y-3">
          <div className="flex gap-2">
            {guide.flavorTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-sage-leaf/10 px-2 py-1 font-label-caps text-[10px] text-sage-leaf"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between border-t border-tertiary/5 pt-3 font-label-caps text-label-caps text-on-surface-variant">
            <span className="flex items-center gap-1">
              <Icon name="signal_cellular_alt" className="text-[16px]" /> {guide.difficulty}
            </span>
            <span className="flex items-center gap-1">
              <Icon name="schedule" className="text-[16px]" /> {guide.time}
            </span>
          </div>
        </div>
      </div>
    </>
  );

  const className =
    "group flex h-full cursor-pointer flex-col overflow-hidden rounded-xl border border-tertiary/10 bg-surface-container-lowest transition-all hover:border-tertiary/30";

  if (guide.href) {
    return (
      <Link href={guide.href} className={className}>
        {content}
      </Link>
    );
  }

  return <div className={className}>{content}</div>;
}
