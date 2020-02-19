import React, { useState } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

const useStyles = makeStyles(theme => ({
  snackbarError: {
    background: theme.status.red,
  },
  snackbarSuccess: {
    background: theme.status.green,
  },
  title: {
    marginBottom: 15,
    width: '100%',
    textAlign: 'center',
  },
  legalError: {
    color: theme.palette.error.main,
    fontSize: 10,
  },
  legal: {
    color: theme.palette.white,
    fontSize: 10,
    textAlign: 'center',
  },
  textField: {
    background: theme.status.white,
    width: '100%',
    marginBottom: 15,
  },
  form: {
    paddingLeft: 30,
    paddingRight: 30,
  },
}))

function NewsletterBlog() {
  const classes = useStyles()
  const { t } = useTranslation()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [isEmailValid, setEmailValid] = useState(null)
  const [isNameValid, setNameValid] = useState(null)
  const [isSnackbarOpen, setSnackbar] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState(false)
  const [error, setError] = useState(false)
  const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

  const handleSubmit = async e => {
    if (isEmailValid && isNameValid) {
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
    <div>
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
        Get the latest news and special offers delivered right to your mailbox!
      </Typography>
      <div className={classes.form}>
        <form>
          <TextField
            required
            id="name2"
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
          <TextField
            required
            id="email2"
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
        </form>
        <Button
          variant="contained"
          fullWidth
          color="primary"
          className={classes.button}
          onClick={() => handleSubmit()}
        >
          {t('newsletter.signUp')}
        </Button>
        <p className={classes.legal}>
          {t('newsletter.legal1')}
          <a href="https://mailchimp.com/legal/">{t('newsletter.legal2')}</a>
        </p>
      </div>
    </div>
  )
}

export default NewsletterBlog
