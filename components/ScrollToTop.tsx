"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export default function ScrollToTop() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Прокручуємо до верху при зміні маршруту
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Використовуємо 'instant' замість 'smooth' для миттєвої прокрутки
    })
  }, [pathname, searchParams])

  return null
}
