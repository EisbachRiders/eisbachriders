import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    height: 250,
    [theme.breakpoints.up('md')]: {
      height: 250,
    },
    [theme.breakpoints.up('xl')]: {
      height: 250,
    },
  },
  container: {
    background: 'rgba(255, 255, 255 , 0.5)',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: 30,
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      top: '55%',
      left: '70%',
      transform: 'translate(-50%, -50%)',
      padding: 30,
      textAlign: 'center',
    },
    [theme.breakpoints.up('md')]: {
      top: '40%',
      left: '70%',
      transform: 'translate(-50%, -50%)',
      padding: 30,
      width: 'fit-content',
      textAlign: 'center',
    },
    [theme.breakpoints.up('lg')]: {
      top: '40%',
      left: '70%',
      transform: 'translate(-50%, -50%)',
      padding: 30,
      width: 'fit-content',
      textAlign: 'center',
    },
  },
  img: {
    zIndex: -5,
    left: 0,
    top: 0,
    width: '100%',
    height: 250,
    [theme.breakpoints.up('md')]: {
      height: 250,
    },
    [theme.breakpoints.up('xl')]: {
      height: 250,
    },
  },
  text: {
    letterSpacing: 3,
    color: theme.status.black,
  },
  title: {
    textTransform: 'capitalize',
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 600,
    letterSpacing: 5,
    margin: 0,
    [theme.breakpoints.up('sm')]: {
      fontSize: 48,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 42,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 58,
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 80,
    },
  },
  title2: {
    marginLeft: 40,
    [theme.breakpoints.up('sm')]: {
      textAlign: 'right',
      margin: 0,
    },
  },
  subtitle: {
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 14,
    paddingTop: 15,
    [theme.breakpoints.up('sm')]: {
      fontSize: 18,
      paddingTop: 10,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 20,
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 32,
    },
  },
}))

function WeatherHero({ img }) {
  const classes = useStyles()
  const { t } = useTranslation()
  return (
    <div className={classes.root}>
      <Img
        fluid={img.node.fluid}
        alt="wave"
        className={classes.img}
        imgStyle={{ objectPosition: 'center center' }}
        style={{ position: 'absolute' }}
      />
      <div className={classes.container}>
        <Typography className={clsx(classes.text, classes.subtitle)}>
          {t('weather.heroTitle')}
        </Typography>
        <Hidden xsDown>
          <Typography
            variant="h2"
            gutterBottom
            className={clsx(classes.text, classes.title)}
          >
            {t('weather.heroText')}
          </Typography>
        </Hidden>
        <Hidden smUp>
          <Typography
            variant="h2"
            gutterBottom
            className={clsx(classes.text, classes.title)}
          >
            {t('weather.heroText')}
          </Typography>
        </Hidden>
      </div>
    </div>
  )
}

WeatherHero.propTypes = {
  img: PropTypes.object.isRequired,
}

export default WeatherHero
