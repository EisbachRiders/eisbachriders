import { render } from 'react-testing-library'
import Legal from '../Legal'

describe('Legal', () => {
  it('renders correctly', () => {
    const component = render(<Legal />)
    expect(component).toMatchSnapshot()
  })
})
