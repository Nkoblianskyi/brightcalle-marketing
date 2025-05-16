"use client"

import { motion } from "framer-motion"

export default function BlogAuthor({ post }: { post: any }) {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-sm"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="bg-yellow-500 rounded-full w-24 h-24 flex items-center justify-center flex-shrink-0">
                <span className="text-3xl font-bold text-black">{post.author.charAt(0)}</span>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-1">{post.author}</h3>
                <p className="text-yellow-500 mb-4">{post.authorPosition}</p>
                <p className="text-gray-700">
                  Experto en marketing offline y publicidad exterior con más de 10 años de experiencia en el sector.
                  Especializado en desarrollar estrategias creativas que conectan marcas con audiencias en el entorno
                  urbano.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
