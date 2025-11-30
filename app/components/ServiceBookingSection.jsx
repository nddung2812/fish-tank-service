"use client";
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  AlertCircle,
  Loader2,
  Star,
  Award,
  Clock,
  Shield,
  Users,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const whyChooseUs = [
  {
    title: "Expert Service",
    description:
      "Our team of certified professionals brings years of experience in aquarium maintenance and care.",
    icon: <CheckCircle className="w-6 h-6" />,
  },
  {
    title: "Quality Products",
    description:
      "We use only the highest quality products and equipment for your aquarium.",
    icon: <CheckCircle className="w-6 h-6" />,
  },
  {
    title: "Reliable Service",
    description:
      "Count on us for consistent, reliable service that keeps your aquarium thriving.",
    icon: <CheckCircle className="w-6 h-6" />,
  },
  {
    title: "Customer Satisfaction",
    description:
      "Your satisfaction is our priority. We guarantee quality service every time.",
    icon: <CheckCircle className="w-6 h-6" />,
  },
];

const brisbaneAreas = [
  "South Brisbane",
  "North Brisbane",
  "East Brisbane",
  "West Brisbane",
  "CBD",
  "Gold Coast",
  "Sunshine Coast",
  "Ipswich",
];

const ServiceBookingSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });
  const form = useRef();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      // Dynamically import emailjs only when needed
      const emailjsModule = await import("@emailjs/browser");
      const result = await emailjsModule.default.sendForm(
        "service_nyo9717", // EmailJS service ID
        "template_lqh6rse", // EmailJS template ID
        form.current,
        "PlnxkEthyMpuKG_kJ" // EmailJS public key
      );

      if (result.text === "OK") {
        setSubmitStatus({
          type: "success",
          message:
            "Thank you! Brisbane's #1 aquarium experts will contact you as soon as possible.",
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

  return (
    <section id="service-booking" className="w-full px-4 py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
      <div className="max-w-7xl mx-auto">
        {/* SEO-Optimized Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Book Your Service
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Get a free quote for our professional aquarium services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Why Choose Us Section */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyChooseUs.map((feature, index) => (
                <Card
                  key={index}
                  className="bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/25 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
                  itemScope
                  itemType="https://schema.org/Service"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 p-4 rounded-xl bg-gradient-to-br from-emerald-400 via-emerald-500 to-teal-600 text-white shadow-lg group-hover:scale-110 group-hover:shadow-emerald-400/30 transition-all duration-300">
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <h3
                          className="text-lg font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors duration-300"
                          itemProp="name"
                        >
                          {feature.title}
                        </h3>
                        <p
                          className="text-white/90 text-sm leading-relaxed font-medium"
                          itemProp="description"
                        >
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Brisbane Service Areas - SEO Optimized */}
            <Card className="bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/25 hover:border-emerald-400/50 transition-all duration-300 hover:shadow-xl group">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center group-hover:text-emerald-300 transition-colors duration-300">
                  <MapPin className="w-6 h-6 mr-3 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300" />
                  Brisbane Fish Tank Cleaning Service Areas
                </h2>
                <p className="text-white/80 text-sm mb-4 font-medium">
                  Professional aquarium cleaning and maintenance services across
                  all Brisbane suburbs:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-white/90 text-sm font-medium">
                  {brisbaneAreas.map((area, index) => (
                    <span
                      key={index}
                      className="flex items-center hover:text-emerald-300 transition-colors duration-200"
                    >
                      <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 flex-shrink-0"></span>
                      {area}
                    </span>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-emerald-500/20 rounded-lg border border-emerald-400/30">
                  <p className="text-emerald-200 text-sm font-semibold">
                    🚀 Same-day service available | 📞 Emergency callouts 24/7 |
                    💯 Free quotes for all Brisbane locations
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Form */}
          <Card className="bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/25 hover:border-emerald-400/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">
                Get a Free Quote
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form
                ref={form}
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-white">
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      {...register("name", { required: true })}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-1">
                        Please enter your name
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-white">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      {...register("email", { required: true })}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">
                        Please enter a valid email
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-white">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(04) 1234 5678"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      {...register("phone", { required: true })}
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-sm mt-1">
                        Please enter your phone number
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="location" className="text-white">
                      Location
                    </Label>
                    <Input
                      id="location"
                      name="location"
                      type="text"
                      placeholder="e.g. Southside Brisbane, CBD, Gold Coast"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      {...register("location", { required: true })}
                    />
                    {errors.location && (
                      <p className="text-red-400 text-sm mt-1">
                        Please enter your location
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="service" className="text-white">
                      Service Type
                    </Label>
                    <Select
                      onValueChange={(value) => setValue("service", value)}
                      defaultValue=""
                    >
                      <SelectTrigger
                        className="bg-white/10 border-white/20 text-white"
                        aria-label="Select service type"
                      >
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Tank Cleaning/Maintenance">
                          Fish Tank Cleaning/Maintenance
                        </SelectItem>
                        <SelectItem value="Pond Cleaning">
                          Pond Cleaning
                        </SelectItem>
                        <SelectItem value="Tank Setup">
                          New Tank Setup
                        </SelectItem>
                        <SelectItem value="Pond Setup">
                          New Pond Setup
                        </SelectItem>
                        <SelectItem value="Tank Removal">
                          Tank Removal
                        </SelectItem>
                        <SelectItem value="Consultation">
                          Consultation
                        </SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <input
                      type="hidden"
                      name="service"
                      {...register("service", { required: true })}
                    />
                    {errors.service && (
                      <p className="text-red-400 text-sm mt-1">
                        Please select a service
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-white">
                      Additional Details
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your aquarium..."
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-[100px]"
                      {...register("message")}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-br from-purple-500 to-indigo-600 text-white hover:from-purple-600 hover:to-indigo-700 border-none py-6 text-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Get Free Quote"
                    )}
                  </Button>

                  {submitStatus.type && (
                    <div
                      className={`p-4 rounded-lg ${
                        submitStatus.type === "success"
                          ? "bg-emerald-500/20 border border-emerald-400/30"
                          : "bg-red-500/20 border border-red-400/30"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {submitStatus.type === "success" ? (
                          <CheckCircle className="w-5 h-5 text-emerald-400" />
                        ) : (
                          <AlertCircle className="w-5 h-5 text-red-400" />
                        )}
                        <p
                          className={`text-sm font-medium ${
                            submitStatus.type === "success"
                              ? "text-emerald-200"
                              : "text-red-200"
                          }`}
                        >
                          {submitStatus.message}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServiceBookingSection;
