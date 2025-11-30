import ContactPageClient from "./ContactPageClient";

export const metadata = {
  title:
    "Contact Best Fish Tank Cleaning Service Near Me | Free Quote Brisbane, Gold Coast & Sunshine Coast",
  description:
    "Get a free quote from the best & most affordable fish tank cleaning service near me. Cheapest aquarium cleaning rates in Brisbane, Gold Coast & Sunshine Coast from $49. Call (04) 5766 3939 for same-day service!",
  keywords:
    "best fish tank cleaning service near me, cheapest aquarium service Brisbane, affordable fish tank cleaning Gold Coast, fish tank service near me, best aquarium maintenance Sunshine Coast, cheap fish tank cleaner, professional aquarium service contact, aquarium cleaning quote Brisbane, best fish tank service Gold Coast, affordable aquarium cleaning near me",
  openGraph: {
    title:
      "Contact Best Fish Tank Cleaning Service | Affordable Aquarium Maintenance Near Me",
    description:
      "Get your free quote from Queensland's best & most affordable fish tank cleaning service. Professional aquarium maintenance from $49. Same-day service available!",
    url: "https://fishtankcleaning.com.au/contact",
    siteName: "Aquatic Swan Design - Best Fish Tank Cleaning",
    images: [
      {
        url: "https://res.cloudinary.com/dhvj8x2nq/image/upload/f_auto,q_auto/v1739712659/swan-logo-transparent_rphcfl",
        width: 1200,
        height: 630,
        alt: "Contact Best Fish Tank Cleaning Service - Affordable Aquarium Maintenance",
      },
    ],
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Contact Best Fish Tank Cleaning Service | Free Quote Near Me",
    description:
      "Get your FREE quote from the best & most affordable fish tank cleaning service. Professional aquarium maintenance across Brisbane, Gold Coast & Sunshine Coast.",
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
    canonical: "https://fishtankcleaning.com.au/contact",
  },
  other: {
    "geo.region": "AU-QLD",
    "geo.placename": "Brisbane, Gold Coast, Sunshine Coast",
    "geo.position": "-27.4705;153.0260",
    ICBM: "-27.4705, 153.0260",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
