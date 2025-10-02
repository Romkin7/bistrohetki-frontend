import z from "zod";

export const Locale = z
  .enum(["fi-FI", "sv-SE", "en-US", "es-ES"])
  .default("fi-FI");
