"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Icon } from "./icon";

const links = [
  { label: "Home", href: "/" },
  { label: "Coffee Finder", href: "/finder" },
  { label: "Bean Database", href: "/bean-database" },
  { label: "Brewing Guide", href: "/brewing-guide" },
  { label: "Events", href: "/events" },
  { label: "Community", href: "/community" },
  { label: "Passport", href: "/passport" },
];

export function TopNav() {
  const pathname = usePathname();
  const showSearch = pathname === "/finder";

  return (
    <nav className="sticky top-0 z-50 hidden h-20 w-full items-center border-b border-tertiary/10 bg-cream-foam px-margin-desktop transition-all duration-300 ease-in-out md:flex">
      <div className="mx-auto flex w-full max-w-container-max items-center justify-between">
        <div className="shrink-0 font-display-lg text-headline-md tracking-tight text-roasted-espresso">
          Smell the Coffee
        </div>

        {showSearch && (
          <div className="mx-8 max-w-md flex-1">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search origins, cafes..."
                className="w-full rounded-t-lg border-none border-b-2 border-outline-variant bg-oat-milk px-4 py-2 font-body-md text-body-md placeholder-on-tertiary-container transition-colors focus:border-sage-leaf focus:ring-0"
              />
              <Icon
                name="search"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant"
              />
            </div>
          </div>
        )}

        <div className="flex items-center gap-8">
          {links.map((link) => {
            const active = link.href === pathname;
            const LinkComponent = link.href === "#" ? "a" : Link;
            return (
              <LinkComponent
                key={link.label}
                href={link.href}
                className={
                  active
                    ? "border-b-2 border-roasted-espresso py-7 font-body-md text-body-md font-bold text-roasted-espresso transition-colors hover:text-sage-leaf"
                    : "border-b-2 border-transparent py-7 font-body-md text-body-md text-on-surface-variant transition-colors hover:text-sage-leaf"
                }
              >
                {link.label}
              </LinkComponent>
            );
          })}
        </div>
        <div className="ml-4 flex items-center gap-4 text-roasted-espresso">
          {!showSearch && (
            <Link
              href="/finder"
              className="rounded-full p-2 transition-colors hover:bg-oat-milk hover:text-sage-leaf"
            >
              <Icon name="search" />
            </Link>
          )}
          <button className="rounded-full p-2 transition-colors hover:bg-oat-milk hover:text-sage-leaf">
            <Icon name="notifications" />
          </button>
          <button className="rounded-full p-2 transition-colors hover:bg-oat-milk hover:text-sage-leaf">
            <Icon name="person" />
          </button>
        </div>
      </div>
    </nav>
  );
}
