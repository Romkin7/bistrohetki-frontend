export const sizePercent = {
    name: 'size/percent',
    type: 'value',
    filter: (token) => {
        // Filter to only include tokens that are related to circle items
        return token.attributes.item.includes('border-radius-rounded-circle');
    },
    transform: (token) => {
        let tokenValue = token.value;
        if (token.value.endsWith('rem')) {
            // remove rem at the end
            tokenValue = tokenValue.replace(/rem$/, '');
        }
        return `${tokenValue}%`;
    },
};
