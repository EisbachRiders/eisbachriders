import { createMuiTheme } from '@material-ui/core/styles'
import './app.css'

const status = {
  // for shop colors
  blue: '#004AB5',
  green: '#00942b',
  yellow: '#fce566',
  orange: '#ff8000',
  pink: '#ff0080',
  red: '#FF0012',
  redLt: '#ff4e5b',
  // theme colors
  cream: '#f7f5ee',
  greyBlue: '#f3f8fc',
  white: '#fafafa',
  fin: '#00d7a2',
  finDk: '#00be8f',
  finLt: '#00f1b5',
  grey: '#818C93',
  black: '#00130e', // typography
}

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      light: status.finDk,
      main: status.fin,
      dark: status.finLt,
    },
    secondary: {
      light: status.blue,
      main: status.blue,
      dark: status.blue,
    },
    error: { main: status.red },
  },
  status,
  typography: {
    useNextVariants: true,
    fontFamily: "'Raleway', sans-serif",
    h5: {
      letterSpacing: 3,
    },
    body1: {
      letterSpacing: 1,
      lineHeight: 1.8,
      //TODO is this an error in MUI? not sure why its default is 16 when MUI default is 14
      fontSize: 14,
    },
    body2: {
      letterSpacing: 1,
      fontSize: 14,
    },
    button: {
      letterSpacing: 3,
    },
  },
  overrides: {
    MuiTypography: {
      colorPrimary: {
        color: status.black,
      },
      colorSecondary: {
        color: status.grey,
      },
      colorTextSecondary: {
        color: status.white,
      },
    },
    MuiButton: {
      root: {
        padding: '9px 27px',
        borderRadius: 0,
      },
      contained: {
        boxShadow: 'none',
      },
    },
  },
})

export default theme
