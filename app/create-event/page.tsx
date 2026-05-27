"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateEventPage() {
    const router = useRouter();
  const [eventName, setEventName] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <main className="min-h-screen bg-black p-8 text-white">
      <div className="mx-auto max-w-2xl rounded-2xl bg-zinc-900 p-8">
        <h1 className="mb-6 text-4xl font-bold">
          Create Event
        </h1>

        <input
          type="text"
          placeholder="Event Name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          className="mb-4 w-full rounded-lg bg-zinc-800 p-3"
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mb-4 w-full rounded-lg bg-zinc-800 p-3"
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="mb-4 w-full rounded-lg bg-zinc-800 p-3"
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="mb-4 w-full rounded-lg bg-zinc-800 p-3"
        />

        <button
          disabled={loading}
          onClick={async () => {
            try {
              setLoading(true);

              const response = await fetch(
                "/api/generate-description",
                {
                  method: "POST",
                  headers: {
                    "Content-Type":
                      "application/json",
                  },
                  body: JSON.stringify({
                    eventName,
                    category,
                    location,
                  }),
                }
              );

              const data = await response.json();

              setDescription(
                data.description
              );
            } catch (error) {
              alert(
                "Failed to generate description."
              );
            } finally {
              setLoading(false);
            }
          }}
          className="mb-4 w-full rounded-lg bg-zinc-700 py-3 hover:bg-zinc-600 disabled:opacity-70"
        >
          {loading
            ? "Generating..."
            : "🤖 Generate AI Description"}
        </button>

        <textarea
          placeholder="Event Description"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          rows={8}
          className="mb-4 w-full rounded-lg bg-zinc-800 p-3"
        />

        {loading && (
          <div className="mb-4 animate-pulse rounded-lg bg-zinc-800 p-4">
            <p className="text-purple-400 font-medium">
              ✨ AI is generating event description...
            </p>
          </div>
        )}

     <button
  onClick={() => {
  const formattedDate = new Date(date).toLocaleDateString(
  "en-GB",
  {
    day: "numeric",
    month: "long",
    year: "numeric",
  }
);

const newEvent = {
  id: Date.now(),
  title: eventName,
  category,
  date: formattedDate,
  location,
  description,
};

    const existingEvents = JSON.parse(
      localStorage.getItem("customEvents") || "[]"
    );

    existingEvents.push(newEvent);

    localStorage.setItem(
      "customEvents",
      JSON.stringify(existingEvents)
    );

    alert("Event created successfully!");

    router.push("/events");
  }}
  className="w-full rounded-lg bg-purple-600 py-3 hover:bg-purple-700"
>
  Create Event
</button>
      </div>
    </main>
  );
}