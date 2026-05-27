"use client";

import { useState } from "react";

export default function AIGeneratorPage() {
  const [eventName, setEventName] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

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
          disabled={loading}
          onClick={async () => {
            try {
              setLoading(true);
              setDescription("");

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
            } finally {
              setLoading(false);
            }
          }}
          className="mb-6 w-full rounded-lg bg-purple-600 py-3 hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading
            ? "Generating..."
            : "Generate Description"}
        </button>

        <div className="rounded-lg bg-zinc-800 p-4">
          <div className="whitespace-pre-wrap text-gray-300">
            {loading ? (
              <div className="animate-pulse">
                <p className="font-medium text-purple-400">
                  ✨ AI is thinking...
                </p>

                <p className="mt-2 text-gray-400">
                  Generating an engaging event
                  description...
                </p>
              </div>
            ) : (
              description ||
              "Generated description will appear here..."
            )}
          </div>

          {description && !loading && (
            <button
              onClick={() => {
                navigator.clipboard.writeText(
                  description
                );
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