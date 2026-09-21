import Hero from "../components/sections/Hero";
import ServicesPreview from "../components/sections/ServicesPreview";
import AboutTeaser from "../components/sections/AboutTeaser";
import FeaturedProjects from "../components/sections/FeaturedProjects";
import ProcessSteps from "../components/sections/ProcessSteps";
import CTASection from "../components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <AboutTeaser />
      <FeaturedProjects />
      <ProcessSteps />
      <CTASection />
    </>
  );
}
