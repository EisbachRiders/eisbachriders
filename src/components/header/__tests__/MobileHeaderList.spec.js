import React from 'react'
import { render } from '../../../../test-utils'
import MobileHeaderList from '../MobileHeaderList'

describe('MobileHeaderList', () => {
  const mockProps = {
    links: [],
    linkLabels: [],
  }
  it('renders correctly', () => {
    const component = render(<MobileHeaderList {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
})
