import path from 'path';
import StyleDictionary from 'style-dictionary';
import { sizeEm } from './transforms/sizeEm.js';
import { sizePercent } from './transforms/sizePercent.js';

StyleDictionary.registerTransform(sizeEm);
StyleDictionary.registerTransform(sizePercent);

// Create and build the style dictionary
// Get the current directory in ES modules
const currentDir = path.dirname(new URL(import.meta.url).pathname);

const sd = new StyleDictionary(
    path.resolve(currentDir, 'configs', 'sizes.config.js'),
);

sd.buildAllPlatforms()
    .then(() => {
        console.log('Style Dictionary build completed successfully.');
    })
    .catch((error) => {
        console.error('Error during Style Dictionary build:', error);
    });
