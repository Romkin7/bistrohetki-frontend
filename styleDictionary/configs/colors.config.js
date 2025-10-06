export default {
  source: ["styleDictionary/tokens/colors/*.json"],
  platforms: {
    css: {
      transformGroup: "css",
      prefix: "bh",
      buildPath: "public/css/",
      files: [
        {
          destination: "color-tokens.css",
          format: "css/variables",
        },
      ],
    },
    ts: {
      transformGroup: "js",
      buildPath: "src/tokens/",
      files: [
        {
          format: "javascript/es6",
          destination: "color-tokens.js",
        },
        {
          format: "typescript/es6-declarations",
          destination: "color-tokens.d.ts",
        },
      ],
    },
  },
};
