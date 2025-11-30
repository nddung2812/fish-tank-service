import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  Tag,
  ChevronRight,
} from "lucide-react";
import {
  blogs,
  blogCategories,
  getBlogBySlug,
  getRecentBlogs,
} from "@/data/blogs";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ShareButton from "./ShareButton";

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const blog = getBlogBySlug(resolvedParams.slug);

  if (!blog) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return {
    title: blog.seo?.metaTitle || `${blog.title} | Duckaroo Brisbane`,
    description: blog.seo?.metaDescription || blog.description,
    keywords: blog.tags.join(", "),
    openGraph: {
      title: blog.title,
      description: blog.description,
      images: [blog.image],
      type: "article",
      publishedTime: blog.publishDate,
      authors: [blog.author],
      tags: blog.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: [blog.image],
    },
  };
}

export default async function BlogPost({ params }) {
  const resolvedParams = await params;
  const blog = getBlogBySlug(resolvedParams.slug);

  if (!blog) {
    notFound();
  }

  const categoryInfo = blogCategories.find((cat) => cat.id === blog.category);
  const relatedBlogs = getRecentBlogs(4)
    .filter((b) => b.id !== blog.id)
    .slice(0, 3);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-AU", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.description,
    image: blog.image,
    author: {
      "@type": "Person",
      name: blog.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Duckaroo Brisbane",
      logo: {
        "@type": "ImageObject",
        url: "https://duckaroo.com.au/logo.png",
      },
    },
    datePublished: blog.publishDate,
    dateModified: blog.publishDate,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://duckaroo.com.au/blogs/${blog.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black">
        {/* Navigation */}
        <nav className="pt-24 pb-8 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-white/60 text-sm mb-4">
              <Link
                href="/blogs"
                className="hover:text-emerald-400 transition-colors"
              >
                Blog
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Badge
                className={`bg-gradient-to-r ${categoryInfo?.color} text-white text-xs`}
              >
                {categoryInfo?.name}
              </Badge>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white/80 truncate">{blog.title}</span>
            </div>

            <Button asChild variant="outline" size="sm" className="mb-6">
              <Link href="/blogs" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </nav>

        {/* Article Header */}
        <header className="px-4 mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Badge
                className={`bg-gradient-to-r ${categoryInfo?.color} text-white mb-4`}
              >
                {categoryInfo?.name}
              </Badge>

              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {blog.title}
              </h1>

              <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                {blog.description}
              </p>

              {/* Article Meta */}
              <div className="flex flex-wrap justify-center items-center gap-6 text-white/60 text-sm">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>By {blog.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(blog.publishDate)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{blog.readTime}</span>
                </div>
                <ShareButton blog={blog} />
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8 group cursor-pointer bg-gradient-to-br from-white/5 to-white/10 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src={blog.image}
                alt={blog.imageAlt || blog.title}
                fill
                className="object-cover scale-110 group-hover:object-contain group-hover:scale-100 transition-all duration-700 ease-in-out"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-700"></div>
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <article className="px-4 mb-16">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-8 md:p-12">
                <div className="prose prose-lg prose-invert max-w-none">
                  {blog.content.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-white/90 leading-relaxed mb-6 text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-white/20">
                  <div className="flex items-center gap-2 mb-4">
                    <Tag className="w-4 h-4 text-white/60" />
                    <span className="text-white/60 text-sm font-medium">
                      Tags:
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="text-white/80 border-white/30"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Author Bio */}
                <div className="mt-8 p-6 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {blog.author.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">
                        {blog.author}
                      </h3>
                      <p className="text-white/70 text-sm">
                        Expert aquarium specialist at Duckaroo Brisbane with
                        years of experience in aquatic care, fish health, and
                        aquascaping. Passionate about sharing knowledge to help
                        fellow aquarists succeed.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </article>

        {/* Related Articles */}
        {relatedBlogs.length > 0 && (
          <section className="px-4 pb-20">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedBlogs.map((relatedBlog) => (
                  <RelatedBlogCard key={relatedBlog.id} blog={relatedBlog} />
                ))}
              </div>

              <div className="text-center mt-12">
                <Button
                  asChild
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700"
                >
                  <Link href="/blogs">View All Articles</Link>
                </Button>
              </div>
            </div>
          </section>
        )}
      </div>
      <Footer />
    </>
  );
}

// Related Blog Card Component
function RelatedBlogCard({ blog }) {
  const categoryInfo = blogCategories.find((cat) => cat.id === blog.category);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-AU", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 group overflow-hidden">
      <div className="relative h-48">
        <Image
          src={blog.image}
          alt={blog.imageAlt || blog.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4">
          <Badge
            className={`bg-gradient-to-r ${categoryInfo?.color} text-white text-xs`}
          >
            {categoryInfo?.name}
          </Badge>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="flex items-center gap-4 text-white/60 text-xs mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {formatDate(blog.publishDate)}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {blog.readTime}
          </span>
        </div>
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors line-clamp-2">
          {blog.title}
        </h3>
        <p className="text-white/70 text-sm mb-4 line-clamp-3">
          {blog.description}
        </p>
        <Button
          asChild
          size="sm"
          className="w-full bg-emerald-600 hover:bg-emerald-700"
        >
          <Link href={`/blogs/${blog.slug}`}>Read Article</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
