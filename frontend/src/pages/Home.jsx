import Hero from "../sections/Hero";
import FeaturedCauses from "../sections/FeaturedCauses";
import HowItWorks from "../sections/HowItWorks";
import Testimonials from "../sections/Testimonials";
import FAQ from "../sections/FAQ";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedCauses />
      <HowItWorks />
      <Testimonials />
      <FAQ />
    </div>
  );
}