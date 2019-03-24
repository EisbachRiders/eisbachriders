import React from 'react'
import { render } from 'react-testing-library'
import InstagramIcon from '../Instagram'

describe('InstagramIcon', () => {
  it('renders correctly', () => {
    const component = render(<InstagramIcon />)
    expect(component).toMatchSnapshot()
  })
})
