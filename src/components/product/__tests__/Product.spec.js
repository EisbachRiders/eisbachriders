import React from 'react'
import { render } from '../../../../test-utils'
import Product from '../Product'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from '../../../redux/createStore'

describe('Product', () => {
  it('renders correctly', () => {
    const store = createStore(reducer, {
      product: {
        attributes: [],
      },
    })
    const component = render(
      <Provider store={store}>
        <Product />
      </Provider>
    )
    expect(component).toMatchSnapshot()
  })
})
