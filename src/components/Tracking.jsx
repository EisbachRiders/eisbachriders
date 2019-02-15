import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { withTranslation } from 'react-i18next'
import withRoot from '../withRoot'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'

const styles = theme => ({
  snackbar: {
    left: 0,
    right: 0,
    transform: 'none',
  },
  snackbarContent: {
    borderRadius: 0,
    width: '100%',
    minWidth: '0',
    maxWidth: 'none',
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: theme.palette.common.black,
    [theme.breakpoints.up('md')]: {
      paddingLeft: 60,
      paddingRight: 60,
    },
  },
  message: {
    flexBasis: '100%',
    [theme.breakpoints.up('sm')]: {
      flexBasis: '60%',
    },
    [theme.breakpoints.up('lg')]: {
      flexBasis: '80%',
    },
  },
  action: {
    marginLeft: 'none',
    marginRight: 'none',
    paddingLeft: 0,
  },
  button: {
    marginLeft: 35,
    paddingLeft: 50,
    paddingRight: 50,
  },
  buttonDecline: {
    color: theme.palette.common.white,
  },
  link: {
    color: theme.palette.common.white,
    paddingLeft: 8,
    textTransform: 'capitalize',
    textDecoration: 'underline',
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 0,
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: 8,
    },
  },
})

class Tracking extends Component {
  state = {
    isSnackbarOpen: true,
  }

  handleSnackbarClose = () => {
    this.setState({ isSnackbarOpen: true })
  }

  handleSnackbarAccept = () => {
    this.setState({ isSnackbarOpen: false })
  }

  handleSnackbarDecline = () => {
    window['ga-disable-UA-130658859-1'] = true
    this.setState({ isSnackbarOpen: false })
  }

  render() {
    const { classes, t } = this.props
    const { isSnackbarOpen } = this.state
    console.log(isSnackbarOpen)
    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={isSnackbarOpen}
        onClose={this.handleClose}
        className={classes.snackbar}
      >
        <SnackbarContent
          className={classes.snackbarContent}
          classes={{ message: classes.message, action: classes.action }}
          aria-describedby="client-snackbar"
          onClose={this.handleClose}
          message={
            <span id="client-snackbar">
              {t('tracking.message')}
              <Link to="/privacy/" className={classes.link}>
                {t('tracking.privacyLink')}
              </Link>
            </span>
          }
          action={[
            <Fragment key="button">
              <Button
                className={classes.buttonDecline} //eslint-disable-next-line
                href="javascript:gaOptout();"
                onClick={this.handleDecline}
              >
                {t('tracking.decline')}
              </Button>
              <Button
                color="secondary"
                variant="contained"
                className={classes.button}
                onClick={this.handleAccept}
              >
                {t('tracking.accept')}
              </Button>
            </Fragment>,
          ]}
        />
      </Snackbar>
    )
  }
}

Tracking.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withTranslation()(withRoot(withStyles(styles)(Tracking)))
