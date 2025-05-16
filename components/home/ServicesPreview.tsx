"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Mock data - would come from services.json
const services = [
  {
    id: 1,
    slug: "outdoor-advertising",
    title: "Publicidad Exterior",
    description:
      "Vallas publicitarias, mupis y grandes formatos para maximizar la visibilidad de tu marca en entornos urbanos.",
    icon: "/icons/billboard.svg",
    image: "/images/services/outdoor.jpg",
  },
  {
    id: 2,
    slug: "branding",
    title: "Branding",
    description:
      "Creación y aplicación de identidad visual en espacios físicos para fortalecer el reconocimiento de marca.",
    icon: "/icons/branding.svg",
    image: "/images/services/branding.jpg",
  },
  {
    id: 3,
    slug: "print",
    title: "Impresión",
    description: "Servicios de impresión de alta calidad para todo tipo de materiales promocionales y publicitarios.",
    icon: "/icons/print.svg",
    image: "/images/services/print.jpg",
  },
  {
    id: 4,
    slug: "transport",
    title: "Campañas de Transporte",
    description:
      "Publicidad en autobuses, metro, taxis y otros medios de transporte para llegar a audiencias en movimiento.",
    icon: "/icons/transport.svg",
    image: "/images/services/transport.jpg",
  },
  {
    id: 5,
    slug: "events",
    title: "Marketing de Eventos",
    description: "Diseño y producción de materiales para ferias, congresos y eventos corporativos.",
    icon: "/icons/events.svg",
    image: "/images/services/events.jpg",
  },
  {
    id: 6,
    slug: "street-marketing",
    title: "Street Marketing",
    description: "Acciones promocionales innovadoras en espacios públicos para generar experiencias memorables.",
    icon: "/icons/street.svg",
    image: "/images/services/street.jpg",
  },
]

export default function ServicesPreview() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleItems, setVisibleItems] = useState(3)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateVisibleItems = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1)
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2)
      } else {
        setVisibleItems(3)
      }
    }

    updateVisibleItems()
    window.addEventListener("resize", updateVisibleItems)
    return () => window.removeEventListener("resize", updateVisibleItems)
  }, [])

  const maxIndex = services.length - visibleItems

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Ofrecemos soluciones integrales de marketing offline para conectar tu marca con tu audiencia en el mundo
            real.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={containerRef}>
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
            >
              {services.map((service) => (
                <div
                  key={service.id}
                  className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-4"
                  style={{ width: `${100 / visibleItems}%` }}
                >
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="bg-yellow-500 p-3 rounded-full mr-4">
                          <Image
                            src={service.icon || "/placeholder.svg"}
                            alt=""
                            width={24}
                            height={24}
                            className="h-6 w-6"
                          />
                        </div>
                        <h3 className="text-xl font-bold">{service.title}</h3>
                      </div>
                      <p className="text-gray-700 mb-4">{service.description}</p>
                      <Button asChild variant="outline" className="w-full">
                        <Link href={`/services/${service.slug}`}>Ver Detalles</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {currentIndex > 0 && (
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white rounded-full p-2 shadow-lg hover:bg-yellow-500 transition-colors z-10"
              aria-label="Anterior servicio"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}

          {currentIndex < maxIndex && (
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white rounded-full p-2 shadow-lg hover:bg-yellow-500 transition-colors z-10"
              aria-label="Siguiente servicio"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}
        </div>

        <div className="text-center mt-12">
          <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
            <Link href="/services">Ver Todos los Servicios</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
