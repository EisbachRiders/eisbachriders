import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import SwipeableViews from 'react-swipeable-views'
import classnames from 'classnames'
import { makeStyles } from '@material-ui/styles'
import IconButton from '@material-ui/core/IconButton'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'

const useStyles = makeStyles(theme => ({
  containerSpace: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    height: 15,
    width: 15,
    borderRadius: '50%',
    margin: '0 5px',
  },
  blue: {
    background: theme.status.blue,
  },
  grey: {
    background: theme.status.grey,
  },
  white: {
    border: `1px solid ${theme.palette.common.black}`,
    background: theme.status.white,
  },
  black: {
    background: theme.status.black,
  },
  pink: {
    background: theme.status.pink,
  },
  yellow: {
    background: theme.status.yellow,
  },
  orange: {
    background: theme.status.orange,
  },
  green: {
    background: theme.status.teal,
  },
}))

function Colors({ colors }) {
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

  const swipeable = colors.length > 5
  const circle = color => (
    <div
      key={color}
      className={classnames(classes.circle, {
        [classes.blue]: color === 'Blue',
        [classes.grey]: color === 'Grey',
        [classes.white]: color === 'White',
        [classes.black]: color === 'Black',
        [classes.pink]: color === 'Pink',
        [classes.orange]: color === 'Orange',
        [classes.red]: color === 'Red',
        [classes.green]: color === 'Green',
        [classes.yellow]: color === 'Yellow',
      })}
    />
  )
  return (
    <div
      className={swipeable ? classes.containerSpace : classes.containerCenter}
    >
      {swipeable && (
        <>
          <IconButton
            size="small"
            className={classes.backButton}
            aria-label={t('common.scrollRight')}
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            <KeyboardArrowLeft />
          </IconButton>
          <SwipeableViews
            enableMouseEvents
            index={activeStep}
            onChangeIndex={handleIndexChange}
          >
            <div className={classes.containerCenter}>
              {colors.slice(0, 5).map(color => circle(color))}
            </div>
            <div className={classes.containerCenter}>
              {colors.slice(5).map(color => circle(color))}
            </div>
          </SwipeableViews>
          <IconButton
            size="small"
            className={classes.nextButton}
            aria-label={t('common.scrollLeft')}
            onClick={handleNext}
            disabled={activeStep === 1}
          >
            <KeyboardArrowRight />
          </IconButton>
        </>
      )}
      {!swipeable && (
        <div className={classes.containerCenter}>
          {colors.map(color => circle(color))}
        </div>
      )}
    </div>
  )
}

Colors.propTypes = {
  colors: PropTypes.array.isRequired,
}

export default Colors
