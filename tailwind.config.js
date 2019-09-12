module.exports = {
    theme: {
        colors: {

            white: '#fff',

            black: '#000',

            pink: {
                100: '#FBEAF0',
                200: '#F6CADA',
                300: '#F0A9C4',
                400: '#E56998',
                500: '#DA296C',
                600: '#C42561',
                700: '#831941',
                800: '#621231',
                900: '#410C20',
            },

            blue: {
                100: '#E9F6FF',
                200: '#C7E8FF',
                300: '#A6DAFF',
                400: '#63BFFE',
                500: '#20A3FE',
                600: '#1D93E5',
                700: '#136298',
                800: '#0E4972',
                900: '#0A314C',
            },

            gray: {
                100: '#F1F1F1',
                200: '#DDDDDD',
                300: '#C9C9C9',
                400: '#A0A0A0',
                500: '#777777',
                600: '#6B6B6B',
                700: '#474747',
                800: '#363636',
                900: '#242424',
            },
        },

        fontSize: {
            xs: '0.75rem',
            sm: '0.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
            '7xl': '5rem',
            '8xl': '6rem',
            '9xl': '7rem',
            '10xl': '8rem',
        },

        fontFamily: {
            sans: [
                'Roboto',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                '"Noto Sans"',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
                '"Noto Color Emoji"',
            ],
            serif: [
                '"Roboto Slab"',
                'Georgia',
                'Cambria',
                '"Times New Roman"',
                'Times',
                'serif',
            ],
            mono: [
                '"Roboto Mono"',
                'monospace'
            ]
        },

        extend: {
            spacing: {
                '60': '18rem',
                '96': '24rem',
                '128': '32rem'
            },

            height: {
                '1px': '1px',
                '2px': '2px',
            }
        },
    }
}