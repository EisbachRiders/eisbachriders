import React from 'react'
import { render } from 'react-testing-library'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../assets/theme/muiTheme'
import { reducer } from '../../state/createStore'
import Header from '../Header'

describe('Header', () => {
  it('renders correctly', () => {
    const mockProps = {
      t: () => '',
    }
    const store = createStore(reducer, { lng: 'en' })
    const component = render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Header {...mockProps} />
        </ThemeProvider>
      </Provider>
    )
    expect(component).toMatchSnapshot()
  })
})
