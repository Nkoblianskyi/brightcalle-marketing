import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

// Mock data - would come from projects.json
const projects = [
  {
    id: 1,
    slug: "campaign-urban-billboards",
    title: "Campaña Vallas Urbanas",
    category: "Publicidad Exterior",
    image: "/images/projects/billboard-1.jpg",
  },
  {
    id: 2,
    slug: "bus-branding-campaign",
    title: "Branding de Autobuses",
    category: "Transporte",
    image: "/images/projects/bus-1.jpg",
  },
  {
    id: 3,
    slug: "metro-station-takeover",
    title: "Estación de Metro",
    category: "Publicidad Exterior",
    image: "/images/projects/metro-1.jpg",
  },
  {
    id: 4,
    slug: "retail-store-branding",
    title: "Branding Tienda",
    category: "Branding",
    image: "/images/projects/retail-1.jpg",
  },
  {
    id: 5,
    slug: "event-materials",
    title: "Materiales para Evento",
    category: "Impresión",
    image: "/images/projects/event-1.jpg",
  },
  {
    id: 6,
    slug: "taxi-advertising",
    title: "Publicidad en Taxis",
    category: "Transporte",
    image: "/images/projects/taxi-1.jpg",
  },
]

export default function WorkGallery() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Proyectos</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Descubre cómo hemos ayudado a nuestros clientes a destacar en el entorno urbano con campañas de alto
            impacto.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group block relative overflow-hidden rounded-lg aspect-square"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="inline-block bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
            <Link href="/projects">Ver Todos los Proyectos</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
