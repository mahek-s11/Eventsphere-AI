export default function EventsPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="mb-8 text-5xl font-bold">
        All Events
      </h1>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-zinc-900 p-6">
          <h2 className="text-2xl font-bold">
            AI Hackathon Pune
          </h2>

          <p className="mt-2 text-gray-400">
            Technology Event
          </p>

        <a
            href="/events/1"
            className="mt-4 inline-block rounded-lg bg-purple-600 px-4 py-2"
        >
            View Details
        </a>
        </div>
      </div>
    </main>
  );
}