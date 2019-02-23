import React from 'react'
import { render } from 'react-testing-library'
import Footer from '../Footer'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../assets/theme/muiTheme'

describe('Footer', () => {
  const mockProps = {
    t: () => '',
  }
  it('renders correctly', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Footer {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
