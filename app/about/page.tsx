import AboutHero from "@/components/about/AboutHero"
import MissionValues from "@/components/about/MissionValues"
import Approach from "@/components/about/Approach"
import Expertise from "@/components/about/Expertise"
import Achievements from "@/components/about/Achievements"
import Partners from "@/components/about/Partners"
import AboutCTA from "@/components/about/AboutCTA"

export const metadata = {
  title: "Sobre Nosotros - BrightCalle Marketing",
  description:
    "Conoce más sobre BrightCalle Marketing, nuestra historia, valores y enfoque en publicidad exterior y marketing offline en Madrid.",
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionValues />
      {/* <CompanyHistory /> */}
      <Expertise />
      <Approach />
      <Achievements />
      <Partners />
      <AboutCTA />
    </>
  )
}
