import React from 'react'
import { render } from 'react-testing-library'
import Snackbar from '../Snackbar'

describe('Snackbar', () => {
  it('renders correctly', () => {
    const mockProps = {
      variant: 'success',
    }
    const component = render(<Snackbar {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
})
