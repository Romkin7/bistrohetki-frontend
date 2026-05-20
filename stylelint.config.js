/** @type {import('stylelint').Config} */
export default {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-alphabetical-order',
    ],
    plugins: ['stylelint-order'],
    rules: {
        'block-no-empty': true,
        'selector-class-pattern': '^[a-z][a-zA-Z0-9]*(-{1,2}[a-zA-Z0-9]+)*$',
        'order/properties-alphabetical-order': true,
    },
};
