"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, ArrowLeft, Share2, Bookmark, Facebook, Twitter, Linkedin } from "lucide-react"

export default function BlogArticle({ post }: { post: any }) {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showShareButtons, setShowShareButtons] = useState(false)

  // Format date to Spanish format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  }

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <article className="pt-20 pb-12 bg-white">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-yellow-500"
          style={{ width: `${scrollProgress}%`, transition: "width 0.1s ease-out" }}
        />
      </div>

      <div className="container mx-auto px-4">
        <Link
          href="/blog"
          className="inline-flex items-center text-yellow-500 hover:text-yellow-600 mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver al Blog
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="inline-block bg-yellow-500 text-black text-sm font-bold px-4 py-1 rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">{post.title}</h1>
            <div className="flex items-center text-gray-500 text-sm">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{formatDate(post.date)}</span>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden aspect-video mb-12">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          </div>

          <div className="prose prose-lg max-w-none">
            {post.content.map((item: any, index: number) => {
              switch (item.type) {
                case "paragraph":
                  return (
                    <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                      {item.text}
                    </p>
                  )
                case "heading":
                  return (
                    <h2 key={index} className="text-2xl font-bold mt-12 mb-6">
                      {item.text}
                    </h2>
                  )
                case "subheading":
                  return (
                    <h3 key={index} className="text-xl font-bold mt-8 mb-4">
                      {item.text}
                    </h3>
                  )
                case "list":
                  return (
                    <ul key={index} className="list-disc pl-6 mb-6 space-y-2">
                      {item.items.map((listItem: string, listIndex: number) => (
                        <li key={listIndex} className="text-gray-700">
                          {listItem}
                        </li>
                      ))}
                    </ul>
                  )
                default:
                  return null
              }
            })}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
