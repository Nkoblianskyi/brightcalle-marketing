import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image src="/images/about-agency.jpg" alt="BrightCalle Marketing Agency" fill className="object-cover" />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-yellow-500">BrightCalle</span> Marketing
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Somos una agencia de marketing offline especializada en transformar espacios urbanos en poderosas
              herramientas de comunicación para marcas que buscan destacar en el mundo físico.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Con sede en Madrid, nuestro equipo de expertos combina creatividad estratégica con un profundo
              conocimiento del entorno urbano para crear campañas memorables que generan resultados tangibles.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Desde vallas publicitarias hasta branding de transporte público, transformamos cada superficie en una
              oportunidad para que tu marca brille.
            </p>
            <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
              <Link href="/about">Conoce Más Sobre Nosotros</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
