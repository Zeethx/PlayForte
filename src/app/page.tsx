import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import FeaturedCollections from "@/components/FeaturedCollections";
import FeaturedArtists from "@/components/FeaturedArtists";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] flex-col">
      <HeroSection />
      <FeaturedCollections />
      <FeaturedArtists />
    </main>
  );
}
