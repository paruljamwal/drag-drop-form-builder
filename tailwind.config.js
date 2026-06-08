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
            colors: {
                fb: {
                    bg: '#F8FAFC',
                    surface: '#FFFFFF',
                    border: '#E2E8F0',
                    navy: '#07142F',
                    primary: '#5B6FBE',
                    'primary-hover': '#4A5DA6',
                    'primary-soft': '#F3F6FF',
                    text: '#0F172A',
                    muted: '#64748B',
                },
            },
            borderRadius: {
                fb: '18px',
            },
            boxShadow: {
                'fb-sm': '0 1px 2px 0 rgba(7, 20, 47, 0.05)',
                'fb-md': '0 8px 24px -4px rgba(7, 20, 47, 0.08), 0 2px 8px rgba(7, 20, 47, 0.04)',
                'fb-lg': '0 16px 40px -8px rgba(7, 20, 47, 0.12)',
                'fb-selected': '0 0 0 3px rgba(91, 111, 190, 0.2), 0 8px 24px rgba(91, 111, 190, 0.12)',
            },
            fontFamily: {
                fb: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
