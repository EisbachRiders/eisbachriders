import React from 'react'
import { render } from '../../../../test-utils'
import Newsletter from '../Newsletter'

describe('Newsletter', () => {
  it('renders correctly', () => {
    const component = render(<Newsletter />)
    expect(component).toMatchSnapshot()
  })
})
