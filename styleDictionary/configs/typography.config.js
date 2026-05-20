import {
    logBrokenReferenceLevels,
    logVerbosityLevels,
    logWarningLevels,
} from 'style-dictionary/enums';

export default {
    log: {
        warnings: logWarningLevels.warn, // 'warn' | 'error' | 'disabled'
        verbosity: logVerbosityLevels.verbose, // 'default' | 'silent' | 'verbose'
        errors: {
            brokenReferences: logBrokenReferenceLevels.console, // 'throw' | 'console'
        },
    },
    source: ['styleDictionary/tokens/typography/*.json'],
    platforms: {
        css: {
            transformGroup: 'css',
            prefix: 'bh',
            buildPath: 'public/css/',
            transforms: [
                'attribute/cti',
                'typography/css',
                'lineHeight/css',
                'fontSize/css',
                'fontWeight/css',
                'fontStretch/css',
            ],
            files: [
                {
                    destination: 'typography-tokens.css',
                    format: 'css/variables',
                    filter: 'exclude/asset',
                },
                {
                    destination: 'fonts.css',
                    format: 'css/fonts.css',
                },
            ],
        },
    },
};
