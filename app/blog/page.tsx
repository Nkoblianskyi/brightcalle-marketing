import BlogHero from "@/components/blog/BlogHero"
import BlogFeatured from "@/components/blog/BlogFeatured"
import BlogGrid from "@/components/blog/BlogGrid"
import BlogNewsletter from "@/components/blog/BlogNewsletter"

export const metadata = {
  title: "Blog - BrightCalle Marketing",
  description:
    "Artículos, tendencias y conocimientos sobre marketing offline, publicidad exterior y branding en Madrid.",
}

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogFeatured />
      <BlogGrid />
      <BlogNewsletter />
    </>
  )
}
