import Link from "next/link"
import BackgroundWrapper from "@/components/BackgroundWrapper"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <BackgroundWrapper imagePath="/images/404-background.jpg" overlayOpacity={0.7}>
      <div className="min-h-screen flex items-center justify-center text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Página No Encontrada</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Lo sentimos, la página que estás buscando no existe o ha sido movida.
          </p>
          <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
            <Link href="/">Volver al Inicio</Link>
          </Button>
        </div>
      </div>
    </BackgroundWrapper>
  )
}
