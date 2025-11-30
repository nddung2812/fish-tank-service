import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "./components/Banner";
import GuideContent from "./components/GuideContent";

export const metadata = {
  title: "How to Setup Your First Aquarium | The Ultimate Beginner's Guide",
  description: "Learn how to setup your first aquarium with our comprehensive, step-by-step guide. Covers nitrogen cycle, equipment, plants, and fish selection.",
  keywords: ["aquarium setup", "fish tank guide", "beginner aquarium", "nitrogen cycle", "aquascaping"],
  openGraph: {
    title: "How to Setup Your First Aquarium | The Ultimate Beginner's Guide",
    description: "Everything you need to know to set up and maintain a thriving aquarium ecosystem.",
    images: [
      {
        url: "https://res.cloudinary.com/dhvj8x2nq/image/upload/f_auto,q_auto,w_1200,h_630/v1757335537/bucephalandra_bush_oyiznj",
        width: 1200,
        height: 630,
        alt: "Aquarium Setup Guide",
      },
    ],
    type: "article",
  },
};

export default function AquariumGuidePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Setup Your First Aquarium",
    "description": "A comprehensive guide for beginners on setting up a freshwater aquarium.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Understand the Nitrogen Cycle",
        "text": "Learn about ammonia, nitrite, and nitrate to prevent fish loss."
      },
      {
        "@type": "HowToStep",
        "name": "Choose Your Equipment",
        "text": "Select the right tank, filter, heater, and lighting for your needs."
      },
      {
        "@type": "HowToStep",
        "name": "Set Up the Tank",
        "text": "Place the tank, add substrate, hardscape, and plants."
      },
      {
        "@type": "HowToStep",
        "name": "Cycle the Tank",
        "text": "Run the filter and establish beneficial bacteria before adding fish."
      },
      {
        "@type": "HowToStep",
        "name": "Add Fish",
        "text": "Slowly introduce fish after the tank is fully cycled."
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Fallback Dark Background */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 -z-30"
        style={{ minWidth: "100vw", minHeight: "100vh" }}
      />

      {/* Mobile Static Background - Blue Ocean Theme */}
      <div
        className="md:hidden fixed top-0 left-0 w-full h-full -z-20"
        style={{
          minWidth: "100vw",
          minHeight: "100vh",
          background:
            "linear-gradient(180deg, #0a1628 0%, #0c1f4a 25%, #1e3a8a 50%, #1e40af 75%, #1d4ed8 100%)",
        }}
      />

      {/* Dark overlay for better text readability */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-black/30 -z-10"
        style={{ minWidth: "100vw", minHeight: "100vh" }}
      />

      <Navbar />

      <main className="min-h-screen relative z-10 text-white">
        <Banner />
        <GuideContent />
      </main>

      <Footer />
    </>
  );
}
