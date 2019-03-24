import React from 'react'
import { render } from 'react-testing-library'
import SurfIcon from '../Surf'

describe('SurfIcon', () => {
  it('renders correctly', () => {
    const component = render(<SurfIcon />)
    expect(component).toMatchSnapshot()
  })
})
