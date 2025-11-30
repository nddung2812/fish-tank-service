"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import ProductGrid from "./components/ProductGrid";
import CategoryFilter from "./components/CategoryFilter";
import Cart from "./components/Cart";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { productsData } from "./data/products";
import Footer from "@/app/components/Footer";
import { useCart } from "@/app/context/CartContext";

// JSON-LD structured data component for the products listing page
function ProductsListingStructuredData({ products, selectedCategory }) {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://fishtankcleaning.com.au";

  // Organization structured data
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Duckaroo - Swan Design Aquatic Center",
    url: baseUrl,
    description:
      "Brisbane's premier aquatic plant and aquarium supply specialist",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Brisbane",
      addressRegion: "QLD",
      addressCountry: "AU",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      areaServed: "AU",
    },
  };

  // Breadcrumb structured data
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: `${baseUrl}/products`,
      },
    ],
  };

  // Collection page structured data
  const collectionPageData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name:
      selectedCategory === "all"
        ? "Premium Aquatic Plants & Aquarium Supplies"
        : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)
        } - Aquatic Plants & Supplies`,
    description:
      selectedCategory === "all"
        ? "Discover Australia's premier collection of rare Bucephalandra, Anubias, and other exotic aquatic plants. Shipped nationwide from our Brisbane facility."
        : `Premium ${selectedCategory} for aquascaping enthusiasts. Australia-wide shipping with live arrival guarantee.`,
    url:
      selectedCategory === "all"
        ? `${baseUrl}/products`
        : `${baseUrl}/products?category=${selectedCategory}`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: products.length,
      itemListElement: products.slice(0, 10).map((product, index) => ({
        "@type": "Product",
        position: index + 1,
        name: product.name,
        url: `${baseUrl}/products/${product.slug}`,
        image: product.images[0],
        description: product.description.substring(0, 160) + "...",
        offers: {
          "@type": "Offer",
          price: product.price.toString(),
          priceCurrency: "AUD",
          priceValidUntil: "2025-12-31",
          availability:
            product.stock > 0
              ? "https://schema.org/InStock"
              : "https://schema.org/OutOfStock",
          url: `${baseUrl}/products/${product.slug}`,
          seller: {
            "@type": "Organization",
            name: "Duckaroo - Swan Design Aquatic Center",
          },
        },
        aggregateRating: product.reviews
          ? {
            "@type": "AggregateRating",
            ratingValue: product.reviews.rating,
            reviewCount: product.reviews.count,
            bestRating: "5",
            worstRating: "1",
          }
          : undefined,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageData) }}
      />
    </>
  );
}

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [displayCount, setDisplayCount] = useState(9);
  const ITEMS_PER_BATCH = 9;
  const loadMoreRef = useRef(null);

  // Use global cart context (only need addToCart for ProductGrid)
  const { addToCart } = useCart();

  // Filter products based on category and search term
  useEffect(() => {
    let filtered = productsData;

    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
    setDisplayCount(ITEMS_PER_BATCH); // Reset display count on filter change
  }, [selectedCategory, searchTerm]);

  // Infinite scroll observer
  const handleObserver = useCallback(
    (entries) => {
      const target = entries[0];
      if (target.isIntersecting && displayCount < filteredProducts.length) {
        // Add small delay for better UX (optional)
        setTimeout(() => {
          setDisplayCount((prev) => prev + ITEMS_PER_BATCH);
        }, 500);
      }
    },
    [displayCount, filteredProducts.length]
  );

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loadMoreRef.current) observer.observe(loadMoreRef.current);

    return () => {
      if (loadMoreRef.current) observer.unobserve(loadMoreRef.current);
    };
  }, [handleObserver]);

  const visibleProducts = filteredProducts.slice(0, displayCount);
  const hasMore = displayCount < filteredProducts.length;

  return (
    <div className="min-h-screen flex flex-col">
      <ProductsListingStructuredData
        products={filteredProducts}
        selectedCategory={selectedCategory}
      />
      <div className="flex-grow bg-gray-50 pt-8">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-4 mb-8">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="flex items-center gap-2 hover:bg-blue-50 hover:border-blue-300"
            >
              <Link href="/">
                <Home className="w-4 h-4" />
                Home
              </Link>
            </Button>
          </div>

          {/* SEO-Optimized Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Rare Aquatic Plants & Aquarium Supplies
            </h1>
            <h2 className="text-xl md:text-2xl text-emerald-600 font-semibold mb-6">
              Australia Wide Shipping • Live Arrival Guarantee • 100% Customer
              Satisfaction
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
              Discover Australia&apos;s premier collection of{" "}
              <strong>rare Bucephalandra</strong>, <strong>Anubias</strong>, and
              other exotic aquatic plants. Shipped nationwide from our Brisbane
              facility with guaranteed live arrival and complete customer
              satisfaction. Perfect for aquascaping enthusiasts and planted
              aquarium hobbyists seeking premium quality plants and equipment.
            </p>

            {/* Key Features */}

            {/* Popular Categories */}
          </div>

          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            <div className="lg:w-1/4">
              <CategoryFilter
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
              />
            </div>
            <div className="lg:w-3/4">
              <ProductGrid
                products={visibleProducts}
                onAddToCart={addToCart}
              />

              {/* Infinite Scroll Sentinel */}
              {hasMore && (
                <div
                  ref={loadMoreRef}
                  className="flex justify-center items-center py-8"
                >
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
                </div>
              )}
            </div>
          </div>

          <div className="bg-gray-100 p-8 rounded-xl mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Featured Plant Categories
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
              <div>
                <h4 className="font-semibold text-emerald-600 mb-2">
                  🌿 Bucephalandra Species
                </h4>
                <p className="text-sm text-gray-600">
                  Rare and exotic Bucephalandra varieties including Kegadang and
                  other sought-after species
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-emerald-600 mb-2">
                  🍃 Anubias Collection
                </h4>
                <p className="text-sm text-gray-600">
                  Hardy Anubias plants perfect for low-light aquariums and
                  beginner aquascapers
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-emerald-600 mb-2">
                  🌱 Aquascaping Plants
                </h4>
                <p className="text-sm text-gray-600">
                  Complete range of foreground, midground, and background
                  aquatic plants
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-emerald-600 mb-2">
                  🔧 Equipment & Supplies
                </h4>
                <p className="text-sm text-gray-600">
                  Professional aquascaping tools, CO2 systems, and aquarium
                  maintenance equipment
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 mb-12">
            <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200">
              <h3 className="text-lg font-semibold text-emerald-800 mb-2">
                🚚 Australia Wide Shipping
              </h3>
              <p className="text-emerald-700">
                Fast, secure delivery to all Australian states and territories
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">
                🌱 Live Arrival Guarantee
              </h3>
              <p className="text-blue-700">
                All plants guaranteed to arrive alive and healthy or full
                replacement
              </p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-800 mb-2">
                ⭐ 100% Satisfaction
              </h3>
              <p className="text-purple-700">
                Complete satisfaction guarantee on every order
              </p>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="bg-white p-8 rounded-xl shadow-sm border mb-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Why Choose Duckaroo for Your Aquatic Plants?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-emerald-600 mb-4">
                  🌿 Rare Plant Specialists
                </h3>
                <p className="text-gray-700 mb-4">
                  We specialize in sourcing and growing the rarest Bucephalandra
                  species, premium Anubias varieties, and hard-to-find
                  aquascaping plants. Our Brisbane facility ensures optimal
                  growing conditions for healthy, vibrant plants.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Bucephalandra Kegadang and rare species</li>
                  <li>• Premium Anubias Nana and variants</li>
                  <li>• Exotic foreground and carpet plants</li>
                  <li>• Sustainably sourced specimens</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-4">
                  📦 Guaranteed Safe Delivery
                </h3>
                <p className="text-gray-700 mb-4">
                  Our Australia-wide shipping system ensures your plants arrive
                  in perfect condition. We use specialized packaging techniques
                  developed over years of experience shipping live aquatic
                  plants across the continent.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Live arrival guarantee on all plants</li>
                  <li>• Insulated packaging for temperature control</li>
                  <li>• Fast 2-7 day delivery Australia wide</li>
                  <li>• Full replacement for DOA plants</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Care Information */}
          <div className="bg-emerald-50 p-8 rounded-xl border border-emerald-200 mb-8">
            <h2 className="text-2xl font-bold text-emerald-800 text-center mb-6">
              Expert Plant Care & Aquascaping Support
            </h2>
            <p className="text-emerald-700 text-center mb-6 max-w-3xl mx-auto">
              Every plant comes with detailed care instructions. Our
              Brisbane-based team provides ongoing support to help you create
              stunning aquascapes with your Bucephalandra, Anubias, and other
              aquatic plants.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-semibold text-emerald-800 mb-2">
                  🔬 Plant Specifications
                </h4>
                <p className="text-emerald-700 text-sm">
                  Detailed lighting, CO2, and water parameter requirements for
                  each species
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-emerald-800 mb-2">
                  🎨 Aquascaping Tips
                </h4>
                <p className="text-emerald-700 text-sm">
                  Professional guidance on placement and design techniques
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-emerald-800 mb-2">
                  📞 Ongoing Support
                </h4>
                <p className="text-emerald-700 text-sm">
                  Brisbane team available for care questions and troubleshooting
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />

      {/* Fixed Floating Cart Widget */}
      <Cart />
    </div>
  );
}
