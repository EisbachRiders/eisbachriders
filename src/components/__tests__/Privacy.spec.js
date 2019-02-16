import React from 'react'
import { render } from 'react-testing-library'
import Privacy from '../Privacy'

describe('Privacy', () => {
  it('renders correctly', () => {
    const component = render(<Privacy />)
    expect(component).toMatchSnapshot()
  })
})
