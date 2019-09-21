import React from 'react'
import { render } from '../../../test-utils'
import Privacy from '../Privacy'

describe('Privacy', () => {
  it('renders correctly', () => {
    const component = render(<Privacy />)
    expect(component).toMatchSnapshot()
  })
})
