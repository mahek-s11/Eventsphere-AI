export default function EventDetailsPage() {
  return (
    <main className="min-h-screen bg-black p-8 text-white">
      <h1 className="mb-4 text-5xl font-bold">
        AI Hackathon Pune
      </h1>

      <p className="mb-4 text-gray-400">
        📅 12 June 2026
      </p>

      <p className="mb-6 text-gray-400">
        📍 Pune, India
      </p>

      <p className="mb-8 max-w-3xl text-lg">
        Join developers, AI enthusiasts, and innovators
        in an exciting hackathon where participants build
        cutting-edge AI solutions and compete for prizes.
      </p>

<a
  href="/book-ticket"
  className="inline-block rounded-lg bg-purple-600 px-6 py-3 font-semibold hover:bg-purple-700"
>
  Book Ticket
</a>

    </main>
  );
}