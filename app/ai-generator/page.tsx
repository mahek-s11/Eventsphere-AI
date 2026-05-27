"use client";

import { useState } from "react";

export default function AIGeneratorPage() {
  const [eventName, setEventName] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  return (
    <main className="min-h-screen bg-black p-8 text-white">
      <div className="mx-auto max-w-2xl rounded-2xl bg-zinc-900 p-8">
        <h1 className="mb-6 text-4xl font-bold">
          AI Event Description Generator
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
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="mb-4 w-full rounded-lg bg-zinc-800 p-3"
        />

        <button
          onClick={async () => {
            try {
              const response = await fetch(
                "/api/generate-description",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    eventName,
                    category,
                    location,
                  }),
                }
              );

              const data = await response.json();

              setDescription(data.description);
            } catch (error) {
              setDescription(
                "Failed to generate description."
              );
            }
          }}
          className="mb-6 w-full rounded-lg bg-purple-600 py-3 hover:bg-purple-700"
        >
          Generate Description
        </button>

<div className="rounded-lg bg-zinc-800 p-4">
  <p className="whitespace-pre-wrap text-gray-300">
    {description ||
      "Generated description will appear here..."}
  </p>

  {description && (
    <button
      onClick={() => {
        navigator.clipboard.writeText(description);
        alert("Description copied!");
      }}
      className="mt-4 rounded-lg bg-purple-600 px-4 py-2 hover:bg-purple-700"
    >
      Copy Description
    </button>
  )}
</div>
      </div>
    </main>
  );
}