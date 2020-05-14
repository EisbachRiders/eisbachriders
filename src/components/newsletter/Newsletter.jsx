import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import clsx from "clsx"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogTitle from "@material-ui/core/DialogTitle"
import TextField from "@material-ui/core/TextField"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import NewsletterSnackbar from "./Snackbar"

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.primary.main,
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems: "center",
    padding: "15px 0",
  },
  textContainer: {
    marginBottom: 15,
    [theme.breakpoints.up("sm")]: {
      marginBottom: 0,
      marginRight: 50,
    },
  },
  text: {
    color: theme.color.white,
    fontFamily: "secondary",
    letterSpacing: 2,
    fontSize: 18,
    margin: 0,
    [theme.breakpoints.up("md")]: {
      width: 500,
    },
  },
  textIndent: {
    [theme.breakpoints.up("sm")]: {
      marginLeft: 100,
    },
  },
  button: {
    background: theme.color.white,
    color: theme.palette.primary.main,
    fontSize: 16,
    [theme.breakpoints.up("md")]: {
      padding: "15px 45px",
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  textField: {
    marginBottom: 15,
  },
  dialogContent: {
    padding: "0 30px",
  },
  dialogActions: {
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 30,
    padding: 0,
    flexDirection: "column",
    alignItems: "flex-end",
  },
  legal: {
    fontSize: 11,
    marginTop: 15,
  },
  buttonCancel: {
    marginRight: 15,
  },
  buttonSubmit: {
    margin: 0,
  },
}))

function Newsletter() {
  const classes = useStyles()
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"))
  const { t } = useTranslation()
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [isEmailValid, setEmailValid] = useState(null)
  const [isNameValid, setNameValid] = useState(null)
  const [isDialogOpen, setDialog] = useState(false)
  const [isSnackbarOpen, setSnackbar] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState(false)
  const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

  const handleSubmit = async e => {
    if (isEmailValid && isNameValid) {
      //   const result = await addToMailchimp(email, {
      //     FNAME: name,
      //     gdpr_26529: true,
      //   })
      const result = { msg: "test" }
      setDialog(false)
      if (result.result === "error") {
        setSnackbar(true)
        setSnackbarMessage(
          result.msg.includes("<a") ? result.msg.split("<a")[0] : result.msg
        )
      } else {
        setSnackbar(true)
        setEmailValid(true)
        setNameValid(true)
        setSnackbarMessage("success")
      }
    }
    if (!pattern.test(email)) {
      setEmailValid(false)
    }
    if (name.length <= 500) {
      setNameValid(false)
    }
  }

  const handleChange = name => event => {
    if (name === "email") {
      setEmail(event.target.value)
      if (!pattern.test(event.target.value)) {
        setEmailValid(false)
      } else {
        setEmailValid(true)
      }
    } else if (name === "name") {
      if (event.target.value.length > 500) {
        setNameValid(false)
      } else {
        setNameValid(true)
        setName(event.target.value)
      }
    }
  }

  return (
    <>
      <NewsletterSnackbar
        open={isSnackbarOpen}
        onClose={() => setSnackbar(false)}
        variant={snackbarMessage}
      />
      <div className={classes.root}>
        <div className={classes.textContainer}>
          <p className={classes.text}>{t("newsletter.stayintouch1")}</p>
          <p className={clsx(classes.text, classes.textIndent)}>
            {t("newsletter.stayintouch2")}
          </p>
        </div>
        <Button
          variant="contained"
          size="large"
          className={classes.button}
          onClick={() => setDialog(true)}
        >
          {t("newsletter.signup")}
        </Button>
      </div>
      <Dialog
        open={isDialogOpen}
        onClose={() => setDialog(false)}
        fullScreen={fullScreen}
      >
        <DialogTitle id="dialog-title">{t("newsletter.consent")}</DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <form className={classes.form}>
            <TextField
              required
              id="email"
              type="text"
              label="email"
              error={isEmailValid === null ? null : !isEmailValid}
              placeholder={t("form.email")}
              value={email}
              onChange={handleChange("email")}
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
            <TextField
              required
              id="name"
              type="text"
              label="name"
              error={isNameValid === null ? null : !isNameValid}
              placeholder={t("form.name")}
              value={name}
              onChange={handleChange("name")}
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
          </form>
        </DialogContent>
        <DialogActions className={classes.dialogActions}>
          <div>
            <Button
              onClick={() => setDialog(false)}
              className={classes.buttonCancel}
              color="primary"
              variant="outlined"
            >
              {t("newsletter.cancel")}
            </Button>
            <Button
              onClick={handleSubmit}
              className={classes.buttonSubmit}
              color="primary"
              variant="contained"
              type="submit"
            >
              {t("newsletter.subscribe")}
            </Button>
          </div>
          <Typography className={classes.legal}>
            {t("newsletter.legal1")}
            <a href="https://mailchimp.com/legal/">{t("newsletter.legal2")}</a>
          </Typography>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default Newsletter
