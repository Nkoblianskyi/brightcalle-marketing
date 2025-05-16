"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Mail } from "lucide-react"

export default function ContactCTA() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      // Here you would normally send the email to your backend
      setEmail("")
      setTimeout(() => setIsSubmitted(false), 5000)
    }
  }

  return (
    <section className="py-20 bg-yellow-500 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-10 h-full w-full">
          {Array.from({ length: 100 }).map((_, i) => (
            <div key={i} className="border-[0.5px] border-black" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-black rounded-2xl p-8 md:p-12 shadow-2xl"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                ¿Listo para <span className="text-yellow-500">Destacar</span> en el Entorno Urbano?
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Contacta con nosotros hoy mismo y descubre cómo podemos ayudarte a crear campañas de marketing offline
                que generen resultados reales.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-8 py-6 w-full md:w-auto"
              >
                <Link href="/contact">Solicitar Presupuesto</Link>
              </Button>

              <div className="text-center md:text-left text-white">O</div>

              <form onSubmit={handleSubmit} className="w-full md:w-auto flex-1 max-w-md">
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Tu email para recibir información"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white pl-10 pr-32 py-6 h-auto rounded-lg"
                    required
                  />
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Button
                    type="submit"
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-yellow-500 hover:bg-yellow-600 text-black font-medium"
                  >
                    Suscribir <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
                {isSubmitted && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-400 text-sm mt-2"
                  >
                    ¡Gracias! Te hemos enviado un correo de confirmación.
                  </motion.p>
                )}
              </form>
            </div>

            <div className="mt-8 text-center text-gray-400 text-sm">
              <p>
                Al contactarnos, aceptas nuestra{" "}
                <Link href="/privacy-policy" className="text-yellow-500 hover:underline">
                  Política de Privacidad
                </Link>{" "}
                y{" "}
                <Link href="/cookie-policy" className="text-yellow-500 hover:underline">
                  Política de Cookies
                </Link>
                .
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
