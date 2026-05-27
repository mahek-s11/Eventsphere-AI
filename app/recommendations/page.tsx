"use client";

import { useState } from "react";

export default function RecommendationsPage() {
  const [interests, setInterests] = useState("");
  const [recommendations, setRecommendations] = useState("");
  const [loading, setLoading] = useState(false);

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
          disabled={loading}
          onClick={async () => {
            try {
              setLoading(true);
              setRecommendations("");

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
            } finally {
              setLoading(false);
            }
          }}
          className="mb-6 w-full rounded-lg bg-purple-600 py-3 hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading
            ? "Generating..."
            : "Get Recommendations"}
        </button>

        <div className="rounded-lg bg-zinc-800 p-4">
          <div className="whitespace-pre-wrap text-gray-300">
            {loading ? (
              <div className="animate-pulse">
                <p className="font-medium text-purple-400">
                  ✨ AI is analyzing your interests...
                </p>

                <p className="mt-2 text-gray-400">
                  Finding the best events for you...
                </p>
              </div>
            ) : (
              recommendations ||
              "AI recommendations will appear here..."
            )}
          </div>

          {recommendations && !loading && (
            <button
              onClick={() => {
                navigator.clipboard.writeText(
                  recommendations
                );
                alert("Recommendations copied!");
              }}
              className="mt-4 rounded-lg bg-purple-600 px-4 py-2 hover:bg-purple-700"
            >
              Copy Recommendations
            </button>
          )}
        </div>
      </div>
    </main>
  );
}