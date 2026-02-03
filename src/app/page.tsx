import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";

export default function Home() {
  return (
    <div className='min-h-screen bg-background'>
      <Header />
      <main>
        <HeroSection />
      </main>
    </div>
  );
}
