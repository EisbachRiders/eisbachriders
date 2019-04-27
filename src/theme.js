import { createMuiTheme } from '@material-ui/core/styles'
import './app.css'

const status = {
  white: '#ffffff',
  black: '#0b0c10',
  blue: '#1f2833',
  greyLt: '#F7F5F5',
  greyMed: '#656565',
  grey: '#c5c6c7',
  greyDk: '#404040',
  tealLt: '#4deda3',
  teal: '#16d57d',
  tealDk: '#10a05e',
  ocean: '#233d54',
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
      light: status.tealLt,
      main: status.teal,
      dark: status.tealDk,
    },
    secondary: {
      light: status.ocean,
      main: status.ocean,
      dark: status.ocean,
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
