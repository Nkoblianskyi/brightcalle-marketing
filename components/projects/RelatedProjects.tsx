"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function RelatedProjects({ projects }: { projects: any[] }) {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Proyectos <span className="text-yellow-500">Relacionados</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Descubre otros proyectos similares que podrían interesarte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <Link href={`/projects/${project.slug}`} className="block">
                <div className="relative overflow-hidden rounded-xl aspect-video">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <span className="inline-block bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <p className="text-gray-300 mt-2">{project.client}</p>
                    <div className="flex items-center mt-4 text-yellow-500 font-medium opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      Ver Proyecto <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
