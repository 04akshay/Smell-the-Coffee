import { Icon } from "@/components/icon";

type Roaster = {
  name: string;
  blend: string;
};

export function SourcedByList({ roasters }: { roasters: Roaster[] }) {
  return (
    <div>
      <h2 className="mb-6 flex items-center gap-2 font-headline-sm text-headline-sm font-semibold text-primary-container">
        <Icon name="factory" className="text-bean-origin-gold" /> Sourced By
      </h2>
      <div className="space-y-4">
        {roasters.map((roaster) => (
          <div
            key={roaster.name}
            className="flex items-center gap-4 rounded-lg border border-tertiary/10 bg-surface-container-lowest p-4 transition-colors hover:border-bean-origin-gold"
          >
            <div>
              <div className="font-label-md text-label-md font-bold text-primary-container">
                {roaster.name}
              </div>
              <div className="text-sm font-body-md text-body-md text-on-surface-variant">
                {roaster.blend}
              </div>
            </div>
            <button className="ml-auto rounded border border-sage-leaf px-3 py-1 font-label-caps text-label-caps text-sage-leaf transition-colors hover:text-primary-container">
              BUY
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
