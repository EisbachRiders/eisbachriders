import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/styles'
import Button from '@material-ui/core/Button'
import Link from '../ui/Link'

const useStyles = makeStyles(theme => ({
  button: {
    textTransform: 'uppercase',
    fontSize: 14,
    marginLeft: 15,

    [theme.breakpoints.up('md')]: {
      fontSize: 16,
    },
  },
  mainTheme: {
    color: theme.palette.common.black,
    '&:hover': {
      color: theme.palette.primary.main,
      background: 'transparent',
    },
  },
  altTheme: {
    color: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.common.black,
    },
  },
}))

function HeaderLink({
  title,
  href,
  to,
  onClick,
  isHomepage,
  className: classNameProp,
}) {
  const classes = useStyles()

  return href || onClick ? (
    <Button
      className={clsx(
        classNameProp,
        classes.button,
        isHomepage ? classes.mainTheme : classes.altTheme
      )}
      href={href}
      onClick={onClick}
    >
      {title}
    </Button>
  ) : (
    <Link to={to}>
      <Button
        className={clsx(
          classNameProp,
          classes.button,
          isHomepage ? classes.mainTheme : classes.altTheme
        )}
      >
        {title}
      </Button>
    </Link>
  )
}

HeaderLink.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string,
  href: PropTypes.string,
  isHomepage: PropTypes.bool,
}

export default HeaderLink
