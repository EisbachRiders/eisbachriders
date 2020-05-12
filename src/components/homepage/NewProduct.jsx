import React, { useState } from 'react'
import SwipeableViews from 'react-swipeable-views'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Hidden from '@material-ui/core/Hidden'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MobileStepper from '@material-ui/core/MobileStepper'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import img_wax from '../../assets/images/newProduct/surfWax.jpg'
import img_hangers from '../../assets/images/newProduct/hangers.png'
import logo_wax from '../../assets/images/newProduct/waxLogo.jpg'
import logo_hangers from '../../assets/images/newProduct/hangerLogo.png'
import Container from '../ui/Container'

const useStyles = makeStyles(theme => ({
  container: {
    background: `linear-gradient(to bottom, ${theme.status.greyBlue} 50%, #fff 50%)`,
    flexDirection: 'column',
  },
  swipeable: {
    flexShrink: 'none',
  },
  textContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  img: {
    height: '60%',
    width: '60%',
    [theme.breakpoints.up('lg')]: {
      marginLeft: 50,
    },
  },
  paper: {
    padding: 15,
    textAlign: 'center',
    boxShadow: 'none',
    [theme.breakpoints.up('sm')]: {
      flexBasis: '50%',
      marginLeft: -100,
      marginRight: 10,
      marginBottom: 10,
      boxShadow:
        '0px 6px 6px -3px rgba(0,0,0,0.2), 0px 10px 14px 1px rgba(0,0,0,0.14), 0px 4px 18px 3px rgba(0,0,0,0.12)',
    },
    [theme.breakpoints.up('md')]: {
      width: 400,
      marginLeft: -100,
      marginBottom: 0,
    },
  },
  logo: {
    width: 125,
  },
  title: {
    textTransform: 'uppercase',
    fontWeight: 700,
    letterSpacing: 3,
    paddingBottom: 5,
    fontSize: 16,
  },
  mobileStepper: {
    background: 'transparent',
  },
  button: {
    marginTop: 30,
  },
  nextButton: {
    [theme.breakpoints.up('sm')]: {
      marginTop: -430,
      marginRight: -70,
      zIndex: 200,
    },
  },
  backButton: {
    [theme.breakpoints.up('sm')]: {
      marginTop: -430,
      marginLeft: -40,
      zIndex: 200,
    },
  },
}))

function NewProduct() {
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

  const products = [
    {
      product: 'hangers',
      title: 'Hidden Surfboard Wall Rack',
      amazon: 'https://shop.eisbach-riders.com/product/surfboard-wall-rack/',
      img: img_hangers,
      logo: logo_hangers,
    },
    {
      product: 'wax',
      title: 'Bee Swell Surf Wax',
      amazon: 'https://shop.eisbach-riders.com/shop/bee-swell-surf-wax/',
      img: img_wax,
      logo: logo_wax,
    },
  ]
  return (
    <Container className={classes.container}>
      <SwipeableViews
        enableMouseEvents
        index={activeStep}
        onChangeIndex={handleIndexChange}
        className={classes.swipeable}
      >
        {products.map(elem => (
          <div
            key={`newproduct${elem.product}`}
            className={classes.textContainer}
          >
            <Hidden xsDown>
              <img
                src={elem.img}
                alt={t('newProduct.imgAlt')}
                className={classes.img}
              />
            </Hidden>
            <Paper className={classes.paper} elevation={10}>
              <img
                src={elem.logo}
                alt={t(elem.product)}
                className={classes.logo}
              />
              <Typography className={classes.title}>{elem.title}</Typography>
              <Typography>{t(`newProduct.text_${elem.product}`)}</Typography>
              <Button
                color="primary"
                variant="outlined"
                className={clsx(classes.button)}
                href={elem.amazon}
              >
                {t('common.more')}
              </Button>
            </Paper>
          </div>
        ))}
      </SwipeableViews>
      <MobileStepper
        steps={2}
        position="static"
        activeStep={activeStep}
        className={classes.mobileStepper}
        nextButton={
          <IconButton
            size="small"
            className={classes.nextButton}
            aria-label={t('common.scrollLeft')}
            onClick={handleNext}
            disabled={activeStep === 1}
          >
            <KeyboardArrowRight />
          </IconButton>
        }
        backButton={
          <IconButton
            size="small"
            className={classes.backButton}
            aria-label={t('common.scrollRight')}
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            <KeyboardArrowLeft />
          </IconButton>
        }
      />
    </Container>
  )
}

export default NewProduct
