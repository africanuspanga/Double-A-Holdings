"use client";

import { useState } from "react";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quoteSchema, type QuoteFormData } from "@/lib/validation";
import { company } from "@/data/site-config";
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

const transportOptions = ["Road", "Sea", "Air", "Multimodal", "Not sure"];

export function QuoteForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  });

  const onSubmit = async (data: QuoteFormData) => {
    setStatus("submitting");
    try {
      // Integration point: email API, Supabase, CRM or custom backend
      // eslint-disable-next-line no-console
      console.log("Quote form data:", data);
      await new Promise((resolve) => setTimeout(resolve, 1200));
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
            Thank you
          </h3>
          <p className="mt-3 text-slate-text max-w-md mx-auto">
            Your quote request has been received. Our team will review the
            details and contact you.
          </p>
          {process.env.NODE_ENV === "development" && (
            <p className="mt-4 text-sm text-amber-600 bg-amber-50 p-3 rounded-lg inline-block">
              Development mode: form submission is not connected to a backend.
            </p>
          )}
          <div className="mt-6">
            <Button onClick={() => setStatus("idle")} variant="outline">
              Submit another request
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
            <Field label="Email address" required error={errors.email?.message}>
              <input
                type="email"
                {...register("email")}
                className="w-full rounded-lg border border-border-blue px-4 py-3 text-brand-black focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none"
              />
            </Field>
            <Field label="Phone number" required error={errors.phone?.message}>
              <input
                type="tel"
                {...register("phone")}
                className="w-full rounded-lg border border-border-blue px-4 py-3 text-brand-black focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none"
              />
            </Field>
            <Field
              label="Service required"
              required
              error={errors.serviceRequired?.message}
            >
              <select
                {...register("serviceRequired")}
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
            <Field label="Cargo type" required error={errors.cargoType?.message}>
              <input
                type="text"
                {...register("cargoType")}
                placeholder="e.g. electronics, machinery, textiles"
                className="w-full rounded-lg border border-border-blue px-4 py-3 text-brand-black focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none"
              />
            </Field>
          </div>

          <Field
            label="Cargo description"
            required
            error={errors.cargoDescription?.message}
          >
            <textarea
              {...register("cargoDescription")}
              rows={4}
              className="w-full rounded-lg border border-border-blue px-4 py-3 text-brand-black focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none"
            />
          </Field>

          <div className="grid md:grid-cols-2 gap-6">
            <Field
              label="Pickup location"
              required
              error={errors.pickupLocation?.message}
            >
              <input
                type="text"
                {...register("pickupLocation")}
                className="w-full rounded-lg border border-border-blue px-4 py-3 text-brand-black focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none"
              />
            </Field>
            <Field
              label="Delivery destination"
              required
              error={errors.deliveryDestination?.message}
            >
              <input
                type="text"
                {...register("deliveryDestination")}
                className="w-full rounded-lg border border-border-blue px-4 py-3 text-brand-black focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none"
              />
            </Field>
            <Field label="Estimated weight" error={errors.estimatedWeight?.message}>
              <input
                type="text"
                {...register("estimatedWeight")}
                placeholder="e.g. 500 kg"
                className="w-full rounded-lg border border-border-blue px-4 py-3 text-brand-black focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none"
              />
            </Field>
            <Field label="Estimated volume" error={errors.estimatedVolume?.message}>
              <input
                type="text"
                {...register("estimatedVolume")}
                placeholder="e.g. 2 CBM"
                className="w-full rounded-lg border border-border-blue px-4 py-3 text-brand-black focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none"
              />
            </Field>
            <Field label="Number of packages" error={errors.numberOfPackages?.message}>
              <input
                type="text"
                {...register("numberOfPackages")}
                className="w-full rounded-lg border border-border-blue px-4 py-3 text-brand-black focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none"
              />
            </Field>
            <Field
              label="Preferred transport method"
              error={errors.preferredTransportMethod?.message}
            >
              <select
                {...register("preferredTransportMethod")}
                className="w-full rounded-lg border border-border-blue px-4 py-3 text-brand-black focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none bg-white"
              >
                <option value="">Select transport method</option>
                {transportOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </Field>
            <Field
              label="Preferred pickup date"
              error={errors.preferredPickupDate?.message}
            >
              <input
                type="date"
                {...register("preferredPickupDate")}
                className="w-full rounded-lg border border-border-blue px-4 py-3 text-brand-black focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none"
              />
            </Field>
            <Field
              label="Expected delivery date"
              error={errors.expectedDeliveryDate?.message}
            >
              <input
                type="date"
                {...register("expectedDeliveryDate")}
                className="w-full rounded-lg border border-border-blue px-4 py-3 text-brand-black focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none"
              />
            </Field>
          </div>

          <Field
            label="Special handling requirements"
            error={errors.specialHandling?.message}
          >
            <textarea
              {...register("specialHandling")}
              rows={3}
              className="w-full rounded-lg border border-border-blue px-4 py-3 text-brand-black focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none"
            />
          </Field>

          <Field label="Additional information" error={errors.additionalInformation?.message}>
            <textarea
              {...register("additionalInformation")}
              rows={3}
              className="w-full rounded-lg border border-border-blue px-4 py-3 text-brand-black focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none"
            />
          </Field>

          <Field label="Attachment (optional)">
            <input
              type="file"
              {...register("attachment")}
              className="w-full rounded-lg border border-border-blue px-4 py-3 text-brand-black file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-soft-blue file:text-brand-blue file:font-semibold"
            />
          </Field>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="consent"
              {...register("consent")}
              className="mt-1 h-5 w-5 rounded border-border-blue text-brand-cyan focus:ring-brand-cyan"
            />
            <label htmlFor="consent" className="text-sm text-slate-text">
              I agree to be contacted by {company.name} regarding my quote
              request. *
            </label>
          </div>
          {errors.consent && (
            <p className="text-sm text-red-600">{errors.consent.message}</p>
          )}

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
                Submitting...
              </>
            ) : (
              "Request a Transport Quote"
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
