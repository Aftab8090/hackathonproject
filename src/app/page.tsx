import GridCardSection from "@/components/GridCard/gridcard";
import HeroSection from "@/components/Herosection/Herosection";
import Navbar from "@/components/Navbar/navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <GridCardSection/>
    </div>
  );
}
