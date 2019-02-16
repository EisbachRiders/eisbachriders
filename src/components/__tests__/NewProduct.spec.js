import React from 'react'
import { render } from 'react-testing-library'
import NewProduct from '../NewProduct'

describe('NewProduct', () => {
  it('renders correctly', () => {
    const mockProps = {
      detailImg: {},
      img: {},
    }
    const component = render(<NewProduct {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
})
