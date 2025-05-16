"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import posts from "@/data/posts.json"

// Отримуємо останню статтю для відображення як головної
const featuredPost = posts[0]

export default function BlogFeatured() {
  // Format date to Spanish format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Artículo <span className="text-yellow-500">Destacado</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Nuestro contenido más reciente y relevante sobre marketing offline y publicidad exterior.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="relative rounded-xl overflow-hidden aspect-square">
            <Image
              src={featuredPost.image || "/placeholder.svg"}
              alt={featuredPost.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="inline-block bg-yellow-500 text-black text-sm font-bold px-4 py-1 rounded-full">
                {featuredPost.category}
              </span>
            </div>
          </div>

          <div>
            <div className="flex items-center text-gray-500 text-sm mb-4">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{formatDate(featuredPost.date)}</span>
            </div>

            <h3 className="text-3xl font-bold mb-4">{featuredPost.title}</h3>
            <p className="text-gray-700 mb-6 text-lg">{featuredPost.excerpt}</p>

            <div className="flex items-start mb-6">
              <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                <span className="font-bold text-gray-700">{featuredPost.author.charAt(0)}</span>
              </div>
              <div>
                <p className="font-bold">{featuredPost.author}</p>
                <p className="text-gray-500 text-sm">{featuredPost.authorPosition}</p>
              </div>
            </div>

            <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-black">
              <Link href={`/blog/${featuredPost.slug}`} className="flex items-center">
                Leer Artículo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
