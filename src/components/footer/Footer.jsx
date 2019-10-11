import React from 'react'
import Img from 'gatsby-image'
import { makeStyles } from '@material-ui/styles'
import Contact from '../Contact'
import NewsletterInline from '../newsletter/NewsletterInline'
import Container from '../ui/Container'
import FooterNavigation from './FooterNavigation'
import FooterBanner from './FooterBanner'
import Membership from './Membership'
import FooterLogo from './FooterLogo'

const useStyles = makeStyles(theme => ({
  container: {
    position: 'relative',
    height: 800,
  },
  footerContainer: {
    justifyContent: 'space-between',
    display: 'flex',
    zIndex: 2,
    marginBottom: 85,
  },
  containerInner: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  flexItem: {
    flexBasis: '100%',
    paddingTop: 15,
    [theme.breakpoints.up('md')]: {
      flexBasis: '45%',
      paddingTop: 0,
    },
  },
  backgroundImg: {
    zIndex: 0,
    left: 0,
    bottom: 0,
    width: '100%',
    overflow: 'hidden',
    zIndex: -1,
  },
}))

function Footer({ img }) {
  const classes = useStyles()

  return (
    <>
      <Container className={classes.container}>
        <>
          <div className={classes.footerContainer}>
            <div className={classes.flexItem}>
              <FooterLogo />
            </div>
            <div className={classes.flexItem}>
              <div className={classes.containerInner}>
                <FooterNavigation />
                <Membership />
              </div>
            </div>
          </div>
          <NewsletterInline />
        </>
        <Img
          fluid={img.node.fluid}
          alt="wave background"
          className={classes.backgroundImg}
          imgStyle={{ objectFit: 'fill' }}
          style={{ position: 'absolute' }}
        />
      </Container>
      <FooterBanner />
    </>
  )
}

export default Footer
