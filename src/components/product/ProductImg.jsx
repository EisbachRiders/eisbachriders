import React from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({}))

function Product({ product }) {
  const classes = useStyles()

  return (
    <>
      <SwipeableViews
        enableMouseEvents
        index={activeStep}
        onChangeIndex={handleIndexChange}
      >
        {product.images.map((img, idx) => (
          <img
            src={img}
            key={`img${idx}`}
            className={classes.img}
            alt={`product${idx}`}
          />
        ))}
      </SwipeableViews>
      <MobileStepper
        steps={product.images.length}
        position="static"
        activeStep={activeStep}
        className={classes.mobileStepper}
        nextButton={
          <IconButton
            size="small"
            aria-label={t('common.scrollLeft')}
            onClick={handleNext}
            disabled={activeStep === product.images.length - 1}
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
  )
}

export default Product
