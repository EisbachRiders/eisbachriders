import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'
import Newsletter from '../newsletter/Newsletter'

const useStyles = makeStyles(theme => ({
  root: {
    height: 350,
    [theme.breakpoints.up('md')]: {
      height: 600,
    },
    [theme.breakpoints.up('xl')]: {
      height: 1000,
    },
  },
  container: {
    paddingTop: 125,
    margin: '0 auto',
    width: '90%',
    [theme.breakpoints.up('sm')]: {
      position: 'absolute',
      width: 'auto',
      paddingLeft: 150,
      paddingTop: 130,
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: 150,
      paddingTop: 175,
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 250,
      paddingTop: 15,
    },
    [theme.breakpoints.up('xl')]: {
      paddingLeft: 500,
      paddingTop: 350,
    },
  },
  img: {
    zIndex: -5,
    left: 0,
    top: 0,
    width: '100%',
    height: 350,
    [theme.breakpoints.up('md')]: {
      height: 600,
    },
    [theme.breakpoints.up('xl')]: {
      height: 1000,
    },
  },
  text: {
    letterSpacing: 3,
    color: theme.status.black,
    textShadow: '2px 2px 4px #ccc',
  },
  title: {
    textTransform: 'capitalize',
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 600,
    margin: 0,
    [theme.breakpoints.up('sm')]: {
      textAlign: 'left',
      fontSize: 48,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 96,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 122,
    },
  },
  title2: {
    marginLeft: 40,
    [theme.breakpoints.up('sm')]: {
      textAlign: 'right',
      margin: 0,
    },
  },
  small: {
    fontSize: 35,
    [theme.breakpoints.up('sm')]: {
      fontSize: 48,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 72,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 96,
    },
  },
  subtitle: {
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 14,
    paddingTop: 15,
    [theme.breakpoints.up('sm')]: {
      fontSize: 12,
      paddingTop: 10,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 24,
    },
  },
}))

function Hero({ img }) {
  const classes = useStyles()
  const { t } = useTranslation()
  return (
    <div className={classes.root}>
      <Img
        fluid={img.node.fluid}
        alt="wave"
        className={classes.img}
        imgStyle={{ objectPosition: 'center top' }}
        style={{ position: 'absolute' }}
      />
      <div className={classes.container}>
        <Hidden xsDown>
          <Typography
            variant="h2"
            gutterBottom
            className={clsx(classes.text, classes.title)}
          >
            E<span className={classes.small}>ISBACH</span>
          </Typography>
          <Typography
            variant="h2"
            gutterBottom
            className={clsx(classes.text, classes.title, classes.title2)}
          >
            R<span className={classes.small}>IDERS</span>
          </Typography>
        </Hidden>
        <Hidden smUp>
          <Typography
            variant="h2"
            gutterBottom
            className={clsx(classes.text, classes.title)}
          >
            E<span className={classes.small}>ISBACH</span> R
            <span className={classes.small}>IDERS</span>
          </Typography>
        </Hidden>

        <Typography className={clsx(classes.text, classes.subtitle)}>
          {t('hero.subtitle')}
        </Typography>
        <Newsletter />
      </div>
    </div>
  )
}

Hero.propTypes = {
  img: PropTypes.object.isRequired,
}

export default Hero