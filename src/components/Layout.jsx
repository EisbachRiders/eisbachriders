import React, { Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'
import SEO from './SEO'

const Template = ({
  isHomepage,
  handleLanguageChange,
  handlePageChange,
  activePage,
  language,
  children,
}) => {
  return (
    <Fragment>
      <SEO language={language} />
      <Header
        isHomepage
        handleLanguageChange={handleLanguageChange}
        handlePageChange={handlePageChange}
        activePage={activePage}
        language={language}
      />
      {children}
      <Footer />
    </Fragment>
  )
}

export default Template
