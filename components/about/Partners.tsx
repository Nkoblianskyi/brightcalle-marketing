"use client"

import { motion } from "framer-motion"
import { Handshake, Target, TrendingUp, Building, Users, Briefcase, Globe, Award } from "lucide-react"

const partners = [
  { name: "Empresa de Telecomunicaciones", icon: Building, color: "bg-blue-500" },
  { name: "Cadena de Retail", icon: Briefcase, color: "bg-green-500" },
  { name: "Startup de Tecnología", icon: TrendingUp, color: "bg-purple-500" },
  { name: "Marca de Moda", icon: Users, color: "bg-pink-500" },
  { name: "Empresa de Alimentación", icon: Globe, color: "bg-orange-500" },
  { name: "Compañía de Seguros", icon: Award, color: "bg-red-500" },
  { name: "Entidad Financiera", icon: Building, color: "bg-indigo-500" },
  { name: "Cadena Hotelera", icon: Briefcase, color: "bg-teal-500" },
]

export default function Partners() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Nuestros <span className="text-yellow-500">Colaboradores</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Trabajamos con marcas líderes en diversos sectores que confían en nuestra experiencia y profesionalidad.
          </p>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center justify-center p-4 transition-all"
              >
                <div className={`${partner.color} p-4 rounded-full mb-3`}>
                  <partner.icon className="h-8 w-8 text-white" />
                </div>
                <p className="text-center font-medium">{partner.name}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-500 p-2 rounded-full mr-3">
                  <Handshake className="h-5 w-5 text-black" />
                </div>
                <h3 className="font-bold text-lg">Colaboraciones Estratégicas</h3>
              </div>
              <p className="text-gray-700">
                Establecemos relaciones a largo plazo basadas en la confianza y los resultados mutuamente beneficiosos.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-500 p-2 rounded-full mr-3">
                  <Target className="h-5 w-5 text-black" />
                </div>
                <h3 className="font-bold text-lg">Objetivos Compartidos</h3>
              </div>
              <p className="text-gray-700">
                Nos alineamos con los objetivos de nuestros clientes para crear campañas que generen resultados
                tangibles.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-500 p-2 rounded-full mr-3">
                  <TrendingUp className="h-5 w-5 text-black" />
                </div>
                <h3 className="font-bold text-lg">Crecimiento Conjunto</h3>
              </div>
              <p className="text-gray-700">
                Celebramos el éxito de nuestros clientes y crecemos juntos a través de colaboraciones duraderas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
