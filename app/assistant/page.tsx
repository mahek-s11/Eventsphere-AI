"use client";

import { useState } from "react";

export default function AssistantPage() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <main className="min-h-screen bg-black p-8 text-white">
      <div className="mx-auto max-w-3xl rounded-2xl bg-zinc-900 p-8">
        <h1 className="mb-6 text-4xl font-bold">
          🤖 EventSphere AI Assistant
        </h1>

<div className="mb-6">
  <p className="text-gray-400">
    Ask anything about events, recommendations,
    networking opportunities, technology events,
    and more.
  </p>

  <div className="mt-4 rounded-lg bg-zinc-800 p-4 text-left">
    <p className="mb-2 font-semibold text-purple-400">
      💡 Try asking:
    </p>

    <ul className="space-y-1 text-gray-300">
      <li>• Recommend technology events</li>
      <li>• Which event is best for networking?</li>
      <li>• Suggest events for AI students</li>
      <li>• What can I learn from AI Hackathon Pune?</li>
    </ul>
  </div>
</div>

        <textarea
          value={question}
          onChange={(e) =>
            setQuestion(e.target.value)
          }
          placeholder="Ask EventSphere AI..."
          rows={4}
          className="mb-4 w-full rounded-lg bg-zinc-800 p-4"
        />

        <button
          onClick={async () => {
            try {
              setLoading(true);
              setResponse("");

              const res = await fetch(
                "/api/assistant",
                {
                  method: "POST",
                  headers: {
                    "Content-Type":
                      "application/json",
                  },
                  body: JSON.stringify({
                    question,
                  }),
                }
              );

              const data = await res.json();

              setResponse(data.response);
            } catch {
              setResponse(
                "Failed to get AI response."
              );
            } finally {
              setLoading(false);
            }
          }}
          className="mb-6 w-full rounded-lg bg-purple-600 py-3 hover:bg-purple-700"
        >
          Ask AI
        </button>

        <div className="rounded-lg bg-zinc-800 p-4">
          {loading ? (
            <div className="animate-pulse">
              <p className="text-purple-400">
                ✨ EventSphere AI is thinking...
              </p>
            </div>
          ) : (
            <p className="whitespace-pre-wrap text-gray-300">
              {response ||
                "AI responses will appear here..."}
            </p>
          )}
        </div>
      </div>
    </main>
  );
}