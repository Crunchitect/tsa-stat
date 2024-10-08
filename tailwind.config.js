/** @type {import('tailwindcss').Config} */
export default {
    content: ['./**/*.{html,vue}'],
    theme: {
        extend: {
            transitionTimingFunction: {
                pop: 'cubic-bezier(.33,1.15,.49,1.44)',
            },
            screens: {
                print: { raw: 'print' },
                screen: { raw: 'screen' },
            },
        },
    },
    plugins: [require('tailwindcss-animated')],
};
