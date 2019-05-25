import React from 'react'
import { render } from 'react-testing-library'
import Hero from '../Hero'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../theme'

describe('Hero', () => {
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
      t: () => '',
    }
    const component = render(
      <ThemeProvider theme={theme}>
        <Hero {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
