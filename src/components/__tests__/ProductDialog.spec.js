import React from 'react'
import { render } from 'react-testing-library'
import ProductDialog from '../ProductDialog'

describe('ProductDialog', () => {
  it('renders correctly', () => {
    const mockProps = {
      handleDialogOpen: jest.fn,
      handleDialogClose: jest.fn,
      isDialogOpen: true,
      product: {},
      buttonText: 'mockButtonText',
    }
    const component = render(<ProductDialog {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
})
