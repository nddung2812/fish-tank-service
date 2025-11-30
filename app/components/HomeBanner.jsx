import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Shield,
  Clock,
  MapPin,
  Phone,
  CheckCircle2,
} from "lucide-react";

const serviceAreas = [
  {
    name: "Brisbane",
    description: "CBD & All Suburbs",
  },
  {
    name: "Gold Coast",
    description: "Surfers to Coolangatta",
  },
  {
    name: "Sunshine Coast",
    description: "Caloundra to Noosa",
  },
];

const services = [
  {
    title: "Fish Tank Cleaning",
    description:
      "Professional aquarium cleaning service for crystal-clear water and healthy fish",
    icon: <Sparkles className="h-6 w-6" />,
    href: "/service",
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Aquarium Maintenance",
    description:
      "Regular maintenance plans to keep your fish tank in perfect condition",
    icon: <Shield className="h-6 w-6" />,
    href: "#service-booking",
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Tank Setup & Removal",
    description:
      "Expert aquarium installation and safe tank removal services",
    icon: <Clock className="h-6 w-6" />,
    href: "/service",
    color: "from-purple-500 to-indigo-600",
  },
];

const benefits = [
  "Same-day service available",
  "Experienced aquarium specialists",
  "Eco-friendly cleaning products",
  "Competitive pricing",
  "100% satisfaction guarantee",
  "Free consultation & quotes",
];

export default function HomeBanner() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 pt-20 relative z-10">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto w-full mb-20 mt-16">
        {/* Main Hero Content */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-cyan-500/20 border-cyan-400 text-cyan-100 text-sm px-4 py-2">
            <MapPin className="w-4 h-4 inline mr-2" />
            Serving Brisbane, Gold Coast & Sunshine Coast
          </Badge>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
            Professional{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Fish Tank Cleaning
            </span>
            <br />
            Service in Queensland
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Expert aquarium cleaning and maintenance services across{" "}
            <strong className="text-cyan-300">Brisbane</strong>,{" "}
            <strong className="text-cyan-300">Gold Coast</strong> &{" "}
            <strong className="text-cyan-300">Sunshine Coast</strong>. Keep
            your fish happy and your tank crystal clear.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-none px-8 py-6 text-lg font-semibold shadow-lg shadow-cyan-500/50 group"
            >
              <Link
                href="#service-booking"
                className="flex items-center gap-2"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("service-booking")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white/30 bg-white/10 hover:bg-white/20 text-white px-8 py-6 text-lg font-semibold backdrop-blur-sm group"
            >
              <Link href="tel:+61457663939" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                (04) 5766 3939
              </Link>
            </Button>
          </div>

          {/* Service Areas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-16">
            {serviceAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 hover:bg-white/15 transition-all duration-300"
              >
                <div className="text-white font-semibold text-lg mb-1">
                  {area.name}
                </div>
                <div className="text-white/70 text-sm">{area.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Our Aquarium Services
          </h2>
          <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
            Professional fish tank cleaning and maintenance solutions tailored
            to your needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                onClick={(e) => {
                  if (service.href.startsWith("#")) {
                    e.preventDefault();
                    const element = document.querySelector(service.href);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }
                }}
              >
                <Card className="group bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 hover:border-cyan-400/50 transition-all duration-300 h-full cursor-pointer">
                  <CardContent className="p-8">
                    <div
                      className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
            Why Choose Our Fish Tank Cleaning Service?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <span className="text-white/90 text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
