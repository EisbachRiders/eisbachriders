import React from 'react'
import { render } from 'react-testing-library'
import Product from '../Product'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from '../../../state/createStore'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../../assets/theme/muiTheme'

describe('Product', () => {
  const mockProps = {
    product: {
      images: [{ src: '' }],
    },
  }
  it('renders correctly', () => {
    const store = createStore(reducer, { product: null })
    const component = render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Product {...mockProps} />
        </ThemeProvider>
      </Provider>
    )
    expect(component).toMatchSnapshot()
  })
})
