import ContactPageClient from "./ContactPageClient";

export const metadata = {
  title:
    "Contact Us - Fish Tank Cleaning Brisbane, Gold Coast & Sunshine Coast | Free Quote",
  description:
    "Get a free quote for professional fish tank cleaning and aquarium maintenance in Brisbane, Gold Coast & Sunshine Coast. Call (04) 5766 3939 or contact us online for same-day service.",
  keywords:
    "contact fish tank cleaning Brisbane, aquarium cleaning quote Gold Coast, fish tank service Sunshine Coast, aquarium maintenance contact, fish tank cleaner near me, aquarium service Brisbane contact",
  openGraph: {
    title:
      "Contact Us - Professional Fish Tank Cleaning | Brisbane, Gold Coast & Sunshine Coast",
    description:
      "Get in touch for expert fish tank cleaning and aquarium maintenance services. Free quotes, same-day service available across Queensland.",
    url: "https://fishtankcleaning.com.au/contact",
    siteName: "Aquatic Swan Design",
    images: [
      {
        url: "https://res.cloudinary.com/dhvj8x2nq/image/upload/f_auto,q_auto/v1739712659/swan-logo-transparent_rphcfl",
        width: 1200,
        height: 630,
        alt: "Contact Aquatic Swan Design - Fish Tank Cleaning Specialists",
      },
    ],
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Contact Us - Professional Fish Tank Cleaning | Brisbane, Gold Coast & Sunshine Coast",
    description:
      "Get your FREE aquarium quote. Professional fish tank cleaning service across Queensland.",
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
