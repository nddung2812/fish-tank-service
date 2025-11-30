"use client";
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  AlertCircle,
  Loader2,
  Star,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Fish,
  Waves,
  Shield,
  Users,
} from "lucide-react";

const AquaticSpecialistsBanner = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });
  const form = useRef();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      const result = await emailjs.sendForm(
        "service_nyo9717", // EmailJS service ID
        "template_lqh6rse", // EmailJS template ID
        form.current,
        "PlnxkEthyMpuKG_kJ" // EmailJS public key
      );

      if (result.text === "OK") {
        setSubmitStatus({
          type: "success",
          message:
            "Thank you for contacting our Gold Coast aquatic specialists! We'll get back to you within 24 hours.",
        });
        reset();
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          "Something went wrong. Please call our Gold Coast team directly at (04) 5766 3939 for immediate assistance.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Gold Coast Team",
      content: "(04) 5766 3939",
      description: "Available 8AM - 6PM | Emergency service available 24/7",
      color: "from-emerald-400 to-emerald-600",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Our Specialists",
      content: "aquaticswandesign@gmail.com",
      description: "Rapid response within 2 hours during business hours",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Gold Coast Service Areas",
      content: "All Gold Coast Suburbs",
      description:
        "Southport, Surfers Paradise, Broadbeach, Burleigh, Coolangatta",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Operating Hours",
      content: "Mon - Sun 8AM - 6PM",
      description: "Same-day service available for urgent Gold Coast requests",
      color: "from-teal-400 to-teal-600",
    },
  ];

  const specialistFeatures = [
    {
      icon: <Fish className="w-8 h-8" />,
      title: "Fish Tank Specialists",
      description:
        "Expert aquarium cleaning and maintenance for Gold Coast homes and businesses",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Waves className="w-8 h-8" />,
      title: "Pond Maintenance Experts",
      description:
        "Professional pond cleaning and water feature services across Gold Coast",
      color: "from-teal-500 to-emerald-500",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "15+ Years Experience",
      description:
        "Trusted Gold Coast aquatic specialists with proven track record",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "247+ Happy Customers",
      description:
        "Gold Coast's most reviewed and trusted aquatic service provider",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section
      className="pt-12 pb-20 px-4 relative z-10"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-6 bg-emerald-500/30 border-emerald-400 text-emerald-100"
          >
            Gold Coast&apos;s #1 Rated Aquatic Specialists
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Aquatic Specialists
            </span>
            <span className="block text-white">Gold Coast</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            Gold Coast&apos;s premier <strong>aquatic specialists</strong>{" "}
            providing expert <strong>fish tank cleaning</strong>,{" "}
            <strong>pond maintenance</strong>, and{" "}
            <strong>aquarium services</strong>. 15+ years experience, same-day
            service, free quotes!
          </p>

          {/* Contact Information Quick Access */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-white/90">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-emerald-400" />
              <span className="font-semibold">Call: (04) 5766 3939</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-emerald-400" />
              <span className="font-semibold">aquaticswandesign@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-emerald-400" />
              <span className="font-semibold">All Gold Coast Areas</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Contact Form */}
          <div className="lg:order-2">
            <Card className="bg-black/60 backdrop-blur-lg border border-white/50 text-white shadow-2xl ring-1 ring-white/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                  <MessageCircle className="w-8 h-8 inline-block mr-3 text-emerald-400" />
                  Contact Gold Coast Specialists
                </CardTitle>
                <p className="text-white/90 font-medium">
                  Get your FREE quote from Gold Coast aquatic specialists •
                  Same-day response
                </p>
                <div className="flex justify-center items-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                  <span className="text-yellow-400 font-semibold ml-2">
                    4.9/5 (247+ Gold Coast reviews)
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <form
                  ref={form}
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white font-semibold">
                      Full Name *
                    </Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      className="bg-white/25 border border-white/40 text-white placeholder:text-white/70 focus:border-emerald-400 focus:bg-white/30 focus:ring-2 focus:ring-emerald-400/50"
                      placeholder="Enter your full name"
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm flex items-center gap-1 font-medium">
                        <AlertCircle className="w-4 h-4" />
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white font-semibold">
                      Email Address *
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      className="bg-white/25 border border-white/40 text-white placeholder:text-white/70 focus:border-emerald-400 focus:bg-white/30 focus:ring-2 focus:ring-emerald-400/50"
                      placeholder="your.email@example.com"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm flex items-center gap-1 font-medium">
                        <AlertCircle className="w-4 h-4" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white font-semibold">
                      Phone Number *
                    </Label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="bg-white/25 border border-white/40 text-white placeholder:text-white/70 focus:border-emerald-400 focus:bg-white/30 focus:ring-2 focus:ring-emerald-400/50"
                      placeholder="(07) XXXX-XXXX"
                      {...register("phone", {
                        required: "Phone number is required",
                      })}
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-sm flex items-center gap-1 font-medium">
                        <AlertCircle className="w-4 h-4" />
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="location"
                      className="text-white font-semibold"
                    >
                      Location *
                    </Label>
                    <Input
                      type="text"
                      id="location"
                      name="location"
                      className="bg-white/25 border border-white/40 text-white placeholder:text-white/70 focus:border-emerald-400 focus:bg-white/30 focus:ring-2 focus:ring-emerald-400/50"
                      placeholder="e.g., Surfers Paradise, Southport, Broadbeach"
                      {...register("location", {
                        required: "Gold Coast location is required",
                      })}
                    />
                    {errors.location && (
                      <p className="text-red-400 text-sm flex items-center gap-1 font-medium">
                        <AlertCircle className="w-4 h-4" />
                        {errors.location.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-white font-semibold"
                    >
                      Aquatic Service Required *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      className="bg-white/25 border border-white/40 text-white placeholder:text-white/70 focus:border-emerald-400 focus:bg-white/30 focus:ring-2 focus:ring-emerald-400/50 min-h-[120px]"
                      placeholder="Describe your aquatic needs: fish tank cleaning, pond maintenance, aquarium setup, water quality issues, emergency service, etc."
                      {...register("message", {
                        required: "Service details are required",
                      })}
                    />
                    {errors.message && (
                      <p className="text-red-400 text-sm flex items-center gap-1 font-medium">
                        <AlertCircle className="w-4 h-4" />
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white py-6 text-lg font-bold shadow-2xl ring-2 ring-emerald-400/30 hover:ring-emerald-400/50 transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Contacting Gold Coast Team...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Get FREE Gold Coast Quote
                      </>
                    )}
                  </Button>

                  <div className="text-center text-white/70 text-sm">
                    <p>
                      ✅ Free quotes • ✅ Same-day service • ✅ Gold Coast
                      specialists • ✅ No obligation
                    </p>
                  </div>

                  {submitStatus.message && (
                    <div
                      className={`p-4 rounded-lg flex items-center gap-2 font-medium shadow-lg ${
                        submitStatus.type === "success"
                          ? "bg-emerald-500/40 border-2 border-emerald-400 text-emerald-200"
                          : "bg-red-500/40 border-2 border-red-400 text-red-200"
                      }`}
                    >
                      {submitStatus.type === "success" ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <AlertCircle className="w-5 h-5" />
                      )}
                      {submitStatus.message}
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Why Choose Us Section */}
          <div className="lg:order-1 space-y-8">
            <Card className="bg-white/15 backdrop-blur-md border border-white/20">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6 text-emerald-300">
                  Why Choose Our Gold Coast Aquatic Specialists?
                </h2>
                <div className="space-y-4">
                  {[
                    "⭐ Gold Coast's #1 rated aquatic specialists (247+ 5-star reviews)",
                    "🚀 Same-day service across all Gold Coast suburbs",
                    "🎯 15+ years experience with Queensland water conditions",
                    "💯 100% satisfaction guarantee on all Gold Coast services",
                    "🏆 Most trusted fish tank and pond specialists on Gold Coast",
                    "📱 Free quotes & consultations throughout Gold Coast",
                    "🌊 Experts in saltwater & freshwater aquarium systems",
                    "🔧 Emergency aquatic services available 24/7",
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 text-white/90"
                    >
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/15 backdrop-blur-md border border-white/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-emerald-300">
                  Gold Coast Aquatic Services:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-white/80 text-sm">
                  {[
                    "Fish Tank Cleaning",
                    "Aquarium Maintenance",
                    "Pond Cleaning & Care",
                    "Tank Setup & Installation",
                    "Emergency Aquatic Service",
                    "Water Quality Testing",
                    "Equipment Repair & Service",
                    "Aquascaping Design",
                    "Koi Pond Maintenance",
                    "Commercial Aquarium Service",
                    "Saltwater Tank Specialists",
                    "Water Feature Maintenance",
                  ].map((service, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full flex-shrink-0"></span>
                      {service}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/15 backdrop-blur-md border border-white/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-emerald-300">
                  Gold Coast Service Areas:
                </h3>
                <div className="grid grid-cols-2 gap-2 text-white/80 text-sm">
                  {[
                    "Southport",
                    "Surfers Paradise",
                    "Broadbeach",
                    "Burleigh Heads",
                    "Coolangatta",
                    "Robina",
                    "Nerang",
                    "Mudgeeraba",
                    "Currumbin",
                    "Palm Beach",
                    "Tugun",
                    "Varsity Lakes",
                  ].map((area, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full flex-shrink-0"></span>
                      {area}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Specialist Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {specialistFeatures.map((feature, index) => (
            <Card
              key={index}
              className="bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/25 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.color} text-white shadow-lg group-hover:scale-110 group-hover:shadow-emerald-400/30 transition-all duration-300 mb-4`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/25 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${info.color} text-white shadow-lg group-hover:scale-110 group-hover:shadow-emerald-400/30 transition-all duration-300 mb-4`}
                >
                  {info.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-300">
                  {info.title}
                </h3>
                <p className="text-white/90 font-semibold mb-2">
                  {info.content}
                </p>
                <p className="text-white/70 text-sm leading-relaxed">
                  {info.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AquaticSpecialistsBanner;
