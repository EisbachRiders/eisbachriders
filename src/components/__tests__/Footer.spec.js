import { render } from 'react-testing-library'
import Footer from '../Footer'

describe('Footer', () => {
  it('renders correctly', () => {
    const component = render(<Footer />)
    expect(component).toMatchSnapshot()
  })
})
