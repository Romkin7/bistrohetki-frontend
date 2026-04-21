import z from "zod";

export const textFieldPropsSchema = z.object({
  type: z.enum(["text", "email", "password", "search", "url", "tel"]),
});

export type TextFieldProps = z.infer<typeof textFieldPropsSchema>;
