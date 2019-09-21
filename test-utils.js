import React from 'react'
import { render } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import i18n from './src/i18n/i18n'
import { ThemeProvider } from '@material-ui/styles'
import theme from './src/theme'

const AllTheProviders = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </ThemeProvider>
  )
}

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
