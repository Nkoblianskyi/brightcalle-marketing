"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Layout, Bus, Printer, PenTool, Calendar, MapPin, ArrowRight } from "lucide-react"

// Мапа іконок для сервісів
const serviceIcons: Record<string, any> = {
  "outdoor-advertising": MapPin,
  branding: PenTool,
  print: Printer,
  transport: Bus,
  events: Calendar,
  "street-marketing": Layout,
}

export default function RelatedServices({ services }: { services: any[] }) {
  const [hoveredService, setHoveredService] = useState<string | null>(null)

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Servicios <span className="text-yellow-500">Relacionados</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Descubre otros servicios que podrían complementar tu estrategia de marketing offline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = serviceIcons[service.slug] || Layout

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                onMouseEnter={() => setHoveredService(service.slug)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div
                  className="h-40 relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${getGradientColors(service.id)})`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/10" />

                  {/* Декоративні елементи */}
                  <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-white/10 rounded-full" />
                  <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-white/5 rounded-full" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{
                        scale: hoveredService === service.slug ? 1.1 : 1,
                        y: hoveredService === service.slug ? -5 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="bg-white p-4 rounded-full shadow-lg"
                    >
                      <IconComponent className="h-8 w-8 text-yellow-500" />
                    </motion.div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-700 mb-4 line-clamp-2">{service.shortDescription}</p>

                  <Button asChild variant="outline" className="w-full group">
                    <Link href={`/services/${service.slug}`} className="flex items-center justify-center">
                      Ver Detalles
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Функція для генерації градієнтних кольорів на основі ID сервісу
function getGradientColors(id: number): string {
  const colorPairs = [
    "#FF6B35, #F7B801",
    "#3A86FF, #8338EC",
    "#06D6A0, #1B9AAA",
    "#EF476F, #FFD166",
    "#118AB2, #073B4C",
    "#7209B7, #3A0CA3",
  ]

  return colorPairs[(id - 1) % colorPairs.length]
}
