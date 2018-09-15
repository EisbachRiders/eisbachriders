import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  list: {
    width: 200,
  },
  text: {
    textTransform: 'uppercase',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 30,
    paddingRight: 30,
    color: theme.status.greyDk,
  },
  icon: {
    color: theme.status.grey,
  },
})

const HeroMobile = props => {
  const { img, classes } = props

  return <div className={classes.list}>mobile hero</div>
}

HeroMobile.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(HeroMobile)
