"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const locations = [
  {
    id: 1,
    name: "Madrid Centro",
    description: "Vallas publicitarias y mupis en las principales arterias comerciales",
    coordinates: { x: 48, y: 45 },
    campaigns: 42,
  },
  {
    id: 2,
    name: "Aeropuerto Madrid-Barajas",
    description: "Publicidad en terminales y zonas de alto tránsito",
    coordinates: { x: 65, y: 35 },
    campaigns: 18,
  },
  {
    id: 3,
    name: "Gran Vía",
    description: "Lonas de gran formato y pantallas LED",
    coordinates: { x: 47, y: 46 },
    campaigns: 24,
  },
  {
    id: 4,
    name: "Estaciones de Metro",
    description: "Campañas integrales en las principales estaciones",
    coordinates: { x: 52, y: 50 },
    campaigns: 36,
  },
  {
    id: 5,
    name: "Nuevos Desarrollos Norte",
    description: "Vallas en zonas de expansión urbana",
    coordinates: { x: 45, y: 30 },
    campaigns: 15,
  },
  {
    id: 6,
    name: "Zona Comercial Sur",
    description: "Publicidad en centros comerciales y retail parks",
    coordinates: { x: 50, y: 65 },
    campaigns: 22,
  },
]

export default function InteractiveMap() {
  const [activeLocation, setActiveLocation] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Nuestra <span className="text-yellow-500">Presencia</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Descubre dónde puedes encontrar nuestras campañas de publicidad exterior en Madrid.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-4 md:p-8 max-w-5xl mx-auto">
          <div className="relative">
            {/* Map image */}
            <div className="relative aspect-[4/3] md:aspect-[16/9]">
              <Image src="/images/madrid-map.jpg" alt="Mapa de Madrid" fill className="object-cover rounded-lg" />
              <div className="absolute inset-0 bg-black/10 rounded-lg" />

              {/* Location pins */}
              {locations.map((location) => (
                <button
                  key={location.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group z-20"
                  style={{ left: `${location.coordinates.x}%`, top: `${location.coordinates.y}%` }}
                  onMouseEnter={() => setActiveLocation(location.id)}
                  onMouseLeave={() => setActiveLocation(null)}
                  aria-label={location.name}
                >
                  <div className="relative">
                    <div
                      className={`h-4 w-4 rounded-full ${
                        activeLocation === location.id ? "bg-yellow-500" : "bg-yellow-500/70"
                      } group-hover:bg-yellow-500 transition-all`}
                    />
                    <div
                      className={`absolute top-0 left-0 h-4 w-4 rounded-full bg-yellow-500 animate-ping ${
                        activeLocation === location.id ? "opacity-70" : "opacity-0"
                      }`}
                    />
                    <div
                      className={`absolute top-0 left-0 h-4 w-4 rounded-full bg-yellow-500/30 group-hover:scale-[3] transition-transform duration-300 ${
                        activeLocation === location.id ? "scale-[3]" : "scale-0"
                      }`}
                    />
                  </div>

                  <AnimatePresence>
                    {activeLocation === location.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-30 w-64 bg-white rounded-lg shadow-lg p-4"
                      >
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-3 h-3 bg-white" />
                        <h3 className="font-bold text-gray-900 mb-1">{location.name}</h3>
                        <p className="text-gray-600 text-sm mb-2">{location.description}</p>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">Campañas activas:</span>
                          <span className="font-bold text-yellow-500">{location.campaigns}</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              ))}
            </div>

            {/* Legend */}
            <div className="mt-4 flex flex-wrap gap-4 justify-center">
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2" />
                <span className="text-sm text-gray-700">Ubicaciones Principales</span>
              </div>
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-yellow-500/30 mr-2" />
                <span className="text-sm text-gray-700">Zonas de Cobertura</span>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center text-gray-600 text-sm">
            <p>
              Pasa el cursor sobre los puntos para ver más información sobre nuestras ubicaciones estratégicas en
              Madrid.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
