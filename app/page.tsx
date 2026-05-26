import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedEvents from "../components/FeaturedEvents";
import Features from "../components/Features";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <FeaturedEvents />
      <Features />
    </main>
  );
}