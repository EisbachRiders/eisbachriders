import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'

import { InstagramIcon, FacebookIcon } from '../assets/icons/icons'
import logoBlackLarge from '../assets/logos/logoBlackLarge.png'

const styles = theme => ({
  root: {
    backgroundColor: theme.status.grey,
    width: '100%',
    height: 200,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  copyright: {
    fontSize: 12,
    textTransform: 'capitalize',
    paddingTop: 15,
    paddingBottom: 15,
  },
  socialIcon: {
    color: theme.palette.primary.main,
    fontSize: 20,
  },
  iconContainer: {
    textAlign: 'center',
  },
  img: {
    width: 50,
  },
  imgContainer: {
    textAlign: 'center',
  },
})

class Footer extends Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <div className={classes.iconContainer}>
          <IconButton
            aria-label="instagram"
            className={classes.socialButton}
            href="https://www.instagram.com/eisbachriders/"
            target="_blank"
            rel="noopener"
          >
            <InstagramIcon className={classes.socialIcon} />
          </IconButton>
          <IconButton
            aria-label="instagram"
            className={classes.socialButton}
            href="https://www.facebook.com/EisbachRiders/"
            target="_blank"
            rel="noopener"
          >
            <FacebookIcon className={classes.socialIcon} />
          </IconButton>
        </div>
        <Typography
          variant="body1"
          align="center"
          className={classes.copyright}
        >
          &copy; Eisbach Riders | last updated may 2018 | imprint
        </Typography>
        <div className={classes.imgContainer}>
          <img alt="" src={logoBlackLarge} className={classes.img} />
        </div>
      </div>
    )
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Footer)
