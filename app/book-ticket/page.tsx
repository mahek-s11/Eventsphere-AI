"use client";

import { useState } from "react";

export default function BookTicketPage() {
  const [bookingSuccess, setBookingSuccess] =
    useState(false);

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

        <input
          type="number"
          min="1"
          placeholder="Number of Tickets"
          className="mb-6 w-full rounded-lg bg-zinc-800 p-3"
        />

        <button
          onClick={() =>
            setBookingSuccess(true)
          }
          className="w-full rounded-lg bg-purple-600 py-3 hover:bg-purple-700"
        >
          Confirm Booking
        </button>

        {bookingSuccess && (
          <div className="mt-6 rounded-xl border border-green-500 bg-green-500/10 p-4">
            <h2 className="text-xl font-bold text-green-400">
              ✅ Booking Successful!
            </h2>

            <p className="mt-2 text-gray-300">
              Your ticket has been reserved successfully.
              A confirmation email will be sent shortly.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}