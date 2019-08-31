import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import StepContent from '@material-ui/core/StepContent'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
  },
  container: {
    display: 'flex',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}))

function getSteps(boardType, boardSize, surfLocation) {
  return [
    boardType === '' ? 'Select your board type' : boardType,
    boardSize === '' ? 'Select your board size' : boardSize,
    surfLocation === '' ? 'Tell us where you surf' : surfLocation,
  ]
}

function getStepContent(
  step,
  isSurfboard,
  boardType,
  boardSize,
  surfLocation,
  setBoardType,
  setBoardSize,
  setSurfLocation
) {
  const classes = useStyles()
  switch (step) {
    case 0:
      return (
        <div className={classes.container}>
          <FormControl component="fieldset" className={classes.formControl}>
            <RadioGroup
              aria-label="Board Type"
              name="surfboardType"
              className={classes.group}
              value={boardType}
              onChange={e => setBoardType(e.target.value)}
            >
              <FormControlLabel
                value="shortboard"
                control={<Radio />}
                label="Shortboard"
              />
              <FormControlLabel
                value="allAround"
                control={<Radio />}
                label="All Around Board"
              />
              <FormControlLabel
                value="longboard"
                control={<Radio />}
                label="Longboard"
              />
              <FormControlLabel value="wave" control={<Radio />} label="Wave" />
              <FormControlLabel
                value="touring"
                control={<Radio />}
                label="Touring / All Around Board"
              />
              <FormControlLabel value="race" control={<Radio />} label="Race" />
            </RadioGroup>
          </FormControl>
        </div>
      )
    case 1:
      return (
        <div className={classes.container}>
          <FormControl component="fieldset" className={classes.formControl}>
            <RadioGroup
              aria-label="Board Size"
              name="surfboardSize"
              className={classes.group}
              value={boardSize}
              onChange={e => setBoardSize(e.target.value)}
            >
              {isSurfboard && (
                <>
                  <FormControlLabel
                    value="<6ft"
                    control={<Radio />}
                    label="Less than 6ft"
                  />
                  <FormControlLabel
                    value="6-7ft"
                    control={<Radio />}
                    label="6ft - 7ft"
                  />
                  <FormControlLabel
                    value="7-8ft"
                    control={<Radio />}
                    label="7ft - 8ft"
                  />
                  <FormControlLabel
                    value=">8ft"
                    control={<Radio />}
                    label="More than 8ft"
                  />
                </>
              )}
              {!isSurfboard && (
                <>
                  <FormControlLabel
                    value="<8ft"
                    control={<Radio />}
                    label="Less than 8ft"
                  />
                  <FormControlLabel
                    value="8-10ft"
                    control={<Radio />}
                    label="8ft - 10ft"
                  />
                  <FormControlLabel
                    value="10-12ft"
                    control={<Radio />}
                    label="10ft - 12ft"
                  />
                  <FormControlLabel
                    value=">12ft"
                    control={<Radio />}
                    label="More than 12ft"
                  />
                </>
              )}
            </RadioGroup>
          </FormControl>
        </div>
      )
    case 2:
      return (
        <div className={classes.container}>
          <FormControl component="fieldset" className={classes.formControl}>
            <RadioGroup
              aria-label="Surf Location"
              name="surfLocation"
              className={classes.group}
              value={surfLocation}
              onChange={e => setSurfLocation(e.target.value)}
            >
              <FormControlLabel
                value="river"
                control={<Radio />}
                label="river"
              />
              <FormControlLabel
                value="ocean"
                control={<Radio />}
                label="ocean"
              />
              {isSurfboard && (
                <FormControlLabel
                  value="city"
                  control={<Radio />}
                  label="city wave"
                />
              )}
              {!isSurfboard && (
                <FormControlLabel
                  value="lake"
                  control={<Radio />}
                  label="lake"
                />
              )}
            </RadioGroup>
          </FormControl>
        </div>
      )
    default:
      return 'Unknown step'
  }
}

export default function LeashGuideSteps({ onClose }) {
  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(0)
  const [boardType, setBoardType] = React.useState('')
  const [boardSize, setBoardSize] = React.useState('')
  const [surfLocation, setSurfLocation] = React.useState('')
  const steps = getSteps(boardType, boardSize, surfLocation)

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  function handleReset() {
    setActiveStep(0)
    setBoardType(null)
    setBoardSize(null)
    setSurfLocation(null)
  }

  const isSurfboard =
    boardType === 'shortboard' ||
    boardType === 'allAround' ||
    boardType === 'longboard'
  let result = null
  if (isSurfboard) {
    if (boardSize === '>6ft') {
      result = '5ft Surfboard Leash'
    } else if (boardSize === '6-7ft') {
      result = '6ft Surfboard Leash'
    } else if (boardSize === '7-8ft') {
      result = '7ft Surfboard Leash'
    } else if (boardSize === '>8ft') {
      result = '8ft Surfboard Leash'
    } else {
      result = 'oh no! we do not have a leash recommendation for your board!'
    }
  } else {
    if (surfLocation === 'lake') {
      result =
        'No leash required! Wohoo, you can save your money for your next SUP expedition instead! However, if you really love having a leash, our 10ft SUP Leash is awesome for any occasion!'
    } else if (surfLocation === 'ocean') {
      result = '11ft SUP Leash'
    } else {
      result = '10ft SUP Leash'
    }
  }

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <>
                {getStepContent(
                  index,
                  isSurfboard,
                  boardType,
                  boardSize,
                  surfLocation,
                  setBoardType,
                  setBoardSize,
                  setSurfLocation
                )}
              </>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    disabled={
                      (activeStep === 0 && !boardType) ||
                      (activeStep === 1 && !boardSize) ||
                      (activeStep === 2 && !surfLocation)
                    }
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>We recommend: {result}</Typography>
          <Button onClick={onClose} className={classes.button}>
            Done
          </Button>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  )
}
