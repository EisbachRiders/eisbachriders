import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import ErrorIcon from '@material-ui/icons/Error'
import InfoIcon from '@material-ui/icons/Info'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import WarningIcon from '@material-ui/icons/Warning'

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
}

const useStyles = makeStyles(theme => ({
  success: {
    backgroundColor: theme.status.fin,
  },
  error: {
    backgroundColor: theme.status.redLt,
  },
  info: {
    backgroundColor: theme.status.blueLt2,
  },
  warning: {
    backgroundColor: theme.status.yellow,
  },
  icon: {
    fontSize: 20,
    color: theme.palette.common.black,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: 15,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.common.black,
  },
}))

function Notification({ className, message, onClose, variant, ...other }) {
  const classes = useStyles()
  const Icon = variantIcon[variant]
  return (
    <SnackbarContent
      className={clsx(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
      {...other}
    />
  )
}

Notification.propTypes = {
  className: PropTypes.string,
  message: PropTypes.node,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
}

export default Notification
