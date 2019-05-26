import React from 'react'
import { render } from 'react-testing-library'
import Membership from '../Membership'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../../theme'

describe('Membership', () => {
  it('renders correctly', () => {
    const mockProps = {
      t: () => '',
    }
    const component = render(
      <ThemeProvider theme={theme}>
        <Membership {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
