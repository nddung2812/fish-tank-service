export const metadata = {
  title:
    "Fish Tank Cleaning Service Blog | Expert Aquarium Care Tips | Duckaroo Brisbane",
  description:
    "Expert fish tank cleaning service tips, aquarium maintenance guides, and professional care advice from Brisbane's premier fish tank cleaning service specialists. Learn proper fish tank cleaning service techniques and aquarium care.",
  keywords:
    "fish tank cleaning service, fish tank cleaning service tips, aquarium cleaning guide, professional fish tank cleaning service, Brisbane fish tank cleaning service, fish tank maintenance, aquarium care blog, fish tank cleaning service advice",
  openGraph: {
    title: "Fish Tank Cleaning Service Blog | Expert Aquarium Care Tips",
    description:
      "Professional fish tank cleaning service tips, aquarium maintenance guides, and expert care advice from Brisbane's premier fish tank cleaning service specialists.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=1200&h=630&fit=crop&crop=center",
        width: 1200,
        height: 630,
        alt: "Fish Tank Cleaning Service Blog - Expert Tips and Guides",
      },
      {
        url: "https://images.unsplash.com/photo-1520637836862-4d197d17c90a?w=1200&h=630&fit=crop&crop=center",
        width: 1200,
        height: 630,
        alt: "Fish Tank Cleaning Service and Aquascaping Guides",
      },
    ],
    type: "website",
    siteName: "Duckaroo Fish Tank Cleaning Service Brisbane",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fish Tank Cleaning Service Blog | Expert Tips & Guides",
    description:
      "Professional fish tank cleaning service tips, aquarium maintenance guides, and expert care advice from Brisbane's fish tank cleaning service specialists.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=1200&h=630&fit=crop&crop=center",
        alt: "Fish Tank Cleaning Service Blog - Expert Tips and Guides",
      },
    ],
  },
};

export default function BlogsLayout({ children }) {
  return children;
}
