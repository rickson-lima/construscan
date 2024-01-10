import { AnimationResolver } from "@gluestack-style/animation-resolver";
import { MotionAnimationDriver } from "@gluestack-style/legend-motion-animation-driver";
import { createConfig, createComponents } from "@gluestack-style/react";
import * as componentsTheme from "./theme";

export const gluestackUIConfig = createConfig({
  aliases: {
    bg: "backgroundColor",
    bgColor: "backgroundColor",
    h: "height",
    w: "width",
    p: "padding",
    px: "paddingHorizontal",
    py: "paddingVertical",
    pt: "paddingTop",
    pb: "paddingBottom",
    pr: "paddingRight",
    pl: "paddingLeft",
    m: "margin",
    mx: "marginHorizontal",
    my: "marginVertical",
    mt: "marginTop",
    mb: "marginBottom",
    mr: "marginRight",
    ml: "marginLeft",
    rounded: "borderRadius",
  } as const,
  tokens: {
    colors: {
      // Custom colors
      primary300: "#5D5F78",
      primary700: "#292C4F",
      primary800: "#292C4F",
      primary900: "##2A2C4D",
      secondary: "#5B67E7",
      opaqueSecondary: "#BDC1F9",
      border100: "#E6E6EA",
      green900: "#53A04D",

      // Gluestack Theme Colors
      textLight900: "#262626",
      textLight0: "#5D5F78",

      amber50: "#fffbeb",
      amber100: "#fef3c7",
      amber200: "#fde68a",
      amber300: "#fcd34d",
      amber400: "#fbbf24",
      amber500: "#f59e0b",
      amber600: "#d97706",
      amber700: "#b45309",
      amber800: "#92400e",
      amber900: "#78350f",

      error00: "#FEE9E9",
      error50: "#FEE2E2",
      error100: "#FECACA",
      error200: "#FCA5A5",
      error300: "#F87171",
      error400: "#EF4444",
      error500: "#E63535",
      error600: "#DC2626",
      error700: "#B91C1C",
      error800: "#7F1D1D",
      error900: "#991B1B",
      error950: "#220808",
      success0: "#E4FFF4",
      success50: "#CAFFE8",
      success100: "#A2F1C0",
      success200: "#84D3A2",
      success300: "#66B584",
      success400: "#489766",
      success500: "#348352",
      success600: "#2A7948",
      success700: "#206F3E",
      success800: "#166534",
      success900: "#14532D",
      success950: "#071F11",
      warning50: "#fff7ed",
      warning100: "#ffedd5",
      warning200: "#fed7aa",
      warning300: "#fdba74",
      warning400: "#fb923c",
      warning500: "#f97316",
      warning600: "#ea580c",
      warning700: "#c2410c",
      warning800: "#9a3412",
      warning900: "#7c2d12",
      info50: "#f0f9ff",
      info100: "#e0f2fe",
      info200: "#bae6fd",
      info300: "#7dd3fc",
      info400: "#38bdf8",
      info500: "#0ea5e9",
      info600: "#0284c7",
      info700: "#0369a1",
      info800: "#075985",
      info900: "#0c4a6e",

      white: "#FFFFFF",
      black: "#000000",
    },
    space: {
      px: "1px",
      "0": 0,
      "0.5": 2,
      "1": 4,
      "1.5": 6,
      "2": 8,
      "2.5": 10,
      "3": 12,
      "3.5": 14,
      "4": 16,
      "4.5": 18,
      "5": 20,
      "6": 24,
      "7": 28,
      "8": 32,
      "9": 36,
      "10": 40,
      "11": 44,
      "12": 48,
      "14": 56,
      "16": 64,
      "20": 80,
      "24": 96,
      "32": 128,
      "40": 160,
      "48": 192,
      "56": 224,
      "64": 256,
      "72": 288,
      "80": 320,
      "96": 384,
      "1/2": "50%",
      "1/3": "33.333%",
      "2/3": "66.666%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666%",
      "2/6": "33.333%",
      "3/6": "50%",
      "4/6": "66.666%",
      "5/6": "83.333%",
      full: "100%",
    },
    borderWidths: {
      "0": 0,
      "1": 1,
      "2": 2,
      "3": 3,
      "4": 4,
      "8": 8,
    },
    radii: {
      none: 0,
      xs: 2,
      sm: 4,
      md: 6,
      lg: 8,
      xl: 12,
      "2xl": 16,
      "3xl": 24,
      full: 9999,
    },
    breakpoints: {
      base: 0,
      sm: 480,
      md: 768,
      lg: 992,
      xl: 1280,
    },
    mediaQueries: {
      base: "@media screen and (min-width: 0)",
      xs: "@media screen and (min-width: 400px)",
      sm: "@media screen and (min-width: 480px)",
      md: "@media screen and (min-width: 768px)",
      lg: "@media screen and (min-width: 992px)",
      xl: "@media screen and (min-width: 1280px)",
    },
    letterSpacings: {
      xs: -0.4,
      sm: -0.2,
      md: 0,
      lg: 0.2,
      xl: 0.4,
      "2xl": 1.6,
    },
    lineHeights: {
      "2xs": 16,
      xs: 18,
      sm: 20,
      md: 22,
      lg: 24,
      xl: 28,
      "2xl": 32,
      "3xl": 40,
      "4xl": 48,
      "5xl": 56,
      "6xl": 72,
      "7xl": 90,
    },
    fontWeights: {
      hairline: "100",
      thin: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
      extraBlack: "950",
    },
    fonts: {
      heading: undefined,
      body: undefined,
      mono: undefined,
    },
    fontSizes: {
      "2xs": 10,
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 20,
      "2xl": 24,
      "3xl": 30,
      "4xl": 36,
      "5xl": 48,
      "6xl": 60,
      "7xl": 72,
      "8xl": 96,
      "9xl": 128,
    },
    opacity: {
      0: 0,
      5: 0.05,
      10: 0.1,
      20: 0.2,
      25: 0.25,
      30: 0.3,
      40: 0.4,
      50: 0.5,
      60: 0.6,
      70: 0.7,
      75: 0.75,
      80: 0.8,
      90: 0.9,
      95: 0.95,
      100: 1,
    },
  } as const,
  globalStyle: {
    variants: {
      hardShadow: {
        "1": {
          shadowColor: "$backgroundLight900",
          shadowOffset: {
            width: -2,
            height: 2,
          },
          shadowRadius: 8,
          shadowOpacity: 0.5,
          elevation: 10,
        },
        "2": {
          shadowColor: "$backgroundLight900",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowRadius: 8,
          shadowOpacity: 0.5,
          elevation: 10,
        },
        "3": {
          shadowColor: "$backgroundLight900",
          shadowOffset: {
            width: 2,
            height: 2,
          },
          shadowRadius: 8,
          shadowOpacity: 0.5,
          elevation: 10,
        },
        "4": {
          shadowColor: "$backgroundLight900",
          shadowOffset: {
            width: 0,
            height: -3,
          },
          shadowRadius: 8,
          shadowOpacity: 0.5,
          elevation: 10,
        },
        // this 5th version is only for toast shadow
        // temporary
        "5": {
          shadowColor: "$backgroundLight900",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowRadius: 8,
          shadowOpacity: 0.2,
          elevation: 10,
        },
      },
      softShadow: {
        "1": {
          shadowColor: "$backgroundLight900",
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowRadius: 10,
          shadowOpacity: 0.1,
          _android: {
            shadowColor: "$backgroundLight500",
            elevation: 5,
            shadowOpacity: 0.05,
          },
        },
        "2": {
          shadowColor: "$backgroundLight900",
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowRadius: 20,
          elevation: 3,
          shadowOpacity: 0.1,
          _android: {
            shadowColor: "$backgroundLight500",
            elevation: 10,
            shadowOpacity: 0.1,
          },
        },
        "3": {
          shadowColor: "$backgroundLight900",
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowRadius: 30,
          shadowOpacity: 0.1,
          elevation: 4,
          _android: {
            shadowColor: "$backgroundLight500",
            elevation: 15,
            shadowOpacity: 0.15,
          },
        },
        "4": {
          shadowColor: "$backgroundLight900",
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowRadius: 40,
          shadowOpacity: 0.1,
          elevation: 10,
          _android: {
            shadowColor: "$backgroundLight500",
            elevation: 20,
            shadowOpacity: 0.2,
          },
        },
      },
    },
  },
  plugins: [new AnimationResolver(MotionAnimationDriver)],
});

type Config = typeof gluestackUIConfig; // Assuming `config` is defined elsewhere

type Components = typeof componentsConfig;

export const componentsConfig = createComponents(componentsTheme);

export type { UIConfig, UIComponents } from "@gluestack-ui/themed";

export interface IConfig {}
export interface IComponents {}

declare module "@gluestack-ui/themed" {
  interface UIConfig extends Omit<Config, keyof IConfig>, IConfig {}
  interface UIComponents
    extends Omit<Components, keyof IComponents>,
      IComponents {}
}

export const config = {
  ...gluestackUIConfig,
  components: componentsConfig,
};
