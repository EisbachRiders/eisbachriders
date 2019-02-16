import React from 'react'
import { render } from 'react-testing-library'
import Tracking from '../Tracking'

describe('Tracking', () => {
  it('renders correctly', () => {
    const component = render(<Tracking />)
    expect(component).toMatchSnapshot()
  })
})
