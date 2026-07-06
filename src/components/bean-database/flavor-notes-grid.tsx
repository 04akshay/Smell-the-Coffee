import Image from "next/image";

type FlavorNote = {
  label: string;
  description: string;
  quadrant: "top-left" | "top-right" | "bottom-left" | "bottom-right";
};

const QUADRANT_STYLES: Record<
  FlavorNote["quadrant"],
  { objectPosition: string; clipPath: string }
> = {
  "top-left": { objectPosition: "0% 0%", clipPath: "inset(0 50% 50% 0)" },
  "top-right": { objectPosition: "100% 0%", clipPath: "inset(0 0 50% 50%)" },
  "bottom-left": { objectPosition: "0% 100%", clipPath: "inset(50% 50% 0 0)" },
  "bottom-right": { objectPosition: "100% 100%", clipPath: "inset(50% 0 0 50%)" },
};

const SPRITE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAKcDiMF8MxtdM6EB8g1BmjnnR6hvmy_8J188RDfG7gZQN3BA9LQIVqg52Zyl17WbHL6_qcMN9txpL2LMWe689kXGEChyPJgpIx9DyFm8Qqr3hNe4Y9AzhmqoX0Zm_fuXGDIKaolMhsILtIVEtTTpEtNGLB1xIw5D1bR9MnyMyG7NXheXrykf8N5vToWJ4hoWBsoHDOWbjl51XfIioQY_boVp6Xh97p1n511Eo-09GAsWxT_PYpfvEU8A";

export function FlavorNotesGrid({ notes }: { notes: FlavorNote[] }) {
  return (
    <section className="mb-section-gap">
      <h3 className="mb-8 text-center font-headline-sm text-headline-sm font-semibold text-roasted-espresso">
        Browse by Flavor Notes
      </h3>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
        {notes.map((note) => {
          const style = QUADRANT_STYLES[note.quadrant];
          return (
            <a
              key={note.label}
              href="#"
              className="group flex flex-col items-center justify-center rounded-xl border border-outline-variant/40 bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-oat-milk transition-colors group-hover:bg-inverse-primary/20">
                <div className="relative h-8 w-8">
                  <Image
                    src={SPRITE}
                    alt=""
                    fill
                    sizes="32px"
                    className="object-contain opacity-80 mix-blend-multiply"
                    style={{ objectPosition: style.objectPosition, clipPath: style.clipPath }}
                  />
                </div>
              </div>
              <h4 className="font-label-md text-label-md font-bold text-roasted-espresso">
                {note.label}
              </h4>
              <p className="mt-1 text-center text-xs text-on-surface-variant">
                {note.description}
              </p>
            </a>
          );
        })}
      </div>
    </section>
  );
}
