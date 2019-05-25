import React from 'react'
import { render } from 'react-testing-library'
import About from '../About'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../theme'

describe('About', () => {
  it('renders correctly', () => {
    const mockProps = {
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
      waveImg: {
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
        <About {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
