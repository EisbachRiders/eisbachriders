import React from 'react'
import PropTypes from 'prop-types'
import Header from './header/Header'
import Footer from './footer/Footer'
import SEO from './seo/SEO'
import Tracking from './tracking/Tracking'

function Layout({ isHomepage, img, footerImg, children }) {
  return (
    <>
      <SEO />
      <Header isHomepage={isHomepage} img={img} />
      <div>{children}</div>
      <Footer img={footerImg} />
      {process.env.NODE_ENV !== 'development' && <Tracking />}
    </>
  )
}

Layout.propTypes = {
  isHomepage: PropTypes.bool,
}

export default Layout
