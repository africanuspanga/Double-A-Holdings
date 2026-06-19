"use client";

import { useState } from "react";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/validation";
import { Button } from "@/components/shared/button";
import { Loader2 } from "lucide-react";

const serviceOptions = [
  "Road Transport",
  "Maritime Transport",
  "Air Freight",
  "Warehousing and Distribution",
  "Customs Clearance",
  "End-to-End Logistics",
  "Other",
];

export function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("submitting");
    try {
      // Integration point: email API, Supabase, CRM or custom backend
      // eslint-disable-next-line no-console
      console.log("Contact form data:", data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl border border-border-blue shadow-sm">
      {status === "success" ? (
        <div className="text-center py-10">
          <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-success-green/10 text-success-green mb-4">
            <svg
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold heading-font text-brand-navy">
            Message sent
          </h3>
          <p className="mt-3 text-slate-text max-w-md mx-auto">
            Thank you for contacting us. Our team will respond as soon as
            possible.
          </p>
          {process.env.NODE_ENV === "development" && (
            <p className="mt-4 text-sm text-amber-600 bg-amber-50 p-3 rounded-lg inline-block">
              Development mode: form submission is not connected to a backend.
            </p>
          )}
          <div className="mt-6">
            <Button onClick={() => setStatus("idle")} variant="outline">
              Send another message
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Field label="Full name" required error={errors.fullName?.message}>
              <input
                type="text"
                {...register("fullName")}
                className="w-full rounded-lg border border-border-blue px-4 py-3 text-brand-black focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none"
              />
            </Field>
            <Field label="Company name" error={errors.companyName?.message}>
              <input
                type="text"
                {...register("companyName")}
                className="w-full rounded-lg border border-border-blue px-4 py-3 text-brand-black focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none"
              />
            </Field>
            <Field label="Email" required error={errors.email?.message}>
              <input
                type="email"
                {...register("email")}
                className="w-full rounded-lg border border-border-blue px-4 py-3 text-brand-black focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none"
              />
            </Field>
            <Field label="Telephone" required error={errors.telephone?.message}>
              <input
                type="tel"
                {...register("telephone")}
                className="w-full rounded-lg border border-border-blue px-4 py-3 text-brand-black focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none"
              />
            </Field>
          </div>

          <Field
            label="Service of interest"
            required
            error={errors.serviceOfInterest?.message}
          >
            <select
              {...register("serviceOfInterest")}
              className="w-full rounded-lg border border-border-blue px-4 py-3 text-brand-black focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none bg-white"
            >
              <option value="">Select a service</option>
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Message" required error={errors.message?.message}>
            <textarea
              {...register("message")}
              rows={5}
              className="w-full rounded-lg border border-border-blue px-4 py-3 text-brand-black focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none"
            />
          </Field>

          {status === "error" && (
            <p className="text-sm text-red-600">
              Something went wrong. Please try again or contact us directly.
            </p>
          )}

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto"
            showArrow
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </Button>
        </form>
      )}
    </div>
  );
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  const id = label.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const labelledChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement<any>, { id });
    }
    return child;
  });
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-brand-navy mb-2"
      >
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {labelledChildren}
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}
