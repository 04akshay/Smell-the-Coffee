"use client";

import { useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { Icon } from "@/components/icon";
import { PassportStampFlow } from "@/components/cafe/passport-stamp-flow";
import { isCafeStamped, subscribeToStamps } from "@/lib/passport-stamps";

function getServerSnapshot() {
  return false;
}

export function CafeLocationPassport({
  mapImage,
  address,
  checkInCount,
  cafeSlug,
  cafeName,
  neighborhood,
  badgeName,
}: {
  mapImage: string;
  address: string;
  checkInCount: number;
  cafeSlug: string;
  cafeName: string;
  neighborhood: string;
  badgeName: string;
}) {
  const [open, setOpen] = useState(false);
  const stamped = useSyncExternalStore(
    subscribeToStamps,
    () => isCafeStamped(cafeSlug),
    getServerSnapshot
  );

  return (
    <section className="grid grid-cols-1 items-start gap-gutter md:grid-cols-2">
      <div className="overflow-hidden rounded-xl border border-tertiary/10 bg-surface-bright shadow-sm">
        <div className="relative h-64 w-full bg-surface-variant">
          <Image src={mapImage} alt={`Map to ${address}`} fill sizes="50vw" className="object-cover" />
        </div>
        <div className="p-6">
          <h3 className="mb-2 font-headline-sm text-headline-sm font-semibold text-roasted-espresso">
            Location
          </h3>
          <p className="mb-4 font-body-md text-body-md text-on-surface-variant">
            {address}
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 font-label-md text-label-md text-sage-leaf transition-colors hover:text-roasted-espresso"
          >
            Get Directions <Icon name="arrow_forward" className="text-sm" />
          </a>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-xl border border-tertiary/10 bg-oat-milk p-8">
        <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-cream-foam opacity-50 blur-3xl" />
        <div className="relative z-10 flex h-full flex-col">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="font-headline-sm text-headline-sm font-semibold text-roasted-espresso">
              Coffee Passport
            </h3>
            <Icon name="workspace_premium" className="text-4xl text-bean-origin-gold" />
          </div>
          <p className="mb-8 flex-grow font-body-md text-body-md text-on-surface-variant">
            Join {checkInCount} others who have checked in here. Collect a
            digital stamp for your profile and unlock tasting notes for their
            seasonal beans.
          </p>
          <button
            onClick={() => setOpen(true)}
            className={
              stamped
                ? "flex w-full items-center justify-center gap-2 rounded-lg border-2 border-sage-leaf bg-transparent px-6 py-4 font-label-md text-label-md text-sage-leaf transition-colors hover:bg-sage-leaf/10"
                : "flex w-full items-center justify-center gap-2 rounded-lg bg-roasted-espresso px-6 py-4 font-label-md text-label-md text-cream-foam shadow-[0_4px_24px_rgba(62,39,35,0.08)] transition-colors hover:bg-tertiary-container"
            }
          >
            <Icon name="check_circle" filled={stamped} />
            {stamped ? "Passport Stamped" : "Stamp My Passport"}
          </button>
        </div>
      </div>

      <PassportStampFlow
        open={open}
        onClose={() => setOpen(false)}
        cafeSlug={cafeSlug}
        cafeName={cafeName}
        neighborhood={neighborhood}
        badgeName={badgeName}
      />
    </section>
  );
}
