import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import withRoot from '../withRoot'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    backgroundColor: theme.status.grey,
    width: '100%',
  },
  copyright: {
    fontSize: 12,
    textTransform: 'capitalize',
    paddingTop: 15,
    paddingBottom: 15,
  },
})

class Footer extends Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <Typography
          variant="body1"
          align="center"
          className={classes.copyright}
        >
          &copy; Eisbach Riders | last updated may 2018 | imprint
        </Typography>
      </div>
    )
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withRoot(withStyles(styles)(Footer))
