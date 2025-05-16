"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Award, TrendingUp, Users, Globe, Star, Trophy } from "lucide-react"

const achievements = [
  {
    icon: Award,
    value: 15,
    suffix: "+",
    label: "Premios del Sector",
    description: "Reconocimientos a nuestra creatividad y efectividad",
  },
  {
    icon: TrendingUp,
    value: 250,
    suffix: "+",
    label: "Campañas Exitosas",
    description: "Implementadas en los últimos 5 años",
  },
  {
    icon: Users,
    value: 180,
    suffix: "+",
    label: "Clientes Satisfechos",
    description: "Confían en nuestros servicios",
  },
  {
    icon: Globe,
    value: 32,
    suffix: "",
    label: "Ciudades",
    description: "Con presencia de nuestras campañas",
  },
]

export default function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Nuestros <span className="text-yellow-500">Logros</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Resultados que demuestran nuestro compromiso con la excelencia y la satisfacción de nuestros clientes.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl p-8 text-center"
            >
              <div className="bg-yellow-500 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <achievement.icon className="h-8 w-8 text-black" />
              </div>

              <div className="flex items-center justify-center">
                <CountUp value={achievement.value} isInView={isInView} duration={2000} className="text-4xl font-bold" />
                <span className="text-4xl font-bold text-yellow-500">{achievement.suffix}</span>
              </div>

              <h3 className="text-xl font-bold mt-2 mb-1">{achievement.label}</h3>
              <p className="text-gray-400">{achievement.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-gray-800 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4">Reconocimientos</h3>
              <p className="text-gray-300">
                Nuestro trabajo ha sido reconocido por las principales asociaciones y eventos del sector publicitario.
              </p>
            </div>

            <div className="col-span-2 grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: Trophy, color: "bg-yellow-500" },
                { icon: Star, color: "bg-blue-500" },
                { icon: Award, color: "bg-green-500" },
                { icon: Trophy, color: "bg-purple-500" },
                { icon: Star, color: "bg-red-500" },
                { icon: Award, color: "bg-orange-500" },
              ].map((award, index) => (
                <div key={index} className="bg-gray-700 p-4 rounded-lg flex items-center justify-center">
                  <div className={`${award.color} p-3 rounded-full`}>
                    <award.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface CountUpProps {
  value: number
  isInView: boolean
  duration: number
  className?: string
}

function CountUp({ value, isInView, duration, className }: CountUpProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const end = value
    const totalFrames = Math.min((duration / 1000) * 60, 100) // Max 100 frames for performance
    const increment = end / totalFrames

    const counter = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(counter)
      } else {
        setCount(Math.floor(start))
      }
    }, duration / totalFrames)

    return () => clearInterval(counter)
  }, [isInView, value, duration])

  return <span className={className}>{count}</span>
}
