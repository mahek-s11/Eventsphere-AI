"use client";

import { useEffect, useState } from "react";
import EventCard from "./EventCard";
import { events as defaultEvents } from "../data/events";

export default function FeaturedEvents() {
  const [allEvents, setAllEvents] =
    useState(defaultEvents);

  useEffect(() => {
    const customEvents = JSON.parse(
      localStorage.getItem("customEvents") || "[]"
    );

    setAllEvents([
      ...defaultEvents,
      ...customEvents,
    ]);
  }, []);

  return (
    <section className="px-8 py-20">
      <h2 className="mb-10 text-center text-4xl font-bold">
        Featured Events
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {allEvents.map((event) => (
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