import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CookieConsent from "@/components/CookieConsent"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollToTop from "@/components/ScrollToTop"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "BrightCalle Marketing - Agencia de Marketing Offline en Madrid",
  description: "Especialistas en publicidad exterior, branding, impresión y campañas de transporte en Madrid, España.",
  openGraph: {
    title: "BrightCalle Marketing - Agencia de Marketing Offline en Madrid",
    description:
      "Especialistas en publicidad exterior, branding, impresión y campañas de transporte en Madrid, España.",
    url: "https://brightcallemarketing.com",
    siteName: "BrightCalle Marketing",
    locale: "es_ES",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ScrollToTop />
          <Header />
          <main className="flex-grow relative">{children}</main>
          <Footer />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  )
}
