import React from 'react'
import { render } from '@testing-library/react'
import SurfIcon from '../Surf'

describe('SurfIcon', () => {
  it('renders correctly', () => {
    const component = render(<SurfIcon />)
    expect(component).toMatchSnapshot()
  })
})
