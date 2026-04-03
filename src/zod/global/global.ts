import z from "zod";
import { contactInfoModelSchema } from "../collections/contactInfoModel";
import { socialLinkModelSchema } from "../collections/socialLinkModel";
import { navBarSchema } from "../components/navbar";
import { localeSchema } from "../locale";
import { seoSchema } from "./seoModel";

const madeBySchema = z.object({
  startText: z.string(),
  link: z.object({
    href: z.string().url(),
    text: z.string(),
  }),
  endText: z.string(),
});

const sectionSchema = z.object({
  id: z.number().int().positive(),
  sectionTitle: z.string(),
  contactInfos: z.array(contactInfoModelSchema),
  socialLinks: z.array(socialLinkModelSchema),
});

const footerSchema = z.object({
  siteTitle: z.string(),
  sections: z.array(sectionSchema),
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
