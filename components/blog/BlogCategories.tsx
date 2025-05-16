"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import posts from "@/data/posts.json"

// Отримуємо унікальні категорії з постів
const categories = ["Todos", ...Array.from(new Set(posts.map((post) => post.category)))]

export default function BlogCategories() {
  const [activeCategory, setActiveCategory] = useState("Todos")

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full transition-all ${
                activeCategory === category
                  ? "bg-yellow-500 text-black font-bold"
                  : "bg-white text-gray-800 hover:bg-gray-200"
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
