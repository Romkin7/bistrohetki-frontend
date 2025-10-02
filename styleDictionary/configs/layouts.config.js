export default {
    source: ['styleDictionary/tokens/layouts/*.json'],
    platforms: {
        css: {
            transformGroup: 'css',
            prefix: 'fb',
            buildPath: 'public/css/',
            files: [
                {
                    destination: 'layout-tokens.css',
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
                    destination: 'layout-tokens.js',
                },
                {
                    format: 'typescript/es6-declarations',
                    destination: 'layout-tokens.d.ts',
                },
            ],
        },
    },
};
