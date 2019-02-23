import React from 'react'
import { render } from 'react-testing-library'
import NewProduct from '../NewProduct'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../assets/theme/muiTheme'

describe('NewProduct', () => {
  it('renders correctly', () => {
    const mockProps = {
      detailImg: {
        node: {
          fluid: {
            aspectRatio: 0,
            src: 'mockString',
            srcSet: 'mockString',
            sizes: 'mockString',
          },
        },
      },
      img: {
        node: {
          fluid: {
            aspectRatio: 0,
            src: 'mockString',
            srcSet: 'mockString',
            sizes: 'mockString',
          },
        },
      },
      t: () => '',
    }
    const component = render(
      <ThemeProvider theme={theme}>
        <NewProduct {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
