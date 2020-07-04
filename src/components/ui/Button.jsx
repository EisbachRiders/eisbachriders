import React from "react"
import { makeStyles } from "@material-ui/styles"
import { default as MuiButton } from "@material-ui/core/Button"

const useStyles = makeStyles(theme => ({
  root: {
    padding: "9px 27px",
    borderRadius: 0,
  },
  contained: {
    boxShadow: "none",
  },
}))

function Button({ className: classNameProp, children, ...props }) {
  const classes = useStyles()
  return (
    <MuiButton
      className={classNameProp}
      classes={{ root: classes.root, contained: classes.contained }}
      {...props}
    >
      {children}
    </MuiButton>
  )
}

export default Button
