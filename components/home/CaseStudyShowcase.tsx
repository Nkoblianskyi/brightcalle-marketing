"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

// Mock data - would come from projects.json
const caseStudies = [
  {
    id: 1,
    slug: "campaign-urban-billboards",
    title: "Campaña de Vallas Urbanas",
    client: "Empresa de Telecomunicaciones",
    category: "Publicidad Exterior",
    description:
      "Desarrollamos una campaña integral de vallas publicitarias en ubicaciones estratégicas del centro de Madrid para el lanzamiento de un nuevo servicio de fibra óptica.",
    results: ["27% aumento en consultas", "18% incremento en contrataciones", "15% mayor reconocimiento de marca"],
    image: "/78f22ef9b50be4e7c2968eaaa69c2dcc.jpg",
    color: "#FF6B35",
  },
  {
    id: 2,
    slug: "bus-branding-campaign",
    title: "Campaña de Branding en Autobuses",
    client: "Cadena de Restaurantes",
    category: "Transporte",
    description:
      "Implementamos una campaña de branding integral en 25 autobuses urbanos de Madrid para promocionar la apertura de nuevos locales de una cadena de restaurantes.",
    results: ["10M+ impactos generados", "35% más afluencia que lo previsto", "150% aumento en menciones en redes"],
    image: "/73974dd5ca43c396e6965c4758a03266.jpg",
    color: "#3A86FF",
  },
  {
    id: 3,
    slug: "metro-station-takeover",
    title: "Transformación Integral de Estación de Metro",
    client: "Plataforma de Streaming",
    category: "Publicidad Exterior",
    description:
      "Realizamos una transformación completa de la estación de Sol en Madrid para el lanzamiento de una nueva serie de una plataforma de streaming.",
    results: ["2M+ interacciones en redes", "42% aumento en suscripciones", "300.000€ en cobertura mediática"],
    image: "/6be3eaa9b76631aacfa901b8e94cee3a.jpg",
    color: "#8338EC",
  },
]

export default function CaseStudyShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeCase = caseStudies[activeIndex]

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Casos de <span className="text-yellow-500">Éxito</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Descubre cómo hemos ayudado a nuestros clientes a destacar en el entorno urbano con campañas de alto
            impacto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Case study selector */}
          <div className="lg:col-span-2 space-y-4">
            {caseStudies.map((caseStudy, index) => (
              <button
                key={caseStudy.id}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left p-6 rounded-lg transition-all ${
                  index === activeIndex ? "bg-yellow-500 text-black" : "bg-gray-800 hover:bg-gray-700 text-white"
                }`}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-xl">{caseStudy.title}</h3>
                  {index === activeIndex && <ArrowRight className="h-5 w-5" />}
                </div>
                <p className="text-sm opacity-80 mt-1">{caseStudy.client}</p>
              </button>
            ))}
          </div>

          {/* Case study details */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-xl"
              >
                <div className="relative h-64 md:h-80">
                  <Image
                    src={activeCase.image || "/placeholder.svg"}
                    alt={activeCase.title}
                    fill
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"
                    style={{ backgroundColor: `${activeCase.color}10` }}
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                      {activeCase.category}
                    </span>
                  </div>
                </div>

                <div className="p-8 relative z-10">
                  <h3 className="text-2xl font-bold mb-2 text-white">{activeCase.title}</h3>
                  <p className="text-gray-400 mb-4">Cliente: {activeCase.client}</p>
                  <p className="text-gray-300 mb-6">{activeCase.description}</p>

                  <h4 className="font-bold text-yellow-500 mb-3">Resultados:</h4>
                  <ul className="space-y-2 mb-6">
                    {activeCase.results.map((result, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                        {result}
                      </li>
                    ))}
                  </ul>

                  <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-black">
                    <Link href={`/projects/${activeCase.slug}`}>Ver Caso Completo</Link>
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
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
