import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Switch from '@material-ui/core/Switch'

const useStyles = makeStyles(theme => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.status.white,
      '& + $track': {
        backgroundColor: theme.status.greyLt,
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: theme.status.greyLt,
      border: `6px solid ${theme.status.white}`,
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.primary.main}`,
    backgroundColor: theme.palette.primary.main,
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))

function Toggle({ ...props }) {
  const classes = useStyles()
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  )
}

export default Toggle
