import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Link from '../ui/Link'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import clsx from 'clsx'
import Colors from './Colors'

const mapDispatchToProps = dispatch => {
  return {
    changeProduct: product => dispatch({ type: `PRODUCT`, product }),
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexBasis: '50%',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 30,
    [theme.breakpoints.up('sm')]: {
      flexBasis: '22%',
    },
  },
  img: {
    width: '80%',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
    },
  },
  descriptionContainer: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  name: {
    marginBottom: 5,
    fontSize: 14,
    fontWeight: 300,
    textTransform: 'capital',
    color: theme.status.greyMed,
    width: '100%',
  },
  priceContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 14,
    marginBottom: 5,
  },
  red: {
    color: theme.status.red,
    textTransform: 'capitalize',
  },
}))

function ShopItem({ product, changeProduct }) {
  const classes = useStyles()
  const { t } = useTranslation()

  const placeholder = !product.images
  const colors =
    product.attributes &&
    product.attributes.length !== 0 &&
    product.attributes.find(e => e.name === 'Color')
      ? product.attributes.find(e => e.name === 'Color').options
      : []

  return (
    <div className={classes.root}>
      {!placeholder && (
        <>
          <Link to={'/product/'}>
            <img
              src={product.images[0].src}
              className={classes.img}
              alt={product.name}
              onClick={() => changeProduct(product)}
            />
          </Link>
          <div className={classes.descriptionContainer}>
            <div>
              <div className={classes.priceContainer}>
                <Typography
                  className={classes.price}
                >{`€${product.price}`}</Typography>
                {!product.in_stock && (
                  <Typography className={clsx(classes.price, classes.red)}>
                    {t('products.outOfStock')}
                  </Typography>
                )}
              </div>
              <Typography className={classes.name}>{product.name}</Typography>
            </div>
            <Colors colors={colors} />
          </div>
        </>
      )}
    </div>
  )
}

export default connect(
  null,
  mapDispatchToProps
)(ShopItem)
