import Image from "next/image";
import { Icon } from "@/components/icon";

const MAP_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCVQ49EWytMeEwPpVPFSQicHfOlSkXU07AnT_hxDIrZzD01__88NigqBnmRWhKiCmfMiATg_FCMlXtZdq-zFXZopBmz2HjzZ5YI88r7m2MKg5qiGF7M3SJoJOyr0detXWUGRzbVw8_YdqUB9EKiP2dpIDyi0A7-ab9lNNa_cesdWaWaJWtHO0eTRy9s0ExMK9492ScVBui25nqvl5agoSFVkPFuk2R6_ksX3LEixe5WynQTKqkSuKbqaA";

export function FinderMap({ markerLabel }: { markerLabel: string }) {
  return (
    <section className="relative hidden flex-1 bg-surface-container-low md:block">
      <Image
        src={MAP_IMAGE}
        alt="Map of cafe locations"
        fill
        sizes="50vw"
        className="object-cover opacity-80 mix-blend-multiply"
      />
      <div className="map-gradient pointer-events-none absolute inset-0" />

      <div className="absolute right-6 top-6 flex flex-col gap-4">
        <div className="flex flex-col gap-2 rounded-lg border border-tertiary/10 bg-cream-foam/90 p-2 shadow-sm backdrop-blur">
          <button
            className="rounded p-2 text-roasted-espresso transition-colors hover:bg-oat-milk"
            title="Zoom In"
          >
            <Icon name="add" />
          </button>
          <div className="h-px w-full bg-tertiary/10" />
          <button
            className="rounded p-2 text-roasted-espresso transition-colors hover:bg-oat-milk"
            title="Zoom Out"
          >
            <Icon name="remove" />
          </button>
        </div>
        <button
          className="rounded-lg border border-tertiary/10 bg-cream-foam/90 p-3 text-roasted-espresso shadow-sm backdrop-blur transition-colors hover:bg-oat-milk"
          title="My Location"
        >
          <Icon name="my_location" />
        </button>
      </div>

      <div className="group absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 cursor-pointer flex-col items-center">
        <div className="mb-1 whitespace-nowrap rounded-lg bg-roasted-espresso px-3 py-1.5 text-sm font-medium text-cream-foam opacity-0 shadow-sm transition-opacity group-hover:opacity-100">
          {markerLabel}
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-cream-foam bg-sage-leaf text-cream-foam shadow-sm transition-transform hover:scale-110">
          <Icon name="local_cafe" className="text-[16px]" />
        </div>
      </div>
    </section>
  );
}
