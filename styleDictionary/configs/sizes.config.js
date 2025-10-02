export default {
    source: ['styleDictionary/tokens/sizes/*.json'],
    platforms: {
        css: {
            transforms: ['size/rem', 'size/em', 'size/percent'],
            transformGroup: 'css',
            prefix: 'fb',
            buildPath: 'public/css/',
            files: [
                {
                    destination: 'size-tokens.css',
                    format: 'css/variables',
                },
            ],
        },
        ts: {
            transformGroup: 'js',
            buildPath: 'src/tokens/',
            files: [
                {
                    format: 'javascript/es6',
                    destination: 'size-tokens.js',
                },
                {
                    format: 'typescript/es6-declarations',
                    destination: 'size-tokens.d.ts',
                },
            ],
        },
    },
};
