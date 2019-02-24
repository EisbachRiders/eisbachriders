import React from 'react'
import { render } from 'react-testing-library'
import ERIcon from '../ER'

describe('ERIcon', () => {
  it('renders correctly', () => {
    const component = render(<ERIcon />)
    expect(component).toMatchSnapshot()
  })
})
