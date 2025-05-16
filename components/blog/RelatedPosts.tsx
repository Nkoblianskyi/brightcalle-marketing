"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, ArrowRight } from "lucide-react"

export default function RelatedPosts({ posts }: { posts: any[] }) {
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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Artículos <span className="text-yellow-500">Relacionados</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Descubre más contenido sobre este tema que podría interesarte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
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

                <p className="text-gray-700 mb-4 line-clamp-2">{post.excerpt}</p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="flex items-center text-yellow-500 font-medium hover:text-yellow-600"
                >
                  Leer Artículo <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No hay artículos relacionados disponibles en este momento.</p>
          </div>
        )}
      </div>
    </section>
  )
}
