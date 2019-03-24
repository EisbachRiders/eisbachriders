import React from 'react'
import { render } from 'react-testing-library'
import ShopItem from '../ShopItem'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from '../../../state/createStore'
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
    const store = createStore(reducer, { product: null })
    const component = render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ShopItem {...mockProps} />
        </ThemeProvider>
      </Provider>
    )
    expect(component).toMatchSnapshot()
  })
})
