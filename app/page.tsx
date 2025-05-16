import HeroParallax from "@/components/home/HeroParallax"
import ServicesCarousel3D from "@/components/home/ServicesCarousel3D"
import CaseStudyShowcase from "@/components/home/CaseStudyShowcase"
import StatsCounter from "@/components/home/StatsCounter"
import TestimonialSlider from "@/components/home/TestimonialSlider"
import MarketingImpact from "@/components/home/MarketingImpact"
import ContactCTA from "@/components/home/ContactCTA"
import ProcessTimeline from "@/components/home/ProcessTimeline"

export default function Home() {
  return (
    <>
      <HeroParallax />
      <ServicesCarousel3D />
      <CaseStudyShowcase />
      <StatsCounter />
      <ProcessTimeline />
      <TestimonialSlider />
      <MarketingImpact />
      <ContactCTA />
    </>
  )
}
