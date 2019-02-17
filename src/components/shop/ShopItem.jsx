import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import classnames from 'classnames'
import { makeStyles } from '@material-ui/styles'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { AmazonIcon, EbayIcon } from '../../assets/icons/icons'
import ProductDialog from '../ProductDialog'

const useStyles = makeStyles(theme => ({
  root: {
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
}))

function ShopItem({ product }) {
  const classes = useStyles()
  const { t } = useTranslation()
  const [isDialogOpen, setDialog] = useState(false)

  return (
    <div className={classes.root}>
      <img
        src={product.images[0]}
        className={classes.img}
        alt={`product test`}
        onClick={() => setDialog(true)}
      />
      <div className={classes.descriptionContainer}>
        <Typography className={classes.name}>{product.name}</Typography>
        <div className={classes.fullWidth}>
          <div className={classes.priceContainer}>
            <Typography variant="h6" className={classes.price}>
              {`€${product.price}`}
            </Typography>
            <div className={classes.iconContainer}>
              {product.amazon && (
                <IconButton
                  className={classes.button}
                  aria-label="Amazon"
                  href={product.amazon}
                  target="_blank"
                  rel="noopener"
                >
                  <AmazonIcon className={classes.icon} />
                </IconButton>
              )}
              {product.ebay && (
                <IconButton
                  className={classes.button}
                  aria-label="Ebay"
                  href={product.ebay}
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
        </div>
        <ProductDialog
          product={product}
          buttonText={t('products.features')}
          buttonFull
          handleDialogOpen={() => setDialog(true)}
          handleDialogClose={() => setDialog(false)}
          isDialogOpen={isDialogOpen}
        />
      </div>
    </div>
  )
}

ShopItem.propTypes = {
  product: PropTypes.object.isRequired,
}

export default ShopItem
