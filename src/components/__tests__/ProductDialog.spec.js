import React from 'react'
import { render } from 'react-testing-library'
import ProductDialog from '../ProductDialog'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../theme'

describe('ProductDialog', () => {
  it('renders correctly', () => {
    const mockProps = {
      handleDialogOpen: jest.fn,
      handleDialogClose: jest.fn,
      isDialogOpen: true,
      product: {
        images: [],
        more: { en: [] },
      },
      buttonText: 'mockButtonText',
      t: () => '',
    }
    const component = render(
      <ThemeProvider theme={theme}>
        <ProductDialog {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
