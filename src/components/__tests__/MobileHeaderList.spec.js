import React from 'react'
import { render } from 'react-testing-library'
import MobileHeaderList from '../MobileHeaderList'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../assets/theme/muiTheme'

describe('MobileHeaderList', () => {
  const mockProps = {
    links: [],
    linkLabels: [],
  }
  it('renders correctly', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <MobileHeaderList {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
