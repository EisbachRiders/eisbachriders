import React from 'react'
import { render } from '@testing-library/react'
import FeatherIcon from '../Feather'

describe('FeatherIcon', () => {
  it('renders correctly', () => {
    const component = render(<FeatherIcon />)
    expect(component).toMatchSnapshot()
  })
})
