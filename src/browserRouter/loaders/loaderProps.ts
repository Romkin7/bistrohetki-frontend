import z from "zod";

export const loaderPropsSchema = z.object({
  locale: z.enum(["fi-FI", "sv-SE", "en", "es-ES"]).default("fi-FI"),
});

export type LoaderProps = z.infer<typeof loaderPropsSchema>;
