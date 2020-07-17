import React from "react"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  root: {},
}))

function EisbachDetail({ surfspot }) {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <div className={classes.root}>
      <h1>{surfspot.name}</h1>
      <p>{surfspot.skill}</p>
    </div>
  )
}

export default EisbachDetail
