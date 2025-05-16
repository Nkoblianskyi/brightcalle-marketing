"use client"

import React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Lightbulb, Target, Leaf, Users, Zap } from "lucide-react"

// Дані з about.json
const mission =
  "Transformar espacios urbanos en poderosas herramientas de comunicación para marcas que buscan destacar en el mundo físico."
const vision =
  "Ser la agencia de referencia en marketing offline en España, reconocida por nuestra creatividad, efectividad y compromiso con la sostenibilidad."

const values = [
  {
    title: "Creatividad",
    description:
      "Buscamos constantemente ideas innovadoras que rompan la monotonía del entorno urbano y capturen la atención del público.",
    icon: Lightbulb,
    color: "bg-purple-500",
  },
  {
    title: "Efectividad",
    description:
      "Nos centramos en crear campañas que no solo impacten visualmente, sino que generen resultados tangibles para nuestros clientes.",
    icon: Target,
    color: "bg-blue-500",
  },
  {
    title: "Sostenibilidad",
    description:
      "Estamos comprometidos con la implementación de soluciones respetuosas con el medio ambiente, utilizando materiales sostenibles y prácticas responsables.",
    icon: Leaf,
    color: "bg-green-500",
  },
  {
    title: "Colaboración",
    description:
      "Trabajamos estrechamente con nuestros clientes, construyendo relaciones de confianza basadas en la transparencia y la comunicación abierta.",
    icon: Users,
    color: "bg-orange-500",
  },
  {
    title: "Innovación",
    description:
      "Nos mantenemos a la vanguardia de las tendencias y tecnologías, integrando soluciones digitales que potencian el impacto de la publicidad física.",
    icon: Zap,
    color: "bg-red-500",
  },
]

export default function MissionValues() {
  const [activeValue, setActiveValue] = useState(0)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nuestra <span className="text-yellow-500">Misión y Visión</span>
            </h2>

            <div className="bg-gray-100 p-8 rounded-xl mb-8 relative">
              <div className="absolute -top-4 -left-4 bg-yellow-500 p-3 rounded-full">
                <Target className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">Misión</h3>
              <p className="text-gray-700">{mission}</p>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl text-white relative">
              <div className="absolute -top-4 -left-4 bg-yellow-500 p-3 rounded-full">
                <Lightbulb className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">Visión</h3>
              <p className="text-gray-300">{vision}</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Nuestros <span className="text-yellow-500">Valores</span>
            </h2>

            <div className="grid grid-cols-5 gap-2 mb-8">
              {values.map((value, index) => (
                <button
                  key={index}
                  className={`p-4 rounded-lg transition-all ${
                    activeValue === index ? "bg-yellow-500 text-black" : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => setActiveValue(index)}
                  aria-label={value.title}
                >
                  <value.icon className="h-6 w-6 mx-auto" />
                </button>
              ))}
            </div>

            <motion.div
              key={activeValue}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-100 p-8 rounded-xl"
            >
              <div className="flex items-start">
                <div className={`${values[activeValue].color} p-3 rounded-full mr-4 flex-shrink-0`}>
                  {React.createElement(values[activeValue].icon, { className: "h-6 w-6 text-white" })}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{values[activeValue].title}</h3>
                  <p className="text-gray-700">{values[activeValue].description}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
