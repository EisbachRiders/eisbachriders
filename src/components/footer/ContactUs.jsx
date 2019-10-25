import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Snackbar from '@material-ui/core/Snackbar'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import CircularProgress from '@material-ui/core/CircularProgress'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Notification from '../ui/Snackbar'

const useStyles = makeStyles(theme => ({
  button: {
    marginBottom: 30,
  },
  text: {
    color: theme.palette.common.black,
    fontSize: 12,
    lineHeight: 1.5,
    [theme.breakpoints.up('sm')]: {
      lineHeight: 2,
    },
  },
  textHeading: {
    color: theme.palette.common.black,
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
  textArea: {
    paddingLeft: 20,
    color: theme.palette.common.black,
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  input: {
    fontSize: 12,
    color: theme.palette.common.black,
    border: '1px solid',
  },
  inputError: {
    fontSize: 12,
    border: `1px solid ${theme.palette.error.main}`,
  },
  inputLabel: {
    fontSize: 12,
    paddingLeft: 20,
    color: theme.palette.common.black,
  },
  buttonSend: {
    marginTop: 15,
    color: theme.palette.common.black,
  },
  progress: {
    color: theme.palette.common.black,
  },
  close: {
    float: 'right',
  },
  actionButton: {
    margin: 0,
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    textTransform: 'capitalize',
    fontSize: 18,
  },
  dialogActions: {
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 30,
  },
}))

function ContactUs() {
  const classes = useStyles()
  const { t } = useTranslation()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [isEmailValid, setEmailValid] = useState(true)
  const [isNameValid, setNameValid] = useState(true)
  const [isMessageValid, setMessageValid] = useState(true)
  const [isTouched, setTouched] = useState(false)
  const [isSnackbarOpen, setSnackbar] = useState(false)
  const [notification, setNotification] = useState('success')
  const [isLoading, setLoading] = useState(false)
  const [isDialogOpen, setDialog] = useState(false)

  const handleChange = name => event => {
    if (!isTouched) {
      setTouched(true)
    }
    if (name === 'email') {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      if (!pattern.test(event.target.value)) {
        setEmailValid(false)
        setEmail(event.target.value)
      } else {
        setEmailValid(true)
        setEmail(event.target.value)
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
    if (name === 'message') {
      if (event.target.value.length > 1000) {
        setMessageValid(false)
      } else {
        setMessageValid(true)
        setMessage(event.target.value)
      }
    }
  }

  const handleSubmit = () => {
    setLoading(true)
    if (
      isEmailValid &&
      isMessageValid &&
      message.length > 0 &&
      isNameValid &&
      isTouched
    ) {
      fetch(process.env.DATAFIRE, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: message,
          emailAddress: email,
          name: name,
        }),
      })
        .then(response => {
          if (response.status === 200) {
            setSnackbar(true)
            setNotification('success')
            setDialog(false)
            setEmail('')
            setMessage('')
            setName('')
            setLoading(false)
          } else {
            setSnackbar(true)
            setNotification('error')
            setLoading(false)
          }
        })
        .catch(err => {
          setSnackbar(true)
          setNotification('error')
          setLoading(false)
        })
    } else {
      setSnackbar(true)
      setNotification('warning')
      setLoading(false)
    }
  }

  return (
    <>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={isSnackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbar(false)}
      >
        <Notification
          onClose={() => setSnackbar(false)}
          variant={notification}
          message={
            notification === 'success'
              ? 'Your email has been sent successfully'
              : notification === 'warning'
              ? 'Please check the form has been filled out correctly'
              : 'An error has occurred.'
          }
        />
      </Snackbar>
      <Button
        variant="contained"
        fullWidth
        color="primary"
        className={classes.button}
        onClick={() => setDialog(true)}
      >
        {t('footer.message')}
      </Button>
      <Dialog open={isDialogOpen} onClose={() => setDialog(false)}>
        <DialogTitle id="dialog-title" className={classes.title}>
          <div className={classes.titleContainer}>
            <Typography>{t('footer.message')}!</Typography>
            <IconButton
              aria-label={t('common.close')}
              className={classes.close}
              color="inherit"
              onClick={() => setDialog(false)}
            >
              <CloseIcon />
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <form noValidate autoComplete="off">
            <Typography className={classes.text}>
              {t('footer.questionsMessage')}
            </Typography>
            <div className={classes.inputContainer}>
              <TextField
                id="footer_name"
                label={t('common.name')}
                type="text"
                className={classes.textField}
                InputProps={{
                  className: isNameValid ? classes.input : classes.inputError,
                  disableUnderline: true,
                  classes: { input: classes.textArea },
                }}
                InputLabelProps={{
                  className: classes.inputLabel,
                }}
                value={name}
                placeholder={t('common.name')}
                onChange={handleChange('name')}
                margin="normal"
                required
              />
              <TextField
                id="footer_email"
                label={t('common.email')}
                type="email"
                className={classes.textField}
                InputProps={{
                  className: isEmailValid ? classes.input : classes.inputError,
                  disableUnderline: true,
                  classes: { input: classes.textArea },
                }}
                InputLabelProps={{
                  className: classes.inputLabel,
                }}
                value={email}
                placeholder={t('common.email')}
                onChange={handleChange('email')}
                margin="normal"
                required
              />
            </div>
            <TextField
              label={t('footer.message')}
              id="footer_message"
              type="text"
              InputProps={{
                className: isMessageValid ? classes.input : classes.inputError,
                disableUnderline: true,
                classes: { input: classes.textArea },
              }}
              InputLabelProps={{
                className: classes.inputLabel,
              }}
              value={message}
              placeholder={t('footer.message')}
              onChange={handleChange('message')}
              margin="normal"
              fullWidth
              multiline
              rows="4"
              required
            />
          </form>
        </DialogContent>
        <DialogActions className={classes.dialogActions}>
          <Button
            onClick={() => setDialog(false)}
            className={classes.actionButton}
          >
            {t('common.cancel')}
          </Button>
          <Button
            data-testid="footer_submit"
            variant="contained"
            color="primary"
            className={classes.actionButton}
            onClick={handleSubmit}
          >
            {isLoading ? (
              <CircularProgress size={24} className={classes.progress} />
            ) : (
              t('footer.send')
            )}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default ContactUs
