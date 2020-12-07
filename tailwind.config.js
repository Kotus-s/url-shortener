module.exports = {
    purge: ['./src/**/*.html', './src/**/*.vue'],
    darkMode: false,
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Poppins'],
            },
        },
        colors: {
            theme: {
                dark: {
                    1000: '#0f1013',
                    900: '#141417',
                    800: '#18191c',
                    700: '#1e2023',
                },
            },
            white: '#fff',
            primary: {
                light: '#71b1e7',
                DEFAULT: '#3490dc',
                dark: '#24659a'
            },
            secondary: '#ffed4a',
            danger: '#e3342f',
        },
        boxShadow: {
            primary: '0 10px 20px -10px rgba(52, 144, 220, .7);',
            sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
            inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
            outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
            focus: '0 0 0 3px rgba(66, 153, 225, 0.5)',
            none: 'none',
        },
    },
    variants: {
        extend: {
            borderWidth: ['focus'],
        },
    },
    plugins: [],
}
