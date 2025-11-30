"use client";
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
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
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export default function ServiceForm() {
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
      const result = await emailjs.sendForm(
        "service_nyo9717", // EmailJS service ID
        "template_lqh6rse", // EmailJS template ID
        form.current,
        "PlnxkEthyMpuKG_kJ" // EmailJS public key
      );

      if (result.text === "OK") {
        setSubmitStatus({
          type: "success",
          message: "Thank you! We will contact you soon.",
        });
        reset();
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="bg-black/60 backdrop-blur-lg border-2 border-white/50 text-white shadow-2xl ring-1 ring-white/20 mt-8">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
          Book a Service
        </CardTitle>
        <p className="text-white/90 font-medium">
          Get a personalized quote for your aquatic needs
        </p>
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
              className="bg-white/25 border-2 border-white/40 text-white placeholder:text-white/70 focus:border-emerald-400 focus:bg-white/30 focus:ring-2 focus:ring-emerald-400/50"
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
              Email *
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              className="bg-white/25 border-2 border-white/40 text-white placeholder:text-white/70 focus:border-emerald-400 focus:bg-white/30 focus:ring-2 focus:ring-emerald-400/50"
              placeholder="Enter your email address"
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
              className="bg-white/25 border-2 border-white/40 text-white placeholder:text-white/70 focus:border-emerald-400 focus:bg-white/30 focus:ring-2 focus:ring-emerald-400/50"
              placeholder="Enter your phone number"
              {...register("phone", { required: "Phone number is required" })}
            />
            {errors.phone && (
              <p className="text-red-400 text-sm flex items-center gap-1 font-medium">
                <AlertCircle className="w-4 h-4" />
                {errors.phone.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="location" className="text-white font-semibold">
              Location *
            </Label>
            <Input
              type="text"
              id="location"
              name="location"
              className="bg-white/25 border-2 border-white/40 text-white placeholder:text-white/70 focus:border-emerald-400 focus:bg-white/30 focus:ring-2 focus:ring-emerald-400/50"
              placeholder="e.g. Southside Brisbane, CBD, Gold Coast"
              {...register("location", {
                required: "Location is required for service quote",
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
            <Label htmlFor="service" className="text-white font-semibold">
              Service Type *
            </Label>
            <Select onValueChange={(value) => setValue("service", value)}>
              <SelectTrigger
                className="bg-white/25 border-2 border-white/40 text-white focus:border-emerald-400 focus:bg-white/30 focus:ring-2 focus:ring-emerald-400/50"
                aria-label="Select service type"
              >
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent className="bg-white/95 border-2 border-gray-300 backdrop-blur-lg shadow-2xl">
                <SelectItem
                  value="Tank Cleaning/Maintenance"
                  className="text-gray-900 hover:bg-emerald-100 focus:bg-emerald-100 cursor-pointer"
                >
                  Fish Tank Cleaning/Maintenance
                </SelectItem>
                <SelectItem
                  value="Pond Cleaning"
                  className="text-gray-900 hover:bg-emerald-100 focus:bg-emerald-100 cursor-pointer"
                >
                  Pond Cleaning
                </SelectItem>
                <SelectItem
                  value="Tank Setup"
                  className="text-gray-900 hover:bg-emerald-100 focus:bg-emerald-100 cursor-pointer"
                >
                  New Tank Setup
                </SelectItem>
                <SelectItem
                  value="Pond Setup"
                  className="text-gray-900 hover:bg-emerald-100 focus:bg-emerald-100 cursor-pointer"
                >
                  New Pond Setup
                </SelectItem>
                <SelectItem
                  value="Tank Removal"
                  className="text-gray-900 hover:bg-emerald-100 focus:bg-emerald-100 cursor-pointer"
                >
                  Tank Removal
                </SelectItem>
                <SelectItem
                  value="Consultation"
                  className="text-gray-900 hover:bg-emerald-100 focus:bg-emerald-100 cursor-pointer"
                >
                  Consultation
                </SelectItem>
                <SelectItem
                  value="Other"
                  className="text-gray-900 hover:bg-emerald-100 focus:bg-emerald-100 cursor-pointer"
                >
                  Other
                </SelectItem>
              </SelectContent>
            </Select>
            <input
              type="hidden"
              name="service"
              {...register("service", { required: "Please select a service" })}
            />
            {errors.service && (
              <p className="text-red-400 text-sm flex items-center gap-1 font-medium">
                <AlertCircle className="w-4 h-4" />
                {errors.service.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-white font-semibold">
              Additional Details
            </Label>
            <Textarea
              id="message"
              name="message"
              className="bg-white/25 border-2 border-white/40 text-white placeholder:text-white/70 focus:border-emerald-400 focus:bg-white/30 focus:ring-2 focus:ring-emerald-400/50 min-h-[100px]"
              placeholder="Please provide any additional details about your service request..."
              {...register("message")}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 text-lg font-bold shadow-2xl ring-2 ring-emerald-400/30 hover:ring-emerald-400/50 transition-all duration-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              "Book A Service"
            )}
          </Button>

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
  );
}
