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
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

const styles = theme => ({
  containerNewsletter: {
    background: theme.status.white,
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
  button: {
    padding: '16px 48px',
    fontSize: '18px',
  },
  snackbarError: {
    background: theme.status.red,
  },
  snackbarSuccess: {
    background: theme.status.green,
  },
})

class Newsletter extends Component {
  state = {
    email: 'Email Address',
    name: 'Name',
    isDialogOpen: false,
    isSnackbarOpen: false,
    snackbarMessage: null,
  }

  handleSubmit = async e => {
    e.preventDefault
    const result = await addToMailchimp(this.state.email, {
      FNAME: this.state.name,
    })
    if (result.result === 'error') {
      this.setState({
        isSnackbarOpen: true,
        snackbarMessage: result.msg.includes('<a')
          ? result.msg.split('<a')[0]
          : result.msg,
      })
    } else {
      this.setState({
        isSnackbarOpen: true,
        snackbarMessage: 'success',
      })
    }
  }

  handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    this.setState({ isSnackbarOpen: false })
  }

  handleDialogOpen = () => {
    this.setState({
      isDialogOpen: true,
    })
  }

  handleDialogClose = () => {
    this.setState({ isDialogOpen: false })
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  render() {
    const { classes } = this.props
    const {
      email,
      name,
      isDialogOpen,
      isSnackbarOpen,
      snackbarMessage,
    } = this.state

    return (
      <div className={classes.containerNewsletter}>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={isSnackbarOpen}
          autoHideDuration={6000}
          onClose={this.handleSnackbarClose}
          ContentProps={{
            'aria-describedby': 'message-id',
            className:
              snackbarMessage === 'success'
                ? classes.snackbarSuccess
                : classes.snackbarError,
          }}
          message={
            snackbarMessage === 'success' ? (
              <span id="message-id">Success! Thanks for joining.</span>
            ) : (
              <span id="message-id">{snackbarMessage}</span>
            )
          }
          action={
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.handleSnackbarClose}
            >
              <CloseIcon />
            </IconButton>
          }
        />
        <Typography className={classes.textNewsletter} variant="h5">
          sign up for our newsletter
        </Typography>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.handleDialogOpen}
        >
          Sign Up
        </Button>
        <Dialog open={isDialogOpen} onClose={this.handleDialogClose}>
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
                this.handleDialogClose()
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
