import tailwindTypography from "@tailwindcss/typography";

export default {
  plugins: [tailwindTypography],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      bhtyellow: {
        50: "#fffee7",
        100: "#fffdc1",
        200: "#fff786",
        300: "#ffea41",
        400: "#ffd90d",
        500: "#ffc900",  // main
        600: "#d19300",
        700: "#a66802",
        800: "#89510a",
        900: "#74420f",
        950: "#442204",
      },
      bhtred: {
        50: "#fff5ed",
        100: "#ffe8d4",
        200: "#ffcda8",
        300: "#ffaa71",
        400: "#ff7b38",
        500: "#fe5711",
        600: "#ea3b07",  // main
        700: "#c62908",
        800: "#9d230f",
        900: "#7e2010",
        950: "#440c06",
      },
      bhtgray: {
        50: "#f6f6f6",
        100: "#e7e7e7",
        200: "#d1d1d1",
        300: "#b0b0b0",
        400: "#888888",
        500: "#6d6d6d",
        600: "#5d5d5d",
        700: "#555555",  // main
        800: "#454545",
        900: "#3d3d3d",
        950: "#262626",
      },
    },
    extend: {
      typography: ({ theme }) => ({
        bht: {
          css: {
            '--tw-prose-counters': theme('colors.bhtgray[50]'),
            '--tw-prose-headings': theme('colors.bhtgray[50]'),
            '--tw-prose-bold': theme('colors.bhtgray[50]'),
            '--tw-prose-links': theme('colors.bhtgray[50]'),
            '--tw-prose-body': theme('colors.bhtgray[50]'),

          },
        },
      }),
    },
  },
};
