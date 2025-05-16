import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center" scroll={true}>
            <Image src="/logo.png" alt="BrightCalle Marketing" width={180} height={40} className="h-10 w-auto" />
            <h3 className=" text-white">BrightCalle Marketing</h3>
          </Link>
            <p className="text-gray-400 mb-6">
              Especialistas en publicidad exterior, branding, impresión y campañas de transporte en Madrid, España.
            </p>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <FooterLink href="/" label="Inicio" />
              <FooterLink href="/about" label="Nosotros" />
              <FooterLink href="/services" label="Servicios" />
              <FooterLink href="/projects" label="Proyectos" />
              <FooterLink href="/blog" label="Blog" />
              <FooterLink href="/contact" label="Contacto" />
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <FooterLink href="/services/outdoor-advertising" label="Publicidad Exterior" />
              <FooterLink href="/services/branding" label="Branding" />
              <FooterLink href="/services/print" label="Impresión" />
              <FooterLink href="/services/transport" label="Campañas de Transporte" />
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                <span>Calle de Serrano, 55, 28006 Madrid, Spain</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-yellow-500 flex-shrink-0" />
                <a href="tel:+34692183305" className="hover:text-yellow-400">
                  +34 692 183 305
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-yellow-500 flex-shrink-0" />
                <a href="mailto:info@brightcallemarketing.com" className="hover:text-yellow-400">
                  info@brightcallemarketing.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} BrightCalle Marketing. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-yellow-400 text-sm" scroll={true}>
              Política de Privacidad
            </Link>
            <Link href="/cookie-policy" className="text-gray-400 hover:text-yellow-400 text-sm" scroll={true}>
              Política de Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link href={href} className="text-gray-400 hover:text-yellow-400 transition-colors" scroll={true}>
        {label}
      </Link>
    </li>
  )
}

function SocialIcon({ href, icon }: { href: string; icon: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-800 hover:bg-yellow-500 text-white hover:text-black p-2 rounded-full transition-colors"
      aria-label={`Visita nuestro perfil de ${icon}`}
    >
      <Image src={`/icons/${icon}.svg`} alt={icon} width={20} height={20} />
    </a>
  )
}
