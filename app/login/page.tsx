export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="w-full max-w-md rounded-2xl bg-zinc-900 p-8">
        <h1 className="mb-6 text-3xl font-bold">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="mb-4 w-full rounded-lg bg-zinc-800 p-3"
        />

        <input
          type="password"
          placeholder="Password"
          className="mb-4 w-full rounded-lg bg-zinc-800 p-3"
        />

        <button className="w-full rounded-lg bg-purple-600 py-3">
          Sign In
        </button>
      </div>
    </main>
  );
}