export default {
    source: ['styleDictionary/tokens/layouts/*.json'],
    platforms: {
        css: {
            transformGroup: 'css',
            prefix: 'bh',
            buildPath: 'public/css/',
            files: [
                {
                    destination: 'layout-tokens.css',
                    format: 'css/variables',
                },
            ],
        },
    },
};
