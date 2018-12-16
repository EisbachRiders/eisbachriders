import React, { Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'

const Template = ({
  handleLanguageChange,
  handlePageChange,
  activePage,
  language,
  children,
}) => {
  return (
    <Fragment>
      <Header
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
