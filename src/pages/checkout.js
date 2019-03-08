import React, { Component } from 'react'
import Layout from '../components/Layout'
import Checkout from '../components/checkout/Checkout'

class CheckoutPage extends Component {
  render() {
    return (
      <Layout>
        <Checkout />
      </Layout>
    )
  }
}

export default CheckoutPage
