import React from 'react'
import { render } from 'react-testing-library'
import ShopItem from '../ShopItem'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../../assets/theme/muiTheme'

describe('ShopItem', () => {
  it('renders correctly', () => {
    const mockProps = {
      product: {
        images: [],
        more: { en: [] },
      },
      t: () => '',
    }
    const component = render(
      <ThemeProvider theme={theme}>
        <ShopItem {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
