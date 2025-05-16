"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// Mock data - would come from posts.json
const articles = [
  {
    id: 1,
    slug: "tendencias-publicidad-exterior-2025",
    title: "Tendencias en Publicidad Exterior para 2025",
    excerpt:
      "Descubre las innovaciones y tendencias que definirán el futuro de la publicidad exterior en el próximo año.",
    date: "2025-05-10",
    image: "/images/blog/trends-2025.jpg",
    category: "Tendencias",
    featured: true,
  },
  {
    id: 2,
    slug: "impacto-ambiental-publicidad",
    title: "Reduciendo el Impacto Ambiental de la Publicidad Física",
    excerpt:
      "Estrategias y materiales sostenibles para crear campañas de publicidad exterior más respetuosas con el medio ambiente.",
    date: "2025-04-22",
    image: "/images/blog/eco-friendly.jpg",
    category: "Sostenibilidad",
    featured: false,
  },
  {
    id: 3,
    slug: "integracion-offline-online",
    title: "Integración de Estrategias Offline y Online",
    excerpt:
      "Cómo combinar eficazmente la publicidad exterior tradicional con campañas digitales para maximizar el impacto.",
    date: "2025-03-15",
    image: "/images/blog/integration.jpg",
    category: "Estrategia",
    featured: false,
  },
  {
    id: 4,
    slug: "medicion-campanas-exteriores",
    title: "Nuevas Métricas para Medir Campañas Exteriores",
    excerpt: "Tecnologías y metodologías innovadoras para cuantificar el impacto real de la publicidad exterior.",
    date: "2025-02-28",
    image: "/images/blog/metrics.jpg",
    category: "Análisis",
    featured: false,
  },
]

export default function BlogMasonry() {
  const [isMounted, setIsMounted] = useState(false)

  // Format date to Spanish format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  }

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  const featuredArticle = articles.find((article) => article.featured)
  const regularArticles = articles.filter((article) => !article.featured)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Nuestro <span className="text-yellow-500">Blog</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Mantente al día con las últimas tendencias y conocimientos sobre marketing offline y publicidad exterior.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {featuredArticle && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="col-span-1 lg:col-span-2 relative rounded-xl overflow-hidden shadow-xl group"
            >
              <div className="relative h-96">
                <Image
                  src={featuredArticle.image || "/placeholder.svg"}
                  alt={featuredArticle.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                <div className="flex items-center mb-4">
                  <span className="bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full mr-3">
                    {featuredArticle.category}
                  </span>
                  <div className="flex items-center text-gray-300 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{formatDate(featuredArticle.date)}</span>
                  </div>
                </div>
                <Link href={`/blog/${featuredArticle.slug}`} className="block group">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white group-hover:text-yellow-500 transition-colors">
                    {featuredArticle.title}
                  </h3>
                </Link>
                <p className="text-gray-300 mb-4 max-w-3xl">{featuredArticle.excerpt}</p>
                <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-black">
                  <Link href={`/blog/${featuredArticle.slug}`} className="flex items-center">
                    Leer Artículo <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className="relative h-48">
                <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-6 relative z-10">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{formatDate(article.date)}</span>
                </div>
                <Link href={`/blog/${article.slug}`} className="block group">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-500 transition-colors">
                    {article.title}
                  </h3>
                </Link>
                <p className="text-gray-700 mb-4">{article.excerpt}</p>
                <Link
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center text-yellow-500 font-medium hover:text-yellow-600"
                >
                  Leer Más <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
            <Link href="/blog">Ver Todos los Artículos</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
