"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const milestones = [
  {
    year: 2020,
    title: "Fundación de BrightCalle",
    description:
      "BrightCalle Marketing fue fundada por un equipo de profesionales con amplia experiencia en publicidad exterior y marketing urbano.",
    achievement: "Primeros 5 clientes y 3 campañas exitosas",
    color: "from-yellow-500 to-orange-500",
  },
  {
    year: 2021,
    title: "Primeros Grandes Clientes",
    description:
      "Conseguimos nuestros primeros clientes importantes y comenzamos a establecer nuestra reputación en el sector del marketing offline.",
    achievement: "15 campañas completadas y 85% de retención de clientes",
    color: "from-orange-500 to-red-500",
  },
  {
    year: 2022,
    title: "Expansión de Servicios",
    description:
      "Ampliamos nuestra cartera de servicios para incluir soluciones integrales de marketing offline y publicidad exterior.",
    achievement: "Incorporación de 8 nuevos profesionales al equipo",
    color: "from-red-500 to-purple-500",
  },
  {
    year: 2023,
    title: "Innovación Tecnológica",
    description:
      "Incorporamos nuevas tecnologías para mejorar la efectividad y medición de nuestras campañas de publicidad exterior.",
    achievement: "Aumento del 40% en efectividad de campañas",
    color: "from-purple-500 to-blue-500",
  },
  {
    year: 2024,
    title: "Compromiso con la Sostenibilidad",
    description:
      "Lanzamos nuestra iniciativa de marketing responsable, implementando soluciones sostenibles en todas nuestras campañas.",
    achievement: "Reducción del 35% en huella de carbono de nuestras campañas",
    color: "from-blue-500 to-green-500",
  },
  {
    year: 2025,
    title: "Presente y Futuro",
    description:
      "Actualmente contamos con un equipo multidisciplinar de más de 25 profesionales especializados en diferentes áreas del marketing offline.",
    achievement: "Más de 250 campañas exitosas y presencia en 32 ciudades",
    color: "from-green-500 to-yellow-500",
  },
]

export default function CompanyHistory() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeMilestone = milestones[activeIndex]

  const handleNext = () => {
    setActiveIndex((prev) => (prev === milestones.length - 1 ? 0 : prev + 1))
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? milestones.length - 1 : prev - 1))
  }

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Nuestra <span className="text-yellow-500">Historia</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Desde nuestra fundación, hemos evolucionado constantemente para ofrecer soluciones innovadoras y efectivas
            en el ámbito del marketing offline.
          </p>
        </div>

        {/* Timeline navigation */}
        <div className="flex justify-center mb-12 overflow-x-auto py-4">
          <div className="flex space-x-2 md:space-x-4">
            {milestones.map((milestone, index) => (
              <button
                key={milestone.year}
                onClick={() => setActiveIndex(index)}
                className={`relative px-4 py-2 rounded-full transition-all ${
                  activeIndex === index
                    ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold scale-110"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                }`}
              >
                <span className="relative z-10">{milestone.year}</span>
                {activeIndex === index && (
                  <motion.div
                    layoutId="activeYear"
                    className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="relative max-w-5xl mx-auto">
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-8 bg-white rounded-full p-2 shadow-lg hover:bg-yellow-500 hover:text-black transition-colors z-10"
            aria-label="Año anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-8 bg-white rounded-full p-2 shadow-lg hover:bg-yellow-500 hover:text-black transition-colors z-10"
            aria-label="Año siguiente"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMilestone.year}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                {/* Background gradient */}
                <div
                  className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r w-full"
                  style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${activeMilestone.color}`}></div>
                </div>

                <div className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row md:items-center mb-8">
                    <div className="mb-4 md:mb-0 md:mr-8">
                      <div
                        className={`text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${activeMilestone.color}`}
                      >
                        {activeMilestone.year}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">{activeMilestone.title}</h3>
                      <p className="text-gray-700">{activeMilestone.description}</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="font-bold text-lg mb-2">Logro destacado:</h4>
                    <p className="text-gray-700">{activeMilestone.achievement}</p>
                  </div>

                  {/* Progress bar */}
                  <div className="mt-8">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${activeMilestone.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${((activeIndex + 1) / milestones.length) * 100}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    <div className="flex justify-between mt-2 text-sm text-gray-500">
                      <span>2020</span>
                      <span>2025</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Timeline visualization */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="relative">
            {/* Horizontal line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 transform -translate-y-1/2" />

            <div className="relative flex justify-between">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="flex flex-col items-center">
                  <button
                    onClick={() => setActiveIndex(index)}
                    className={`relative z-10 w-6 h-6 rounded-full border-2 border-gray-300 transition-all ${
                      index <= activeIndex ? `bg-gradient-to-r ${milestone.color}` : "bg-white"
                    }`}
                    aria-label={`Ver año ${milestone.year}`}
                  />
                  <span
                    className={`mt-2 text-xs font-medium ${
                      index === activeIndex ? "text-black font-bold" : "text-gray-500"
                    }`}
                  >
                    {milestone.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
