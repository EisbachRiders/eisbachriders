import React from 'react'
import { render } from 'react-testing-library'
import Privacy from '../Privacy'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../theme'

describe('Privacy', () => {
  it('renders correctly', () => {
    const mockProps = {
      t: () => '',
    }
    const component = render(
      <ThemeProvider theme={theme}>
        <Privacy {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
