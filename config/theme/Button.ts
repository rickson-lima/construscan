import { createStyle } from "@gluestack-style/react";

export const Button = createStyle({
  borderRadius: "$sm",
  backgroundColor: "$secondary",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  ":active": {
    opacity: 0.4,
  },
  _text: {
    color: "$white",
    fontWeight: "$normal",
  },
  _icon: {
    color: "$white",
  },
  _spinner: {
    props: {
      color: "$white",
    },
  },
  variants: {
    action: {
      primary: {},
      secondary: {},
    },

    variant: {
      link: {
        bg: "$transparent",
        p: "$2",
        size: "sm",
        _text: {
          color: "$secondary",
          fontSize: "$sm",
        },
      },
      outline: {
        bg: "transparent",
        borderWidth: "$1",
        borderColor: "$secondary",
      },
      solid: {
        rounded: "$2xl",
        size: "xl",
        bg: "$secondary",

        _text: {
          color: "$white",
          fontSize: "$xl",
        },
      },
    },

    size: {
      xs: {
        px: "$3.5",
        h: "$8",
        _icon: {
          props: {
            size: "2xs",
          },
        },
        _text: {
          props: {
            size: "xs",
          },
        },
      },
      sm: {
        px: "$4",
        h: "$9",
        _icon: {
          props: {
            size: "sm",
          },
        },
        _text: {
          props: {
            size: "sm",
          },
        },
      },
      md: {
        px: "$5",
        h: "$10",
        _icon: {
          props: {
            size: "md",
          },
        },
        _text: {
          props: {
            size: "md",
          },
        },
      },
      lg: {
        px: "$6",
        h: "$11",
        _icon: {
          props: {
            size: "md",
          },
        },
        _text: {
          props: {
            size: "lg",
          },
        },
      },
      xl: {
        px: "$10",
        h: "$12",
        _icon: {
          props: {
            size: "lg",
          },
        },
        _text: {
          props: {
            size: "xl",
          },
        },
      },
    },
  },

  props: {
    size: "md",
    variant: "solid",
    action: "primary",
  },

  ":disabled": {
    opacity: 0.4,
  },
});
