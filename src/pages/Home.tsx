import { Hero } from '../components/Hero';
import { BlogHighlights } from '../components/BlogHighlights';
import { CompanyImage } from '../components/CompanyImage';

export function Home() {
  return (
    <div>
      <Hero />
      <BlogHighlights />
      <CompanyImage />
    </div>
  );
}

export default Home;