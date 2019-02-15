import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import classnames from 'classnames'
import withRoot from '../withRoot'
import { withTranslation } from 'react-i18next'
import SwipeableViews from 'react-swipeable-views'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Hidden from '@material-ui/core/Hidden'
import MobileStepper from '@material-ui/core/MobileStepper'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import { AmazonIcon, EbayIcon } from '../assets/icons/icons'
import ProductDialog from './ProductDialog'
import { productsFins } from '../data/ProductData'

const styles = theme => ({
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
      paddingTop: 90,
      paddingBottom: 90,
      paddingLeft: 170,
      paddingRight: 170,
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
    paddingTop: 15,
    paddingBottom: 10,
    fontWeight: 600,
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
  priceContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 15,
    paddingLeft: 15,
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'center',
      paddingRight: 0,
      paddingLeft: 0,
    },
  },
  price: {
    color: theme.palette.primary.main,
    fontWeight: 600,
    marginRight: 15,
    fontSize: 16,
    [theme.breakpoints.up('md')]: {
      fontSize: 20,
    },
  },
  fullWidth: {
    width: '100%',
  },
  iconContainer: {
    marginLeft: 15,
  },
  icon: {
    fill: theme.status.black,
    fontSize: 18,
    [theme.breakpoints.up('md')]: {
      fontSize: 36,
    },
  },
  ebay: {
    fontSize: 24,
    [theme.breakpoints.up('md')]: {
      fontSize: 36,
    },
  },
  mobileStepper: {
    background: theme.status.white,
  },
})

class Products extends Component {
  state = {
    activeStep: 0,
    isDialogOpen: [false, false, false],
  }

  handleDialogOpen = idx => {
    let open = [false, false, false]
    open[idx] = true
    this.setState({
      isDialogOpen: open,
    })
  }

  handleDialogClose = () => {
    this.setState({ isDialogOpen: [false, false, false] })
  }

  handleIndexChange = activeStep => {
    this.setState({
      activeStep,
    })
  }

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }))
  }

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }))
  }

  render() {
    const { classes, t } = this.props
    const { activeStep, isDialogOpen } = this.state

    return (
      <div className={classes.root} id="products">
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
                  onClick={() => this.handleDialogOpen(idx)}
                />
                <div className={classes.descriptionContainer}>
                  <Typography className={classes.name}>{elem.name}</Typography>
                  <div className={classes.fullWidth}>
                    <div className={classes.priceContainer}>
                      <Typography variant="h6" className={classes.price}>
                        {`€${elem.price}`}
                      </Typography>
                      <div className={classes.iconContainer}>
                        {elem.amazon && (
                          <IconButton
                            className={classes.button}
                            aria-label="Amazon"
                            href={elem.amazon}
                            target="_blank"
                            rel="noopener"
                          >
                            <AmazonIcon className={classes.icon} />
                          </IconButton>
                        )}
                        {elem.ebay && (
                          <IconButton
                            className={classes.button}
                            aria-label="Ebay"
                            href={elem.ebay}
                            target="_blank"
                            rel="noopener"
                          >
                            <EbayIcon
                              className={classnames(classes.icon, classes.ebay)}
                            />
                          </IconButton>
                        )}
                      </div>
                    </div>
                    <ProductDialog
                      product={elem}
                      buttonText={t('products.features')}
                      buttonFull
                      idx={idx}
                      handleDialogOpen={this.handleDialogOpen}
                      handleDialogClose={this.handleDialogClose}
                      isDialogOpen={isDialogOpen[idx]}
                    />
                  </div>
                </div>
              </div>
            ))}
          </Hidden>
          <Hidden smUp>
            <SwipeableViews
              enableMouseEvents
              index={activeStep}
              onChangeIndex={this.handleIndexChange}
            >
              {productsFins.map((elem, idx) => (
                <div className={classes.itemContainer} key={`product${idx}`}>
                  <img
                    src={elem.images[0]}
                    className={classes.img}
                    alt={`product ${idx}`}
                  />
                  <div className={classes.descriptionContainer}>
                    <Typography className={classes.name}>
                      {elem.name}
                    </Typography>
                    <div className={classes.fullWidth}>
                      <div className={classes.priceContainer}>
                        <Typography variant="h6" className={classes.price}>
                          {`€${elem.price}`}
                        </Typography>
                        <div className={classes.iconContainer}>
                          {elem.amazon && (
                            <IconButton
                              className={classes.button}
                              aria-label="Amazon"
                              href={elem.amazon}
                              target="_blank"
                              rel="noopener"
                            >
                              <AmazonIcon className={classes.icon} />
                            </IconButton>
                          )}
                          {elem.ebay && (
                            <IconButton
                              className={classes.button}
                              aria-label="Ebay"
                              href={elem.ebay}
                              target="_blank"
                              rel="noopener"
                            >
                              <EbayIcon
                                className={classnames(
                                  classes.icon,
                                  classes.ebay
                                )}
                              />
                            </IconButton>
                          )}
                        </div>
                      </div>
                      <ProductDialog
                        product={elem}
                        buttonText={t('products.features')}
                        buttonFull
                        idx={idx}
                        handleDialogOpen={this.handleDialogOpen}
                        handleDialogClose={this.handleDialogClose}
                        isDialogOpen={isDialogOpen[idx]}
                      />
                    </div>
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
                  onClick={this.handleNext}
                  disabled={activeStep === 2}
                >
                  <KeyboardArrowRight />
                </IconButton>
              }
              backButton={
                <IconButton
                  size="small"
                  aria-label={t('common.scrollRight')}
                  onClick={this.handleBack}
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
}

Products.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withTranslation()(withRoot(withStyles(styles)(Products)))
