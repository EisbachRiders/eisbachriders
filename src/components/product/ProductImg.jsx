import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import SwipeableViews from 'react-swipeable-views'
import MobileStepper from '@material-ui/core/MobileStepper'
import IconButton from '@material-ui/core/IconButton'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  img: {
    height: 300,
    width: 300,
  },
}))

function ProductImg({ images }) {
  const classes = useStyles()
  const { t } = useTranslation()
  const [activeStep, setActiveStep] = useState(0)
  const handleIndexChange = activeStep => {
    setActiveStep(activeStep)
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1)
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1)
  }

  return (
    <>
      {images && (
        <>
          <SwipeableViews
            enableMouseEvents
            index={activeStep}
            onChangeIndex={handleIndexChange}
          >
            {images.map((img, idx) => (
              <img
                src={img.src}
                key={`img${idx}`}
                className={classes.img}
                alt={`product image ${idx}`}
              />
            ))}
          </SwipeableViews>
          <MobileStepper
            steps={images.length}
            position="static"
            activeStep={activeStep}
            className={classes.mobileStepper}
            nextButton={
              <IconButton
                size="small"
                aria-label={t('common.scrollLeft')}
                onClick={handleNext}
                disabled={activeStep === images.length - 1}
              >
                <KeyboardArrowRight />
              </IconButton>
            }
            backButton={
              <IconButton
                size="small"
                aria-label={t('common.scrollRight')}
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                <KeyboardArrowLeft />
              </IconButton>
            }
          />
        </>
      )}
    </>
  )
}

export default ProductImg
