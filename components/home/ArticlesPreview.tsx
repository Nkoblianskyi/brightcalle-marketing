import Link from "next/link"
import Image from "next/image"
import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

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
  },
]

export default function ArticlesPreview() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Últimos Artículos</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Mantente al día con las últimas tendencias y conocimientos sobre marketing offline y publicidad exterior.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{formatDate(article.date)}</span>
                </div>
                <Link href={`/blog/${article.slug}`} className="block">
                  <h3 className="text-xl font-bold mb-3 hover:text-yellow-500 transition-colors">{article.title}</h3>
                </Link>
                <p className="text-gray-700 mb-4">{article.excerpt}</p>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/blog/${article.slug}`}>Leer Más</Link>
                </Button>
              </CardContent>
            </Card>
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
