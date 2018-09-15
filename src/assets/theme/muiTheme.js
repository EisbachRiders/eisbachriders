import { createMuiTheme } from '@material-ui/core/styles'
import './App.css'
require('typeface-open-sans')
require('typeface-contrail-one')

const status = {
  white: '#ffffff',
  offWhite: '#F7F5F5',
  black: '#0b0c10',
  blue: '#1f2833',
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
  },
})

export default theme
