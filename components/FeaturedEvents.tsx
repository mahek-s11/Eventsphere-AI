import EventCard from "./EventCard";
import { events } from "../data/events";

export default function FeaturedEvents() {
  return (
    <section className="px-8 py-20">
      <h2 className="mb-10 text-center text-4xl font-bold">
        Featured Events
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {events.map((event) => (
          <EventCard
            key={event.id}
            id={event.id}
            title={event.title}
            category={event.category}
            date={event.date}
            location={event.location}
          />
        ))}
      </div>
    </section>
  );
}