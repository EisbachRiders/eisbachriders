import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { withNamespaces } from 'react-i18next'
import withRoot from '../withRoot'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Snackbar from '@material-ui/core/Snackbar'
import Notification from './Snackbar'
import { InstagramIcon, FacebookIcon } from '../assets/icons/icons'

const styles = theme => ({
  root: {
    backgroundColor: theme.status.grey,
    width: '100%',
  },
  legal: {
    backgroundColor: theme.palette.common.black,
  },
  copyright: {
    fontSize: 12,
    textTransform: 'capitalize',
    color: theme.palette.common.white,
    paddingTop: 15,
    paddingBottom: 15,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 15,
    [theme.breakpoints.up('sm')]: {
      paddingTop: 30,
      paddingBottom: 30,
      paddingLeft: 60,
      paddingRight: 60,
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: 45,
      paddingBottom: 45,
      paddingLeft: 170,
      paddingRight: 170,
    },
  },
  flexItem: {
    flexBasis: '100%',
    paddingTop: 15,
    [theme.breakpoints.up('md')]: {
      flexBasis: '45%',
      paddingTop: 0,
    },
  },
  text: {
    fontSize: 12,
    lineHeight: 1.5,
    [theme.breakpoints.up('sm')]: {
      lineHeight: 2,
    },
  },
  divider: {
    borderTop: `1px solid ${theme.status.greyDk}`,
  },
  textHeading: {
    letterSpacing: 3,
    fontSize: 12,
    textTransform: 'uppercase',
    paddingBottom: 15,
    paddingTop: 15,
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
      paddingTop: 0,
    },
  },
  textField: {
    margin: 0,
    width: '48%',
  },
  input: {
    fontSize: 12,
    border: '1px solid',
  },
  inputError: {
    fontSize: 12,
    border: `1px solid ${theme.palette.error.main}`,
  },
  button: {
    borderColor: theme.status.black,
    borderRadius: 0,
    minWidth: 0,
    padding: 8,
    marginRight: 30,
    [theme.breakpoints.up('sm')]: {
      marginRight: 15,
    },
  },
  icon: {
    width: 18,
    height: 18,
    fill: theme.status.black,
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingTop: 15,
  },
  buttonSend: {
    borderRadius: 0,
    boxShadow: 'none',
    marginTop: 15,
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.black,
    opacity: 0.8,
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  link: {
    color: theme.palette.common.white,
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
  },
  textArea: {
    paddingLeft: 20,
  },
})

class Footer extends Component {
  state = {
    emailAddress: '',
    name: '',
    message: '',
    isEmailValid: true,
    isNameValid: true,
    isMessageValid: true,
    isTouched: false,
    isSnackbarOpen: false,
    notification: 'success',
  }

