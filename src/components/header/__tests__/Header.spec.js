import React from 'react'
import { render } from '../../../../test-utils'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from '../../../redux/createStore'
import Header from '../Header'

describe('Header', () => {
  it('renders correctly', () => {
    const store = createStore(reducer, { lng: 'en', cart: [] })
    const component = render(
      <Provider store={store}>
        <Header />
      </Provider>
    )
    expect(component).toMatchSnapshot()
  })
})
