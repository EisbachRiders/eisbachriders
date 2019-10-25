import React from 'react'
import Img from 'gatsby-image'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Hidden from '@material-ui/core/Hidden'
import NewsletterInline from '../newsletter/NewsletterInline'
import Container from '../ui/Container'
import FooterNavigation from './FooterNavigation'
import FooterBanner from './FooterBanner'
import Membership from './Membership'
import Newsletter from '../newsletter/Newsletter'
import FooterLogo from './FooterLogo'

const useStyles = makeStyles(theme => ({
  container: {
    position: 'relative',
  },
  footerContainer: {
    justifyContent: 'space-between',
    display: 'flex',
    flexWrap: 'wrap',
    zIndex: 2,
    marginBottom: 0,
    [theme.breakpoints.up('md')]: {
      flexBasis: '45%',
      marginBottom: 85,
    },
  },
  containerInner: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  flexItem: {
    flexBasis: '100%',
    [theme.breakpoints.up('md')]: {
      flexBasis: '45%',
    },
  },
  // spacer: {
  //   paddingBottom: 45,
  //   [theme.breakpoints.up('md')]: {
  //     paddingBottom: 0,
  //   },
  // },
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
            {/* <div className={clsx(classes.flexItem, classes.spacer)}> */}
            <div className={classes.flexItem}>
              <FooterLogo />
            </div>
            <Hidden xsDown>
            <div className={classes.flexItem}>
              <div className={classes.containerInner}>
                <FooterNavigation />
              </div>
            </div>
            </Hidden>
          </div>
          <Hidden smDown>
            <NewsletterInline />
          </Hidden>
          <Hidden mdUp>
            <Newsletter />
          </Hidden>
          <Membership />
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
