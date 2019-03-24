import React from 'react'
import { render } from 'react-testing-library'
import AmazonIcon from '../Amazon'

describe('AmazonIcon', () => {
  it('renders correctly', () => {
    const component = render(<AmazonIcon />)
    expect(component).toMatchSnapshot()
  })
})
