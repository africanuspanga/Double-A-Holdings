import { z } from "zod";

const phoneRegex = /^[+]?[\d\s()-]{7,20}$/;

export const quoteSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  companyName: z.string().optional(),
  email: z.string().email("Enter a valid email address"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(phoneRegex, "Enter a valid phone number"),
  serviceRequired: z.string().min(1, "Select a service"),
  cargoType: z.string().min(1, "Cargo type is required"),
  cargoDescription: z.string().min(5, "Please describe the cargo"),
  pickupLocation: z.string().min(2, "Pickup location is required"),
  deliveryDestination: z.string().min(2, "Delivery destination is required"),
  estimatedWeight: z.string().optional(),
  estimatedVolume: z.string().optional(),
  numberOfPackages: z.string().optional(),
  preferredTransportMethod: z.string().optional(),
  preferredPickupDate: z.string().optional(),
  expectedDeliveryDate: z.string().optional(),
  specialHandling: z.string().optional(),
  additionalInformation: z.string().optional(),
  attachment: z.any().optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to be contacted",
  }),
});

export type QuoteFormData = z.infer<typeof quoteSchema>;

export const contactSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  companyName: z.string().optional(),
  email: z.string().email("Enter a valid email address"),
  telephone: z.string().min(1, "Telephone is required").regex(phoneRegex, "Enter a valid phone number"),
  serviceOfInterest: z.string().min(1, "Select a service of interest"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
