"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Layout, Bus, Printer, PenTool, Calendar, MapPin, ArrowRight, ArrowLeft } from "lucide-react"

// Мапа іконок для сервісів
const serviceIcons: Record<string, any> = {
  "outdoor-advertising": MapPin,
  branding: PenTool,
  print: Printer,
  transport: Bus,
  events: Calendar,
  "street-marketing": Layout,
}

export default function ServiceDetail({ service }: { service: any }) {
  const IconComponent = serviceIcons[service.slug] || Layout

  return (
    <section className="relative py-20 md:py-28 bg-black overflow-hidden">
      {/* Абстрактний фоновий елемент */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/20 via-transparent to-transparent opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-stops))] from-yellow-500/30 via-transparent to-transparent" />
        <div className="grid grid-cols-12 h-full w-full opacity-20">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border-[0.5px] border-yellow-500/30" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Link
          href="/services"
          className="inline-flex items-center text-yellow-500 hover:text-yellow-400 mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a Servicios
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div
                className="aspect-square rounded-2xl overflow-hidden relative"
                style={{
                  background: `linear-gradient(135deg, ${getGradientColors(service.id)})`,
                }}
              >
                <div className="absolute inset-0 bg-black/10" />

                {/* Декоративні елементи */}
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full" />
                <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-white/5 rounded-full" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 3,
                      ease: "easeInOut",
                    }}
                    className="bg-white p-8 rounded-full shadow-lg"
                  >
                    <IconComponent className="h-24 w-24 text-yellow-500" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
            >
              {service.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              {service.fullDescription}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-8 py-6"
              >
                <Link href="/contact" className="flex items-center">
                  Solicitar Información
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Декоративний елемент внизу */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-transparent" />
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
