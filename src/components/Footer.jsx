import React from 'react'
import Link from './Link'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Membership from './Membership'
import InstagramIcon from '../assets/icons/Instagram'
import FacebookIcon from '../assets/icons/Facebook'
import Contact from './Contact'
import Newsletter from './Newsletter'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.status.black,
    width: '100%',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 15,
    [theme.breakpoints.up('sm')]: {
      paddingTop: 30,
      paddingBottom: 30,
      paddingLeft: 60,
      paddingRight: 60,
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: 45,
      paddingBottom: 45,
      paddingLeft: 170,
      paddingRight: 170,
    },
    [theme.breakpoints.up('lg')]: {
      paddingTop: 45,
      paddingBottom: 45,
      paddingLeft: 170,
      paddingRight: 170,
    },
    [theme.breakpoints.up('xl')]: {
      paddingTop: 90,
      paddingBottom: 90,
      paddingLeft: 400,
      paddingRight: 400,
    },
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
    color: theme.palette.common.white,
    fontSize: 12,
    textTransform: 'capitalize',
    paddingBottom: 10,
    [theme.breakpoints.up('sm')]: {
      lineHeight: 2,
    },
  },
  textHeading: {
    color: theme.palette.common.white,
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
    borderColor: theme.status.white,
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
    color: theme.palette.common.white,
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  link: {
    color: theme.palette.common.white,
    border: 'none',
    background: 'transparent',
    textDecoration: 'none',
    cursor: 'pointer',
    paddingLeft: 5,
    paddingRight: 5,
  },
  legal: {
    backgroundColor: theme.status.black,
  },
  copyright: {
    fontSize: 12,
    textTransform: 'capitalize',
    color: theme.palette.common.white,
    letterSpacing: 3,
    paddingTop: 15,
    paddingBottom: 15,
  },
}))

function Footer() {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <>
      <Membership />
      <div className={classes.root}>
        <div className={classes.container}>
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
                  {/* <Link to="/payment/">
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
                  </Link> */}
                  <a href="https://shop.eisbach-riders.com/payment/">
                    <Typography className={classes.text}>
                      {t('footer.payment')}
                    </Typography>
                  </a>
                  <a href="https://shop.eisbach-riders.com/shipping/">
                    <Typography className={classes.text}>
                      {t('footer.shipping')}
                    </Typography>
                  </a>
                  <a href="https://shop.eisbach-riders.com/returns/">
                    <Typography className={classes.text}>
                      {t('footer.returns')}
                    </Typography>
                  </a>
                  <a href="https://shop.eisbach-riders.com/terms-and-conditions/">
                    <Typography className={classes.text}>
                      {t('footer.terms')}
                    </Typography>
                  </a>
                </div>
              </div>
              <div className={classes.flexItemInner}>
                <div>
                  <Typography className={classes.textHeading}>
                    {t('footer.subscribe')}
                  </Typography>
                  <Typography className={classes.text}>
                    {t('footer.subscribeText')}
                  </Typography>
                  <Newsletter variant="small" />
                </div>
                <div className={classes.iconContainer}>
                  <Button
                    variant="outlined"
                    className={classes.button}
                    href="https://www.facebook.com/EisbachRiders/"
                    target="_blank"
                    rel="noopener"
                  >
                    <FacebookIcon className={classes.icon} />
                  </Button>
                  <Button
                    variant="outlined"
                    className={classes.button}
                    href="https://www.instagram.com/eisbachriders/"
                    target="_blank"
                    rel="noopener"
                  >
                    <InstagramIcon className={classes.icon} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.legal}>
          <Typography
            variant="body2"
            align="center"
            className={classes.copyright}
          >
            &copy; Eisbach Riders |{' '}
            {/* <Link to="/legal/" className={classes.link}>
              {t('footer.imprint')}
            </Link>
            |{' '}
            <Link to="/privacy/" className={classes.link}>
              {t('footer.privacy')}
            </Link> */}
            <a
              href="https://shop.eisbach-riders.com/imprint/"
              className={classes.link}
            >
              {t('footer.imprint')}
            </a>
            |{' '}
            <a
              href="https://shop.eisbach-riders.com/privacy/"
              className={classes.link}
            >
              {t('footer.privacy')}
            </a>
          </Typography>
        </div>
      </div>
    </>
  )
}

export default Footer
