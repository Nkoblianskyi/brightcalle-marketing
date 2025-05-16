"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, ArrowRight } from "lucide-react"
import posts from "@/data/posts.json"

export default function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState("Todos")
  const [filteredPosts, setFilteredPosts] = useState(posts)
  const [searchTerm, setSearchTerm] = useState("")

  // Format date to Spanish format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  }

  // Фільтруємо пости при зміні активної категорії або пошукового запиту
  useEffect(() => {
    let result = posts

    if (activeCategory !== "Todos") {
      result = result.filter((post) => post.category === activeCategory)
    }

    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      result = result.filter(
        (post) =>
          post.title.toLowerCase().includes(term) ||
          post.excerpt.toLowerCase().includes(term) ||
          post.tags.some((tag) => tag.toLowerCase().includes(term)),
      )
    }

    setFilteredPosts(result)
  }, [activeCategory, searchTerm])

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12 flex-wrap gap-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {["Todos", ...Array.from(new Set(posts.map((post) => post.category)))].map((category) => (
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

          <div className="relative w-full md:w-auto">
            <input
              type="text"
              placeholder="Buscar artículos..."
              className="px-4 py-3 rounded-full border border-gray-300 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative h-48">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
              </Link>

              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{formatDate(post.date)}</span>
                </div>

                <Link href={`/blog/${post.slug}`} className="block">
                  <h3 className="text-xl font-bold mb-3 hover:text-yellow-500 transition-colors">{post.title}</h3>
                </Link>

                <p className="text-gray-700 mb-4">{post.excerpt}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center mr-2">
                      <span className="font-bold text-gray-700 text-xs">{post.author.charAt(0)}</span>
                    </div>
                    <span className="text-sm text-gray-700">{post.author}</span>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center text-yellow-500 font-medium hover:text-yellow-600"
                  >
                    Leer <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">No hay artículos que coincidan con tu búsqueda</h3>
            <p className="text-gray-600">
              Intenta con otra categoría o término de búsqueda, o explora todos nuestros artículos.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
