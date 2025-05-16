import type React from "react"
import Image from "next/image"

interface BackgroundWrapperProps {
  children: React.ReactNode
  imagePath: string
  overlayOpacity?: number
}

export default function BackgroundWrapper({ children, imagePath, overlayOpacity = 0.7 }: BackgroundWrapperProps) {
  return (
    <div className="relative w-full min-h-screen">
      <div className="absolute inset-0 z-0">
        <Image src={imagePath || "/placeholder.svg"} alt="Background" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black" style={{ opacity: overlayOpacity }} />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}
