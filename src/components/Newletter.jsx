import React, { Component } from 'react'
import PropTypes from 'prop-types'
import addToMailchimp from 'gatsby-plugin-mailchimp'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  containerNewsletter: {
    background: theme.status.grey,
    padding: 90,
    textAlign: 'center',
  },
  textNewsletter: {
    textTransform: 'uppercase',
    paddingBottom: 30,
  },
})

class Newsletter extends Component {
  state = {
    email: 'ca.butler10@gmail.com',
  }
  // 1. via `.then`
  handleSubmit = e => {
    e.preventDefault
    addToMailchimp(email, listFields) // listFields are optional if you are only capturing the email address.
      .then(data => {
        // I recommend setting data to React state
        // but you can do whatever you want (including ignoring this `then()` altogether)
        console.log(data)
      })
      .catch(() => {
        // unnecessary because Mailchimp only ever
        // returns a 200 status code
        // see below for how to handle errors
      })
  }

  // 2. via `async/await`
  handleSubmit = async e => {
    e.preventDefault
    const result = await addToMailchimp(this.state.email)
    // I recommend setting `result` to React state
    // but you can do whatever you want
  }
  render() {
    const { classes } = this.props
    const { email } = this.state
    const listFields = []
    return (
      <div className={classes.containerNewsletter}>
        <Typography className={classes.textNewsletter} variant="headline">
          sign up for our newsletter
        </Typography>
        {/* <form onSubmit={this._handleSubmit(email, { listFields })} /> */}
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            this.handleSubmit(email)
          }}
        >
          Sign Up
        </Button>
      </div>
    )
  }
}

Newsletter.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Newsletter)
