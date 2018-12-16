import React, { Component } from 'react'
import PropTypes from 'prop-types'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { withNamespaces } from 'react-i18next'
import withRoot from '../withRoot'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'
import Snackbar from '@material-ui/core/Snackbar'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

const styles = theme => ({
  containerNewsletter: {
    background: theme.status.white,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 30,
    paddingTop: 30,
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 60,
      paddingRight: 60,
      paddingBottom: 30,
      paddingTop: 30,
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: 90,
      paddingRight: 90,
      paddingBottom: 90,
      paddingTop: 90,
    },
  },
  textNewsletter: {
    textTransform: 'uppercase',
    paddingBottom: 5,
    fontSize: 18,
    [theme.breakpoints.up('md')]: {
      fontSize: 24,
    },
  },
  subtitleNewsletter: {
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
    padding: '9px 27px',
    fontSize: 14,
    [theme.breakpoints.up('md')]: {
      padding: '16px 48px',
      fontSize: 18,
    },
  },
  snackbarError: {
    background: theme.status.red,
  },
  snackbarSuccess: {
    background: theme.status.green,
  },
  dialogContent: {
    paddingBottom: 0,
  },
  legal: {
    fontSize: 11,
    marginTop: 15,
  },
  legalContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  img: {
    marginRight: 15,
    marginLeft: 15,
    height: 60,
  },
  dialogActions: {
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 30,
  },
  close: {
    float: 'right',
  },
  actionButton: {
    margin: 0,
  },
  error: {
    color: theme.palette.error.main,
  },
})

class Newsletter extends Component {
  state = {
    email: '',
    name: '',
    isEmailValid: null,
    isNameValid: null,
    isCheckboxOpen: false,
    isDialogOpen: false,
    isSnackbarOpen: false,
    snackbarMessage: null,
    error: false,
  }

  handleSubmit = async e => {
    if (
      this.state.isCheckboxOpen &&
      this.state.isEmailValid &&
      this.state.isNameValid
    ) {
      const result = await addToMailchimp(this.state.email, {
        FNAME: this.state.name,
        gdpr_26529: true,
      })
      this.handleDialogClose()
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
          error: false,
          isEmailValid: true,
          isNameValid: true,
          snackbarMessage: 'success',
        })
      }
    }
    if (!this.state.isCheckboxOpen) {
      this.setState({
        error: true,
      })
    }
    if (!pattern.test(this.state.email)) {
      this.setState({
        isEmailValid: false,
      })
    }
    if (this.state.name.length <= 500) {
      this.setState({
        isNameValid: false,
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
    if (name === 'email') {
      if (!pattern.test(event.target.value)) {
        this.setState({
          isEmailValid: false,
          email: event.target.value,
        })
      } else {
        this.setState({
          isEmailValid: true,
          email: event.target.value,
        })
      }
    }
    if (name === 'name') {
      if (event.target.value.length > 500) {
        this.setState({
          isNameValid: false,
        })
      } else {
        this.setState({
          isNameValid: true,
          name: event.target.value,
        })
      }
    }
  }

  handleCheckbox = event => {
    this.setState({
      isCheckboxOpen: event.target.checked,
    })
  }

  render() {
    const { classes, t } = this.props
    const {
      email,
      name,
      isDialogOpen,
      isSnackbarOpen,
      isCheckboxOpen,
      error,
      isEmailValid,
      isNameValid,
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
          autoHideDuration={5000}
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
              <span id="message-id">{t('newsletter.success')}</span>
            ) : (
              <span id="message-id">{snackbarMessage}</span>
            )
          }
          action={
            <IconButton
              key="closeNewsletter"
              aria-label={t('common.close')}
              color="inherit"
              onClick={this.handleSnackbarClose}
            >
              <CloseIcon />
            </IconButton>
          }
        />
        <Typography className={classes.textNewsletter} variant="h5">
          {t('newsletter.sectionTitle')}
        </Typography>
        <Typography className={classes.subtitleNewsletter}>
          {t('newsletter.message')}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.handleDialogOpen}
        >
          {t('newsletter.signUp')}
        </Button>
        <Dialog open={isDialogOpen} onClose={this.handleDialogClose}>
          <DialogTitle id="dialog-title">
            {t('newsletter.newsletter')}
            <IconButton
              aria-label={t('common.close')}
              className={classes.close}
              color="inherit"
              onClick={this.handleDialogClose}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent className={classes.dialogContent}>
            <form className={classes.form}>
              <TextField
                required
                id="email"
                type="text"
                label="Email"
                error={isEmailValid === null ? null : !isEmailValid}
                placeholder={t('common.email')}
                value={email}
                onChange={this.handleChange('email')}
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />
              <TextField
                required
                id="name"
                type="text"
                label="Name"
                error={isNameValid === null ? null : !isNameValid}
                placeholder={t('common.name')}
                value={name}
                onChange={this.handleChange('name')}
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />
            </form>
            <div className={classes.legalContainer}>
              <FormControlLabel
                classes={{
                  label: error && !isCheckboxOpen ? classes.error : null,
                }}
                control={
                  <Checkbox
                    checked={isCheckboxOpen}
                    onChange={this.handleCheckbox}
                    className={error ? classes.error : null}
                    value="consent"
                    color="primary"
                  />
                }
                label="Yes, I would like to recieve emails from Eisbach Riders."
              />
            </div>
            <Typography className={classes.legal}>
              {t('newsletter.legal1')}
              <a href="https://mailchimp.com/legal/">
                {t('newsletter.legal2')}
              </a>
            </Typography>
          </DialogContent>
          <DialogActions className={classes.dialogActions}>
            <Button
              onClick={this.handleDialogClose}
              color="primary"
              className={classes.actionButton}
            >
              {t('common.cancel')}
            </Button>
            <Button
              onClick={() => {
                this.handleSubmit()
              }}
              className={classes.actionButton}
              color="primary"
              autoFocus
              type="submit"
            >
              {t('newsletter.subscribe')}
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

export default withNamespaces()(withRoot(withStyles(styles)(Newsletter)))
