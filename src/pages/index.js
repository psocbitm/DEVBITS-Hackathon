import HeroSection from "@/components/HeroSection";
import MutualFunds from "@/components/MutualFunds";
import Stocks from "@/components/Stocks";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl p-6 lg:px-8">
      <HeroSection />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <Stocks />
        <MutualFunds />
      </div>
    </div>
  );
}
