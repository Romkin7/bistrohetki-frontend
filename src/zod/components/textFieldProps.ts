import z from "zod";

export const textFieldPropsSchema = z.object({
  htmlFor: z.string(),
  label: z.string(),
  name: z.string(),
  placeholder: z.string().optional(),
  type: z
    .enum(["text", "email", "password", "search", "url", "tel"])
    .default("text"),
  required: z.boolean().default(false),
  disabled: z.boolean().default(false),
  readOnly: z.boolean().default(false),
  className: z.string().optional(),
  errorMessage: z.string().optional(),
  ariaLabel: z.string(),
});

export type TextFieldProps = z.infer<typeof textFieldPropsSchema>;
