import Link from "next/link";
import { Icon } from "./icon";

export function MobileTopBar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex h-16 w-full items-center justify-between border-b border-tertiary/10 bg-cream-foam px-margin-mobile md:hidden">
      <div className="font-display-lg-mobile text-headline-sm tracking-tight text-roasted-espresso">
        Smell the Coffee
      </div>
      <div className="flex items-center gap-4 text-roasted-espresso">
        <Link href="/finder">
          <Icon name="search" />
        </Link>
        <button>
          <Icon name="notifications" />
        </button>
      </div>
    </nav>
  );
}
