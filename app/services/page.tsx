import { Suspense } from "react"
import ServiceHero from "@/components/services/ServiceHero"
import ServicesList from "@/components/services/ServicesList"
import ServiceProcess from "@/components/services/ServiceProcess"
import ServiceCTA from "@/components/services/ServiceCTA"

export const metadata = {
  title: "Servicios - BrightCalle Marketing",
  description: "Descubre nuestros servicios de marketing offline, publicidad exterior, branding y más en Madrid.",
}

export default function ServicesPage() {
  return (
    <>
      <Suspense fallback={<div>Loading services...</div>}>
        <ServiceHero />

        <ServicesList />

        <ServiceProcess />
        <ServiceCTA />
      </Suspense>
    </>
  )
}
