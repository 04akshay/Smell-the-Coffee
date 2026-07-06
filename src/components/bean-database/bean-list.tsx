import Link from "next/link";
import { Icon } from "@/components/icon";

export type BeanListItem = {
  name: string;
  process: string;
  processClasses: string;
  notes: string;
  href?: string;
};

export function BeanList({ beans }: { beans: BeanListItem[] }) {
  return (
    <section className="mb-section-gap pb-20 md:pb-0">
      <h3 className="mb-4 font-headline-sm text-headline-sm font-semibold text-roasted-espresso">
        Complete Index
      </h3>
      <div className="border-t border-outline-variant/20">
        {beans.length > 0 ? (
          beans.map((bean) => {
            const content = (
              <>
                <div>
                  <div className="mb-1 flex items-center gap-2">
                    <h5 className="font-label-md text-label-md font-bold text-roasted-espresso transition-colors group-hover:text-sage-leaf">
                      {bean.name}
                    </h5>
                    <span
                      className={`rounded px-2 py-0.5 font-label-caps text-[10px] uppercase ${bean.processClasses}`}
                    >
                      {bean.process}
                    </span>
                  </div>
                  <p className="font-body-md text-sm text-on-surface-variant">
                    Notes: {bean.notes}
                  </p>
                </div>
                <Icon
                  name="chevron_right"
                  className="text-outline transition-colors group-hover:text-roasted-espresso"
                />
              </>
            );
            const className =
              "group flex cursor-pointer items-center justify-between border-b border-outline-variant/20 px-2 py-4 transition-colors hover:bg-surface-container-low";

            return bean.href ? (
              <Link key={bean.name} href={bean.href} className={className}>
                {content}
              </Link>
            ) : (
              <div key={bean.name} className={className}>
                {content}
              </div>
            );
          })
        ) : (
          <p className="py-12 text-center font-body-md text-body-md text-on-surface-variant">
            No beans match this search.
          </p>
        )}
      </div>
    </section>
  );
}
