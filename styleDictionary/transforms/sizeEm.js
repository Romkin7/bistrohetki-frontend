export const sizeEm = {
    name: 'size/em',
    type: 'value',
    filter: (token) => {
        // Filter out only breakpoint type
        return token.type === 'breakpoint';
    },
    transform: (token) => {
        // token.value will be resolved and transformed at this point
        if (token.value.endsWith('rem') || token.value.endsWith('px')) {
            return token.value.replace(/(rem|px)$/, 'em');
        }
        return `${token.value}em`;
    },
};
