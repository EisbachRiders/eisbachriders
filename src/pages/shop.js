import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Shop from '../components/shop/Shop'
class ShopPage extends Component {
  render() {
    return (
      <Layout>
        <Shop data={this.props.data} />
      </Layout>
    )
  }
}

export default ShopPage

export const GatsbyQuery = graphql`
  {
    test {
      multipleCharacters(ids: [1, 2, 3]) {
        name
        image
      }
    }
  }
`
