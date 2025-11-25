import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Value from "@/components/Value";
import ProfitCalculator from "@/components/ProfitCalculator";
import RidersGuild from "@/components/RidersGuild";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white min-h-screen text-black selection:bg-primary selection:text-black">
      <Navbar />
      <Hero />
      <Problem />
      <Value />
      <ProfitCalculator />
      <RidersGuild />
      <Footer />
    </main>
  );
}
