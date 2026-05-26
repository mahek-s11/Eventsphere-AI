import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedEvents from "../components/FeaturedEvents";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <FeaturedEvents />
    </main>
  );
}