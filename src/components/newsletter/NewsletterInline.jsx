import React, { useState } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Toggle from '../ui/Toggle'

const useStyles = makeStyles(theme => ({
  snackbarError: {
    background: theme.status.red,
  },
  snackbarSuccess: {
    background: theme.status.green,
  },
  title: {
    marginBottom: 15,
    textTransform: 'uppercase',
    letterSpacing: 3,
    width: '100%',
    textAlign: 'center',
  },
  container: {
    background: theme.status.greyLt2,
    padding: 15,
    display: 'flex',
    justifyContent: 'center',
  },
  legalError: {
    color: theme.palette.error.main,
    fontSize: 10,
  },
  legal: {
    color: theme.palette.white,
    fontSize: 10,
  },
  toggleContainer: {
    background: theme.status.white,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
  },
  textField: {
    background: theme.status.white,
    width: 300,
  },
  outline: {
    borderRadius: 0,
    border: 'none',
    borderRight: `1px solid ${theme.status.greyLt}`,
  },
}))

function NewsletterInline() {
  const classes = useStyles()
  const { t } = useTranslation()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [isEmailValid, setEmailValid] = useState(null)
  const [isNameValid, setNameValid] = useState(null)
  const [isCheckboxFalse, setCheckbox] = useState(true)
  const [isSnackbarOpen, setSnackbar] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState(false)
  const [error, setError] = useState(false)
  const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

  const handleSubmit = async e => {
    if (!isCheckboxFalse && isEmailValid && isNameValid) {
      const result = await addToMailchimp(email, {
        FNAME: name,
        gdpr_26529: true,
      })
      if (result.result === 'error') {
        setSnackbar(true)
        setSnackbarMessage(
          result.msg.includes('<a') ? result.msg.split('<a')[0] : result.msg
        )
      } else {
        setSnackbar(true)
        setError(false)
        setEmailValid(true)
        setNameValid(true)
        setSnackbarMessage('success')
      }
    }
    if (isCheckboxFalse) {
      setError(true)
    }
    if (!pattern.test(email)) {
      setEmailValid(false)
    }
    if (name.length >= 500) {
      setNameValid(false)
    }
  }

  const handleSnackbarClose = (e, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setSnackbar(false)
  }

  const handleChange = name => event => {
    if (name === 'email') {
      setEmail(event.target.value)
      if (!pattern.test(event.target.value)) {
        setEmailValid(false)
      } else {
        setEmailValid(true)
      }
    } else if (name === 'name') {
      if (event.target.value.length > 500) {
        setNameValid(false)
      } else {
        setNameValid(true)
        setName(event.target.value)
      }
    } else if ((name = 'toggle')) {
      setCheckbox(event.target.checked)
    }
  }

  return (
    <>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={isSnackbarOpen}
        autoHideDuration={5000}
        onClose={handleSnackbarClose}
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
            onClick={handleSnackbarClose}
          >
            <CloseIcon />
          </IconButton>
        }
      />
      <Typography className={classes.title}>
        {t('newsletter.signUp')}
      </Typography>
      <div className={classes.container}>
        <form className={classes.form}>
          <TextField
            required
            id="email"
            type="text"
            label="email"
            error={isEmailValid === null ? null : !isEmailValid}
            placeholder={t('common.email')}
            value={email}
            onChange={handleChange('email')}
            InputProps={{ classes: { notchedOutline: classes.outline } }}
            className={classes.textField}
            variant="outlined"
          />
          <TextField
            required
            id="name"
            type="text"
            label="name"
            error={isNameValid === null ? null : !isNameValid}
            placeholder={t('common.name')}
            value={name}
            InputProps={{ classes: { notchedOutline: classes.outline } }}
            onChange={handleChange('name')}
            className={classes.textField}
            variant="outlined"
          />
        </form>
        <div className={classes.toggleContainer}>
          <FormControlLabel
            classes={{
              label:
                error && isCheckboxFalse ? classes.legalError : classes.legal,
            }}
            control={
              <Toggle
                checked={isCheckboxFalse}
                onChange={handleChange('toggle')}
                value="consent"
              />
            }
            label="Yes, email me!"
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => handleSubmit()}
        >
          {t('newsletter.join')}
        </Button>
      </div>
    </>
  )
}

export default NewsletterInline
