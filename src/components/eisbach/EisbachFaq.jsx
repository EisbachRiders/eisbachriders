import React, { Fragment } from "react"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/core/styles"
import Container from "../ui/Container"

const useStyles = makeStyles((theme) => ({
  container: {
    flexDirection: "column",
  },
  header: {
    textAlign: "center",
    fontWeight: 700,
    width: "100%",
    fontFamily: "secondary",
    fontSize: 32,
    marginBottom: 15,
  },
  question: {
    fontWeight: "bold",
  },
}))

function EisbachFaq() {
  const classes = useStyles()
  const { t } = useTranslation()
  const numQuestions = 1
  return (
    <Container variant="center" className={classes.container}>
      <p className={classes.header}>FAQ</p>
      {new Array(numQuestions).fill(0).map((_, idx) => (
        <Fragment key={`eisbachFaq${idx}`}>
          <p className={classes.question}>
            {t(`eisbach.faq${idx + 1}_question`)}
          </p>
          <p>{t(`eisbach.faq${idx + 1}_answer`)}</p>
        </Fragment>
      ))}
    </Container>
  )
}

export default EisbachFaq
