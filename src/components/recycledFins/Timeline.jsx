import React, { useState } from "react"
import { makeStyles } from "@material-ui/styles"
import Stepper from "@material-ui/core/Stepper"
import Step from "@material-ui/core/Step"
import StepLabel from "@material-ui/core/StepLabel"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  title: {
    fontWeight: 700,
    margin: 0,
    marginLeft: 12,
    paddingLeft: 18,
    borderLeft: "1px solid #bdbdbd",
  },
  text: {
    marginLeft: 12,
    paddingLeft: 18,
    margin: 0,
    borderLeft: "1px solid #bdbdbd",
  },
}))

function getSteps() {
  return ["November", "December", "January", "February", "March"]
}

function getStepTitle(step) {
  switch (step) {
    case 0:
      return `Mold Design`
    case 1:
      return "Mold Manufacturing"
    case 2:
      return `Trials`
    case 3:
      return `Finally Paddling`
    default:
      return "The Delivery"
  }
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `The fin template will be translated into a mold design`
    case 1:
      return "CNC milling and assembling"
    case 2:
      return `First small batch production`
    case 3:
      return `Time to go testing!`
    default:
      return "Done! Time to paddle and celebrate!"
  }
}

export default function Timeline() {
  const classes = useStyles()
  const activeDate =
    new Date().getMonth() === 11
      ? 1
      : new Date().getMonth() === 0
      ? 2
      : new Date().getMonth() === 1
      ? 3
      : 4
  const [activeStep] = useState(activeDate)
  const steps = getSteps()

  return (
    <div className={classes.root}>
      <Stepper
        activeStep={activeStep}
        orientation="vertical"
        className={classes.center}
      >
        {steps.map((label, index) => (
          <Step key={label} className={classes.center}>
            <StepLabel>{label}</StepLabel>
            <div>
              <p className={classes.title}>{getStepTitle(index)}</p>
              <p className={classes.text}>{getStepContent(index)}</p>
            </div>
          </Step>
        ))}
      </Stepper>
    </div>
  )
}
