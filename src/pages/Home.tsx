import { Hero } from '../components/Hero';
import { VisionSection } from '../components/VisionSection';
import { MarketSection } from '../components/MarketSection';
import { ApproachSection } from '../components/ApproachSection';

export function Home() {
  return (
    <div>
      <Hero />
      <VisionSection />
      <MarketSection />
      <ApproachSection />
    </div>
  );
}

export default Home;