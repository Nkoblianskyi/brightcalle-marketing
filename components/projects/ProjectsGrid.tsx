"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import projects from "@/data/projects.json"

export default function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState("Todos")
  const [filteredProjects, setFilteredProjects] = useState(projects)

  // Фільтруємо проекти при зміні активної категорії
  useEffect(() => {
    if (activeCategory === "Todos") {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter((project) => project.category === activeCategory))
    }
  }, [activeCategory])

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {["Todos", ...Array.from(new Set(projects.map((project) => project.category)))].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full transition-all ${
                  activeCategory === category
                    ? "bg-yellow-500 text-black font-bold"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/projects/${project.slug}`} className="block">
                <div className="relative overflow-hidden rounded-xl aspect-square">
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

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">No hay proyectos en esta categoría</h3>
            <p className="text-gray-600">Por favor, selecciona otra categoría o consulta todos nuestros proyectos.</p>
          </div>
        )}
      </div>
    </section>
  )
}
