/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
const withMT = require("@material-tailwind/react/utils/withMT");
const crouzie = require("./content/themes/crouzie.json")
const lcdm = require("./content/themes/lcdm.json")
const dly = require("./content/themes/dly.json")

let font_base = 16
let font_scale = 1.25;
let h6 = font_base / font_base;
let h5 = h6 * font_scale;
let h4 = h5 * font_scale;
let h3 = h4 * font_scale;
let h2 = h3 * font_scale;
let h1 = h2 * font_scale;

module.exports = withMT({
  mode: "jit",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      'crouzie': {
        'primary': crouzie.theme.colorPrimary,
        'secondary':crouzie.theme.colorSecondary,
        'terciary':crouzie.theme.colorTerciary,
      },
      'lcdm': {
        'primary': lcdm.theme.colorPrimary,
        'secondary':lcdm.theme.colorSecondary,
        'terciary':lcdm.theme.colorTerciary,
      },
      'dly': {
        'primary': dly.theme.colorPrimary,
        'secondary':dly.theme.colorSecondary,
        'terciary':dly.theme.colorTerciary,
      },
      black: colors.black,
      white: colors.white,
      teal: colors.cyan,
      green: colors.emerald,
      red: colors.rose,
      purple: colors.purple,
      pink: colors.pink,
      yellow: colors.yellow,
      gray: {
        50: "#F6F6F9",
        100: "#EDECF3",
        150: "#E6E3EF",
        200: "#E1DDEC",
        250: "#C9C5D5",
        300: "#b2adbe",
        400: "#918c9e",
        500: "#716c7f",
        600: "#565165",
        700: "#433e52",
        800: "#363145",
        900: "#252336",
        1000: "#1c1b2e",
      },
      blue: {
        50: "#DCEEFF",
        100: "#B4DBFF",
        200: "#85C5FE",
        300: "#4EABFE",
        400: "#2296fe",
        500: "#0084FF",
        600: "#0574e4",
        700: "#0D5DBD",
        800: "#144696",
        900: "#1D2C6C",
        1000: "#241748",
      },
      orange: {
        200: "#EB7752",
        300: "#EA6C45",
        400: "#E85C30",
        500: "#EC4815",
        600: "#DC4419",
        700: "#D04017",
        800: "#C1360F",
      },
    },
    screens: {
      sm: "600px",
      md: "900px",
      lg: "1200px",
      xl: "1500px",
      "2xl": "1800px",
    },
    fontSize: {
      xs: ".875rem",
      sm: "1rem",
      base: "1.125rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "1.75rem",
      "3xl": "2rem",
      "4xl": "2.5rem",
      "5xl": "3.25rem",
      "6xl": "4rem",
      "7xl": "5rem",
      "8xl": "6rem",
    },
    borderWidth: {
      DEFAULT: "3px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
    },
    extend: {
      backgroundImage: {
        'crouzie': `url('${crouzie.header.img}')`,
        'lcdm': `url('${lcdm.header.img}')`,
        'dly': `url('${dly.header.img}')`,
        'courbe-footer-crouzie': `url('/uploads/svg/courbe-crouzie.svg')`,
        'courbe-footer-lcdm': `url('/uploads/svg/courbe-lcdm.svg')`,
        'courbe-footer-dly': `url('/uploads/svg/courbe-dly.svg')`,
      },
      textDecoration: ["active"],
      opacity: {
        7: ".075",
        15: ".15",
      },
      maxWidth: {
        "8xl": "86rem",
      },
      spacing: {
        128: "32rem",
      },
      zIndex: {
        "-1": "-1",
      },
      fontFamily: {
        montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
        nunito: ["Nunito", ...defaultTheme.fontFamily.sans],
        lato: ["Lato", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        base: font_base + "px",
        h1: h1 + "rem",
        "h1-sm": h1 * 0.8 + "rem",
        h2: h2 + "rem",
        "h2-sm": h2 * 0.8 + "rem",
        h3: h3 + "rem",
        "h3-sm": h3 * 0.8 + "rem",
        h4: h4 + "rem",
        h5: h5 + "rem",
        h6: h6 + "rem",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            pre: {
              color: theme("colors.gray.700"),
              backgroundColor: theme("colors.gray.100"),
              lineHeight: 1.5,
            },
            code: {
              backgroundColor: theme("colors.gray.100"),
              padding: "0.25rem",
              borderRadius: "3px",
              margin: "-0.25rem 1px",
            },
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
            "p:first-of-type": {
              fontSize: "1.125rem",
            },
          },
        },
        lg: {
          css: {
            pre: {
              lineHeight: 1.5,
            },
            "p:first-of-type": {
              fontSize: "1.365rem",
            },
          },
        },
        xl: {
          css: {
            pre: {
              lineHeight: 1.5,
            },
            "p:first-of-type": {
              fontSize: "1.365rem",
            },
          },
        },
        primary: {
          css: {
            color: theme("colors.gray.50"),
            '[class~="lead"]': { color: theme("colors.gray.400") },
            a: { color: theme("colors.gray.100") },
            strong: { color: theme("colors.gray.100") },
            "ul > li::before": { backgroundColor: theme("colors.gray.700") },
            hr: { borderColor: theme("colors.gray.800") },
            blockquote: {
              color: theme("colors.gray.100"),
              borderLeftColor: theme("colors.gray.800"),
            },
            h1: { color: theme("colors.gray.100") },
            h2: { color: theme("colors.gray.100") },
            h3: { color: theme("colors.gray.100") },
            h4: { color: theme("colors.gray.100") },
            code: {
              color: theme("colors.gray.100"),
              backgroundColor: "rgba(0,0,0,0.15)",
            },
            "a code": { color: theme("colors.gray.100") },
            pre: {
              color: theme("colors.gray.200"),
              backgroundColor: "rgba(0,0,0,0.15)",
            },
            thead: {
              color: theme("colors.gray.100"),
              borderBottomColor: theme("colors.gray.700"),
            },
            "tbody tr": { borderBottomColor: theme("colors.gray.800") },
          },
        },
      }),
    },
  },
  variants: {
    extend: { 
      typography: ["tint", "dark", "primary", 'crouzie'] 
    },
  },
  plugins: [require("@tailwindcss/typography")],
});
