"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Icon } from "./icon";

const links = [
  { label: "Home", href: "/", icon: "home" },
  { label: "Finder", href: "/finder", icon: "explore" },
  { label: "Beans", href: "/bean-database", icon: "database" },
  { label: "Brew", href: "/brewing-guide", icon: "coffee_maker" },
  { label: "Events", href: "/events", icon: "event" },
  { label: "Passport", href: "/passport", icon: "import_contacts" },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 flex w-full items-center justify-around border-t border-tertiary/10 bg-cream-foam/90 px-1 py-3 shadow-sm backdrop-blur-md md:hidden">
      {links.map((link) => {
        const active = link.href === pathname;
        const LinkComponent = link.href === "#" ? "a" : Link;
        return (
          <LinkComponent
            key={link.label}
            href={link.href}
            className={
              active
                ? "flex scale-95 flex-col items-center justify-center rounded-xl bg-secondary-container px-1.5 py-1 text-on-secondary-container transition-transform active:scale-90"
                : "flex scale-95 flex-col items-center justify-center rounded-xl px-1.5 py-1 text-on-surface-variant transition-transform hover:bg-oat-milk active:scale-90"
            }
          >
            <Icon name={link.icon} filled={active} />
            <span className="mt-1 font-label-md text-[10px]">{link.label}</span>
          </LinkComponent>
        );
      })}
    </nav>
  );
}
