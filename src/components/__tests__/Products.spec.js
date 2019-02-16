import React from 'react'
import { render } from 'react-testing-library'
import Products from '../Products'

describe('Products', () => {
  it('renders correctly', () => {
    const component = render(<Products />)
    expect(component).toMatchSnapshot()
  })
})
