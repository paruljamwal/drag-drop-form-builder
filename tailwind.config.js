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
                    primary: '#4F46E5',
                    'primary-hover': '#4338CA',
                    text: '#0F172A',
                    muted: '#64748B',
                    'primary-soft': '#EEF2FF',
                },
            },
            borderRadius: {
                fb: '12px',
            },
            boxShadow: {
                'fb-sm': '0 1px 2px 0 rgba(15, 23, 42, 0.05)',
                'fb-md': '0 4px 6px -1px rgba(15, 23, 42, 0.07), 0 2px 4px -2px rgba(15, 23, 42, 0.05)',
                'fb-lg': '0 10px 15px -3px rgba(15, 23, 42, 0.08), 0 4px 6px -4px rgba(15, 23, 42, 0.05)',
                'fb-selected': '0 0 0 3px rgba(79, 70, 229, 0.15), 0 4px 12px rgba(79, 70, 229, 0.12)',
            },
            fontFamily: {
                fb: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
            },
            minWidth: {
                palette: '280px',
            },
        },
    },
    plugins: [],
};
