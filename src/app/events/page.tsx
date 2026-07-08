import { EventTabs } from "@/components/events/event-tabs";
import { DiscoverView } from "@/components/events/discover-view";
import { MyEventsView } from "@/components/events/my-events-view";

export default function EventsPage() {
  return (
    <main className="relative mx-auto max-w-container-max overflow-hidden px-margin-mobile pb-16 pt-8 md:px-margin-desktop">
      <div className="event-ring-1" />
      <div className="event-ring-2" />

      <header className="relative mb-16 flex flex-col items-center text-center">
        <h1 className="mb-6 max-w-4xl font-display-lg-mobile text-[40px] leading-tight text-roasted-espresso md:text-[64px]">
          Community Events
        </h1>
        <p className="max-w-2xl font-body-lg text-lg text-on-surface-variant md:text-xl">
          Discover curated cuppings, throwdowns, and workshops happening in your local
          specialty coffee scene.
        </p>
      </header>

      <div className="relative">
        <EventTabs discover={<DiscoverView />} mine={<MyEventsView />} />
      </div>
    </main>
  );
}
