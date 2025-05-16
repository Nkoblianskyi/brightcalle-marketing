"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed w-full z-50 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center" scroll={true}>
            <Image src="/logo.png" alt="BrightCalle Marketing" width={180} height={40} className="h-10 w-auto" />
            <h3 className=" text-white">BrightCalle Marketing</h3>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
              <Link href="/contact" scroll={true}>
                Contáctanos
              </Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-6">
            <NavLinks mobile onClick={() => setIsMenuOpen(false)} />
            <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold w-full">
              <Link href="/contact" onClick={() => setIsMenuOpen(false)} scroll={true}>
                Contáctanos
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

function NavLinks({ mobile = false, onClick }: { mobile?: boolean; onClick?: () => void }) {
  const links = [
    { href: "/", label: "Inicio" },
    { href: "/about", label: "Nosotros" },
    { href: "/services", label: "Servicios" },
    { href: "/projects", label: "Proyectos" },
    { href: "/blog", label: "Blog" },
  ]

  return (
    <div className={mobile ? "flex flex-col space-y-4" : "flex space-x-8"}>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-white hover:text-yellow-400 transition-colors font-medium"
          onClick={onClick}
          scroll={true}
        >
          {link.label}
        </Link>
      ))}
    </div>
  )
}
