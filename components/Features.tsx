export default function Features() {
  return (
    <section className="px-8 py-24">
      <h2 className="mb-12 text-center text-4xl font-bold">
        Why Choose EventSphere AI?
      </h2>

      <div className="grid gap-8 md:grid-cols-3">

        <div className="rounded-2xl bg-zinc-900 p-8">
          <h3 className="mb-4 text-2xl font-bold">
            🤖 AI Recommendations
          </h3>

          <p className="text-gray-400">
            Discover events tailored to your interests and previous bookings.
          </p>
        </div>

        <div className="rounded-2xl bg-zinc-900 p-8">
          <h3 className="mb-4 text-2xl font-bold">
            🎟 Smart Ticketing
          </h3>

          <p className="text-gray-400">
            Secure ticket booking with instant confirmations and QR tickets.
          </p>
        </div>

        <div className="rounded-2xl bg-zinc-900 p-8">
          <h3 className="mb-4 text-2xl font-bold">
            📊 Organizer Dashboard
          </h3>

          <p className="text-gray-400">
            Manage events, registrations, and analytics in one place.
          </p>
        </div>

      </div>
    </section>
  );
}