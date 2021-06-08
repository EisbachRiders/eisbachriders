import { createTheme } from "@material-ui/core/styles"
import "./css/app.css"

// fin: "#00d7a2",
// finDk: "#00be8f",
// finLt: "#e2f9ef",
// grayLt2: "#eeeff0",
// grayLt: "#d5d9db",
// gray: "#818C93",
// grayBlue: "#f3f8fc",
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
  seaGlass: "#5F5850",
  // theme colors
  white: "#ffffff",
  black: "#0B0C10",
  blackLt: "#1F2833",
  gray: "#C5C6C7",
  // teal: "#66FCF1",
  teal: "#00d7a2",
  tealDk: "#45A29E",
  test: "#F7F680",
  cream: "#F1F0EB",
  grayLt: "#f7f7f9",
  blueGray: "#cbd3cf",
  steel: "#505D72",
}

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      light: color.tealDk,
      main: color.teal,
      dark: color.tealDk,
    },
    secondary: {
      light: "#9d9fa0",
      main: color.gray,
      dark: "#9d9fa0",
    },
    error: { main: color.red },
  },
  color,
  typography: {
    fontFamily: ["Raleway", "sans-serif"].join(","),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "9px 27px",
          borderRadius: 0,
        },
        contained: {
          boxShadow: "none",
        },
      },
    },
  },
})

export default theme
