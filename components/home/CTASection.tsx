import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para destacar en el entorno urbano?</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Contacta con nosotros hoy mismo y descubre cómo podemos ayudarte a crear campañas de marketing offline que
          generen resultados reales.
        </p>
        <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-8 py-6">
          <Link href="/contact">Solicitar Presupuesto</Link>
        </Button>
      </div>
    </section>
  )
}
