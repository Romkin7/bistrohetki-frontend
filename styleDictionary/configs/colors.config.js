export default {
    source: ['styleDictionary/tokens/colors/*.json'],
    platforms: {
        css: {
            transformGroup: 'css',
            prefix: 'bh',
            buildPath: 'public/css/',
            files: [
                {
                    destination: 'color-tokens.css',
                    format: 'css/variables',
                },
            ],
        },
    },
};
