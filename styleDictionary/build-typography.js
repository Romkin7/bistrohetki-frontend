import path from "path";
import StyleDictionary from "style-dictionary";

// Register custom transforms
function stringifyTypography(typography) {
  const { fontSize, fontWeight, fontStyle, fontFamily, lineHeight } =
    typography;
  return `${fontStyle["$value"]} ${fontWeight["$value"]} ${fontSize["$value"]}/${lineHeight["$value"]} ${JSON.stringify(
    fontFamily["$value"]
  )}`;
}

const excludeAsset = {
  name: "exclude/asset",
  // async is optional
  filter: function (token) {
    return token.attributes.category !== "asset";
  },
};

StyleDictionary.registerFilter(excludeAsset);

StyleDictionary.registerTransform({
  name: "fontStretch/css",
  type: "value",
  transitive: true,
  filter: function (token) {
    return token.attributes.category === "stretch";
  },
  transform: function (token) {
    return token["$value"].fontStretch;
  },
});

StyleDictionary.registerTransform({
  name: "fontWeight/css",
  type: "value",
  transitive: true,
  filter: function (token) {
    return token.attributes.category === "weight";
  },
  transform: function (token) {
    return token["$value"].fontWeight;
  },
});

StyleDictionary.registerTransform({
  name: "fontSize/css",
  type: "value",
  transitive: true,
  filter: function (token) {
    return token.attributes.category === "size";
  },
  transform: function (token) {
    return token["$value"].fontSize;
  },
});

StyleDictionary.registerTransform({
  name: "lineHeight/css",
  type: "value",
  transitive: true,
  filter: function (token) {
    return token.attributes.category === "lineHeight";
  },
  transform: function (token) {
    return token["$value"].lineHeight;
  },
});

StyleDictionary.registerTransform({
  name: "typography/css",
  type: "value",
  transitive: true,
  filter: function (token) {
    return token.attributes.category === "typography";
  },
  transform: function (token) {
    return stringifyTypography(token["$value"]);
  },
});

StyleDictionary.registerTransform({
  name: "typography/object",
  type: "value",
  transitive: true,
  filter: function (token) {
    return token.attributes.category === "typography";
  },
  transform: function (token) {
    const css = stringifyTypography(token["$value"]);
    return { css };
  },
});

// Create and build the style dictionary
// Get the current directory in ES modules
const currentDir = path.dirname(new URL(import.meta.url).pathname);

const sd = new StyleDictionary(
  path.resolve(currentDir, "configs", "typography.config.js")
);

sd.buildAllPlatforms()
  .then(() => {
    console.log("Style Dictionary build completed successfully.");
  })
  .catch((error) => {
    console.error("Error during Style Dictionary build:", error);
  });
