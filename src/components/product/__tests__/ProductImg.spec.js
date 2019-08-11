import React from 'react'
import { render } from '../../../../test-utils'
import ProductImg from '../ProductImg'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from '../../../redux/createStore'

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
        <ProductImg {...mockProps} />
      </Provider>
    )
    expect(component).toMatchSnapshot()
  })
})
