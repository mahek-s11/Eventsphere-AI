export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6">
      <h1 className="text-2xl font-bold text-purple-400">
        EventSphere AI
      </h1>

      <div className="flex gap-4">
        <a
            href="/events"
            className="hover:text-purple-400"
        >
            Events
        </a>

<a
  href="/about"
  className="hover:text-purple-400"
>
  About
</a>

<a
  href="/login"
  className="rounded-lg bg-purple-600 px-4 py-2 hover:bg-purple-700"
>
  Login
</a>
      </div>
    </nav>
  );
}