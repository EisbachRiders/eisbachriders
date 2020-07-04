import React from "react"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/styles"
import Snackbar from "@material-ui/core/Snackbar"
import CloseIcon from "@material-ui/icons/Close"
import IconButton from "@material-ui/core/IconButton"

const useStyles = makeStyles(theme => ({
  error: {
    background: theme.color.red,
  },
  success: {
    background: theme.color.green,
  },
}))

function NewsletterSnackbar({ open, onClose, variant }) {
  const classes = useStyles()
  const { t } = useTranslation()
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={open}
      autoHideDuration={5000}
      onClose={onClose}
      ContentProps={{
        "aria-describedby": "message-id",
        className: variant === "success" ? classes.success : classes.error,
      }}
      message={
        variant === "success" ? (
          <span id="message-id">{t("newsletter.success")}</span>
        ) : (
          <span id="message-id">{variant}</span>
        )
      }
      action={
        <IconButton
          key="closeNewsletter"
          aria-label={t("common.close")}
          color="inherit"
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      }
    />
  )
}

export default NewsletterSnackbar
