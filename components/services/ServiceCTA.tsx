import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function ServiceCTA() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Абстрактний фоновий елемент */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/20 via-transparent to-transparent opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,_var(--tw-gradient-stops))] from-yellow-500/30 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            ¿Listo para <span className="text-yellow-500">Destacar</span> en el Entorno Urbano?
          </h2>

          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Descubre cómo podemos ayudarte a crear campañas de marketing offline que generen un impacto real y
            resultados tangibles.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-8 py-6"
            >
              <Link href="/contact">Solicitar Presupuesto</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black font-medium text-lg px-8 py-6"
            >
              <Link href="/projects" className="flex items-center">
                Ver Nuestros Proyectos <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
