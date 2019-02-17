import React, { useState } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/styles'
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

const useStyles = makeStyles(theme => ({
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
}))

function Newsletter() {
  const classes = useStyles()
  const { t } = useTranslation()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [isEmailValid, setEmailValid] = useState(null)
  const [isNameValid, setNameValid] = useState(null)
  const [isCheckboxOpen, setCheckbox] = useState(false)
  const [isDialogOpen, setDialog] = useState(false)
  const [isSnackbarOpen, setSnackbar] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async e => {
    if (isCheckboxOpen && isEmailValid && isNameValid) {
      const result = await addToMailchimp(email, {
        FNAME: name,
        gdpr_26529: true,
      })
      handleDialogClose
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
    if (!isCheckboxOpen) {
      setError(true)
    }
    if (!pattern.test(email)) {
      setEmailValid(false)
    }
    if (name.length <= 500) {
      setNameValid(false)
    }
  }

  const handleSnackbarClose = (event, reason) => {
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
    }
    if (name === 'name') {
      if (event.target.value.length > 500) {
        setNameValid(false)
      } else {
        setNameValid(true)
        setName(event.target.value)
      }
    }
  }

  return (
    <div className={classes.containerNewsletter}>
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
        onClick={() => setDialog(true)}
      >
        {t('newsletter.signUp')}
      </Button>
      <Dialog open={isDialogOpen} onClose={() => setDialog(false)}>
        <DialogTitle id="dialog-title">
          {t('newsletter.newsletter')}
          <IconButton
            aria-label={t('common.close')}
            className={classes.close}
            color="inherit"
            onClick={() => setDialog(false)}
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
              onChange={() => handleChange('email')}
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
              onChange={() => handleChange('name')}
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
                  onChange={e => setCheckbox(e)}
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
            <a href="https://mailchimp.com/legal/">{t('newsletter.legal2')}</a>
          </Typography>
        </DialogContent>
        <DialogActions className={classes.dialogActions}>
          <Button
            onClick={() => setDialog(false)}
            color="primary"
            className={classes.actionButton}
          >
            {t('common.cancel')}
          </Button>
          <Button
            onClick={() => handleSubmit}
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

export default Newsletter
