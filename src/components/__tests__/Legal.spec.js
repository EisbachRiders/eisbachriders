import React from 'react'
import { render } from 'react-testing-library'
import Legal from '../Legal'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../theme'

describe('Legal', () => {
  it('renders correctly', () => {
    const mockProps = {
      t: () => '',
    }
    const component = render(
      <ThemeProvider theme={theme}>
        <Legal {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
