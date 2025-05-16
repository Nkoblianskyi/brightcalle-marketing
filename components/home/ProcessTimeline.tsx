"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MessageSquare, LineChart, Palette, Printer, MapPin, BarChart } from "lucide-react"

const steps = [
  {
    id: 1,
    title: "Consulta Inicial",
    description: "Analizamos tus objetivos, audiencia y presupuesto para entender completamente tus necesidades.",
    icon: MessageSquare,
  },
  {
    id: 2,
    title: "Estrategia",
    description: "Desarrollamos una estrategia personalizada seleccionando los mejores formatos y ubicaciones.",
    icon: LineChart,
  },
  {
    id: 3,
    title: "Diseño Creativo",
    description: "Creamos conceptos visuales impactantes adaptados a cada formato publicitario.",
    icon: Palette,
  },
  {
    id: 4,
    title: "Producción",
    description: "Gestionamos la producción de todos los materiales con los más altos estándares de calidad.",
    icon: Printer,
  },
  {
    id: 5,
    title: "Implementación",
    description: "Coordinamos la instalación y puesta en marcha de todos los elementos de la campaña.",
    icon: MapPin,
  },
  {
    id: 6,
    title: "Seguimiento",
    description: "Monitorizamos el rendimiento y proporcionamos informes detallados sobre los resultados.",
    icon: BarChart,
  },
]

export default function ProcessTimeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-500/20 via-transparent to-transparent opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Nuestro <span className="text-yellow-500">Proceso</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Un enfoque estructurado para garantizar el éxito de cada proyecto, desde la concepción hasta la
            implementación.
          </p>
        </div>

        <div ref={ref} className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-yellow-500/30 md:transform md:-translate-x-1/2" />

            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative mb-12 md:mb-24 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}
              >
                <div
                  className={`flex items-center md:items-center ${
                    index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                  }`}
                >
                  <div
                    className={`flex md:block ${index % 2 === 0 ? "md:order-last md:ml-6" : "md:order-first md:mr-6"}`}
                  >
                    <div className="relative">
                      <div className="flex items-center justify-center w-8 h-8 bg-yellow-500 rounded-full text-black font-bold z-10 relative">
                        {step.id}
                      </div>
                      <div className="absolute top-0 left-0 w-8 h-8 bg-yellow-500 rounded-full animate-ping opacity-30" />
                    </div>
                  </div>

                  <div
                    className={`ml-4 md:ml-0 md:w-[calc(50%-20px)] ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                      <div className="flex items-center mb-3">
                        <step.icon className="h-6 w-6 text-yellow-500 mr-2 md:hidden" />
                        <h3 className="text-xl font-bold flex items-center">
                          {index % 2 === 1 && <step.icon className="h-6 w-6 text-yellow-500 mr-2 hidden md:block" />}
                          {step.title}
                          {index % 2 === 0 && <step.icon className="h-6 w-6 text-yellow-500 ml-2 hidden md:block" />}
                        </h3>
                      </div>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
