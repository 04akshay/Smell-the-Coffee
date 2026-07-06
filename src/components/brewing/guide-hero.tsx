import Image from "next/image";
import { Icon } from "@/components/icon";

export function GuideHero({
  title,
  image,
  time,
  difficulty,
  flavor,
}: {
  title: string;
  image: string;
  time: string;
  difficulty: string;
  flavor: string;
}) {
  return (
    <header className="mb-section-gap">
      <h1 className="mb-6 font-display-lg-mobile text-display-lg-mobile font-bold text-roasted-espresso md:font-display-lg md:text-display-lg">
        {title}
      </h1>
      <div className="relative mb-8 h-64 w-full overflow-hidden rounded-xl md:h-[480px]">
        <Image src={image} alt={title} fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-roasted-espresso/40 to-transparent" />
      </div>
      <div className="flex flex-wrap gap-4">
        <span className="flex items-center gap-2 rounded-full bg-sage-leaf/10 px-4 py-2 font-label-caps text-label-caps text-sage-leaf">
          <Icon name="timer" className="text-[18px]" /> {time}
        </span>
        <span className="flex items-center gap-2 rounded-full bg-sage-leaf/10 px-4 py-2 font-label-caps text-label-caps text-sage-leaf">
          <Icon name="school" className="text-[18px]" /> {difficulty}
        </span>
        <span className="flex items-center gap-2 rounded-full bg-sage-leaf/10 px-4 py-2 font-label-caps text-label-caps text-sage-leaf">
          <Icon name="local_florist" className="text-[18px]" /> {flavor}
        </span>
      </div>
    </header>
  );
}
