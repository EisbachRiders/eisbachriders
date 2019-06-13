import React from 'react'
import { render } from 'react-testing-library'
import Counter from '../Counter'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../theme'

describe('Counter', () => {
  it('renders correctly', () => {
    const mockProps = {}
    const component = render(
      <ThemeProvider theme={theme}>
        <Counter {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
