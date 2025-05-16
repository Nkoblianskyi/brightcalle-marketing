"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote, UserCircle } from "lucide-react"

const testimonials = [
  {
    id: 1,
    quote:
      "BrightCalle transformó nuestra visión en una campaña que superó todas nuestras expectativas. Su enfoque estratégico y creatividad nos ayudaron a destacar en un mercado altamente competitivo.",
    author: "María González",
    position: "Directora de Marketing",
    company: "Empresa de Telecomunicaciones",
    color: "#FF6B35", // Added color for the icon
  },
  {
    id: 2,
    quote:
      "La capacidad de BrightCalle para integrar elementos físicos y digitales en una experiencia coherente fue clave para el éxito de nuestra campaña de lanzamiento. Los resultados superaron nuestras expectativas más optimistas.",
    author: "Javier Rodríguez",
    position: "CEO",
    company: "Startup de Tecnología",
    color: "#3A86FF", // Added color for the icon
  },
  {
    id: 3,
    quote:
      "Valoramos especialmente su compromiso con la sostenibilidad y su capacidad para implementar soluciones eco-friendly sin comprometer el impacto visual de nuestras campañas. Un socio estratégico en quien confiar.",
    author: "Ana Martínez",
    position: "Directora de Comunicación",
    company: "Cadena de Retail",
    color: "#8338EC", // Added color for the icon
  },
]

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [autoplay])

  const handleNext = () => {
    setAutoplay(false)
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setAutoplay(false)
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    }),
  }

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-500 rounded-full opacity-10 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500 rounded-full opacity-10 translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Lo Que Dicen <span className="text-yellow-500">Nuestros Clientes</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Testimonios de quienes han confiado en nosotros para sus campañas de marketing offline.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute top-1/2 left-4 z-20 transform -translate-y-1/2">
            <button
              onClick={handlePrev}
              className="bg-yellow-500 hover:bg-yellow-600 text-black rounded-full p-3 shadow-lg transition-all"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          </div>

          <div className="absolute top-1/2 right-4 z-20 transform -translate-y-1/2">
            <button
              onClick={handleNext}
              className="bg-yellow-500 hover:bg-yellow-600 text-black rounded-full p-3 shadow-lg transition-all"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <div className="relative h-[400px] md:h-[300px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute w-full h-full"
              >
                <div className="bg-gray-800 rounded-xl p-8 md:p-10 h-full flex flex-col md:flex-row items-center">
                  <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                    <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
                      {/* Replaced Image with UserCircle icon */}
                      <div className="relative rounded-full border-4 border-yellow-500 p-2 bg-gray-700 flex items-center justify-center">
                        <UserCircle
                          size={120}
                          className="text-white"
                          style={{
                            filter: `drop-shadow(0 0 10px ${testimonials[currentIndex].color})`,
                            color: testimonials[currentIndex].color,
                          }}
                        />
                        {/* Add decorative elements around the icon */}
                        <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-yellow-500"></div>
                        <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-yellow-500 opacity-70"></div>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3 md:pl-8 relative z-10">
                    <Quote className="h-10 w-10 text-yellow-500 mb-4 opacity-50" />
                    <p className="text-white text-lg mb-6 italic">"{testimonials[currentIndex].quote}"</p>
                    <div>
                      <p className="font-bold text-white">{testimonials[currentIndex].author}</p>
                      <p className="text-yellow-500">
                        {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
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
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
