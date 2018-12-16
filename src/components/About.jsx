import React from 'react'
import PropTypes from 'prop-types'
import { withNamespaces } from 'react-i18next'
import withRoot from '../withRoot'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'
import img from '../assets/images/homepage1.jpg'

const styles = theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    height: 215,
    background: theme.status.black,
    [theme.breakpoints.up('sm')]: {
      height: 250,
      justifyContent: 'space-between',
    },
    [theme.breakpoints.up('md')]: {
      height: 400,
    },
  },
  img: {
    height: 250,
    width: '100%',
    flexBasis: '50%',
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    background: theme.status.black,
    [theme.breakpoints.up('md')]: {
      height: 400,
    },
  },
  textContainer: {
    flexBasis: '100%',
    paddingTop: 30,
    paddingBottom: 30,
    paddingRight: 15,
    paddingLeft: 15,
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      flexBasis: '50%',
      paddingRight: 60,
      paddingLeft: 60,
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: 45,
      paddingRight: 60,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  title: {
    textTransform: 'uppercase',
    letterSpacing: 3,
    paddingBottom: 5,
    fontSize: 14,
    color: theme.palette.secondary.main,
    [theme.breakpoints.up('md')]: {
      paddingBottom: 30,
      fontSize: 24,
    },
  },
  text: {
    color: theme.palette.common.white,
    fontSize: 12,
    [theme.breakpoints.up('md')]: {
      fontSize: 16,
    },
  },
})

const About = props => {
  const { classes, t } = props
  return (
    <div className={classes.container} id="about">
      <Hidden xsDown>
        <div className={classes.img} />
      </Hidden>
      <div className={classes.textContainer}>
        <Typography className={classes.title} variant="h5">
          {t('about.sectionTitle')}
        </Typography>
        <Typography className={classes.text} variant="body1">
          {t('about.message')}
        </Typography>
      </div>
    </div>
  )
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withNamespaces()(withRoot(withStyles(styles)(About)))
