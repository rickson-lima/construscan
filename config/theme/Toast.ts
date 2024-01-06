import { createStyle } from "@gluestack-style/react";

export const Toast = createStyle({
  px: "$4",
  py: "$3",
  flexDirection: "row",
  variants: {
    action: {
      error: {
        bg: "$error700",
        borderColor: "$error300",
        _icon: {
          color: "$error500",
        },
      },
      success: {
        bg: "$green900",
        borderColor: "$green900",
        _icon: {
          color: "$success500",
        },
      },
      info: {
        bg: "$secondary",
        borderColor: "$secondary",
        _icon: {
          color: "$white",
        },
      },
    },

    variant: {
      solid: {},
      outline: {
        borderWidth: "$1",
        bg: "$white",
      },
      accent: {
        borderLeftWidth: "$4",
      },
    },
  },
  mt: "$10",

  defaultProps: {
    hardShadow: "5",
    variant: "solid",
    action: "success",
  },
});
