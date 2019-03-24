import React from 'react'
import { render } from 'react-testing-library'
import FacebookIcon from '../Facebook'

describe('FacebookIcon', () => {
  it('renders correctly', () => {
    const component = render(<FacebookIcon />)
    expect(component).toMatchSnapshot()
  })
})
