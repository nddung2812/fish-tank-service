import "./globals.css";
import { Inter } from "next/font/google";
import LazyAnalytics from "./components/LazyAnalytics";
import { CartProvider } from "./context/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Fish Tank Cleaning Service Brisbane & Gold Coast | Professional Aquarium Maintenance | Duckaroo #1",
  description:
    "Brisbane & Gold Coast's premier fish tank cleaning service since 2010. Professional fish tank cleaning service, aquarium maintenance, tank removal & setup. Expert fish tank cleaning service specialists. Same-day service available. Call (04) 5766 3939",
  keywords:
    "fish tank cleaning service, fish tank cleaning service Brisbane, fish tank cleaning service Gold Coast, professional fish tank cleaning service, Brisbane fish tank cleaning service, Gold Coast fish tank cleaning service, aquarium maintenance service, fish tank cleaning specialists, same day fish tank cleaning service, residential fish tank cleaning service, commercial fish tank cleaning service",
  authors: [{ name: "Duckaroo Brisbane" }],
  creator: "Duckaroo Brisbane",
  publisher: "Duckaroo Brisbane",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://fishtankcleaning.com.au"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Fish Tank Cleaning Service Brisbane & Gold Coast | Professional Aquarium Maintenance | Duckaroo #1",
    description:
      "Brisbane & Gold Coast's premier fish tank cleaning service since 2010. Professional fish tank cleaning service, aquarium maintenance, tank removal & setup. Expert fish tank cleaning service specialists. Same-day service available.",
    url: "https://fishtankcleaning.com.au",
    siteName: "Duckaroo Fish Tank Cleaning Service Brisbane",
    images: [
      {
        url: "https://res.cloudinary.com/dhvj8x2nq/image/upload/f_auto,q_auto/v1756014363/meta_f0bqpw.jpg?v=2",
        width: 1200,
        height: 630,
        alt: "Duckaroo Brisbane - Professional Fish Tank Cleaning Service & Aquarium Maintenance",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Fish Tank Cleaning Service Brisbane & Gold Coast | Professional Aquarium Maintenance | Duckaroo #1",
    description:
      "Brisbane & Gold Coast's premier fish tank cleaning service since 2010. Professional fish tank cleaning service, aquarium maintenance, tank removal & setup. Expert fish tank cleaning service specialists.",
    images: [
      {
        url: "https://res.cloudinary.com/dhvj8x2nq/image/upload/f_auto,q_auto/v1756014363/meta_f0bqpw.jpg?v=2",
        alt: "Duckaroo Brisbane - Professional Fish Tank Cleaning Service & Aquarium Maintenance",
      },
    ],
  },
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
  verification: {
    google: "your-google-verification-code",
  },
  other: {
    "geo.region": "AU-QLD",
    "geo.placename": "Brisbane",
    "geo.position": "-27.4698;153.0251",
    ICBM: "-27.4698, 153.0251",
  },
  category: "business",
  classification: "Aquarium Services",
  coverage: "Brisbane, Gold Coast, Queensland, Australia",
  distribution: "global",
  rating: "general",
  referrer: "origin-when-cross-origin",
  "apple-mobile-web-app-capable": "yes",
  "apple-mobile-web-app-status-bar-style": "default",
  "apple-mobile-web-app-title": "Duckaroo Brisbane",
  "application-name": "Duckaroo Brisbane",
  "msapplication-TileColor": "#0f172a",
  "theme-color": "#0f172a",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  // Local Business Schema
  other: {
    "business:contact_data:street_address": "Brisbane, QLD",
    "business:contact_data:locality": "Brisbane",
    "business:contact_data:region": "Queensland",
    "business:contact_data:postal_code": "4000",
    "business:contact_data:country_name": "Australia",
    "business:contact_data:email": "aquaticswandesign@gmail.com",
    "business:contact_data:phone_number": "+61457663939",
    "business:contact_data:website": "https://fishtankcleaning.com.au",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU">
      <head>
        {/* Critical resource hints for performance */}
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://duckaroo.com.au" />
        <link rel="dns-prefetch" href="https://duckaroo.com.au" />

        {/* Font optimization handled by Next.js font system */}
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://fishtankcleaning.com.au/#business",
              name: "Duckaroo Fish Tank Cleaning Service Brisbane & Gold Coast",
              alternateName:
                "Brisbane & Gold Coast Premier Fish Tank Cleaning Service",
              description:
                "Brisbane & Gold Coast's premier fish tank cleaning service and aquarium maintenance specialists since 2010. Professional fish tank cleaning service across Brisbane & Gold Coast.",
              url: "https://fishtankcleaning.com.au",
              telephone: "+61457663939",
              email: "aquaticswandesign@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Brisbane",
                addressRegion: "QLD",
                addressCountry: "AU",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -27.4698,
                longitude: 153.0251,
              },
              areaServed: [
                {
                  "@type": "City",
                  name: "Brisbane",
                },
                {
                  "@type": "State",
                  name: "Queensland",
                },
              ],
              serviceType: [
                "Fish Tank Cleaning Service",
                "Professional Fish Tank Cleaning Service",
                "Aquarium Maintenance Service",
                "Fish Tank Removal Service",
                "Brisbane Fish Tank Cleaning Service",
                "Emergency Fish Tank Cleaning Service",
              ],
              priceRange: "$$",
              currenciesAccepted: "AUD",
              paymentAccepted: "Cash, Credit Card, Bank Transfer",
              openingHours: "Mo-Su 08:00-18:00",
              image: [
                "https://res.cloudinary.com/dhvj8x2nq/image/upload/f_auto,q_auto/v1756014363/meta_f0bqpw.jpg?v=2",
              ],
              sameAs: ["https://fishtankcleaning.com.au"],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "247",
                bestRating: "5",
                worstRating: "1",
              },
              review: [
                {
                  "@type": "Review",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  author: {
                    "@type": "Person",
                    name: "Sarah M.",
                  },
                  reviewBody:
                    "Excellent service! They transformed our tank completely. Professional, reliable, and great value.",
                },
              ],
            }),
          }}
        />

        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Professional Fish Tank Cleaning Service",
              provider: {
                "@type": "LocalBusiness",
                name: "Duckaroo Fish Tank Cleaning Service Brisbane",
                "@id": "https://fishtankcleaning.com.au/#organization",
              },
              areaServed: {
                "@type": "State",
                name: "Queensland",
                containsPlace: [
                  {
                    "@type": "City",
                    name: "Brisbane",
                  },
                  {
                    "@type": "City",
                    name: "Gold Coast",
                  },
                  {
                    "@type": "City",
                    name: "Logan",
                  },
                  {
                    "@type": "City",
                    name: "Ipswich",
                  },
                ],
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Fish Tank Cleaning Service & Aquarium Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Fish Tank Cleaning Service",
                      description:
                        "Professional fish tank cleaning service and aquarium maintenance specialists in Brisbane",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Tank Removal",
                      description:
                        "Safe and professional aquarium tank removal service in Brisbane",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Pond Cleaning",
                      description:
                        "Expert pond cleaning and maintenance service",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Aquarium Setup",
                      description:
                        "Complete aquarium setup and installation service",
                    },
                  },
                ],
              },
            }),
          }}
        />

        {/* Explicit Open Graph Tags for Social Media */}
        <meta
          property="og:title"
          content="Duckaroo Brisbane & Gold Coast | #1 Fish Tank Cleaning, Removal & Aquarium Service QLD"
        />
        <meta
          property="og:description"
          content="Brisbane & Gold Coast's premier fish tank cleaning & removal service since 2020. Professional aquarium maintenance, tank removal, pond cleaning & plant care. Same-day service available."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dhvj8x2nq/image/upload/f_auto,q_auto/v1756014363/meta_f0bqpw.jpg?v=2"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Duckaroo Brisbane - Professional Aquarium & Fish Tank Cleaning Service"
        />
        <meta property="og:url" content="https://fishtankcleaning.com.au" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Aquatic Swan Design" />
        <meta property="og:locale" content="en_AU" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Duckaroo Brisbane & Gold Coast | #1 Fish Tank Cleaning, Removal & Aquarium Service QLD"
        />
        <meta
          name="twitter:description"
          content="Brisbane & Gold Coast's premier fish tank cleaning & removal service since 2020. Professional aquarium maintenance, tank removal, pond cleaning & plant care. Same-day service available."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dhvj8x2nq/image/upload/f_auto,q_auto/v1756014363/meta_f0bqpw.jpg?v=2"
        />
        <meta
          name="twitter:image:alt"
          content="Duckaroo Brisbane - Professional Aquarium & Fish Tank Cleaning Service"
        />

        {/* Additional Meta Tags */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />

        {/* Geo Tags */}
        <meta name="geo.region" content="AU-QLD" />
        <meta name="geo.placename" content="Brisbane" />
        <meta name="geo.position" content="-27.4698;153.0251" />
        <meta name="ICBM" content="-27.4698, 153.0251" />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        <LazyAnalytics />
        <CartProvider>
          {children}
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </CartProvider>
      </body>
    </html>
  );
}
