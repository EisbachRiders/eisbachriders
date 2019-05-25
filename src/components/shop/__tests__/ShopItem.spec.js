import React from 'react'
import { render } from 'react-testing-library'
import ShopItem from '../ShopItem'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from '../../../redux/createStore'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../../theme'

describe('ShopItem', () => {
  it('renders correctly', () => {
    const store = createStore(reducer, {
      product: {
        images: [],
        more: { en: [] },
      },
    })
    const component = render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ShopItem />
        </ThemeProvider>
      </Provider>
    )
    expect(component).toMatchSnapshot()
  })
})
