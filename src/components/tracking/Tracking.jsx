import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'gatsby'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/styles'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'

const mapStateToProps = ({ isGAopen }) => {
  return { isGAopen }
}

const mapDispatchToProps = dispatch => {
  return { changeGA: () => dispatch({ type: `GOOGLEANALYTICS` }) }
}

const useStyles = makeStyles(theme => ({
  snackbar: {
    left: 0,
    right: 0,
    bottom: 0,
    transform: 'none',
  },
  snackbarContent: {
    borderRadius: 0,
    minWidth: '0',
    maxWidth: 'none',
    color: theme.palette.common.black,
    backgroundColor: theme.status.greyBlue,
    [theme.breakpoints.up('sm')]: {
      width: '100%',
      paddingLeft: 30,
      paddingRight: 30,
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: 60,
      paddingRight: 60,
    },
  },
  message: {
    flexBasis: '100%',
    color: theme.palette.common.black,
    [theme.breakpoints.up('sm')]: {
      flexBasis: '60%',
    },
  },
  action: {
    marginLeft: 'none',
    marginRight: 'none',
    paddingLeft: 0,
  },
  button: {
    marginLeft: 30,
    paddingLeft: 30,
    paddingRight: 30,
    [theme.breakpoints.up('sm')]: {
      marginLeft: 35,
      paddingLeft: 50,
      paddingRight: 50,
    },
  },
  buttonDecline: {
    color: theme.palette.common.black,
  },
  link: {
    color: theme.palette.common.black,
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
}))

function Tracking({ isGAopen, changeGA }) {
  const classes = useStyles()
  const { t } = useTranslation()

  const handleSnackbarDecline = () => {
    window['ga-disable-UA-130658859-1'] = true
    changeGA()
  }

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      open={isGAopen}
      className={classes.snackbar}
    >
      <SnackbarContent
        className={classes.snackbarContent}
        classes={{ message: classes.message, action: classes.action }}
        aria-describedby="client-snackbar"
        message={
          <span id="client-snackbar">
            {t('tracking.message')}
            <Link to="/privacy/" className={classes.link}>
              {t('tracking.privacyLink')}
            </Link>
          </span>
        }
        action={[
          <Fragment key={`snackbar`}>
            <Button
              className={classes.buttonDecline} //eslint-disable-next-line
              href="javascript:gaOptout();"
              onClick={handleSnackbarDecline}
            >
              {t('tracking.decline')}
            </Button>
            <Button
              color="primary"
              variant="contained"
              className={classes.button}
              onClick={changeGA}
            >
              {t('tracking.accept')}
            </Button>
          </Fragment>,
        ]}
      />
    </Snackbar>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tracking)
