import { readFileSync, writeFileSync } from "fs";

function fixFontsPaths() {
  const fonts = readFileSync("public/styles/fonts.css", "utf8");
  // Find all src: url('../assets/Roboto places and replace all ../ with /
  const fixedFonts = fonts.replace(
    /src: url\('\.\.\/assets\//g,
    "src: url('/assets/"
  );
  // Write the fixed fonts to the same file
  writeFileSync("public/styles/fonts.css", fixedFonts);
  console.log("Fixed fonts paths");
}

fixFontsPaths();
