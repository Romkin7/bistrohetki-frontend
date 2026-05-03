import z from "zod";

export const strapiButtonSchema = z.object({
  id: z.number(),
  type: z.enum(["submit", "reset", "button"]),
  disabled: z.boolean(),
  buttonText: z.string(),
  ariaLabel: z.string(),
});

export type StrapiButton = z.infer<typeof strapiButtonSchema>;
export type StrapiButtonType = StrapiButton["type"];
