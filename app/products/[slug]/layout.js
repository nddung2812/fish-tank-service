import { getProductBySlug } from "../data/products";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  // Unwrap the params Promise
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.slug);

  if (!product) {
    return {
      title: "Product Not Found | Duckaroo Brisbane",
      description:
        "The requested aquatic plant or aquarium product could not be found.",
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://duckaroo.com.au";
  const productUrl = `${baseUrl}/products/${product.slug}`;

  // Enhanced SEO titles for different product types
  const getOptimizedTitle = (product) => {
    if (product.category === "plants") {
      if (
        product.name.toLowerCase().includes("bucephalandra") ||
        product.name.toLowerCase().includes("buce")
      ) {
        return `${product.name} Brisbane | Rare Bucephalandra Aquatic Plants Australia | Duckaroo`;
      } else if (product.name.toLowerCase().includes("anubias")) {
        return `${product.name} Brisbane | Premium Anubias Aquarium Plants Australia | Duckaroo`;
      } else {
        return `${product.name} Brisbane | Live Aquatic Plants Australia Wide Shipping | Duckaroo`;
      }
    } else if (product.category === "equipment") {
      return `${product.name} Brisbane | Professional Aquarium Equipment Australia | Duckaroo`;
    } else {
      return `${product.name} Brisbane | Aquarium ${product.category} Australia Wide | Duckaroo`;
    }
  };

  // Enhanced descriptions with Brisbane location and shipping guarantees
  const getOptimizedDescription = (product) => {
    let baseDesc = product.description;
    let shippingText =
      "Australia Wide Shipping • Live Arrival Guarantee • 100% Customer Satisfaction";

    if (product.category === "plants") {
      if (
        product.name.toLowerCase().includes("bucephalandra") ||
        product.name.toLowerCase().includes("buce")
      ) {
        return `${baseDesc} ${shippingText}. Premium Bucephalandra shipped from Brisbane to all Australian states. Expert aquascaping plant care included. Price: $${product.price} AUD.`;
      } else if (product.name.toLowerCase().includes("anubias")) {
        return `${baseDesc} ${shippingText}. Hardy Anubias aquarium plants shipped from Brisbane Australia wide. Perfect for beginners and aquascaping. Price: $${product.price} AUD.`;
      } else {
        return `${baseDesc} ${shippingText}. Live aquatic plants shipped safely from Brisbane to all Australian states. Professional aquascaping quality. Price: $${product.price} AUD.`;
      }
    } else {
      return `${baseDesc} ${shippingText}. Professional aquarium ${product.category} shipped from Brisbane Australia wide. Price: $${product.price} AUD.`;
    }
  };

  return {
    title: getOptimizedTitle(product),
    description: getOptimizedDescription(product),
    keywords: [
      product.name.toLowerCase(),
      product.category,
      "aquarium Brisbane",
      "aquatic plants Australia",
      "aquascaping",
      "aquarium supplies",
      "live arrival guarantee",
      "Australia wide shipping",
      "Brisbane aquarium store",
      ...(product.category === "plants"
        ? [
            "live aquatic plants",
            "aquascaping plants",
            "planted aquarium",
            ...(product.name.toLowerCase().includes("bucephalandra") ||
            product.name.toLowerCase().includes("buce")
              ? [
                  "bucephalandra Australia",
                  "rare bucephalandra",
                  "bucephalandra Brisbane",
                ]
              : []),
            ...(product.name.toLowerCase().includes("anubias")
              ? ["anubias Australia", "anubias plants", "hardy aquarium plants"]
              : []),
          ]
        : []),
      ...product.features.map((f) => f.toLowerCase()),
    ].join(", "),

    // Open Graph tags for social media
    openGraph: {
      title: `${product.name} Brisbane - $${product.price} AUD | Duckaroo`,
      description: `${product.description} Australia Wide Shipping • Live Arrival Guarantee from Brisbane.`,
      url: productUrl,
      siteName: "Duckaroo Brisbane",
      images: [
        {
          url: product.images[0],
          width: 600,
          height: 400,
          alt: product.name,
        },
        ...product.images.slice(1, 4).map((image, index) => ({
          url: image,
          width: 600,
          height: 400,
          alt: `${product.name} - Image ${index + 2}`,
        })),
      ],
      type: "website",
      locale: "en_US",
    },

    // Twitter Card
    twitter: {
      card: "summary_large_image",
      title: `${product.name} Brisbane - $${product.price} AUD | Duckaroo`,
      description: `${product.description} Australia Wide Shipping • Live Arrival Guarantee`,
      images: [product.images[0]],
      creator: "@Duckaroo",
    },

    // Additional meta tags
    other: {
      "product:price:amount": product.price.toString(),
      "product:price:currency": "AUD",
      "product:availability": product.stock > 0 ? "in stock" : "out of stock",
      "product:condition": "new",
      "product:brand": "Duckaroo Brisbane",
      "product:category": product.category,
      "geo.region": "AU-QLD",
      "geo.placename": "Brisbane",
      "geo.position": "-27.4698;153.0251",
      ICBM: "-27.4698, 153.0251",
      "business:contact_data:locality": "Brisbane",
      "business:contact_data:region": "Queensland",
      "business:contact_data:country_name": "Australia",
    },

    // Canonical URL
    alternates: {
      canonical: productUrl,
    },

    // Robots
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

// Generate static params for all products (for build optimization)
export async function generateStaticParams() {
  // In a real app, you might want to fetch this from an API
  const { getAllProductSlugs } = await import("../data/products");
  const slugs = getAllProductSlugs();

  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default function ProductLayout({ children }) {
  return children;
}
