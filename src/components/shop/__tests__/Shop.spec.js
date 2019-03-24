import React from 'react'
import { render } from 'react-testing-library'
import Shop from '../Shop'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../../assets/theme/muiTheme'
const fetch = require('node-fetch')

describe('Shop', () => {
  const mockProps = {
    t: () => '',
  }
  it('renders correctly', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Shop {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
