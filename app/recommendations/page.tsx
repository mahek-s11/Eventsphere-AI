"use client";

import { useState } from "react";

export default function RecommendationsPage() {
  const [interests, setInterests] = useState("");
  const [recommendations, setRecommendations] = useState("");

  return (
    <main className="min-h-screen bg-black p-8 text-white">
      <div className="mx-auto max-w-2xl rounded-2xl bg-zinc-900 p-8">
        <h1 className="mb-6 text-4xl font-bold">
          AI Event Recommendations
        </h1>

        <input
          type="text"
          placeholder="Enter your interests (AI, Startups, Technology...)"
          value={interests}
          onChange={(e) => setInterests(e.target.value)}
          className="mb-4 w-full rounded-lg bg-zinc-800 p-3"
        />

        <button
          onClick={async () => {
            try {
              const response = await fetch(
                "/api/recommendations",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    interests,
                  }),
                }
              );

              const data = await response.json();

              setRecommendations(
                data.recommendations
              );
            } catch (error) {
              setRecommendations(
                "Failed to generate recommendations."
              );
            }
          }}
          className="mb-6 w-full rounded-lg bg-purple-600 py-3 hover:bg-purple-700"
        >
          Get Recommendations
        </button>

        <div className="rounded-lg bg-zinc-800 p-4">
          <p className="whitespace-pre-wrap text-gray-300">
            {recommendations ||
              "AI recommendations will appear here..."}
          </p>
        </div>
      </div>
    </main>
  );
}