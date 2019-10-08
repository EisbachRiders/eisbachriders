import React from 'react'
import Link from './ui/Link'
import Img from 'gatsby-image'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import InstagramIcon from '../assets/icons/Instagram'
import FacebookIcon from '../assets/icons/Facebook'
import Contact from './Contact'
import NewsletterInline from './newsletter/NewsletterInline'
import Container from './ui/Container'

const useStyles = makeStyles(theme => ({
  container: {
    position: 'relative',
    height: 600,
  },
  footerContainer: {
    justifyContent: 'space-between',
    display: 'flex',
    zIndex: 2,
  },
  containerInner: {
    display: 'flex',
    height: '100%',
  },
  flexItem: {
    flexBasis: '100%',
    paddingTop: 15,
    [theme.breakpoints.up('md')]: {
      flexBasis: '45%',
      paddingTop: 0,
    },
  },
  flexItemInner: {
    flexBasis: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  text: {
    color: theme.status.black,
    fontSize: 12,
    textTransform: 'capitalize',
    paddingBottom: 10,
    [theme.breakpoints.up('sm')]: {
      lineHeight: 2,
    },
    '&:active': {
      color: theme.palette.primary.main,
    },
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  text2: {
    color: theme.status.black,
    fontSize: 12,
    paddingBottom: 10,
    [theme.breakpoints.up('sm')]: {
      lineHeight: 2,
    },
  },
  textHeading: {
    color: theme.status.finDarker,
    fontSize: 12,
    textTransform: 'uppercase',
    paddingBottom: 15,
    paddingTop: 15,
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
      paddingTop: 0,
    },
  },
  button: {
    borderColor: theme.status.finDarker,
    borderRadius: 0,
    minWidth: 0,
    padding: 8,
    marginRight: 30,
    '&:hover, &:focus': {
      borderColor: theme.palette.primary.main,
      '& $icon': {
        color: theme.palette.primary.main,
      },
    },
    [theme.breakpoints.up('sm')]: {
      marginRight: 15,
    },
  },
  icon: {
    width: 18,
    height: 18,
    color: theme.status.black,
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: 15,
    [theme.breakpoints.up('sm')]: {
      marginTop: 0,
    },
  },
  link: {
    color: theme.palette.common.white,
    border: 'none',
    background: 'transparent',
    textDecoration: 'none',
    cursor: 'pointer',
    paddingLeft: 5,
    paddingRight: 5,
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  legal: {
    backgroundColor: theme.status.black,
  },
  copyright: {
    fontSize: 12,
    textTransform: 'capitalize',
    color: theme.palette.common.white,
    letterSpacing: 3,
    padding: 5,
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

function Footer({ waveImg }) {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <>
      <Container className={classes.container}>
        <>
          <div className={classes.footerContainer}>
            <div className={classes.flexItem}>
              <Contact />
            </div>
            <div className={classes.flexItem}>
              <div className={classes.containerInner}>
                <div className={classes.flexItemInner}>
                  <div>
                    <Typography className={classes.textHeading}>
                      {t('footer.customerService')}
                    </Typography>
                    <Link to="/payment/">
                      <Typography className={classes.text}>
                        {t('footer.payment')}
                      </Typography>
                    </Link>
                    <Link to="/shipping/">
                      <Typography className={classes.text}>
                        {t('footer.shipping')}
                      </Typography>
                    </Link>
                    <Link to="/returns/">
                      <Typography className={classes.text}>
                        {t('footer.returns')}
                      </Typography>
                    </Link>
                    <Link to="/termsAndConditions/">
                      <Typography className={classes.text}>
                        {t('footer.terms')}
                      </Typography>
                    </Link>
                  </div>
                  <div>
                    <Typography className={classes.textHeading}>
                      {t('header.about')}
                    </Typography>
                    <Link to="/about/">
                      <Typography className={classes.text}>
                        {t('footer.payment')}
                      </Typography>
                    </Link>
                  </div>
                </div>
                <div className={classes.flexItemInner}></div>
              </div>
            </div>
          </div>
          <NewsletterInline />
        </>
        <Img
          fluid={waveImg.node.fluid}
          alt="wave background"
          className={classes.backgroundImg}
          imgStyle={{ objectFit: 'fill' }}
          style={{ position: 'absolute' }}
        />
      </Container>
      <div className={classes.legal}>
        <Typography
          variant="body2"
          align="center"
          className={classes.copyright}
        >
          &copy; Eisbach Riders |{' '}
          <Link to="/imprint/" className={classes.link}>
            {t('footer.imprint')}
          </Link>
          |{' '}
          <Link to="/privacy/" className={classes.link}>
            {t('footer.privacy')}
          </Link>
        </Typography>
      </div>
    </>
  )
}

export default Footer
