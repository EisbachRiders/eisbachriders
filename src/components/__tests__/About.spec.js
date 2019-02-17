import React from 'react'
import { render } from 'react-testing-library'
import About from '../About'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../assets/theme/muiTheme'

describe('About', () => {
  it('renders correctly', () => {
    const mockProps = {
      img: { node: { fluid: {} } },
      waveImg: { node: { fluid: {} } },
      t: () => '',
    }
    const component = render(
      <ThemeProvider theme={theme}>
        <About {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
