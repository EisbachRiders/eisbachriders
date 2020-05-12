import React from 'react'
import { Provider } from 'react-redux'
import './src/i18n/i18n'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './src/theme.js'
import CssBaseline from '@material-ui/core/CssBaseline'
import createStore from './src/redux/createStore'

// For Redux and MUI theme

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  const store = createStore()
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {element}
      </ThemeProvider>
    </Provider>
  )
}
