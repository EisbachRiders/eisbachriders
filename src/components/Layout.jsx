import React from 'react'
import PropTypes from 'prop-types'
import Header from './header/Header'
import Footer from './footer/Footer'
import SEO from './seo/SEO'
import Tracking from './tracking/Tracking'
import { MDXProvider } from '@mdx-js/react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  blog: {
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '70%',
  },
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '25%',
  },
  img: {
    width: '100%',
  },
}))

function Layout({ isHomepage, img, footerImg, siteTitle, children }) {
  const classes = useStyles()

  // Styles for mdx/md pages
  const h1Styled = props => <h1 className={classes.h1} {...props} />
  const h2Styled = props => <h2 className={classes.h2} {...props} />
  const h3Styled = props => <h3 className={classes.h3} {...props} />
  const pStyled = props => <p className={classes.p} {...props} />
  const hrStyled = () => <hr className={classes.hr} />

  const aStyled = props => <a className={classes.a} {...props} />
  const preStyled = props => <div {...props} />
  const strongStyled = props => <strong className={classes.strong} {...props} />
  const imgStyled = props => <img className={classes.img} {...props} />

  const components = {
    h1: h1Styled,
    h2: h2Styled,
    h3: h3Styled,
    p: pStyled,
    hr: hrStyled,
    pre: preStyled,
    a: aStyled,
    strong: strongStyled,
    img: imgStyled,
  }
  return (
    <>
      <SEO title={siteTitle} />
      <Header isHomepage={isHomepage} img={img} />
      <MDXProvider components={components}>{children}</MDXProvider>
      <Footer img={footerImg} />
      {process.env.NODE_ENV !== 'development' && <Tracking />}
    </>
  )
}

Layout.propTypes = {
  isHomepage: PropTypes.bool,
}

export default Layout
