import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Award,
  Users,
  MapPin,
  Phone,
  Mail,
  Star,
  CheckCircle2,
  Clock,
  Shield,
  Heart,
  Sparkles,
} from "lucide-react";

const AboutBanner = () => {
  const achievements = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "15+ Years Experience",
      description: "Trusted aquarium specialists since 2010",
      color: "from-cyan-500 to-blue-600",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "1000+ Happy Customers",
      description: "Serving Brisbane, Gold Coast & Sunshine Coast",
      color: "from-cyan-500 to-blue-600",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "5-Star Rated",
      description: "247+ verified Google reviews",
      color: "from-purple-500 to-indigo-600",
    },
  ];

  const services = [
    "Professional Fish Tank Cleaning",
    "Regular Aquarium Maintenance",
    "Tank Setup & Installation",
    "Pond Cleaning & Maintenance",
    "Emergency Aquarium Services",
    "Aquascaping Design",
    "Equipment Installation",
    "Fish Health Consultations",
  ];

  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Passion for Aquatics",
      description:
        "We're not just cleaners - we're passionate aquarists dedicated to creating thriving aquatic environments",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality Guaranteed",
      description:
        "100% satisfaction guarantee on all services with eco-friendly products and professional care",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Always Available",
      description:
        "Same-day service and 24/7 emergency support when you need us most",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Expert Knowledge",
      description:
        "Continuous training and 15+ years of experience in aquarium care and maintenance",
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-20 relative z-10">
      {/* Hero Section */}
      <div className="text-center max-w-6xl mx-auto mb-20 mt-16">
        <Badge className="mb-6 bg-cyan-500/20 border-cyan-400 text-cyan-100 text-sm px-4 py-2">
          <MapPin className="w-4 h-4 inline mr-2" />
          Serving Brisbane, Gold Coast & Sunshine Coast Since 2010
        </Badge>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
          About{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Aquatic Swan Design
          </span>
        </h1>

        <div className="text-xl md:text-2xl text-white/80 mb-10 max-w-4xl mx-auto leading-relaxed space-y-6">
          <p>
            Queensland's premier{" "}
            <strong className="text-cyan-300">fish tank cleaning service</strong>{" "}
            and{" "}
            <strong className="text-cyan-300">
              aquarium maintenance specialists
            </strong>
            . We've been keeping aquariums crystal clear and fish healthy across{" "}
            <strong className="text-cyan-300">Brisbane</strong>,{" "}
            <strong className="text-cyan-300">Gold Coast</strong>, and{" "}
            <strong className="text-cyan-300">Sunshine Coast</strong> since 2010.
          </p>

          <p className="text-lg md:text-xl">
            From routine maintenance to emergency services, our experienced team
            delivers professional aquarium care with same-day availability and a
            100% satisfaction guarantee.
          </p>
        </div>

        {/* Contact Information */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <Link
            href="tel:+61457663939"
            className="flex items-center gap-2 text-white/90 hover:text-cyan-300 transition-colors"
          >
            <Phone className="w-5 h-5 text-cyan-400" />
            <span className="font-semibold">(04) 5766 3939</span>
          </Link>
          <Link
            href="mailto:aquaticswandesign@gmail.com"
            className="flex items-center gap-2 text-white/90 hover:text-cyan-300 transition-colors"
          >
            <Mail className="w-5 h-5 text-cyan-400" />
            <span className="font-semibold">aquaticswandesign@gmail.com</span>
          </Link>
        </div>

        <Button
          asChild
          size="lg"
          className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-none px-8 py-6 text-lg font-semibold shadow-lg shadow-cyan-500/50"
        >
          <Link href="/service">Get Free Quote Today</Link>
        </Button>
      </div>

      {/* Achievements Section */}
      <div className="max-w-6xl mx-auto mb-20 w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Our <span className="text-cyan-400">Track Record</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="group bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 hover:border-cyan-400/50 transition-all duration-300"
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${achievement.color} mb-6 text-white group-hover:scale-110 transition-transform duration-300`}
                >
                  {achievement.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {achievement.title}
                </h3>
                <p className="text-white/70 text-lg">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Our Story & Services Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 w-full">
        {/* Our Story */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our <span className="text-cyan-400">Story</span>
          </h2>
          <div className="text-white/80 space-y-4 leading-relaxed text-lg">
            <p>
              Founded in 2010 by passionate aquarists,{" "}
              <strong className="text-cyan-300">Aquatic Swan Design</strong>{" "}
              began with a simple mission: to bring the beauty and tranquility
              of aquatic life to homes and businesses across Queensland.
            </p>
            <p>
              What started as a small Brisbane operation has grown into the
              region's most trusted{" "}
              <strong className="text-cyan-300">
                fish tank cleaning service
              </strong>
              , serving over 1000+ satisfied customers from Brisbane CBD to
              Sunshine Coast and everywhere in between.
            </p>
            <p>
              Our team combines 15+ years of experience with cutting-edge
              techniques to deliver exceptional aquarium care that exceeds
              expectations every time.
            </p>
          </div>
        </div>

        {/* Our Services */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our <span className="text-cyan-400">Services</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                <span className="text-white/90 font-medium">{service}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-400/30 backdrop-blur-sm">
            <p className="text-cyan-100 font-semibold text-center">
              🚀 Same-day service available | 📞 24/7 emergency support
              <br />
              💯 100% satisfaction guarantee | 🏆 Queensland's #1 rated service
            </p>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="max-w-6xl mx-auto mb-20 w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Why Choose <span className="text-cyan-400">Us</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 hover:border-cyan-400/50 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Service Areas Section */}
      <div className="max-w-6xl mx-auto w-full">
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardContent className="p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
              <span className="text-cyan-400">Service Areas</span> Across
              Queensland
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white/80 leading-relaxed">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-cyan-300">
                  Brisbane & Surrounds
                </h3>
                <p>
                  CBD, Southside (Logan, Springwood), Northside (Chermside,
                  Redcliffe), Eastern suburbs (Wynnum, Capalaba), Western
                  suburbs (Toowong, Ipswich)
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-cyan-300">Gold Coast</h3>
                <p>
                  Surfers Paradise, Southport, Burleigh Heads, Coolangatta,
                  Robina, and all Gold Coast suburbs
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-cyan-300">
                  Sunshine Coast
                </h3>
                <p>
                  Caloundra, Maroochydore, Mooloolaba, Noosa, and all Sunshine
                  Coast areas
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-white/90 text-lg">
                <strong className="text-cyan-300">
                  Professional fish tank cleaning service
                </strong>{" "}
                available across all Queensland regions with same-day service
                and emergency support.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default AboutBanner;
