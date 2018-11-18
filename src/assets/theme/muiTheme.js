import { createMuiTheme } from '@material-ui/core/styles'
import './App.css'
require('typeface-open-sans')
require('typeface-contrail-one')

const status = {
  white: '#ffffff',
  black: '#0b0c10',
  blue: '#1f2833',
  greyLt: '#F7F5F5',
  grey: '#c5c6c7',
  greyDk: '#404040',
  teal: '#66fcf1',
  tealDk: '#45a29e',
  green: '#66fca6',
  yellow: '#fcf166',
  red: '#e25b65',
}

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      light: status.teal,
      main: status.teal,
      dark: status.tealDk,
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
