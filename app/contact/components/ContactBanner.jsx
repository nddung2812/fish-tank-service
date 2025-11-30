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
} from "lucide-react";

const ContactBanner = () => {
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
            "Thank you for contacting us! We'll get back to you within 24 hours.",
        });
        reset();
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          "Something went wrong. Please call us directly at (04) 5766 3939 for immediate assistance.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us Today",
      content: "(04) 5766 3939",
      description: "Available 8AM - 6PM | Emergency service 24/7",
      color: "from-emerald-400 to-emerald-600",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      content: "aquaticswandesign@gmail.com",
      description: "We respond within 2 hours during business hours",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Service Areas",
      content: "All Brisbane & QLD",
      description: "Brisbane CBD, Southside, Northside, Gold Coast",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      content: "Mon - Sun 8AM - 6PM",
      description: "Same-day service available for urgent requests",
      color: "from-teal-400 to-teal-600",
    },
  ];

  return (
    <section
      className="pt-12 pb-20 px-4 relative z-10"
      itemScope
      itemType="https://schema.org/ContactPage"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-6 bg-emerald-500/30 border-emerald-400 text-emerald-100"
          >
            Contact Brisbane&apos;s #1 Aquarium Experts
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Get Your FREE
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 block">
              Aquarium Quote
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your aquatic space? Contact Brisbane&apos;s most
            trusted
            <strong> fish tank cleaning</strong> and{" "}
            <strong>aquarium maintenance specialists</strong>. Same-day quotes,
            emergency service available!
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
              <span className="font-semibold">All Brisbane & Queensland</span>
            </div>
          </div>
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="lg:order-2">
            <Card className="bg-black/60 backdrop-blur-lg border border-white/50 text-white shadow-2xl ring-1 ring-white/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                  <MessageCircle className="w-8 h-8 inline-block mr-3 text-emerald-400" />
                  Send Us a Message
                </CardTitle>
                <p className="text-white/90 font-medium">
                  Get your FREE quote today • Same-day response guaranteed
                </p>
                <div className="flex justify-center items-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                  <span className="text-yellow-400 font-semibold ml-2">
                    4.9/5 (247+ reviews)
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
                      htmlFor="message"
                      className="text-white font-semibold"
                    >
                      Your Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      className="bg-white/25 border border-white/40 text-white placeholder:text-white/70 focus:border-emerald-400 focus:bg-white/30 focus:ring-2 focus:ring-emerald-400/50 min-h-[120px]"
                      placeholder="Tell us about your aquarium needs, tank size, current issues, or any questions you have..."
                      {...register("message", {
                        required: "Message is required",
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
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>

                  <div className="text-center text-white/70 text-sm">
                    <p>
                      ✅ Free quotes • ✅ Same-day response • ✅ No obligation •
                      ✅ Brisbane experts
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
                <h2 className="text-2xl font-bold text-white mb-6 text-emerald-300">
                  Why Choose Duckaroo Brisbane?
                </h2>
                <div className="space-y-4">
                  {[
                    "⭐ 247+ 5-star Google reviews from satisfied customers",
                    "🚀 Same-day service & emergency callouts available 24/7",
                    "🎯 15+ years experience with Brisbane water conditions",
                    "💯 100% satisfaction guarantee on all services",
                    "🏆 Brisbane's #1 rated aquarium cleaning specialists",
                    "📱 Free quotes & consultations - no obligation",
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
                <h3 className="text-xl font-bold text-white mb-4 text-emerald-300">
                  Our Services Include:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-white/80 text-sm">
                  {[
                    "Fish Tank Cleaning",
                    "Aquarium Maintenance",
                    "Pond Cleaning & Care",
                    "Tank Setup & Installation",
                    "Emergency Tank Service",
                    "Water Quality Testing",
                    "Equipment Repair",
                    "Aquascaping Design",
                  ].map((service, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full flex-shrink-0"></span>
                      {service}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
