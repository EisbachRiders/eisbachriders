import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 15,
    paddingRight: 15,
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 60,
      paddingRight: 60,
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: 60,
      paddingBottom: 60,
      paddingLeft: 90,
      paddingRight: 90,
    },
    [theme.breakpoints.up('lg')]: {
      paddingTop: 45,
      paddingBottom: 90,
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
  greyBlue: {
    background: theme.status.greyBlue,
  },
  cream: {
    background: theme.status.cream,
  },
  primary: {
    background: theme.palette.primary.main,
  },
  flexStart: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  flexEnd: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
  },
  center: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  spaceBetween: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  spaceAround: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
}))

function Container({
  children,
  variant,
  background,
  className: classNameProp,
}) {
  const classes = useStyles()
  return (
    <div
      className={clsx(
        classes.container,
        {
          [classes.greyBlue]: background === 'grey',
          [classes.primary]: background === 'primary',
          [classes.cream]: background === 'cream',
          [classes[variant]]: variant !== undefined,
        },
        classNameProp
      )}
    >
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  background: PropTypes.oneOf(['grey', 'primary', 'cream']),
  variant: PropTypes.oneOf([
    'flexStart',
    'flexEnd',
    'center',
    'spaceBetween',
    'spaceAround',
  ]),
}

export default Container
