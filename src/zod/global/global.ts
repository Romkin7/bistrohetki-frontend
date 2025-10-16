import z from "zod";
import { localeSchema } from "../locale";
import { navBarSchema } from "../navbar";
import { seoSchema } from "./seoModel";
import { contactInfoModelSchema } from "../collections/contactInfoModel";

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
  section_title: z.string(),
  contact_infos: z.array(contactInfoModelSchema),
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
