import { render } from 'react-testing-library'
import Header from '../Header'

describe('Header', () => {
  it('renders correctly', () => {
    const component = render(<Header />)
    expect(component).toMatchSnapshot()
  })
})
