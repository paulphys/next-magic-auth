const { spacing } = require("tailwindcss/defaultTheme");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            borderStyle: ["focus"],
            maxWidth: {
                "7xl": "80rem",
            },
            colors: {
                green: {
                    400: "#4fd1c5",
                    nice: "#52b788",
                },
                blue: {
                    500: "#338CF5",
                },
                gray: {
                    100: "#FBFBFB",
                    200: "#EAEAEA",
                    300: "#DFDFDF",
                    400: "#999999",
                    500: "#7F7F7F",
                    600: "#666666",
                    700: "#4C4C4C",
                    800: "#333333",
                    900: "rgba(68, 68, 68, 0.25)",
                },
            },

            spacing: {
                "9/16": "56.25%",
                "3/4": "75%",
                "1/1": "100%",
            },
            lineHeight: {
                none: "1",
                tighter: "1.125",
                tight: "1.25",
                snug: "1.375",
                normal: "1.5",
                relaxed: "1.625",
                loose: "2",
                3: ".75rem",
                4: "1rem",
                5: "1.2rem",
                6: "1.5rem",
                7: "1.75rem",
                8: "2rem",
                9: "2.25rem",
                10: "2.5rem",
            },
            minWidth: {
                10: "2.5rem",
                48: "12rem",
            },
            opacity: {
                90: "0.9",
            },
            scale: {
                98: ".98",
            },
            animation: {
                float: "float 3s ease-in-out infinite",
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-5%)" },
                },
            },
            fontFamily: {
                sans: ["Inter", ...defaultTheme.fontFamily.sans],
                hero: ["JetBrains Mono", ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                xl: "1.25rem",
                l: ".875 rem",
                "5xl": "3.25rem",
                "6xl": "5.5rem",
            },
            letterSpacing: {
                tighter: "-0.02em",
                tight: "-0.01em",
                normal: "0",
                wide: "0.01em",
                wider: "0.02em",
                widest: "0.4em",
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        letterSpacing: {
                            tighter: "-0.02em",
                            tight: "-0.01em",
                            normal: "0",
                            wide: "0.01em",
                            wider: "0.02em",
                            widest: "0.4em",
                        },
                        fontSize: { "5xl": "3.25rem", "6xl": "5.5rem" },
                        color: theme("colors.gray.700"),
                        a: {
                            color: theme("colors.blue.500"),
                            "&:hover": {
                                color: theme("colors.blue.700"),
                            },
                            code: { color: theme("colors.blue.400") },
                        },
                        "h2,h3,h4": {
                            "scroll-margin-top": spacing[32],
                        },
                        code: { color: theme("colors.pink.500") },
                        "blockquote p:first-of-type::before": false,
                        "blockquote p:last-of-type::after": false,
                    },
                },
                dark: {
                    css: {
                        g: {
                            opacity: 0,
                        },
                        color: theme("colors.gray.300"),
                        a: {
                            color: theme("colors.blue.400"),
                            "&:hover": {
                                color: theme("colors.blue.600"),
                            },
                            code: { color: theme("colors.blue.400") },
                        },
                        blockquote: {
                            borderLeftColor: theme("colors.gray.700"),
                            color: theme("colors.gray.300"),
                        },
                        "h2,h3,h4": {
                            color: theme("colors.gray.100"),
                            "scroll-margin-top": spacing[32],
                        },
                        hr: { borderColor: theme("colors.gray.700") },
                        ol: {
                            li: {
                                "&:before": { color: theme("colors.gray.500") },
                            },
                        },
                        ul: {
                            li: {
                                "&:before": {
                                    backgroundColor: theme("colors.gray.500"),
                                },
                            },
                        },
                        strong: { color: theme("colors.gray.300") },
                        thead: {
                            color: theme("colors.gray.100"),
                        },
                        tbody: {
                            tr: {
                                borderBottomColor: theme("colors.gray.700"),
                            },
                        },
                    },
                },
            }),
        },
    },
    variants: {
        typography: ["dark"],
        extend: {
            visibility: ["dark"],
            display: ["dark"],
        },
    },
    plugins: [require("@tailwindcss/typography")],
    variants: {
        scrollbar: ["dark"],
    },
};
