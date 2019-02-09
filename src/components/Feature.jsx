import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { withTranslation } from 'react-i18next'
import classnames from 'classnames'
import withRoot from '../withRoot'
import { withStyles } from '@material-ui/core/styles'
import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'
import ProductDialog from './ProductDialog'
import { featureProduct } from '../data/ProductData'
import { SurfIcon, FeatherIcon } from '../assets/icons/icons'

const styles = theme => ({
  root: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 15,
    paddingRight: 15,
    background: theme.status.greyBlue,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      paddingLeft: 60,
      paddingRight: 60,
    },
    [theme.breakpoints.up('md')]: {
      flexWrap: 'nowrap',
      paddingTop: 30,
      paddingBottom: 30,
      paddingLeft: 170,
      paddingRight: 170,
    },
  },
  containerDetails: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'right',
    marginRight: 30,
    flexBasis: '30%',
  },
  containerInfo: {
    flexBasis: '100%',
    [theme.breakpoints.up('md')]: {
      marginLeft: 30,
      flexBasis: '30%',
    },
  },
  containerImg: {
    flexBasis: '100%',
    [theme.breakpoints.up('sm')]: {
      flexBasis: '35%',
    },
  },
  detailTitle: {
    textTransform: 'uppercase',
    fontWeight: 700,
    letterSpacing: 3,
    paddingBottom: 5,
    fontSize: 16,
  },
  detailTitle2: {
    textTransform: 'uppercase',
    fontWeight: 700,
    letterSpacing: 3,
    paddingBottom: 5,
    //paddingTop: 35, temp remove until we have main title back in
    fontSize: 16,
    color: theme.palette.secondary.main,
  },
  detailText: {
    textTransform: 'capitalize',
    color: theme.status.greyDk,
    letterSpacing: 3,
    fontSize: 12,
    paddingBottom: 5,
  },
  containerIcon: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingBottom: 25,
  },
  containerIcon2: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 5,
  },
  icon: {
    marginLeft: 5,
    width: 25,
    color: theme.status.black,
  },
  off: {
    color: theme.status.grey,
  },
  img: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginTop: 100,
    },
  },
  barOn: {
    width: 25,
    height: 5,
    background: theme.status.black,
    marginLeft: 5,
  },
  barOff: {
    width: 25,
    height: 5,
    background: theme.status.grey,
    marginLeft: 5,
  },
  padding: {
    marginTop: 30,
  },
})

class Feature extends Component {
  state = {
    isDialogOpen: false,
  }

  handleDialogOpen = () => {
    this.setState({
      isDialogOpen: true,
    })
  }

  handleDialogClose = () => {
    this.setState({ isDialogOpen: false })
  }
  render() {
    const { img, classes, t } = this.props
    const { isDialogOpen } = this.state

    return (
      <div className={classes.root} id="products">
        <Hidden xsDown>
          <div className={classes.containerDetails}>
            <Typography className={classes.detailTitle}>
              {t('feature.surfConditions')}
            </Typography>
            <div className={classes.containerIcon2}>
              <Typography className={classes.detailText}>
                {t('feature.surfDetail2')}
              </Typography>
              <FeatherIcon className={classes.icon} />
              <FeatherIcon className={classes.icon} />
              <FeatherIcon className={classes.icon} />
              <FeatherIcon className={classnames(classes.off, classes.icon)} />
            </div>
            <div className={classes.containerIcon2} style={{ paddingTop: 5 }}>
              <Typography className={classes.detailText}>
                {t('feature.surfDetail1')}
              </Typography>
              <SurfIcon className={classes.icon} />
              <SurfIcon className={classes.icon} />
              <SurfIcon className={classes.icon} />
              <SurfIcon className={classes.icon} />
            </div>
            <Typography
              className={classnames(classes.detailTitle, classes.padding)}
            >
              {t('feature.experience')}
            </Typography>
            <div className={classes.containerIcon2}>
              <Typography className={classes.detailText}>
                {t('feature.beginner')}
              </Typography>
              <div className={classes.barOff} />
              <div className={classes.barOff} />
              <div className={classes.barOff} />
              <div className={classes.barOff} />
            </div>
            <div className={classes.containerIcon2}>
              <Typography className={classes.detailText}>
                {t('feature.intermediate')}
              </Typography>
              <div className={classes.barOn} />
              <div className={classes.barOn} />
              <div className={classes.barOn} />
              <div className={classes.barOff} />
            </div>
            <div className={classes.containerIcon2}>
              <Typography className={classes.detailText}>
                {t('feature.pro')}
              </Typography>
              <div className={classes.barOn} />
              <div className={classes.barOn} />
              <div className={classes.barOn} />
              <div className={classes.barOn} />
            </div>
          </div>
        </Hidden>
        <div className={classes.containerImg}>
          <Img
            fluid={img.node.fluid}
            alt={t('feature.featureProduct')}
            className={classes.img}
          />
        </div>
        <div className={classes.containerInfo}>
          <Typography className={classes.detailTitle2}>
            Honeycomb Fin
          </Typography>
          {/* <Typography className={classes.detailTitle2}>
            {t("feature.highlight")}
          </Typography> */}
          <Typography className={classes.detailText}>
            {t('feature.text')}
          </Typography>
          <ProductDialog
            product={featureProduct[0]}
            buttonText={t('newProduct.more')}
            handleDialogOpen={this.handleDialogOpen}
            handleDialogClose={this.handleDialogClose}
            isDialogOpen={isDialogOpen}
          />
        </div>
      </div>
    )
  }
}

Feature.propTypes = {
  classes: PropTypes.object.isRequired,
  img: PropTypes.object.isRequired,
}

export default withTranslation()(withRoot(withStyles(styles)(Feature)))
