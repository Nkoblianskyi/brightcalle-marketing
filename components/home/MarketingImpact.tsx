"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { TrendingUp, Users, Award, Target, Zap, BarChart4, Eye, Megaphone } from "lucide-react"
import { cn } from "@/lib/utils"

interface ImpactItem {
  icon: React.ReactNode
  title: string
  description: string
  color: string
}

export default function MarketingImpact() {
  const [activeIndex, setActiveIndex] = useState(0)

  const impactItems: ImpactItem[] = [
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Visibilidad Garantizada",
      description:
        "Nuestras campañas de publicidad exterior generan más de 10 millones de impresiones mensuales en las principales ciudades de España.",
      color: "bg-yellow-500",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "ROI Demostrable",
      description:
        "Nuestros clientes experimentan un aumento promedio del 27% en el reconocimiento de marca y un 18% en conversiones tras implementar nuestras estrategias.",
      color: "bg-emerald-500",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Alcance Demográfico",
      description:
        "Llegamos a audiencias diversas con mensajes personalizados, adaptando cada campaña al perfil específico de los consumidores objetivo.",
      color: "bg-blue-500",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Campañas Premiadas",
      description:
        "Nuestro trabajo ha sido reconocido con más de 15 premios de la industria por su creatividad, innovación y efectividad.",
      color: "bg-purple-500",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Precisión Geográfica",
      description:
        "Utilizamos análisis de datos para identificar las ubicaciones óptimas que maximizan el impacto de cada euro invertido.",
      color: "bg-red-500",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Impacto Inmediato",
      description:
        "A diferencia de otros medios, la publicidad exterior genera un impacto instantáneo y una presencia constante en el entorno urbano.",
      color: "bg-amber-500",
    },
    {
      icon: <BarChart4 className="h-8 w-8" />,
      title: "Análisis Avanzado",
      description:
        "Proporcionamos métricas detalladas sobre el rendimiento de cada campaña, permitiendo ajustes en tiempo real para optimizar resultados.",
      color: "bg-cyan-500",
    },
    {
      icon: <Megaphone className="h-8 w-8" />,
      title: "Amplificación Omnicanal",
      description:
        "Integramos la publicidad exterior con estrategias digitales para crear experiencias de marca coherentes y amplificar el mensaje.",
      color: "bg-pink-500",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestro Impacto</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Transformamos espacios urbanos en poderosas herramientas de comunicación que generan resultados medibles
            para nuestros clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4">
                {impactItems.map((item, index) => (
                  <div
                    key={index}
                    className={cn(
                      "p-4 rounded-lg cursor-pointer transition-all duration-300 border-2",
                      activeIndex === index ? "border-yellow-500 bg-yellow-50" : "border-transparent hover:bg-gray-50",
                    )}
                    onClick={() => setActiveIndex(index)}
                  >
                    <div className={cn("p-3 rounded-full w-fit mb-3", item.color)}>{item.icon}</div>
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden flex items-center">
            <div className="p-8">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col h-full"
              >
                <div className={cn("p-4 rounded-full w-fit mb-4", impactItems[activeIndex].color)}>
                  {impactItems[activeIndex].icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{impactItems[activeIndex].title}</h3>
                <p className="text-lg text-gray-700">{impactItems[activeIndex].description}</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
