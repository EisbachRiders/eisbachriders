import React from 'react'
import { render } from '@testing-library/react'
import AmazonIcon from '../Amazon'

describe('AmazonIcon', () => {
  it('renders correctly', () => {
    const component = render(<AmazonIcon />)
    expect(component).toMatchSnapshot()
  })
})
