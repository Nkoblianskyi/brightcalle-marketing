"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, MapPin, PenTool, Printer, Bus, Calendar, Layout } from "lucide-react"
import { Button } from "@/components/ui/button"

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

// Мапа іконок для сервісів
const serviceIcons: Record<string, any> = {
  "outdoor-advertising": MapPin,
  branding: PenTool,
  print: Printer,
  transport: Bus,
  events: Calendar,
  "street-marketing": Layout,
}

// Замінюємо рендеринг компонента, щоб використовувати іконки замість зображень
export default function ServicesCarousel3D() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.5,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.5,
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.5,
      rotateY: direction > 0 ? -45 : 45,
      transition: {
        duration: 0.5,
      },
    }),
  }

  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        setDirection(1)
        setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length)
      }, 5000)
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
      }
    }
  }, [autoplay])

  const handleNext = () => {
    setAutoplay(false)
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length)
  }

  const handlePrev = () => {
    setAutoplay(false)
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length)
  }

  const currentService = services[currentIndex]
  const IconComponent = serviceIcons[currentService.slug] || Layout

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-500 via-transparent to-transparent opacity-30" />
        <div className="grid grid-cols-10 h-full w-full">
          {Array.from({ length: 100 }).map((_, i) => (
            <div key={i} className="border-[0.5px] border-yellow-500/20" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Nuestros <span className="text-yellow-500">Servicios</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Ofrecemos soluciones integrales de marketing offline para conectar tu marca con tu audiencia en el mundo
            real.
          </p>
        </div>

        <div className="relative h-[500px] md:h-[600px] perspective-1000">
          <div className="absolute top-1/2 left-4 z-30 transform -translate-y-1/2">
            <button
              onClick={handlePrev}
              className="bg-yellow-500 hover:bg-yellow-600 text-black rounded-full p-3 shadow-lg transition-all"
              aria-label="Servicio anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          </div>

          <div className="absolute top-1/2 right-4 z-30 transform -translate-y-1/2">
            <button
              onClick={handleNext}
              className="bg-yellow-500 hover:bg-yellow-600 text-black rounded-full p-3 shadow-lg transition-all"
              aria-label="Siguiente servicio"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <div className="relative h-full flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute w-full max-w-4xl mx-auto"
              >
                <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
                  <div className="md:w-1/2 relative h-64 md:h-auto">
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(135deg, ${getGradientColors(currentService.id)})`,
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent md:bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

                    {/* Декоративні елементи */}
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full" />
                    <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-white/5 rounded-full" />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={{
                          y: [0, -10, 0],
                        }}
                        transition={{
                          repeat: Number.POSITIVE_INFINITY,
                          duration: 3,
                          ease: "easeInOut",
                        }}
                        className="bg-white p-6 rounded-full shadow-lg"
                      >
                        <IconComponent className="h-16 w-16 text-yellow-500" />
                      </motion.div>
                    </div>

                    <div className="absolute top-4 left-4 bg-yellow-500 p-3 rounded-full z-10">
                      <IconComponent className="h-6 w-6 text-black" />
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 relative z-20">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">{currentService.title}</h3>
                    <p className="text-gray-300 mb-6">{currentService.description}</p>
                    <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-black">
                      <Link href={`/services/${currentService.slug}`}>Ver Detalles</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="flex justify-center mt-10 space-x-2">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setAutoplay(false)
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-yellow-500 w-6" : "bg-gray-600 hover:bg-gray-500"
              }`}
              aria-label={`Ir al servicio ${index + 1}`}
            />
          ))}
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

// Функція для генерації градієнтних кольорів на основі ID сервісу
function getGradientColors(id: number): string {
  const colorPairs = [
    "#FF6B35, #F7B801",
    "#3A86FF, #8338EC",
    "#06D6A0, #1B9AAA",
    "#EF476F, #FFD166",
    "#118AB2, #073B4C",
    "#7209B7, #3A0CA3",
  ]

  return colorPairs[(id - 1) % colorPairs.length]
}
