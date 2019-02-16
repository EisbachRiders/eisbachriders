import React from 'react'
import { render } from 'react-testing-library'
import SEO from '../SEO'

describe('SEO', () => {
  it('renders correctly', () => {
    const component = render(<SEO />)
    expect(component).toMatchSnapshot()
  })
})
