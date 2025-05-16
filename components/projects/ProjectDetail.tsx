"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, MapPin, User } from "lucide-react"

export default function ProjectDetail({ project }: { project: any }) {
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
          href="/projects"
          className="inline-flex items-center text-yellow-500 hover:text-yellow-400 mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a Proyectos
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-square">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="inline-block bg-yellow-500 text-black text-sm font-bold px-4 py-1 rounded-full">
                    {project.category}
                  </span>
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
              {project.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-6 mb-8"
            >
              <div className="flex items-center text-gray-300">
                <User className="h-5 w-5 mr-2 text-yellow-500" />
                <span>Cliente: {project.client}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 mr-2 text-yellow-500" />
                <span>Ubicación: {project.location}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Calendar className="h-5 w-5 mr-2 text-yellow-500" />
                <span>Fecha: {project.date}</span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              {project.description}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Декоративний елемент внизу */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-transparent" />
    </section>
  )
}
