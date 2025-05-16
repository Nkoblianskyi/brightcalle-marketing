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
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "Estrategia",
    description: "Desarrollamos una estrategia personalizada seleccionando los mejores formatos y ubicaciones.",
    icon: LineChart,
    color: "bg-purple-500",
  },
  {
    id: 3,
    title: "Diseño Creativo",
    description: "Creamos conceptos visuales impactantes adaptados a cada formato publicitario.",
    icon: Palette,
    color: "bg-pink-500",
  },
  {
    id: 4,
    title: "Producción",
    description: "Gestionamos la producción de todos los materiales con los más altos estándares de calidad.",
    icon: Printer,
    color: "bg-orange-500",
  },
  {
    id: 5,
    title: "Implementación",
    description: "Coordinamos la instalación y puesta en marcha de todos los elementos de la campaña.",
    icon: MapPin,
    color: "bg-green-500",
  },
  {
    id: 6,
    title: "Seguimiento",
    description: "Monitorizamos el rendimiento y proporcionamos informes detallados sobre los resultados.",
    icon: BarChart,
    color: "bg-red-500",
  },
]

export default function ServiceProcess() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Nuestro <span className="text-yellow-500">Proceso</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Un enfoque estructurado para garantizar el éxito de cada proyecto, desde la concepción hasta la
            implementación.
          </p>
        </div>

        <div ref={ref} className="relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-yellow-500 hidden md:block -translate-x-1/2" />

          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className={`md:flex items-center ${index % 2 === 0 ? "" : "flex-row-reverse"}`}>
                  {/* Circle on the timeline */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center z-10 hidden md:flex">
                    <span className="text-black font-bold">{step.id}</span>
                  </div>

                  {/* Content */}
                  <div className="md:w-1/2 p-6 bg-white rounded-lg shadow-sm md:mr-12 md:ml-0 ml-0 mr-0">
                    <div className="flex items-center mb-4">
                      <div className={`${step.color} p-3 rounded-full mr-4`}>
                        <step.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-gray-700">{step.description}</p>
                  </div>

                  <div className="md:w-1/2" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
