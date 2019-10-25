import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles'
import SwipeableViews from 'react-swipeable-views'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Hidden from '@material-ui/core/Hidden'
import Button from '@material-ui/core/Button'
import MobileStepper from '@material-ui/core/MobileStepper'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import { productsFins } from '../../data/ProductData'

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 15,
    paddingRight: 15,
    background: theme.palette.common.white,
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 60,
      paddingRight: 60,
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: 60,
      paddingBottom: 60,
      paddingLeft: 90,
      paddingRight: 90,
    },
    [theme.breakpoints.up('lg')]: {
      paddingTop: 90,
      paddingBottom: 90,
      paddingLeft: 170,
      paddingRight: 170,
    },
    [theme.breakpoints.up('xl')]: {
      paddingTop: 90,
      paddingBottom: 90,
      paddingLeft: 400,
      paddingRight: 400,
    },
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
    },
  },
  title: {
    textTransform: 'uppercase',
    textAlign: 'center',
    paddingBottom: 15,
  },
  itemContainer: {
    flexBasis: '30%',
    textAlign: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  img: {
    width: '80%',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
    },
  },
  name: {
    paddingBottom: 15,
    textAlign: 'center',
  },
  descriptionContainer: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mobileStepper: {
    background: theme.palette.common.white,
  },
  button: {
    color: theme.palette.common.black,
  },
}))

function Showcase() {
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
    <div className={classes.root}>
      <Typography className={classes.title} variant="h5">
        {t('products.sectionTitle')}
      </Typography>
      <div className={classes.container}>
        <Hidden xsDown>
          {productsFins.map((elem, idx) => (
            <div className={classes.itemContainer} key={`product${idx}`}>
              <img
                src={elem.images[0]}
                className={classes.img}
                alt={`product ${idx}`}
                onClick={() => handleDialogOpen(idx)}
              />
              <div className={classes.descriptionContainer}>
                <Typography className={classes.name}>{elem.name}</Typography>
                <Button
                  color="primary"
                  variant="outlined"
                  className={classes.button}
                  href={elem.amazon}
                >
                  {t('common.more')}
                </Button>
              </div>
            </div>
          ))}
        </Hidden>
        <Hidden smUp>
          <SwipeableViews
            enableMouseEvents
            index={activeStep}
            onChangeIndex={handleIndexChange}
          >
            {productsFins.map((elem, idx) => (
              <div className={classes.itemContainer} key={`product${idx}`}>
                <img
                  src={elem.images[0]}
                  className={classes.img}
                  alt={`product ${idx}`}
                />
                <div className={classes.descriptionContainer}>
                  <Typography className={classes.name}>{elem.name}</Typography>
                  <Button
                    color="primary"
                    variant="outlined"
                    className={classes.button}
                    href={elem.amazon}
                    target="_blank"
                    rel="noopener"
                  >
                    {t('common.more')}
                  </Button>
                </div>
              </div>
            ))}
          </SwipeableViews>
          <MobileStepper
            steps={3}
            position="static"
            activeStep={activeStep}
            className={classes.mobileStepper}
            nextButton={
              <IconButton
                size="small"
                aria-label={t('common.scrollLeft')}
                onClick={handleNext}
                disabled={activeStep === 2}
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
        </Hidden>
      </div>
    </div>
  )
}

export default Showcase
