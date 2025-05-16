"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"
import { TrendingUp, Users, Globe, Award, MapPin, Clock } from "lucide-react"

const stats = [
  {
    value: 250,
    suffix: "+",
    label: "Campañas Exitosas",
    description: "Implementadas en los últimos 5 años",
    icon: Award,
  },
  {
    value: 68,
    suffix: "%",
    label: "Reconocimiento",
    description: "De consumidores que recuerdan nuestras campañas",
    icon: TrendingUp,
  },
  {
    value: 15,
    suffix: "M",
    label: "Impactos Diarios",
    description: "Generados por nuestras campañas activas",
    icon: Users,
  },
  {
    value: 32,
    suffix: "",
    label: "Ciudades",
    description: "Con presencia de nuestras campañas",
    icon: MapPin,
  },
  {
    value: 4.5,
    suffix: "x",
    label: "Mayor Conversión",
    description: "Comparado con publicidad digital tradicional",
    icon: Globe,
  },
  {
    value: 24,
    suffix: "h",
    label: "Visibilidad",
    description: "Exposición continua de nuestras campañas",
    icon: Clock,
  },
]

export default function StatsCounter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isInView, hasAnimated])

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 h-full w-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border-[0.5px] border-black" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Nuestro <span className="text-yellow-500">Impacto</span> en Números
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Resultados medibles que demuestran la efectividad de nuestras estrategias de marketing offline.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className="flex items-start">
                <div className="bg-yellow-500 p-3 rounded-xl mr-4">
                  <stat.icon className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="flex items-baseline">
                    <CountUp
                      value={stat.value}
                      isInView={hasAnimated}
                      duration={2000}
                      decimals={stat.value % 1 !== 0 ? 1 : 0}
                      className="text-4xl font-bold text-gray-900"
                    />
                    <span className="text-4xl font-bold text-yellow-500 ml-1">{stat.suffix}</span>
                  </h3>
                  <p className="text-xl font-semibold text-gray-800">{stat.label}</p>
                  <p className="text-gray-600 mt-1">{stat.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

interface CountUpProps {
  value: number
  isInView: boolean
  duration: number
  decimals?: number
  className?: string
}

function CountUp({ value, isInView, duration, decimals = 0, className }: CountUpProps) {
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
        setCount(start)
      }
    }, duration / totalFrames)

    return () => clearInterval(counter)
  }, [isInView, value, duration])

  return <span className={className}>{count.toFixed(decimals)}</span>
}
