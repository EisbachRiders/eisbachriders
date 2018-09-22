import React, { Component } from 'react'
import PropTypes from 'prop-types'
import addToMailchimp from 'gatsby-plugin-mailchimp'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'

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
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  textField: {
    marginBottom: 15,
  },
})

class Newsletter extends Component {
  state = {
    email: 'Email Address',
    name: 'Name',
    open: false,
  }
  // 1. via `.then`
  handleSubmit = e => {
    e.preventDefault
    addToMailchimp(this.state.email, {
      FNAME: this.state.name,
    }) // listFields are optional if you are only capturing the email address.
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

  //   // 2. via `async/await`
  //   handleSubmit = async e => {
  //     e.preventDefault
  //     const result = await addToMailchimp(this.state.email, {
  //       FNAME: this.state.name,
  //     })
  //     // I recommend setting `result` to React state
  //     // but you can do whatever you want
  //   }

  handleClickOpen = () => {
    this.setState({
      open: true,
    })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  render() {
    const { classes } = this.props
    const { email, name, open } = this.state
    const listFields = []
    return (
      <div className={classes.containerNewsletter}>
        <Typography className={classes.textNewsletter} variant="headline">
          sign up for our newsletter
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleClickOpen}
        >
          Sign Up
        </Button>
        <Dialog open={open} onClose={this.handleClose}>
          <DialogTitle id="dialog-title">{'Newsletter'}</DialogTitle>
          <DialogContent>
            <form className={classes.form}>
              <TextField
                required
                id="email"
                label="Email"
                value={email}
                onChange={this.handleChange('email')}
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />
              <TextField
                required
                id="name"
                label="Name"
                value={name}
                onChange={this.handleChange('name')}
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button
              onClick={() => {
                this.handleSubmit(email)
                this.handleClose()
              }}
              color="primary"
              autoFocus
            >
              Subscribe to List
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

Newsletter.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Newsletter)
