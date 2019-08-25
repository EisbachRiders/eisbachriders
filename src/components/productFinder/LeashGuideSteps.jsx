import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import StepContent from '@material-ui/core/StepContent'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

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

function getSteps() {
  return [
    'Select your board type',
    'Select your board size',
    'Tell us where you surf',
  ]
}

function getStepContent(step, handleNext) {
  const classes = useStyles()
  const [boardType, setBoardType] = React.useState('')
  const [boardType2, setBoardType2] = React.useState('')

  function handleSurfboard(value) {
    setBoardType2(value)
    handleNext()
  }

  function handleSup(value) {
    setBoardType2(value)
    handleNext()
  }

  switch (step) {
    case 0:
      return (
        <div className={classes.container}>
          <Button onClick={setBoardType('surf')}>Surfboard</Button>
          <Button onClick={setBoardType('sup')}>SUP</Button>
          {boardType === 'surf' && (
            <FormControl component="fieldset" className={classes.formControl}>
              <RadioGroup
                aria-label="Surdboard Type"
                name="surfboardType"
                className={classes.group}
                value={value}
                onChange={handleSurfboard}
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
              </RadioGroup>
            </FormControl>
          )}
          {boardType === 'surf' && (
            <FormControl component="fieldset" className={classes.formControl}>
              <RadioGroup
                aria-label="SUP Type"
                name="supType"
                className={classes.group}
                value={value}
                onChange={handleSup}
              >
                <FormControlLabel
                  value="wave"
                  control={<Radio />}
                  label="Wave"
                />
                <FormControlLabel
                  value="touring"
                  control={<Radio />}
                  label="Touring / All Around Board"
                />
                <FormControlLabel
                  value="race"
                  control={<Radio />}
                  label="Race"
                />
              </RadioGroup>
            </FormControl>
          )}
        </div>
      )
    case 1:
      return 'An ad group contains one or more ads which target a shared set of keywords.'
    case 2:
      return `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`
    default:
      return 'Unknown step'
  }
}

export default function LeashGuideSteps() {
  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(0)
  const steps = getSteps()

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  function handleReset() {
    setActiveStep(0)
  }

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index, handleNext)}</Typography>
              {/* <div className={classes.actionsContainer}>
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
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div> */}
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  )
}
