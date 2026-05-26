export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-32 text-center">
      <h1 className="mb-6 text-6xl font-bold">
        Discover Events.
        <br />
        Powered by AI.
      </h1>

      <p className="mb-8 max-w-2xl text-lg text-gray-300">
        Find amazing events, book tickets instantly,
        get AI-powered recommendations,
        and manage events effortlessly.
      </p>

<a
  href="/events"
  className="rounded-xl bg-purple-600 px-8 py-4 text-lg font-semibold hover:bg-purple-700"
>
  Explore Events
</a>
    </section>
  );
}