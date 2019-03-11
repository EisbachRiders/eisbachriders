import React from 'react'
import { render } from 'react-testing-library'
import Product from '../Product'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../../assets/theme/muiTheme'

describe('Product', () => {
  const mockProps = {
    t: () => '',
  }
  it('renders correctly', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Product {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
