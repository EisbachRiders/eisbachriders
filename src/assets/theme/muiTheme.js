import { createMuiTheme } from '@material-ui/core/styles'
import './app.css'

const status = {
  white: '#ffffff',
  black: '#0b0c10',
  blue: '#1f2833',
  greyLt: '#F7F5F5',
  grey: '#c5c6c7',
  greyDk: '#404040',
  teal: '#16d57d',
  ocean: '#233d54',
  tealDk: '#45a29e',
  green: '#00942b',
  yellow: '#fce566',
  red: '#FF0012',
  redLt: '#ff4e5b',
  greyBlue: '#f3f8fc',
}

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      light: status.ocean,
      main: status.ocean,
      dark: status.teal,
    },
    secondary: {
      light: status.teal,
      main: status.teal,
      dark: status.teal,
    },
    error: { main: status.red },
  },
  status,
  typography: {
    useNextVariants: true,
    fontFamily: "'Open Sans', sans-serif",
    fontSize: 14,
  },
  overrides: {
    MuiTypography: {
      colorPrimary: {
        color: status.greyDk,
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
