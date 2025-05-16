"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { CheckCircle, Award } from "lucide-react"

export default function ServiceFeatures({ service }: { service: any }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Beneficios de Nuestro <span className="text-yellow-500">Servicio</span>
            </h2>

            <div ref={ref} className="space-y-6">
              {service.benefits.map((benefit: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="bg-yellow-500 p-2 rounded-full mr-4 flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-black" />
                  </div>
                  <div>
                    <p className="text-lg text-gray-800">{benefit}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Nuestros <span className="text-yellow-500">Formatos</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.formats.map((format: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-gray-100 p-6 rounded-xl"
                >
                  <div className="flex items-center mb-3">
                    <div className="bg-yellow-500 p-2 rounded-full mr-3">
                      <Award className="h-4 w-4 text-black" />
                    </div>
                    <h3 className="font-bold">{format}</h3>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-gray-100 rounded-xl">
              <h3 className="text-xl font-bold mb-4">¿Por qué elegirnos?</h3>
              <p className="text-gray-700 mb-4">
                Nuestro equipo de expertos combina creatividad estratégica con un profundo conocimiento del entorno
                urbano para crear campañas memorables que generan resultados tangibles.
              </p>
              <p className="text-gray-700">
                Trabajamos con las mejores tecnologías y materiales para garantizar la máxima calidad y efectividad en
                todos nuestros proyectos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
