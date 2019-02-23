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
      <Tracking />
    </>
  )
}

Layout.propTypes = {
  isHomepage: PropTypes.bool,
  children: PropTypes.oneOfType([(PropTypes.object, PropTypes.array)])
    .isRequired,
}

export default Layout
