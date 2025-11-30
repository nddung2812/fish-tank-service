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
  CheckCircle2,
  AlertCircle,
  Loader2,
  Star,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Sparkles,
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
        "service_nyo9717",
        "template_lqh6rse",
        form.current,
        "PlnxkEthyMpuKG_kJ"
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
      color: "from-cyan-500 to-blue-600",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      content: "aquaticswandesign@gmail.com",
      description: "We respond within 2 hours during business hours",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Service Areas",
      content: "Brisbane, Gold Coast & Sunshine Coast",
      description: "Covering all Queensland regions",
      color: "from-purple-500 to-indigo-600",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      content: "Mon - Sun 8AM - 6PM",
      description: "Same-day service available for urgent requests",
      color: "from-orange-500 to-red-600",
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
          <Badge className="mb-6 bg-cyan-500/20 border-cyan-400 text-cyan-100 text-sm px-4 py-2">
            <MapPin className="w-4 h-4 inline mr-2" />
            Contact Queensland's Premier Fish Tank Cleaning Service
          </Badge>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            Get Your{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              FREE Quote
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your aquarium? Contact our expert{" "}
            <strong className="text-cyan-300">fish tank cleaning</strong> and{" "}
            <strong className="text-cyan-300">aquarium maintenance</strong>{" "}
            specialists serving{" "}
            <strong className="text-cyan-300">Brisbane</strong>,{" "}
            <strong className="text-cyan-300">Gold Coast</strong> &{" "}
            <strong className="text-cyan-300">Sunshine Coast</strong>.
          </p>

          {/* Quick Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a
              href="tel:+61457663939"
              className="flex items-center gap-2 text-white/90 hover:text-cyan-300 transition-colors"
            >
              <Phone className="w-5 h-5 text-cyan-400" />
              <span className="font-semibold">(04) 5766 3939</span>
            </a>
            <a
              href="mailto:aquaticswandesign@gmail.com"
              className="flex items-center gap-2 text-white/90 hover:text-cyan-300 transition-colors"
            >
              <Mail className="w-5 h-5 text-cyan-400" />
              <span className="font-semibold">aquaticswandesign@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 hover:border-cyan-400/50 transition-all duration-300 group"
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${info.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300 mb-4`}
                >
                  {info.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
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
            <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl md:text-3xl font-bold text-white">
                  <MessageCircle className="w-8 h-8 inline-block mr-3 text-cyan-400" />
                  Send Us a Message
                </CardTitle>
                <p className="text-white/90 font-medium mt-2">
                  Get your FREE quote today • Same-day response guaranteed
                </p>
                <div className="flex justify-center items-center gap-1 mt-3">
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
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50"
                      placeholder="Enter your full name"
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm flex items-center gap-1">
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
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50"
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
                      <p className="text-red-400 text-sm flex items-center gap-1">
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
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50"
                      placeholder="(04) XXXX-XXXX"
                      {...register("phone", {
                        required: "Phone number is required",
                      })}
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-sm flex items-center gap-1">
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
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 min-h-[120px]"
                      placeholder="Tell us about your aquarium needs, tank size, current issues, or any questions..."
                      {...register("message", {
                        required: "Message is required",
                      })}
                    />
                    {errors.message && (
                      <p className="text-red-400 text-sm flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-6 text-lg font-bold shadow-lg shadow-cyan-500/50"
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
                      ✅ Free quotes • ✅ Same-day response • ✅ No obligation
                    </p>
                  </div>

                  {submitStatus.message && (
                    <div
                      className={`p-4 rounded-lg flex items-center gap-2 font-medium ${submitStatus.type === "success"
                          ? "bg-emerald-500/20 border-2 border-emerald-400 text-emerald-200"
                          : "bg-red-500/20 border-2 border-red-400 text-red-200"
                        }`}
                    >
                      {submitStatus.type === "success" ? (
                        <CheckCircle2 className="w-5 h-5" />
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
          <div className="lg:order-1 space-y-6">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  <Sparkles className="w-7 h-7 inline-block mr-2 text-cyan-400" />
                  Why Choose <span className="text-cyan-400">Us</span>
                </h2>
                <div className="space-y-4">
                  {[
                    "⭐ 247+ 5-star Google reviews from satisfied customers",
                    "🚀 Same-day service & emergency callouts available 24/7",
                    "🎯 15+ years experience across Brisbane, Gold Coast & Sunshine Coast",
                    "💯 100% satisfaction guarantee on all services",
                    "🏆 Queensland's #1 rated fish tank cleaning specialists",
                    "📱 Free quotes & consultations - no obligation",
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 text-white/90 text-lg"
                    >
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                      <span className="leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-white mb-6 text-cyan-300">
                  Our Services Include:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/90">
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
                      <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
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
