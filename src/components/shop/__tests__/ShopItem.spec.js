import React from 'react'
import { render } from 'react-testing-library'
import ShopItem from '../ShopItem'

describe('ShopItem', () => {
  it('renders correctly', () => {
    const mockProps = {
      product: {},
    }
    const component = render(<ShopItem {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
})
