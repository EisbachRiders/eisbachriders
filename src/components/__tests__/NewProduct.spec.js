import React from 'react'
import { render } from 'react-testing-library'
import NewProduct from '../NewProduct'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../assets/theme/muiTheme'

describe('NewProduct', () => {
  it('renders correctly', () => {
    const mockProps = {
      detailImg: { node: { fluid: {} } },
      img: { node: { fluid: {} } },
      t: () => '',
    }
    const component = render(
      <ThemeProvider theme={theme}>
        <NewProduct {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
