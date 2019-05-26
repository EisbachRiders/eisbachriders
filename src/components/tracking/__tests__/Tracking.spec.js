import React from 'react'
import { render } from 'react-testing-library'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from '../../../redux/createStore'
import Tracking from '../Tracking'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../../theme'

describe('Tracking', () => {
  it('renders correctly', () => {
    const mockProps = {
      t: () => '',
    }
    const store = createStore(reducer, { isGAopen: true })
    const component = render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Tracking {...mockProps} />
        </ThemeProvider>
      </Provider>
    )
    expect(component).toMatchSnapshot()
  })
})
