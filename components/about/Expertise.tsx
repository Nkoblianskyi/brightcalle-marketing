"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, MapPin, Bus, Paintbrush, Calendar } from "lucide-react"

const expertiseAreas = [
  {
    id: "outdoor",
    title: "Publicidad Exterior",
    description:
      "Especialistas en vallas publicitarias, mupis, lonas de gran formato y todo tipo de soportes exteriores para maximizar la visibilidad de tu marca.",
    icon: MapPin,
    capabilities: [
      "Análisis estratégico de ubicaciones",
      "Diseño adaptado a formatos exteriores",
      "Gestión integral de permisos",
      "Producción e instalación profesional",
      "Mantenimiento durante toda la campaña",
    ],
    color: "#FF6B35",
  },
  {
    id: "transport",
    title: "Publicidad en Transporte",
    description:
      "Convertimos medios de transporte en vehículos publicitarios que llevan tu mensaje por toda la ciudad, alcanzando audiencias en movimiento.",
    icon: Bus,
    capabilities: [
      "Rotulación integral de autobuses y taxis",
      "Campañas en metro y cercanías",
      "Publicidad en estaciones y andenes",
      "Segmentación por rutas estratégicas",
      "Medición de impactos y audiencia",
    ],
    color: "#3A86FF",
  },
  {
    id: "branding",
    title: "Branding Físico",
    description:
      "Creamos experiencias de marca inmersivas en espacios físicos que refuerzan la identidad de tu marca y generan conexiones emocionales.",
    icon: Paintbrush,
    capabilities: [
      "Diseño de identidad visual para espacios",
      "Rotulación de fachadas y escaparates",
      "Ambientación de espacios comerciales",
      "Señalética corporativa",
      "Stands para ferias y eventos",
    ],
    color: "#8338EC",
  },
  {
    id: "events",
    title: "Marketing de Eventos",
    description:
      "Diseñamos y producimos materiales para eventos que destacan tu marca y generan experiencias memorables para tu audiencia.",
    icon: Calendar,
    capabilities: [
      "Conceptualización creativa de eventos",
      "Diseño y producción de stands",
      "Material promocional personalizado",
      "Activaciones de marca",
      "Medición de resultados y ROI",
    ],
    color: "#FB5607",
  },
]

export default function Expertise() {
  const [activeTab, setActiveTab] = useState("outdoor")

  const activeExpertise = expertiseAreas.find((area) => area.id === activeTab)

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Nuestra <span className="text-yellow-500">Experiencia</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Contamos con amplia experiencia en diferentes áreas del marketing offline, ofreciendo soluciones
            especializadas para cada necesidad.
          </p>
        </div>

        <div className="flex flex-wrap justify-center mb-12">
          {expertiseAreas.map((area) => (
            <button
              key={area.id}
              onClick={() => setActiveTab(area.id)}
              className={`px-6 py-3 m-2 rounded-full transition-all ${
                activeTab === area.id
                  ? "bg-yellow-500 text-black font-bold"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
            >
              {area.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeExpertise && (
            <motion.div
              key={activeExpertise.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div
                  className="relative p-8 md:p-12 flex flex-col justify-center items-center bg-gradient-to-br"
                  style={{ backgroundColor: `${activeExpertise.color}20` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
                  <div className="relative z-10 text-center">
                    <div className="bg-yellow-500 p-6 rounded-full inline-flex mb-6">
                      <activeExpertise.icon className="h-16 w-16 text-black" />
                    </div>
                    <h3 className="text-3xl font-bold mb-2 text-white">{activeExpertise.title}</h3>
                    <div className="h-1 w-24 bg-yellow-500 rounded-full mx-auto" />
                  </div>

                  {/* Декоративні елементи */}
                  <div
                    className="absolute top-1/4 left-1/4 w-24 h-24 rounded-full opacity-20"
                    style={{ backgroundColor: activeExpertise.color }}
                  />
                  <div
                    className="absolute bottom-1/3 right-1/4 w-32 h-32 rounded-full opacity-10"
                    style={{ backgroundColor: activeExpertise.color }}
                  />
                </div>

                <div className="p-8 md:p-12">
                  <p className="text-gray-300 mb-8">{activeExpertise.description}</p>

                  <h4 className="text-lg font-bold text-yellow-500 mb-4">Capacidades:</h4>
                  <ul className="space-y-3">
                    {activeExpertise.capabilities.map((capability, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
