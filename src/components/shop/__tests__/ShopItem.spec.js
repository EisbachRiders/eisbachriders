import React from 'react'
import { render } from '../../../../test-utils'
import ShopItem from '../ShopItem'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from '../../../redux/createStore'

describe('ShopItem', () => {
  it('renders correctly', () => {
    const store = createStore(reducer, {
      product: {
        images: [{ src: '' }],
        more: { en: [] },
      },
    })
    const component = render(
      <Provider store={store}>
        <ShopItem product={{ images: [{ src: '' }] }} />
      </Provider>
    )
    expect(component).toMatchSnapshot()
  })
})
