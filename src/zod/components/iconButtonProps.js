import z from "zod";
export const iconButtonPropsSchema = z.object({
    disabled: z.boolean().default(false).optional(),
    size: z.enum(["s", "l"]),
    className: z.string().optional(),
    ariaLabel: z.string(),
});
//# sourceMappingURL=iconButtonProps.js.map