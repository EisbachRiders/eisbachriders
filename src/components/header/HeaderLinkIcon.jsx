import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'
import IconButton from '@material-ui/core/IconButton'
import Link from '../ui/Link'

const useStyles = makeStyles(theme => ({
  button: {
    padding: 8,
  },
  icon: {
    width: 18,
    height: 18,
    color: theme.status.white,
  },
}))

function HeaderLinkIcon({
  to,
  href,
  ariaLabel,
  children: childrenProp,
  className: classNameProp,
}) {
  const classes = useStyles()
  const children = childrenProp.props.children
    ? React.cloneElement(childrenProp.props.children, {
        className: clsx(classNameProp, classes.icon),
      })
    : React.cloneElement(childrenProp, {
        className: clsx(classNameProp, classes.icon),
      })

  if (children) {
    return href ? (
      <IconButton
        href={href}
        target="_blank"
        rel="noopener"
        className={classes.button}
        color="inherit"
        aria-label={ariaLabel}
      >
        {children}
      </IconButton>
    ) : (
      <Link to={to}>
        <IconButton
          className={classes.button}
          color="inherit"
          aria-label={ariaLabel}
        >
          {children}
        </IconButton>
      </Link>
    )
  } else return null
}

HeaderLinkIcon.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  to: PropTypes.string,
  href: PropTypes.string,
  ariaLabel: PropTypes.string.isRequired,
}

export default HeaderLinkIcon
