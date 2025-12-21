"use client";

import { useState } from "react";
import { FormInput, FormSelect, useForm } from "@/components/ui/form-input";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle, Loader2 } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  enquiryType: string;
  message: string;
  [key: string]: string;
}

const enquiryOptions = [
  { value: "demo", label: "Request a Demo" },
  { value: "pricing", label: "Pricing Enquiry" },
  { value: "partnership", label: "Partnership Opportunity" },
  { value: "support", label: "Technical Support" },
  { value: "other", label: "Other" },
];

const validationSchemas = {
  name: [
    { type: "required" as const, message: "Full name is required" },
    { type: "minLength" as const, value: 2, message: "Name must be at least 2 characters" },
  ],
  email: [
    { type: "required" as const, message: "Email address is required" },
    { type: "email" as const, message: "Please enter a valid email address" },
  ],
  company: [
    { type: "required" as const, message: "Company name is required" },
  ],
  phone: [
    { 
      type: "pattern" as const, 
      value: /^[\d\s+()-]*$/, 
      message: "Please enter a valid phone number" 
    },
  ],
  enquiryType: [
    { type: "required" as const, message: "Please select an enquiry type" },
  ],
  message: [
    { type: "required" as const, message: "Message is required" },
    { type: "minLength" as const, value: 20, message: "Message must be at least 20 characters" },
    { type: "maxLength" as const, value: 2000, message: "Message must be less than 2000 characters" },
  ],
};

export function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  
  const {
    values,
    isSubmitting,
    setValue,
    setIsSubmitting,
    reset,
    validateAll,
  } = useForm<ContactFormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    enquiryType: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const isValid = validateAll(validationSchemas);
    if (!isValid) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setSubmitStatus("success");
      reset();
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === "success") {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-green-400" />
        </div>
        <h3 className="text-2xl font-bold text-porcelain mb-2">Message Sent</h3>
        <p className="text-hint mb-6">
          Thank you for getting in touch. We'll respond within 24 hours.
        </p>
        <Button 
          variant="outline" 
          onClick={() => setSubmitStatus("idle")}
          className="border-gold/40 text-gold hover:bg-gold/10"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          id="name"
          name="name"
          label="Full Name"
          placeholder="John Smith"
          value={values.name}
          onChange={(v) => setValue("name", v)}
          validationRules={validationSchemas.name}
          autoComplete="name"
        />
        
        <FormInput
          id="email"
          name="email"
          label="Email Address"
          type="email"
          placeholder="john@example.com"
          value={values.email}
          onChange={(v) => setValue("email", v)}
          validationRules={validationSchemas.email}
          autoComplete="email"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          id="company"
          name="company"
          label="Company"
          placeholder="Acme Property Group"
          value={values.company}
          onChange={(v) => setValue("company", v)}
          validationRules={validationSchemas.company}
          autoComplete="organization"
        />
        
        <FormInput
          id="phone"
          name="phone"
          label="Phone Number"
          type="tel"
          placeholder="+44 20 1234 5678"
          value={values.phone}
          onChange={(v) => setValue("phone", v)}
          validationRules={validationSchemas.phone}
          autoComplete="tel"
        />
      </div>
      
      <FormSelect
        id="enquiryType"
        name="enquiryType"
        label="Enquiry Type"
        value={values.enquiryType}
        onChange={(v) => setValue("enquiryType", v)}
        options={enquiryOptions}
        placeholder="Select enquiry type"
        validationRules={validationSchemas.enquiryType}
      />
      
      <FormInput
        id="message"
        name="message"
        label="Message"
        type="textarea"
        placeholder="Tell us about your development and how we can help..."
        value={values.message}
        onChange={(v) => setValue("message", v)}
        validationRules={validationSchemas.message}
        rows={5}
      />
      
      {submitStatus === "error" && (
        <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
          <p className="text-sm text-red-400">
            Something went wrong. Please try again or email us directly at contact@openhouse.ai
          </p>
        </div>
      )}
      
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-gold text-carbon font-semibold hover:bg-gold/90 transition-all duration-200 disabled:opacity-50"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Send Message
          </>
        )}
      </Button>
      
      <p className="text-xs text-hint text-center">
        By submitting this form, you agree to our{" "}
        <a href="/privacy" className="text-gold hover:underline">Privacy Policy</a>
        {" "}and{" "}
        <a href="/terms" className="text-gold hover:underline">Terms of Service</a>.
      </p>
    </form>
  );
}
