import React from 'react'
import { render } from 'react-testing-library'
import Newsletter from '../Newsletter'

describe('Newsletter', () => {
  it('renders correctly', () => {
    const component = render(<Newsletter />)
    expect(component).toMatchSnapshot()
  })
})
