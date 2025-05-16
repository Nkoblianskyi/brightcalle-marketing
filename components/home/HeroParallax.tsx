"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import HeroParticles from "./HeroParticles"

export default function HeroParallax() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <div ref={ref} className="relative h-screen overflow-hidden pt-16 md:pt-20">
      {/* Background layers - replaced images with gradients */}
      <motion.div
        style={{ y: y1, opacity }}
        animate={{
          scale: [1, 1.05, 1],
          filter: ["brightness(1)", "brightness(1.1)", "brightness(1)"],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 20,
          ease: "easeInOut",
        }}
        className="absolute inset-0 top-16 md:top-20 z-0 bg-gradient-to-b from-gray-900 via-black to-gray-800"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700/50 via-gray-900/50 to-black/80" />
      </motion.div>

      <motion.div
        style={{ y: y2, opacity }}
        animate={{
          x: [0, -15, 0, 15, 0],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 30,
          ease: "easeInOut",
        }}
        className="absolute inset-0 top-16 md:top-20 z-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-stops))] from-yellow-500/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_var(--tw-gradient-stops))] from-yellow-500/5 via-transparent to-transparent" />
      </motion.div>

      <motion.div
        style={{ y: y3, opacity }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 15,
          ease: "easeInOut",
        }}
        className="absolute inset-0 top-16 md:top-20 z-20"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-30 h-full flex flex-col justify-center items-center text-center px-4 pt-16 md:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mt-16 md:mt-0"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white">
            <span className="block">Transformamos</span>
            <span className="text-yellow-500">Espacios Urbanos</span>
            <span className="block">en Oportunidades</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
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
              className="border-white text-black hover:bg-white hover:text-black font-medium text-lg px-8 py-6"
            >
              <Link href="/projects">Ver Proyectos</Link>
            </Button>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          onClick={scrollToContent}
        >
          <ChevronDown className="h-10 w-10 text-white" />
        </motion.div>

        {/* Enhanced floating elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 25,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-yellow-500 rounded-full blur-3xl z-20 opacity-20"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            y: [0, 40, 0],
            x: [0, -30, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 20,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-blue-500 rounded-full blur-3xl z-20 opacity-10"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.2, 1],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 15,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 right-1/3 w-24 h-24 bg-purple-500 rounded-full blur-3xl z-20 opacity-10"
        />

        {/* Additional floating elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.15, 0.3, 0.15],
            scale: [1, 1.1, 1],
            x: [0, -20, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 18,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 right-1/4 w-36 h-36 bg-yellow-500 rounded-full blur-3xl z-20 opacity-15"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.1, 0.25, 0.1],
            y: [0, 30, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 22,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 left-1/3 w-28 h-28 bg-orange-500 rounded-full blur-3xl z-20 opacity-10"
        />
      </div>

      {/* Gradient overlay at bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-transparent"
        animate={{
          opacity: [0.7, 0.9, 0.7],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 5,
          ease: "easeInOut",
        }}
      />
      <HeroParticles />
    </div>
  )
}