  handleChange = name => event => {
    if (this.state.isTouched === false) {
      this.setState({
        isTouched: true,
      })
    }
    if (name === 'emailAddress') {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      if (!pattern.test(event.target.value)) {
        this.setState({
          isEmailValid: false,
          emailAddress: event.target.value,
        })
      } else {
        this.setState({
          isEmailValid: true,
          emailAddress: event.target.value,
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
    if (name === 'message') {
      if (event.target.value.length > 1000) {
        this.setState({
          isMessageValid: false,
        })
      } else {
        this.setState({
          isMessageValid: true,
          message: event.target.value,
        })
      }
    }
  }

  handleClick = () => {
    this.setState({ isSnackbarOpen: true })
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    this.setState({ isSnackbarOpen: false })
  }

  handleSubmit = () => {
    if (
      this.state.isEmailValid &&
      this.state.isMessageValid &&
      this.state.isNameValid &&
      this.state.isTouched
    ) {
      fetch('https://eisbach-riders.prod.with-datafire.io/contact', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: this.state.message,
          emailAddress: this.state.emailAddress,
          name: this.state.name,
        }),
      })
        .then(response => {
          if (response.status === 200) {
            this.setState({
              isSnackbarOpen: true,
              notification: 'success',
            })
          } else {
            this.setState({
              isSnackbarOpen: true,
              notification: 'error',
            })
          }
        })
        .catch(err => {
          this.setState({
            isSnackbarOpen: true,
            notification: 'error',
          })
        })
    } else {
      this.setState({
        isSnackbarOpen: true,
        notification: 'warning',
      })
    }
  }
  render() {
    const { handlePageChange, classes, t } = this.props
    const {
      emailAddress,
      name,
      message,
      isNameValid,
      isEmailValid,
      isMessageValid,
      isSnackbarOpen,
      notification,
    } = this.state
    return (
      <div className={classes.root} id="contact">
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={isSnackbarOpen}
          autoHideDuration={6000}
          onClose={this.handleClose}
        >
          <Notification
            onClose={this.handleClose}
            variant={notification}
            message={
              notification === 'success'
                ? 'Your email has been sent successfully'
                : notification === 'warning'
                  ? 'Please check the form has been filled out correctly'
                  : 'An error has occured.'
            }
          />
        </Snackbar>
        <div className={classes.container}>
          <div className={classes.flexItem}>
            <form noValidate autoComplete="off">
              <Typography className={classes.textHeading}>
                {t('footer.message')}
              </Typography>
              <div className={classes.inputContainer}>
                <TextField
                  id="name"
                  name="name"
                  type="text"
                  className={classes.textField}
                  InputProps={{
                    className: isNameValid ? classes.input : classes.inputError,
                    disableUnderline: true,
                    classes: { input: classes.textArea },
                  }}
                  value={name}
                  placeholder={t('common.name')}
                  onChange={this.handleChange('name')}
                  margin="normal"
                  required
                />
                <TextField
                  id="emailAddress"
                  name="emailAddress"
                  type="email"
                  className={classes.textField}
                  InputProps={{
                    className: isEmailValid
                      ? classes.input
                      : classes.inputError,
                    disableUnderline: true,
                    classes: { input: classes.textArea },
                  }}
                  value={emailAddress}
                  placeholder={t('common.email')}
                  onChange={this.handleChange('emailAddress')}
                  margin="normal"
                  required
                />
              </div>
              <TextField
                id="message"
                name="message"
                type="text"
                InputProps={{
                  className: isMessageValid
                    ? classes.input
                    : classes.inputError,
                  disableUnderline: true,
                  classes: { input: classes.textArea },
                }}
                value={message}
                placeholder={t('footer.message')}
                onChange={this.handleChange('message')}
                margin="normal"
                fullWidth
                multiline
                rows="4"
                required
              />
              <Button
                variant="contained"
                className={classes.buttonSend}
                fullWidth
                onClick={this.handleSubmit}
              >
                {t('footer.send')}
              </Button>
            </form>
          </div>

          <div className={classes.flexItem}>
            <Typography className={classes.textHeading}>
              {`${t('footer.questions')}?`}
            </Typography>
            <Typography className={classes.text}>
              {t('footer.questionsMessage')}
            </Typography>
            <Typography className={classes.text}>
              {t('footer.getInTouch')}
            </Typography>
            <div className={classes.iconContainer}>
              <Button
                variant="outlined"
                aria-label="linkedin"
                className={classes.button}
                href="https://www.facebook.com/EisbachRiders/"
                target="_blank"
                rel="noopener"
                disableFocusRipple
                disableRipple
              >
                <FacebookIcon className={classes.icon} />
              </Button>
              <Button
                variant="outlined"
                aria-label="instagram"
                className={classes.button}
                href="https://www.instagram.com/eisbachriders/"
                target="_blank"
                rel="noopener"
                disableFocusRipple
                disableRipple
              >
                <InstagramIcon className={classes.icon} />
              </Button>
            </div>
          </div>
        </div>
        <div className={classes.legal}>
          <Typography
            variant="body2"
            align="center"
            className={classes.copyright}
          >
            &copy; Eisbach Riders |{' '}
            <Link to="/legal/" className={classes.link}>
              <button
                className={classes.link}
                onClick={() => handlePageChange('/legal')}
              >
                {t('footer.imprint')}
              </button>
            </Link>
            |{' '}
            <Link to="/privacy/" className={classes.link}>
              <button
                className={classes.link}
                onClick={() => handlePageChange('/privacy')}
              >
                {t('footer.privacy')}
              </button>
            </Link>
          </Typography>
        </div>
      </div>
    )
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withNamespaces()(withRoot(withStyles(styles)(Footer)))
