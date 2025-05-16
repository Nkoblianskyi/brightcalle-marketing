"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

export default function ProjectGallery({ project }: { project: any }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const openLightbox = (image: string) => {
    setSelectedImage(image)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Galería del <span className="text-yellow-500">Proyecto</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {project.gallery.map((image: string, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="cursor-pointer"
              onClick={() => openLightbox(image)}
            >
              <div className="relative rounded-lg overflow-hidden aspect-square group">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} - Imagen ${index + 1}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-yellow-500 rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m4-3H6"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <button
                className="absolute top-4 right-4 bg-yellow-500 rounded-full p-2 text-black"
                onClick={closeLightbox}
              >
                <X className="h-6 w-6" />
              </button>

              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-yellow-500 rounded-full p-2 text-black"
                onClick={(e) => {
                  e.stopPropagation()
                  const currentIndex = project.gallery.indexOf(selectedImage)
                  const prevIndex = (currentIndex - 1 + project.gallery.length) % project.gallery.length
                  setSelectedImage(project.gallery[prevIndex])
                }}
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <div className="relative w-full max-w-4xl max-h-[80vh]" onClick={(e) => e.stopPropagation()}>
                <Image
                  src={selectedImage || "/placeholder.svg"}
                  alt="Imagen ampliada"
                  width={1200}
                  height={800}
                  className="object-contain w-full h-full"
                />
              </div>

              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-yellow-500 rounded-full p-2 text-black"
                onClick={(e) => {
                  e.stopPropagation()
                  const currentIndex = project.gallery.indexOf(selectedImage)
                  const nextIndex = (currentIndex + 1) % project.gallery.length
                  setSelectedImage(project.gallery[nextIndex])
                }}
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
