import { DarkTheme, DefaultTheme } from "@react-navigation/native";

import type { ThemeConfiguration } from "@/types/theme/config";

const colorsLight = {
  primary: "#4038FF",
  red500: "#C13333",
  gray800: "#303030",
  gray400: "#4D4D4D",
  gray200: "#A1A1A1",
  gray100: "#000000",
  gray50: "#EFEFEF",
  purple500: "#44427D",
  purple100: "#E1E1EF",
  purple50: "#1B1A23",
  text_primary: "#4038FF",
  white: "white",
  text: "black",
  background_primary: "white",
  foreground_primary: "white",
  red_primary: "red",
} as const;

const colorsDark = {
  primary: "#4038FF",
  red500: "#C13333",
  gray800: "#E0E0E0",
  gray400: "#969696",
  gray200: "#BABABA",
  gray100: "#DFDFDF",
  gray50: "#EFEFEF",
  purple500: "#A6A4F0",
  purple100: "#252732",
  purple50: "#1B1A23",
  text_primary: "white",
  white: "white",
  text: "white",
  background_primary: "#0E172A",
  foreground_primary: "#1B2537",
  red_primary: "red",
} as const;

export const sizes = [12, 16, 24, 32, 40, 80] as const;

export const config = {
  colors: colorsLight,
  fonts: {
    sizes,
    colors: colorsLight,
  },
  gutters: sizes,
  backgrounds: colorsLight,
  borders: {
    widths: [1, 2],
    radius: [4, 16],
    colors: colorsLight,
  },
  navigationColors: {
    ...DefaultTheme.colors,
    background: colorsLight.background_primary,
    card: colorsLight.background_primary,
  },
  variants: {
    dark: {
      colors: colorsDark,
      fonts: {
        colors: colorsDark,
      },
      backgrounds: colorsDark,
      navigationColors: {
        ...DarkTheme.colors,
        background: colorsDark.background_primary,
        card: colorsDark.background_primary,
      },
    },
  },
} as const satisfies ThemeConfiguration;
