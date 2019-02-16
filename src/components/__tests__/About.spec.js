import { render } from 'react-testing-library'
import About from '../About'

describe('About', () => {
  it('renders correctly', () => {
    const mockProps = {
      img: {},
      waveImg: {},
    }
    const component = render(<About {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
})
