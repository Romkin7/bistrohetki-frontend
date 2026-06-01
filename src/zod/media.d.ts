import z from 'zod';
export declare const mimeSchema: z.ZodEnum<{
    "image/vnd.microsoft.icon": "image/vnd.microsoft.icon";
    "image/jpeg": "image/jpeg";
    "image/png": "image/png";
}>;
export declare const extSchema: z.ZodEnum<{
    ".ico": ".ico";
    ".jpeg": ".jpeg";
    ".png": ".png";
}>;
export declare const formatSchema: z.ZodObject<{
    ext: z.ZodEnum<{
        ".ico": ".ico";
        ".jpeg": ".jpeg";
        ".png": ".png";
    }>;
    url: z.ZodString;
    hash: z.ZodString;
    mime: z.ZodEnum<{
        "image/vnd.microsoft.icon": "image/vnd.microsoft.icon";
        "image/jpeg": "image/jpeg";
        "image/png": "image/png";
    }>;
    name: z.ZodString;
    path: z.ZodNull;
    size: z.ZodNumber;
    width: z.ZodNumber;
    height: z.ZodNumber;
    sizeInBytes: z.ZodNumber;
}, z.z.core.$strip>;
export declare const formatsSchema: z.ZodObject<{
    large: z.ZodObject<{
        ext: z.ZodEnum<{
            ".ico": ".ico";
            ".jpeg": ".jpeg";
            ".png": ".png";
        }>;
        url: z.ZodString;
        hash: z.ZodString;
        mime: z.ZodEnum<{
            "image/vnd.microsoft.icon": "image/vnd.microsoft.icon";
            "image/jpeg": "image/jpeg";
            "image/png": "image/png";
        }>;
        name: z.ZodString;
        path: z.ZodNull;
        size: z.ZodNumber;
        width: z.ZodNumber;
        height: z.ZodNumber;
        sizeInBytes: z.ZodNumber;
    }, z.z.core.$strip>;
    small: z.ZodObject<{
        ext: z.ZodEnum<{
            ".ico": ".ico";
            ".jpeg": ".jpeg";
            ".png": ".png";
        }>;
        url: z.ZodString;
        hash: z.ZodString;
        mime: z.ZodEnum<{
            "image/vnd.microsoft.icon": "image/vnd.microsoft.icon";
            "image/jpeg": "image/jpeg";
            "image/png": "image/png";
        }>;
        name: z.ZodString;
        path: z.ZodNull;
        size: z.ZodNumber;
        width: z.ZodNumber;
        height: z.ZodNumber;
        sizeInBytes: z.ZodNumber;
    }, z.z.core.$strip>;
    medium: z.ZodObject<{
        ext: z.ZodEnum<{
            ".ico": ".ico";
            ".jpeg": ".jpeg";
            ".png": ".png";
        }>;
        url: z.ZodString;
        hash: z.ZodString;
        mime: z.ZodEnum<{
            "image/vnd.microsoft.icon": "image/vnd.microsoft.icon";
            "image/jpeg": "image/jpeg";
            "image/png": "image/png";
        }>;
        name: z.ZodString;
        path: z.ZodNull;
        size: z.ZodNumber;
        width: z.ZodNumber;
        height: z.ZodNumber;
        sizeInBytes: z.ZodNumber;
    }, z.z.core.$strip>;
    thumbnail: z.ZodObject<{
        ext: z.ZodEnum<{
            ".ico": ".ico";
            ".jpeg": ".jpeg";
            ".png": ".png";
        }>;
        url: z.ZodString;
        hash: z.ZodString;
        mime: z.ZodEnum<{
            "image/vnd.microsoft.icon": "image/vnd.microsoft.icon";
            "image/jpeg": "image/jpeg";
            "image/png": "image/png";
        }>;
        name: z.ZodString;
        path: z.ZodNull;
        size: z.ZodNumber;
        width: z.ZodNumber;
        height: z.ZodNumber;
        sizeInBytes: z.ZodNumber;
    }, z.z.core.$strip>;
}, z.z.core.$strip>;
export declare const mediaSchema: z.ZodObject<{
    id: z.ZodNumber;
    documentId: z.ZodString;
    name: z.ZodString;
    alternativeText: z.ZodString;
    caption: z.ZodString;
    width: z.ZodNumber;
    height: z.ZodNumber;
    formats: z.ZodObject<{
        large: z.ZodObject<{
            ext: z.ZodEnum<{
                ".ico": ".ico";
                ".jpeg": ".jpeg";
                ".png": ".png";
            }>;
            url: z.ZodString;
            hash: z.ZodString;
            mime: z.ZodEnum<{
                "image/vnd.microsoft.icon": "image/vnd.microsoft.icon";
                "image/jpeg": "image/jpeg";
                "image/png": "image/png";
            }>;
            name: z.ZodString;
            path: z.ZodNull;
            size: z.ZodNumber;
            width: z.ZodNumber;
            height: z.ZodNumber;
            sizeInBytes: z.ZodNumber;
        }, z.z.core.$strip>;
        small: z.ZodObject<{
            ext: z.ZodEnum<{
                ".ico": ".ico";
                ".jpeg": ".jpeg";
                ".png": ".png";
            }>;
            url: z.ZodString;
            hash: z.ZodString;
            mime: z.ZodEnum<{
                "image/vnd.microsoft.icon": "image/vnd.microsoft.icon";
                "image/jpeg": "image/jpeg";
                "image/png": "image/png";
            }>;
            name: z.ZodString;
            path: z.ZodNull;
            size: z.ZodNumber;
            width: z.ZodNumber;
            height: z.ZodNumber;
            sizeInBytes: z.ZodNumber;
        }, z.z.core.$strip>;
        medium: z.ZodObject<{
            ext: z.ZodEnum<{
                ".ico": ".ico";
                ".jpeg": ".jpeg";
                ".png": ".png";
            }>;
            url: z.ZodString;
            hash: z.ZodString;
            mime: z.ZodEnum<{
                "image/vnd.microsoft.icon": "image/vnd.microsoft.icon";
                "image/jpeg": "image/jpeg";
                "image/png": "image/png";
            }>;
            name: z.ZodString;
            path: z.ZodNull;
            size: z.ZodNumber;
            width: z.ZodNumber;
            height: z.ZodNumber;
            sizeInBytes: z.ZodNumber;
        }, z.z.core.$strip>;
        thumbnail: z.ZodObject<{
            ext: z.ZodEnum<{
                ".ico": ".ico";
                ".jpeg": ".jpeg";
                ".png": ".png";
            }>;
            url: z.ZodString;
            hash: z.ZodString;
            mime: z.ZodEnum<{
                "image/vnd.microsoft.icon": "image/vnd.microsoft.icon";
                "image/jpeg": "image/jpeg";
                "image/png": "image/png";
            }>;
            name: z.ZodString;
            path: z.ZodNull;
            size: z.ZodNumber;
            width: z.ZodNumber;
            height: z.ZodNumber;
            sizeInBytes: z.ZodNumber;
        }, z.z.core.$strip>;
    }, z.z.core.$strip>;
    hash: z.ZodString;
    ext: z.ZodEnum<{
        ".ico": ".ico";
        ".jpeg": ".jpeg";
        ".png": ".png";
    }>;
    mime: z.ZodEnum<{
        "image/vnd.microsoft.icon": "image/vnd.microsoft.icon";
        "image/jpeg": "image/jpeg";
        "image/png": "image/png";
    }>;
    size: z.ZodNumber;
    url: z.ZodString;
    previewUrl: z.ZodNull;
    provider: z.ZodDefault<z.ZodString>;
    provider_metadata: z.ZodNull;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    publishedAt: z.ZodDate;
}, z.z.core.$strip>;
export type Media = z.infer<typeof mediaSchema>;
//# sourceMappingURL=media.d.ts.map