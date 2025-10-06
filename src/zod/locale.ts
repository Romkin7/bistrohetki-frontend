import z from "zod";

export const localeSchema = z
  .enum(["fi-FI", "sv-SE", "en-US", "es-ES"])
  .default("fi-FI");
