"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { CheckCircle, Target, Quote } from "lucide-react"

export default function ProjectResults({ project }: { project: any }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              El <span className="text-yellow-500">Desafío</span>
            </h2>
            <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
              <div className="flex items-start mb-4">
                <div className="bg-yellow-500 p-3 rounded-full mr-4 flex-shrink-0">
                  <Target className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-bold">Objetivo del Proyecto</h3>
              </div>
              <p className="text-gray-700">{project.challenge}</p>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Nuestra <span className="text-yellow-500">Solución</span>
            </h2>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <p className="text-gray-700 mb-6">{project.solution}</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="text-yellow-500">Resultados</span> Obtenidos
            </h2>

            <div ref={ref} className="bg-white p-8 rounded-xl shadow-sm mb-8">
              <div className="space-y-6">
                {project.results.split(". ").map((result: string, index: number) => (
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
                      <p className="text-lg text-gray-800">{result}.</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {project.testimonial && (
              <div className="bg-gray-900 p-8 rounded-xl text-white">
                <div className="flex items-start mb-4">
                  <Quote className="h-10 w-10 text-yellow-500 mr-4 flex-shrink-0 opacity-50" />
                  <div>
                    <p className="text-lg italic mb-4">"{project.testimonial}"</p>
                    <p className="text-yellow-500 font-medium">{project.client}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
