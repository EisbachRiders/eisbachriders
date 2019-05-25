import React from 'react'
import { render } from 'react-testing-library'
import Newsletter from '../Newsletter'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../theme'

describe('Newsletter', () => {
  const mockProps = {
    t: () => '',
  }
  it('renders correctly', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Newsletter {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
