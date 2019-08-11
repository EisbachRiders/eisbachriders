import React from 'react'
import { render } from '../../../../test-utils'
import Shop from '../Shop'
const fetch = require('node-fetch')

describe('Shop', () => {
  it('renders correctly', () => {
    const component = render(<Shop />)
    expect(component).toMatchSnapshot()
  })
})
