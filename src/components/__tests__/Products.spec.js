import React from 'react'
import { render } from 'react-testing-library'
import Products from '../Products'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../theme'

describe('Products', () => {
  it('renders correctly', () => {
    const mockProps = {
      t: () => '',
    }
    const component = render(
      <ThemeProvider theme={theme}>
        <Products {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
