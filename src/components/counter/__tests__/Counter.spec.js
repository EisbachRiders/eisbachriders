import React from 'react'
import { render } from '../../../../test-utils'
import Counter from '../Counter'

describe('Counter', () => {
  it('renders correctly', () => {
    const component = render(<Counter />)
    expect(component).toMatchSnapshot()
  })
})
