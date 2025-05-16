"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem("cookie-consent")
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  const rejectCookies = () => {
    localStorage.setItem("cookie-consent", "rejected")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white z-50 shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm md:text-base">
            <p>
              Utilizamos cookies para mejorar su experiencia en nuestro sitio web. Al continuar navegando, acepta
              nuestra{" "}
              <Link href="/cookie-policy" className="text-yellow-400 hover:underline">
                Política de Cookies
              </Link>{" "}
              y{" "}
              <Link href="/privacy-policy" className="text-yellow-400 hover:underline">
                Política de Privacidad
              </Link>
              .
            </p>
          </div>
          <div className="flex gap-4">
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black"
              onClick={rejectCookies}
            >
              Rechazar
            </Button>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black" onClick={acceptCookies}>
              Aceptar
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
