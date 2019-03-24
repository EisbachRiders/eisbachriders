import React from 'react'
import { render } from 'react-testing-library'
import FeatherIcon from '../Feather'

describe('FeatherIcon', () => {
  it('renders correctly', () => {
    const component = render(<FeatherIcon />)
    expect(component).toMatchSnapshot()
  })
})
