import React from 'react'
import PropTypes from 'prop-types'
import { withTranslation } from 'react-i18next'
import Img from 'gatsby-image'
import classnames from 'classnames'
import withRoot from '../withRoot'
import { withStyles } from '@material-ui/core/styles'
import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    height: 250,
    marginTop: -65,
    [theme.breakpoints.up('sm')]: {
      height: 300,
    },
    [theme.breakpoints.up('md')]: {
      height: 700,
    },
  },
  img: {
    zIndex: -2,
    height: 250,
    [theme.breakpoints.up('sm')]: {
      height: 300,
    },
    [theme.breakpoints.up('md')]: {
      height: 700,
    },
  },
  container: {
    position: 'absolute',
    width: '100%',
    top: 65,
    paddingTop: 40,
    paddingLeft: 15,
    paddingRight: 15,
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 130,
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: 250,
    },
  },
  text: {
    textTransform: 'capitalize',
    letterSpacing: 3,
    fontWeight: 600,
    color: theme.status.white,
    textShadow: '2px 2px 4px #404040',
  },
  title: {
    fontSize: 35,
    [theme.breakpoints.up('sm')]: {
      fontSize: 48,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 96,
    },
  },
  subtitle: {
    fontSize: 14,
    [theme.breakpoints.up('sm')]: {
      fontSize: 18,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 24,
    },
  },
  logo: {
    width: 90,
    paddingBottom: 20,
    textAlign: 'center',
  },
})

const Hero = props => {
  const { img, logo, classes, t } = props

  return (
    <div className={classes.root}>
      <Img fluid={img.node.fluid} alt="" className={classes.img} />
      <div className={classes.container}>
        <Hidden smUp>
          <Img fluid={logo.node.fluid} alt="" className={classes.logo} />
        </Hidden>
        <Typography
          variant="h2"
          gutterBottom
          className={classnames(classes.text, classes.title)}
        >
          Eisbach Riders
        </Typography>
        <Typography className={classnames(classes.text, classes.subtitle)}>
          {t('hero.subtitle')}
        </Typography>
      </div>
    </div>
  )
}

Hero.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withTranslation()(withRoot(withStyles(styles)(Hero)))
