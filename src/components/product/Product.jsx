import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import SwipeableViews from 'react-swipeable-views'
import clsx from 'clsx'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import MobileStepper from '@material-ui/core/MobileStepper'
import Container from '../ui/Container'

const mapStateToProps = ({ product }) => {
  return { product }
}

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  imgContainer: {
    // paddingRight: 0,
    // paddingLeft: 0,
    flexBasis: '40%',
    // [theme.breakpoints.up('md')]: {
    //   paddingRight: 60,
    //   paddingLeft: 60,
    // },
  },
  name: {
    paddingTop: 15,
    paddingBottom: 10,
    fontWeight: 600,
    textAlign: 'left',
  },
  contentContainer: {
    flexBasis: '50%',
  },
  price: {
    color: theme.palette.primary.main,
    fontWeight: 600,
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  img: {
    width: 300,
  },
  listItem: {
    alignItems: 'flex-start',
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
  },
  listItemTextRoot: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  listItemText: {
    fontSize: 14,
  },
  icon: {
    fontSize: 18,
  },
  iconButton: {
    color: theme.status.black,
    fontSize: 36,
  },
  priceContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mobileStepper: {
    background: theme.status.white,
  },
  scroll: {
    paddingBottom: 30,
    overflowY: 'hidden',
    [theme.breakpoints.up('sm')]: {
      height: '55vh',
      overflowY: 'auto',
    },
    '&::-webkit-scrollbar-track': {
      WebkitBoxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.1)',
      borderRadius: 4,
      backgroundColor: theme.status.grey.greyBG,
    },
    '&::-webkit-scrollbar': {
      width: 4,
      backgroundColor: theme.status.grey.greyBG,
    },
    '&::-webkit-scrollbar-thumb': {
      WebkitBoxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.1)',
      borderRadius: 4,
      backgroundColor: theme.status.grey.greyDivs,
    },
  },
}))

function Product({ product }) {
  const { t } = useTranslation()
  const classes = useStyles()
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

  const images = product.images || []
  console.log(product)
  return (
    <Container>
      <div className={classes.container}>
        <div className={classes.imgContainer}>
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
                alt={`product${idx}`}
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
        </div>
        <div className={classes.contentContainer}>
          <div className={classes.priceContainer}>
            <Typography variant="h6" className={classes.price}>
              {`€${product.price}`}
            </Typography>
          </div>
          {/* <List disablePadding className={classes.scroll}>
          {product.more[lng].map((item, idx) => (
              <ListItem key={`listItem${idx}`} className={classes.listItem}>
                <ListItemIcon>
                  <StopIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText
                  primary={item}
                  classes={{
                    root: classes.listItemTextRoot,
                    primary: classes.listItemText,
                  }}
                />
              </ListItem>
            ))} 
        </List> */}
        </div>
      </div>
    </Container>
  )
}

export default connect(
  mapStateToProps,
  null
)(Product)
