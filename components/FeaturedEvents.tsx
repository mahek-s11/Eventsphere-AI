import EventCard from "./EventCard";

export default function FeaturedEvents() {
  return (
    <section className="px-8 py-20">
      <h2 className="mb-10 text-center text-4xl font-bold">
        Featured Events
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        <EventCard
          title="AI Hackathon Pune"
          category="Technology"
          date="12 June 2026"
        />

        <EventCard
          title="Startup Summit"
          category="Business"
          date="18 June 2026"
        />

        <EventCard
          title="Music Fest"
          category="Entertainment"
          date="25 June 2026"
        />
      </div>
    </section>
  );
}