import React from 'react'
import { render } from 'react-testing-library'
import Snackbar from '../Snackbar'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../assets/theme/muiTheme'

describe('Snackbar', () => {
  it('renders correctly', () => {
    const mockProps = {
      variant: 'success',
    }
    const component = render(
      <ThemeProvider theme={theme}>
        <Snackbar {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
