"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import projects from "@/data/projects.json"

// Отримуємо унікальні категорії з проектів
const categories = ["Todos", ...Array.from(new Set(projects.map((project) => project.category)))]

export default function ProjectsCategories() {
  const [activeCategory, setActiveCategory] = useState("Todos")

  return (
    <section className="py-12 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full transition-all ${
                activeCategory === category
                  ? "bg-yellow-500 text-black font-bold"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
