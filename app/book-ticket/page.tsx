export default function BookTicketPage() {
  return (
    <main className="min-h-screen bg-black p-8 text-white">
      <div className="mx-auto max-w-lg rounded-2xl bg-zinc-900 p-8">
        <h1 className="mb-6 text-4xl font-bold">
          Book Ticket
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          className="mb-4 w-full rounded-lg bg-zinc-800 p-3"
        />

        <input
          type="email"
          placeholder="Email"
          className="mb-4 w-full rounded-lg bg-zinc-800 p-3"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="mb-4 w-full rounded-lg bg-zinc-800 p-3"
        />

        <button className="w-full rounded-lg bg-purple-600 py-3 hover:bg-purple-700">
          Confirm Booking
        </button>
      </div>
    </main>
  );
}