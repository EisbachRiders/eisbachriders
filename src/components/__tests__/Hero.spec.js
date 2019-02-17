import React from 'react'
import { render } from 'react-testing-library'
import Hero from '../Hero'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../assets/theme/muiTheme'

describe('Hero', () => {
  it('renders correctly', () => {
    const mockProps = {
      img: { node: { fluid: {} } },
      t: () => '',
    }
    const component = render(
      <ThemeProvider theme={theme}>
        <Hero {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
