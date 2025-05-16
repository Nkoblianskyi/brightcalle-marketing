"use client"

import { motion } from "framer-motion"
import { BookOpen } from "lucide-react"

export default function BlogHero() {
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
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-yellow-500 p-4 rounded-full inline-flex mb-6">
            <BookOpen className="h-8 w-8 text-black" />
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
          >
            Nuestro <span className="text-yellow-500">Blog</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-300 mb-10 leading-relaxed"
          >
            Descubre las últimas tendencias, conocimientos y estrategias sobre marketing offline, publicidad exterior y
            branding. Artículos escritos por expertos del sector para ayudarte a destacar en el entorno urbano.
          </motion.p>

          {/* Декоративні елементи */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              y: [0, -30, 0],
              x: [0, 20, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 25,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-yellow-500 rounded-full blur-3xl z-20 opacity-20"
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              y: [0, 40, 0],
              x: [0, -30, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 20,
              ease: "easeInOut",
            }}
            className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-blue-500 rounded-full blur-3xl z-20 opacity-10"
          />
        </div>
      </div>

      {/* Декоративний елемент внизу */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-transparent" />
    </section>
  )
}
