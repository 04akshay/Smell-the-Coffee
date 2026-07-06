import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-section-gap w-full bg-roasted-espresso px-margin-mobile py-12 pb-24 md:px-margin-desktop md:pb-12">
      <div className="mx-auto flex max-w-container-max flex-col items-center justify-between gap-6 md:flex-row">
        <div className="font-headline-sm text-headline-sm text-cream-foam">Smell the Coffee</div>
        <div className="flex flex-wrap justify-center gap-6 font-label-md text-label-md text-on-tertiary-container">
          <a href="#" className="opacity-80 transition-colors hover:text-bean-origin-gold hover:opacity-100">
            About Us
          </a>
          <Link
            href="/brewing-guide"
            className="opacity-80 transition-colors hover:text-bean-origin-gold hover:opacity-100"
          >
            Brewing Guides
          </Link>
          <a href="#" className="opacity-80 transition-colors hover:text-bean-origin-gold hover:opacity-100">
            Privacy Policy
          </a>
          <a href="#" className="opacity-80 transition-colors hover:text-bean-origin-gold hover:opacity-100">
            Contact
          </a>
        </div>
        <div className="font-label-md text-label-md text-on-tertiary-container">
          © 2024 Smell the Coffee. Brewed with precision.
        </div>
      </div>
    </footer>
  );
}
