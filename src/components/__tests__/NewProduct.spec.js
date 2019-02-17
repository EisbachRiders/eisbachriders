import React from 'react'
import { render } from 'react-testing-library'
import NewProduct2 from '../NewProduct2'

describe('NewProduct2', () => {
  it('renders correctly', () => {
    const mockProps = {
      detailImg: {},
      img: {},
    }
    const component = render(<NewProduct2 {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
})
