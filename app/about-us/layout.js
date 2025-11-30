export const metadata = {
  title:
    "About Duckaroo | Fish Tank Cleaning Service & Aquarium Cleaning Service Near Me Brisbane",
  description:
    "Looking for fish tank cleaning service or aquarium cleaning service near me? Duckaroo is Brisbane's premier fish tank cleaning service since 2010. 15+ years experience, 1000+ happy customers, professional aquarium cleaning service near me across Brisbane, Gold Coast & QLD.",
  keywords: [
    "fish tank cleaning service",
    "aquarium cleaning service near me",
    "fish tank cleaning service Brisbane",
    "aquarium cleaning service near me Brisbane",
    "professional fish tank cleaning service",
    "local aquarium cleaning service near me",
    "Brisbane fish tank cleaning service",
    "best aquarium cleaning service near me",
    "about duckaroo fish tank cleaning service",
    "aquarium maintenance service near me",
    "pond cleaning service Brisbane",
    "emergency fish tank cleaning service",
    "residential fish tank cleaning service",
    "commercial aquarium cleaning service near me",
    "affordable fish tank cleaning service Brisbane",
  ],

  openGraph: {
    title:
      "About Duckaroo | Fish Tank Cleaning Service & Aquarium Cleaning Service Near Me Brisbane",
    description:
      "Premier fish tank cleaning service & aquarium cleaning service near me in Brisbane and Gold Coast. 1000+ customers trust our professional fish tank cleaning service. 15+ years experience, 5-star rated.",
    url: "https://aquaticswandesign.com.au/about-us",
    siteName: "Duckaroo Aquatic Services",
    images: [
      {
        url: "https://res.cloudinary.com/dhvj8x2nq/image/upload/f_auto,q_auto/v1739712659/swan-logo-transparent_rphcfl",
        width: 1200,
        height: 630,
        alt: "Duckaroo - Brisbane's Premier Aquarium Service",
      },
    ],
    locale: "en_AU",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Duckaroo | Fish Tank Cleaning Service Near Me Brisbane",
    description:
      "Professional fish tank cleaning service & aquarium cleaning service near me. 15+ years experience across Brisbane, Gold Coast & QLD. 1000+ happy customers.",
    images: [
      "https://res.cloudinary.com/dhvj8x2nq/image/upload/f_auto,q_auto/v1739712659/swan-logo-transparent_rphcfl",
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

  alternates: {
    canonical: "https://aquaticswandesign.com.au/about-us",
  },

  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },

  category: "Aquarium Services",
  classification: "Business",

  other: {
    "geo.region": "AU-QLD",
    "geo.placename": "Brisbane",
    "geo.position": "-27.4698;153.0251",
    ICBM: "-27.4698, 153.0251",
    "business:contact_data:locality": "Brisbane",
    "business:contact_data:region": "Queensland",
    "business:contact_data:country_name": "Australia",
    "business:contact_data:postal_code": "4000",
    "business:contact_data:phone_number": "(04) 57663939",
    "business:contact_data:website": "https://aquaticswandesign.com.au",
  },
};

export default function AboutUsLayout({ children }) {
  return (
    <>
      {/* About Us specific structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "@id": "https://aquaticswandesign.com.au/about-us",
            mainEntity: {
              "@type": "LocalBusiness",
              "@id": "https://aquaticswandesign.com.au/#organization",
              name: "Duckaroo Fish Tank Cleaning Service",
              alternateName: "Duckaroo Aquarium Cleaning Service Near Me",
              description:
                "Brisbane's premier fish tank cleaning service and aquarium cleaning service near me since 2010. Professional fish tank cleaning service serving Brisbane, Gold Coast, and Queensland.",
              url: "https://aquaticswandesign.com.au",
              telephone: "(04) 5766 3939",
              email: "aquaticswandesign@gmail.com",
              foundingDate: "2010",
              founder: {
                "@type": "Organization",
                name: "Duckaroo Founders",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Your Street Address",
                addressLocality: "Brisbane",
                addressRegion: "QLD",
                postalCode: "4000",
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
                  sameAs: "https://en.wikipedia.org/wiki/Brisbane",
                },
                {
                  "@type": "City",
                  name: "Gold Coast",
                  sameAs:
                    "https://en.wikipedia.org/wiki/Gold_Coast,_Queensland",
                },
                {
                  "@type": "State",
                  name: "Queensland",
                  sameAs: "https://en.wikipedia.org/wiki/Queensland",
                },
              ],
              serviceType: [
                "Fish Tank Cleaning Service",
                "Aquarium Cleaning Service Near Me",
                "Professional Fish Tank Cleaning Service",
                "Aquarium Maintenance Service",
                "Pond Cleaning Service",
                "Emergency Fish Tank Cleaning Service",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
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
                    name: "Sarah Mitchell",
                  },
                  reviewBody:
                    "Absolutely fantastic service! The team cleaned our office aquarium and it looks incredible. Professional, punctual, and the fish are so much happier.",
                  datePublished: "2024-01-15",
                },
                {
                  "@type": "Review",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  author: {
                    "@type": "Person",
                    name: "David Chen",
                  },
                  reviewBody:
                    "Best aquarium service in Brisbane! They set up our new 200L tank perfectly and provided excellent ongoing maintenance advice.",
                  datePublished: "2024-01-01",
                },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Aquarium Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Fish Tank Cleaning Service",
                      description:
                        "Professional fish tank cleaning service and aquarium cleaning service near me across Brisbane",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Aquarium Cleaning Service Near Me",
                      description:
                        "Local aquarium cleaning service near me with regular maintenance and care",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Pond Cleaning",
                      description:
                        "Professional pond cleaning and maintenance services",
                    },
                  },
                ],
              },
              openingHours: "Mo-Su 07:00-19:00",
              priceRange: "$$",
              paymentAccepted: "Cash, Credit Card, Bank Transfer",
              currenciesAccepted: "AUD",
            },
          }),
        }}
      />
      {children}
    </>
  );
}
