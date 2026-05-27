"use client";

import { use, useEffect, useState } from "react";
import { events as defaultEvents } from "../../../data/events";

export default function EventDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const [event, setEvent] = useState<any>(null);

  useEffect(() => {
    const customEvents = JSON.parse(
      localStorage.getItem("customEvents") || "[]"
    );

    const allEvents = [
      ...defaultEvents,
      ...customEvents,
    ];

    const foundEvent = allEvents.find(
      (event) => String(event.id) === id
    );

    setEvent(foundEvent);
  }, [id]);

  if (!event) {
    return (
      <main className="min-h-screen bg-black p-8 text-white">
        <h1 className="text-4xl font-bold">
          Loading...
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black p-8 text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-5xl font-bold">
          {event.title}
        </h1>

        <div className="mb-8 rounded-2xl bg-zinc-900 p-6">
          <p className="mb-3 text-lg text-gray-300">
            📅 <strong>Date:</strong> {event.date}
          </p>

          <p className="mb-3 text-lg text-gray-300">
            📍 <strong>Venue:</strong> {event.location}
          </p>

          <p className="text-lg text-gray-300">
            🏷️ <strong>Category:</strong> {event.category}
          </p>
        </div>

        <div className="mb-8 rounded-2xl bg-zinc-900 p-6">
          <h2 className="mb-4 text-3xl font-bold">
            About the Event
          </h2>

          <p className="whitespace-pre-line text-lg leading-8 text-gray-300">
            {event.description}
          </p>
        </div>

        <div className="mb-8 rounded-2xl bg-zinc-900 p-6">
          <h2 className="mb-4 text-3xl font-bold">
            Event Highlights
          </h2>

          <ul className="space-y-3 text-lg text-gray-300">
            <li>✨ Expert Speakers</li>
            <li>🤝 Networking Opportunities</li>
            <li>🚀 Interactive Sessions</li>
            <li>🎯 Hands-on Activities</li>
          </ul>
        </div>

        <a
          href="/book-ticket"
          className="inline-block rounded-lg bg-purple-600 px-8 py-4 text-lg font-semibold hover:bg-purple-700"
        >
          Book Ticket
        </a>
      </div>
    </main>
  );
}