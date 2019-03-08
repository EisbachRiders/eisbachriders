import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'
import SEO from './SEO'
import Tracking from './Tracking'

function Layout({ isHomepage, children }) {
  return (
    <>
      <SEO />
      <Header isHomepage={isHomepage} />
      {children}
      <Footer />
      {process.env.NODE_ENV !== 'development' && <Tracking />}
    </>
  )
}

Layout.propTypes = {
  isHomepage: PropTypes.bool,
}

export default Layout
