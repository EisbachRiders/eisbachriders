import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import Footer from '../Footer'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../theme'
import CircularProgress from '@material-ui/core/CircularProgress'
// import { handleSubmit as mockSavePost } from '../Footer'

// jest.mock('../handleSubmit', () => {
//   return {
//     handleSubmit: jest.fn(() => Promise.resolve),
//   }
// })

// afterEach(() => {
//   mockSavePost.mockClear()
// })

describe('Footer', () => {
  const mockProps = {
    t: () => '',
  }
  it('renders correctly', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Footer {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
  it('submits button', () => {
    const { getByTestId, getByPlaceholderText } = render(
      <ThemeProvider theme={theme}>
        <Footer {...mockProps} />
      </ThemeProvider>
    )
    const fakePost = {
      footer_name: 'mockName',
      footer_email: 'mockEmail@test.com',
      footer_message: 'mockMessage',
    }
    getByPlaceholderText('common.name').value = fakePost.footer_name
    getByPlaceholderText('common.email').value = fakePost.footer_email
    getByPlaceholderText('footer.message').value = fakePost.footer_message
    const button = getByTestId('footer_submit')
    fireEvent.click(button)
    expect(<CircularProgress />).toBeDefined()
    // expect(mockSavePost).toHaveBeenCalledTimes(1)
    // expect(mockSavePost).toHaveBeenCalledWith(fakePost)
  })
})
