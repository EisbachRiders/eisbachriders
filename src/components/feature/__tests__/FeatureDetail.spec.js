import React from 'react'
import { render } from 'react-testing-library'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../../assets/theme/muiTheme'
import FeatureDetail from '../FeatureDetail'

describe('FeatureDetail', () => {
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
        <FeatureDetail {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
