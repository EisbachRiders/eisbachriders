import { render } from 'react-testing-library'
import MobileHeaderList from '../MobileHeaderList'

describe('MobileHeaderList', () => {
  it('renders correctly', () => {
    const component = render(<MobileHeaderList />)
    expect(component).toMatchSnapshot()
  })
})
