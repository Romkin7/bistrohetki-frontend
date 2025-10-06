import z from "zod";
import { localeSchema } from "./locale";
import { navBarSchema } from "./navbar";
import { seoSchema } from "./global/seoModel";

const contactInfoSchema = z.object({
  email: z.string().email(),
  phone: z.string().optional(),
  address: z.string().optional(),
  socialLinks: z.array(
    z.object({
      platform: z.string(),
      url: z.string().url(),
      icon: z.string(), // Optional icon URL or class name
    })
  ),
});

const madeBySchema = z.object({
  startText: z.string(),
  link: z.object({
    href: z.string().url(),
    text: z.string(),
  }),
  endText: z.string(),
});

const footerSchema = z.object({
  title: z.string(),
  contactInfo: contactInfoSchema,
  madeBy: madeBySchema,
});

export const globalSchema = z.object({
  id: z.number().int().positive(),
  siteName: z.string().min(1, "Title is required"),
  siteDescription: z.string().min(1, "Description is required"),
  keywords: z.array(z.string()).optional(),
  canonicalUrl: z.string().url().optional(),
  robots: z.string().optional(),
  locale: localeSchema,
  defaultSeo: seoSchema,
  navbar: navBarSchema,
  footer: footerSchema,
});

export type Global = z.infer<typeof globalSchema>;
