/** @type {import('stylelint').Config} */
export default {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-alphabetical-order',
    ],
    plugins: ['stylelint-order'],
    rules: {
        'block-no-empty': true,
        'order/properties-alphabetical-order': true,
    },
};
