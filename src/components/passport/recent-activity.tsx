import Image from "next/image";
import { Icon } from "@/components/icon";

type Activity =
  | {
      kind: "avatar";
      avatar: string;
      alt: string;
      actor: string;
      action: string;
      link?: string;
      timestamp: string;
    }
  | {
      kind: "icon";
      icon: string;
      iconClasses: string;
      actor: string;
      action: string;
      highlight?: string;
      timestamp: string;
    };

export function RecentActivity({ activity }: { activity: Activity[] }) {
  return (
    <div className="ambient-shadow flex flex-col rounded-xl border border-tertiary/10 bg-surface-container-lowest p-6">
      <div className="mb-4 flex items-center gap-2">
        <Icon name="history" className="text-primary" />
        <h2 className="font-headline-sm text-headline-sm font-semibold text-roasted-espresso">
          Recent Activity
        </h2>
      </div>

      <div className="space-y-4">
        {activity.map((item, i) => (
          <div
            key={`${item.actor}-${i}`}
            className={
              i < activity.length - 1
                ? "flex items-start gap-3 border-b border-tertiary/5 pb-3"
                : "flex items-start gap-3"
            }
          >
            {item.kind === "avatar" ? (
              <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full">
                <Image src={item.avatar} alt={item.alt} fill sizes="32px" className="object-cover" />
              </div>
            ) : (
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${item.iconClasses}`}
              >
                <Icon name={item.icon} className="text-[16px]" />
              </div>
            )}
            <div>
              <p className="text-sm leading-snug text-roasted-espresso">
                <span className="font-bold">{item.actor}</span> {item.action}
                {item.kind === "avatar" && item.link && (
                  <a href="#" className="font-semibold text-[#D85E42] hover:underline">
                    {" "}
                    {item.link}
                  </a>
                )}
                {item.kind === "icon" && item.highlight && (
                  <span className="font-bold"> {item.highlight}</span>
                )}
              </p>
              <p className="mt-1 text-[10px] text-on-surface-variant/70">{item.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
