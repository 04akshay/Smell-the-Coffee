import { FeaturedEvent } from "@/components/events/featured-event";
import { UpcomingHorizonsCarousel } from "@/components/events/upcoming-horizons-carousel";
import { featuredEvent, upcomingEvents } from "@/lib/events";

export function DiscoverView() {
  return (
    <div>
      <FeaturedEvent event={featuredEvent} />
      <UpcomingHorizonsCarousel events={upcomingEvents} />
    </div>
  );
}
