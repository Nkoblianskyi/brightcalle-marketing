import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-white py-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-yellow-500">Transformamos</span> espacios urbanos en oportunidades de marca
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
          Especialistas en publicidad exterior, branding y campañas de alto impacto en Madrid
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
            <Link href="/services">Nuestros Servicios</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
