import * as React from "react"
import { makeStyles } from "@material-ui/styles"
import Button from "@material-ui/core/Button"
import Box from "@material-ui/core/Box"
import MobileStepper from "@material-ui/core/MobileStepper"
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft"
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight"
import ImageList from "@material-ui/core/ImageList"
import ImageListItem from "@material-ui/core/ImageListItem"
import SwipeableViews from "react-swipeable-views"

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: 60,
  },
  img: {
    width: "100%",
    background: theme.color.cream,
  },
}))

function ProductImages({ images }) {
  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(0)

  const maxSteps = images.length

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleStepChange = step => {
    setActiveStep(step)
  }

  return (
    <div className={classes.root}>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <>
          <SwipeableViews
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {images.map((step, index) => (
              <div key={`image${index}`}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <img
                    className={classes.img}
                    src={step.source}
                    alt={step.alt}
                  />
                ) : null}
              </div>
            ))}
          </SwipeableViews>
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                <KeyboardArrowRight />
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                <KeyboardArrowLeft />
              </Button>
            }
          />
        </>
      </Box>
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <img
          src={images[0].source}
          alt={images[0].alt}
          className={classes.img}
        />
        {/* <ImageList sx={{ width: "100%" }} cols={2} rowHeight={350}>
          {images.map((item, idx) => (
            <React.Fragment key={`gallery${idx}`}>
              {idx !== 0 && (
                <ImageListItem>
                  <img
                    className={classes.img}
                    srcSet={`${item.source}?w=164&h=164&fit=crop&auto=format 1x,
                ${item.source}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.alt}
                    loading="lazy"
                  />
                </ImageListItem>
              )}
            </React.Fragment>
          ))}
        </ImageList> */}
      </Box>
    </div>
  )
}

export default ProductImages
