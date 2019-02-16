import { render } from 'react-testing-library'
import Layout from '../Layout'

describe('Layout', () => {
  it('renders correctly', () => {
    const component = render(<Layout />)
    expect(component).toMatchSnapshot()
  })
})
