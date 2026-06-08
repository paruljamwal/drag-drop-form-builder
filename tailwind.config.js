/** @type {import('tailwindcss').Config} */
module.exports = {
    important: '.form-builder',
    content: [
        './resources/views/form.blade.php',
        './resources/views/components/form-builder/**/*.blade.php',
        './resources/js/form-builder/**/*.js',
    ],
    theme: {
        extend: {
            minWidth: {
                'palette': '280px',
            },
        },
    },
    plugins: [],
};
