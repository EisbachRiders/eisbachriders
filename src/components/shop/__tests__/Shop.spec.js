import React from 'react'
import { render } from 'react-testing-library'
import Shop from '../Shop'

describe('Shop', () => {
  it('renders correctly', () => {
    const component = render(<Shop />)
    expect(component).toMatchSnapshot()
  })
})
