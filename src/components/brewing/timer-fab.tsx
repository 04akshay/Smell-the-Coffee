import { Icon } from "@/components/icon";

export function TimerFab() {
  return (
    <div className="fixed bottom-24 right-4 z-40 md:hidden">
      <button className="timer-glow flex h-14 w-14 items-center justify-center rounded-full bg-primary-container text-on-primary-container transition-colors hover:bg-roasted-espresso hover:text-cream-foam">
        <Icon name="timer" className="text-[28px]" />
      </button>
    </div>
  );
}
