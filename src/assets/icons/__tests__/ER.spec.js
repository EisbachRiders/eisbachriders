import React from 'react'
import { render } from '@testing-library/react'
import ERIcon from '../ER'

describe('ERIcon', () => {
  it('renders correctly', () => {
    const component = render(<ERIcon />)
    expect(component).toMatchSnapshot()
  })
})
