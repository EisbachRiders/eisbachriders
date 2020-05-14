import { createMuiTheme } from "@material-ui/core/styles"
import "../app.css"
import "../../static/fonts/fonts.css"

// fin: "#00d7a2",
// finDk: "#00be8f",
// finLt: "#e2f9ef",
// greyLt2: "#eeeff0",
// greyLt: "#d5d9db",
// grey: "#818C93",
// greyBlue: "#f3f8fc",
// greenLt1: "#6dff97",
// greenLt2: "#00cf3c",
// cream: "#f7f5ee",

const color = {
  // for shop colors
  blue: "#004AB5",
  green: "#00942b",
  yellow: "#fce566",
  orange: "#ff8000",
  pink: "#ff0080",
  red: "#FF0012",
  redLt: "#ff4e5b",
  // theme colors
  white: "#ffffff",
  black: "#000000",
  almostBlack: "#363738", // typography
  textLight: "#838588",
  gray: "#ebedee",
  primaryBlue: "#0062f0",
  primaryBlueLt: "#3f8eff",
  gold: "#E6C55E",
  goldLt: "#f0dda0",
}

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      light: color.goldLt,
      main: color.gold,
      dark: color.goldLt,
    },
    secondary: {
      light: color.primaryBlueLt,
      main: color.primaryBlue,
      dark: color.primaryBlueLt,
    },
    error: { main: color.red },
  },
  color,
  typography: {
    fontFamily: "'Raleway', sans-serif",
    h1: {
      letterSpacing: 2,
    },
    h2: {
      letterSpacing: 2,
    },
    h3: {
      letterSpacing: 2,
    },
    h4: {
      letterSpacing: 2,
    },
    h5: {
      letterSpacing: 2,
    },
    body1: {
      letterSpacing: 1.5,
      fontSize: 14,
    },
    body2: {
      letterSpacing: 1.5,
      fontSize: 12,
    },
    button: {
      fontFamily: "'Raleway', sans-serif",
      letterSpacing: 3,
    },
  },
  overrides: {
    MuiButton: {
      root: {
        padding: "9px 27px",
        borderRadius: 0,
      },
      contained: {
        boxShadow: "none",
      },
    },
  },
})

export default theme
