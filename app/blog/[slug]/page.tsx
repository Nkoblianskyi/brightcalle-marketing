import { notFound } from "next/navigation"
import BlogArticle from "@/components/blog/BlogArticle"
import BlogAuthor from "@/components/blog/BlogAuthor"
import RelatedPosts from "@/components/blog/RelatedPosts"
import BlogNewsletter from "@/components/blog/BlogNewsletter"
import posts from "@/data/posts.json"

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = posts.find((post) => post.slug === params.slug)

  if (!post) {
    return {
      title: "Artículo no encontrado - BrightCalle Marketing",
      description: "El artículo que estás buscando no existe.",
    }
  }

  return {
    title: `${post.title} - BrightCalle Marketing`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = posts
    .filter(
      (p) => p.slug !== post.slug && (p.category === post.category || p.tags.some((tag) => post.tags.includes(tag))),
    )
    .slice(0, 3)

  return (
    <>
      <BlogArticle post={post} />
      <BlogAuthor post={post} />
      <RelatedPosts posts={relatedPosts} />
      <BlogNewsletter />
    </>
  )
}
