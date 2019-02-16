import React from 'react'
import { render } from 'react-testing-library'
import Feature from '../Feature'

describe('Feature', () => {
  it('renders correctly', () => {
    const mockProps = {
      img: {},
    }
    const component = render(<Feature {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
})
