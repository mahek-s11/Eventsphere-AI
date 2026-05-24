export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="flex items-center justify-between px-8 py-6">
        <h1 className="text-2xl font-bold text-purple-400">
          EventSphere AI
        </h1>

        <button className="rounded-lg bg-purple-600 px-4 py-2 hover:bg-purple-700">
          Login
        </button>
      </nav>

      <section className="flex flex-col items-center justify-center px-6 py-32 text-center">
        <h1 className="mb-6 text-6xl font-bold">
          Discover Events.
          <br />
          Powered by AI.
        </h1>

        <p className="mb-8 max-w-2xl text-lg text-gray-300">
          Find amazing events, book tickets instantly, get AI-powered
          recommendations, and manage events effortlessly.
        </p>

        <button className="rounded-xl bg-purple-600 px-8 py-4 text-lg font-semibold hover:bg-purple-700">
          Explore Events
        </button>
      </section>
    </main>
  );
}