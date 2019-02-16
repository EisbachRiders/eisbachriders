import { render } from 'react-testing-library'
import Hero from '../Hero'

describe('Hero', () => {
  it('renders correctly', () => {
    const component = render(<Hero />)
    expect(component).toMatchSnapshot()
  })
})
