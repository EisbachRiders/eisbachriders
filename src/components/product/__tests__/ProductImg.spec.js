import React from 'react'
import { render } from 'react-testing-library'
import ProductImg from '../ProductImg'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from '../../../redux/createStore'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../../theme'

describe('ProductImg', () => {
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
          <ProductImg {...mockProps} />
        </ThemeProvider>
      </Provider>
    )
    expect(component).toMatchSnapshot()
  })
})
