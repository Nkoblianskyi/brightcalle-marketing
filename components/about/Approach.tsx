"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MessageSquare, LineChart, Palette, Printer, MapPin, BarChart } from "lucide-react"

const approachSteps = [
  {
    id: 1,
    title: "Consulta Inicial",
    description:
      "Analizamos tus objetivos, audiencia y presupuesto para entender completamente tus necesidades y expectativas.",
    icon: MessageSquare,
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "Estrategia",
    description:
      "Desarrollamos una estrategia personalizada seleccionando los mejores formatos y ubicaciones para maximizar el impacto.",
    icon: LineChart,
    color: "bg-purple-500",
  },
  {
    id: 3,
    title: "Diseño Creativo",
    description:
      "Creamos conceptos visuales impactantes adaptados a cada formato publicitario y alineados con tu identidad de marca.",
    icon: Palette,
    color: "bg-pink-500",
  },
  {
    id: 4,
    title: "Producción",
    description:
      "Gestionamos la producción de todos los materiales con los más altos estándares de calidad y atención al detalle.",
    icon: Printer,
    color: "bg-orange-500",
  },
  {
    id: 5,
    title: "Implementación",
    description:
      "Coordinamos la instalación y puesta en marcha de todos los elementos de la campaña en los tiempos acordados.",
    icon: MapPin,
    color: "bg-green-500",
  },
  {
    id: 6,
    title: "Seguimiento",
    description:
      "Monitorizamos el rendimiento y proporcionamos informes detallados sobre los resultados y el impacto de la campaña.",
    icon: BarChart,
    color: "bg-red-500",
  },
]

export default function Approach() {
  const [activeStep, setActiveStep] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Nuestro <span className="text-yellow-500">Enfoque</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Un proceso estructurado y orientado a resultados que garantiza el éxito de cada proyecto, desde la
            concepción hasta la implementación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {approachSteps.map((step) => (
            <motion.div
              key={step.id}
              whileHover={{ y: -10 }}
              className="bg-gray-100 rounded-xl p-6 cursor-pointer transition-all hover:shadow-lg"
              onMouseEnter={() => setActiveStep(step.id)}
              onMouseLeave={() => setActiveStep(null)}
            >
              <div className="flex items-start">
                <div
                  className={`${step.color} p-4 rounded-xl mr-4 flex-shrink-0 transition-all ${
                    activeStep === step.id ? "scale-110" : ""
                  }`}
                >
                  <step.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="flex items-center">
                    <span className="bg-yellow-500 text-black text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center mr-2">
                      {step.id}
                    </span>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-gray-700 mt-2">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-yellow-500 rounded-xl p-8 text-black">
          <h3 className="text-2xl font-bold mb-4 text-center">Beneficios de Nuestro Enfoque</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Campañas personalizadas a tus objetivos",
              "Optimización de presupuesto publicitario",
              "Máximo impacto visual",
              "Coordinación integral de todos los elementos",
              "Medición de resultados",
              "Soporte continuo durante toda la campaña",
            ].map((benefit, index) => (
              <div key={index} className="flex items-start bg-yellow-400/50 p-4 rounded-lg">
                <div className="bg-black h-6 w-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                  <span className="text-yellow-500 font-bold text-xs">✓</span>
                </div>
                <p className="text-black font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
