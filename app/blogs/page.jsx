"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  Calendar,
  Clock,
  User,
  Filter,
  Grid,
  List,
} from "lucide-react";
import {
  blogs,
  blogCategories,
  searchBlogs,
  getBlogsByCategory,
  getFeaturedBlogs,
} from "@/data/blogs";
import Layout from "@/app/components/Layout";

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [viewMode, setViewMode] = useState("grid");

  // Filter and sort blogs
  const filteredBlogs = useMemo(() => {
    let filtered = blogs;

    // Search filter
    if (searchQuery) {
      filtered = searchBlogs(searchQuery);
    }

    // Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter((blog) => blog.category === selectedCategory);
    }

    // Sort blogs
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "oldest":
          return new Date(a.publishDate) - new Date(b.publishDate);
        case "title":
          return a.title.localeCompare(b.title);
        case "readTime":
          return parseInt(a.readTime) - parseInt(b.readTime);
        case "newest":
        default:
          return new Date(b.publishDate) - new Date(a.publishDate);
      }
    });

    return filtered;
  }, [searchQuery, selectedCategory, sortBy]);

  const featuredBlogs = getFeaturedBlogs();

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-AU", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getCategoryInfo = (categoryId) => {
    return blogCategories.find((cat) => cat.id === categoryId);
  };

  return (
    <Layout className="bg-gradient-to-br from-slate-950 via-slate-900 to-black">
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black">
        {/* Hero Section */}
        <section className="pt-24 pb-12 px-4 relative">
          <div className="max-w-7xl mx-auto text-center">
            <Badge className="mb-6 bg-emerald-500/20 border-emerald-400 text-emerald-300 text-lg px-6 py-2">
              Fish Tank Cleaning Service Expert Guides
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Fish Tank Cleaning Service
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 block mt-2">
                Expert Blog
              </span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Professional{" "}
              <strong className="text-emerald-300">
                fish tank cleaning service
              </strong>{" "}
              tips, expert aquarium maintenance guides, and comprehensive care
              tutorials from Brisbane&apos;s premier{" "}
              <strong className="text-emerald-300">
                fish tank cleaning service
              </strong>{" "}
              specialists. Learn proper fish tank cleaning service techniques,
              aquarium care, fish health, and aquascaping from our experienced
              team.
            </p>
          </div>
        </section>

        {/* Featured Blogs */}
        {featuredBlogs.length > 0 && (
          <section className="px-4 mb-12">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                Featured Fish Tank Cleaning Service Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredBlogs.slice(0, 3).map((blog) => (
                  <FeaturedBlogCard key={blog.id} blog={blog} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Filters and Search */}
        <section className="px-4 mb-8">
          <div className="max-w-7xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
                  {/* Search */}
                  <div className="lg:col-span-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-4 h-4" />
                      <Input
                        placeholder="Search articles..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/60"
                      />
                    </div>
                  </div>

                  {/* Category Filter */}
                  <Select
                    value={selectedCategory}
                    onValueChange={setSelectedCategory}
                  >
                    <SelectTrigger 
                      className="bg-white/20 border-white/30 text-white"
                      aria-label="Select blog category"
                    >
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      {blogCategories.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  {/* Sort */}
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger 
                      className="bg-white/20 border-white/30 text-white"
                      aria-label="Sort blog posts"
                    >
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="oldest">Oldest First</SelectItem>
                      <SelectItem value="title">Title A-Z</SelectItem>
                      <SelectItem value="readTime">Read Time</SelectItem>
                    </SelectContent>
                  </Select>

                  {/* View Toggle */}
                  <div className="flex gap-2">
                    <Button
                      variant={viewMode === "grid" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setViewMode("grid")}
                      className="bg-emerald-600 hover:bg-emerald-700"
                    >
                      <Grid className="w-4 h-4" />
                    </Button>
                    <Button
                      variant={viewMode === "list" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setViewMode("list")}
                      className="bg-emerald-600 hover:bg-emerald-700"
                    >
                      <List className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Results Count */}
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/20">
                  <p className="text-white/80">
                    Showing {filteredBlogs.length} articles
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Blogs Grid */}
        <section className="px-4 pb-20">
          <div className="max-w-7xl mx-auto">
            <div
              className={`grid gap-6 ${
                viewMode === "grid"
                  ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                  : "grid-cols-1"
              }`}
            >
              {filteredBlogs.map((blog) => (
                <BlogCard
                  key={blog.id}
                  blog={blog}
                  viewMode={viewMode}
                  formatDate={formatDate}
                  getCategoryInfo={getCategoryInfo}
                />
              ))}
            </div>

            {filteredBlogs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-white/60 text-lg">
                  No articles found matching your criteria.
                </p>
                <Button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                  }}
                  className="mt-4 bg-emerald-600 hover:bg-emerald-700"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
}

// Featured Blog Card Component
function FeaturedBlogCard({ blog }) {
  const categoryInfo = blogCategories.find((cat) => cat.id === blog.category);

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
            className={`bg-gradient-to-r ${categoryInfo?.color} text-white`}
          >
            Featured
          </Badge>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors line-clamp-2">
          {blog.title}
        </h3>
        <p className="text-white/70 text-sm mb-4 line-clamp-2">
          {blog.description}
        </p>
        <div className="flex items-center justify-between text-white/60 text-xs mb-4">
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {blog.readTime}
          </span>
          <span className="flex items-center gap-1">
            <User className="w-3 h-3" />
            {blog.author}
          </span>
        </div>
        <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700">
          <Link href={`/blogs/${blog.slug}`}>Read Article</Link>
        </Button>
      </CardContent>
    </Card>
  );
}

// Regular Blog Card Component
function BlogCard({ blog, viewMode, formatDate, getCategoryInfo }) {
  const categoryInfo = getCategoryInfo(blog.category);

  if (viewMode === "list") {
    return (
      <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex gap-6">
            <div className="w-32 h-24 bg-white/20 rounded-lg flex-shrink-0 overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.imageAlt || blog.title}
                width={128}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between mb-2">
                <Badge
                  className={`bg-gradient-to-r ${categoryInfo?.color} text-white text-xs`}
                >
                  {categoryInfo?.name}
                </Badge>
                <span className="text-white/60 text-xs">
                  {formatDate(blog.publishDate)}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 hover:text-emerald-300 transition-colors">
                <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
              </h3>
              <p className="text-white/70 text-sm mb-3 line-clamp-2">
                {blog.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-white/60 text-xs">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {blog.readTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {blog.author}
                  </span>
                </div>
                <Button asChild variant="outline" size="sm">
                  <Link href={`/blogs/${blog.slug}`}>Read More</Link>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

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
            className={`bg-gradient-to-r ${categoryInfo?.color} text-white`}
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
        <div className="flex items-center justify-between">
          <span className="text-white/60 text-xs flex items-center gap-1">
            <User className="w-3 h-3" />
            {blog.author}
          </span>
          <Button
            asChild
            size="sm"
            className="bg-emerald-600 hover:bg-emerald-700"
          >
            <Link href={`/blogs/${blog.slug}`}>Read More</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
