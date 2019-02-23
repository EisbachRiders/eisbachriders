import React from 'react'
import MuiLink from '@material-ui/core/Link'
import { Link as GastsbyLink } from 'gatsby'

function Link(props) {
  return (
    <MuiLink
      component={GastsbyLink}
      {...props}
      style={{ textDecoration: 'none' }}
    />
  )
}

export default Link
