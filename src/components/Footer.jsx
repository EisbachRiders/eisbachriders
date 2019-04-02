import React, { useState } from 'react'
import Link from './Link'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Snackbar from '@material-ui/core/Snackbar'
import CircularProgress from '@material-ui/core/CircularProgress'
import Notification from './Snackbar'
import InstagramIcon from '../assets/icons/Instagram'
import FacebookIcon from '../assets/icons/Facebook'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.status.black,
    width: '100%',
  },
  legal: {
    backgroundColor: theme.status.black,
  },
  copyright: {
    fontSize: 14,
    textTransform: 'capitalize',
    color: theme.palette.common.white,
    letterSpacing: 3,
    textTransform: 'uppercase',
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
    [theme.breakpoints.up('lg')]: {
      paddingTop: 45,
      paddingBottom: 90,
      paddingLeft: 170,
      paddingRight: 170,
    },
    [theme.breakpoints.up('xl')]: {
      paddingTop: 90,
      paddingBottom: 90,
      paddingLeft: 400,
      paddingRight: 400,
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
    color: theme.palette.common.white,
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
    color: theme.palette.common.white,
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
    color: theme.palette.common.white,
    border: '1px solid',
  },
  inputError: {
    fontSize: 12,
    border: `1px solid ${theme.palette.error.main}`,
  },
  button: {
    borderColor: theme.status.white,
    borderRadius: 0,
    minWidth: 0,
    padding: 8,
    marginRight: 30,
    '&:hover, &:focus': {
      borderColor: theme.palette.primary.main,
      '& $icon': {
        color: theme.palette.primary.main,
      },
    },
    [theme.breakpoints.up('sm')]: {
      marginRight: 15,
    },
  },
  icon: {
    width: 18,
    height: 18,
    color: theme.palette.common.white,
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingTop: 15,
  },
  buttonSend: {
    marginTop: 15,
    color: theme.palette.common.black,
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  link: {
    color: theme.status.grey,
    border: 'none',
    background: 'transparent',
    textDecoration: 'none',
    cursor: 'pointer',
    paddingLeft: 5,
    paddingRight: 5,
  },
  textArea: {
    paddingLeft: 20,
    color: theme.palette.common.white,
  },
  inputLabel: {
    fontSize: 12,
    paddingLeft: 20,
    color: theme.palette.common.white,
  },
  progress: {
    width: 15,
  },
}))

function Footer() {
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
    <div className={classes.root}>
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
      <div className={classes.container}>
        <div className={classes.flexItem}>
          <form noValidate autoComplete="off">
            <Typography className={classes.textHeading} variant="h5">
              {t('footer.message')}
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
            <Button
              data-testid="footer_submit"
              variant="contained"
              color="primary"
              className={classes.buttonSend}
              fullWidth
              onClick={handleSubmit}
            >
              {isLoading ? (
                <CircularProgress size={24} color="primary" />
              ) : (
                t('footer.send')
              )}
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
              className={classes.button}
              href="hhttps://www.facebook.com/EisbachRiders-262685337908914/"
              target="_blank"
              rel="noopener"
            >
              <FacebookIcon className={classes.icon} />
            </Button>
            <Button
              variant="outlined"
              className={classes.button}
              href="https://www.instagram.com/eisbachriders/"
              target="_blank"
              rel="noopener"
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
            {t('footer.imprint')}
          </Link>
          |{' '}
          <Link to="/privacy/" className={classes.link}>
            {t('footer.privacy')}
          </Link>
        </Typography>
      </div>
    </div>
  )
}

export default Footer
