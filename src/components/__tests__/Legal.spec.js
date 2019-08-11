import React from 'react'
import { render } from '../../../test-utils'
import Legal from '../Legal'

describe('Legal', () => {
  it('renders correctly', () => {
    const component = render(<Legal />)
    expect(component).toMatchSnapshot()
  })
})
