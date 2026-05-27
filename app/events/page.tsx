"use client";

import { useEffect, useState } from "react";
import { events as defaultEvents } from "../../data/events";

export default function EventsPage() {
  const [allEvents, setAllEvents] =
    useState(defaultEvents);

  const [searchTerm, setSearchTerm] =
    useState("");

  useEffect(() => {
    const customEvents = JSON.parse(
      localStorage.getItem("customEvents") || "[]"
    );

    setAllEvents([
      ...defaultEvents,
      ...customEvents,
    ]);
  }, []);

  const filteredEvents = allEvents.filter(
    (event) =>
      event.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      event.category
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-black p-8 text-white">
      <h1 className="mb-8 text-5xl font-bold">
        All Events
      </h1>

      <input
        type="text"
        placeholder="🔍 Search events..."
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(e.target.value)
        }
        className="mb-8 w-full rounded-lg bg-zinc-900 p-4 text-white outline-none"
      />

      <div className="grid gap-6 md:grid-cols-3">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="rounded-2xl bg-zinc-900 p-6"
          >
            <h2 className="text-2xl font-bold">
              {event.title}
            </h2>

            <p className="mt-2 text-gray-400">
              {event.category}
            </p>

            <p className="mt-2 text-gray-500">
              📍 {event.location}
            </p>

            <p className="mt-2 text-gray-500">
              📅 {event.date}
            </p>

            <a
              href={`/events/${event.id}`}
              className="mt-4 inline-block rounded-lg bg-purple-600 px-4 py-2"
            >
              View Details
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}