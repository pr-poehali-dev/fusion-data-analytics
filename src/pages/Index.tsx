import HeroSection from '@/components/HeroSection';
import IntroSection from '@/components/IntroSection';
import EarlyYearsSection from '@/components/EarlyYearsSection';
import CareerStartSection from '@/components/CareerStartSection';
import PeakSection from '@/components/PeakSection';
import SongsSection from '@/components/SongsSection';
import CinemaSection from '@/components/CinemaSection';
import CultureSection from '@/components/CultureSection';
import MemorySection from '@/components/MemorySection';
import LegacySection from '@/components/LegacySection';
import ConclusionSection from '@/components/ConclusionSection';
import SourcesSection from '@/components/SourcesSection';

const Index = () => {
  return (
    <main className="bg-black">
      <HeroSection />
      <IntroSection />
      <EarlyYearsSection />
      <CareerStartSection />
      <PeakSection />
      <SongsSection />
      <CinemaSection />
      <CultureSection />
      <MemorySection />
      <LegacySection />
      <ConclusionSection />
      <SourcesSection />
    </main>
  );
};

export default Index;
