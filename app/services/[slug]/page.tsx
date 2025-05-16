import { notFound } from "next/navigation"
import ServiceDetail from "@/components/services/ServiceDetail"
import ServiceFeatures from "@/components/services/ServiceFeatures"
import RelatedServices from "@/components/services/RelatedServices"
import ServiceCTA from "@/components/services/ServiceCTA"
import services from "@/data/services.json"

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services.find((service) => service.slug === params.slug)

  if (!service) {
    return {
      title: "Servicio no encontrado - BrightCalle Marketing",
      description: "El servicio que estás buscando no existe.",
    }
  }

  return {
    title: `${service.title} - BrightCalle Marketing`,
    description: service.fullDescription,
  }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((service) => service.slug === params.slug)

  if (!service) {
    notFound()
  }

  const otherServices = services.filter((s) => s.slug !== params.slug).slice(0, 3)

  return (
    <>
      <ServiceDetail service={service} />
      <ServiceFeatures service={service} />
      <RelatedServices services={otherServices} />
      <ServiceCTA />
    </>
  )
}
