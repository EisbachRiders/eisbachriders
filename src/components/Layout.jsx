import React, { Component, Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'
import SEO from './SEO'
import Tracking from './Tracking'

class Layout extends Component {
  render() {
    const { isHomepage, children } = this.props

    return (
      <Fragment>
        <SEO />
        <Header isHomepage={isHomepage} />
        {children}
        <Footer />
        <Tracking />
      </Fragment>
    )
  }
}

export default Layout
