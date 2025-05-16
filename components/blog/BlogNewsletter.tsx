"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, ArrowRight } from "lucide-react"

export default function BlogNewsletter() {
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
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Suscríbete a Nuestro <span className="text-yellow-500">Newsletter</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Recibe en tu correo los últimos artículos, tendencias y conocimientos sobre marketing offline y publicidad
              exterior.
            </p>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Tu email"
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
                  ¡Gracias! Te has suscrito correctamente.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
