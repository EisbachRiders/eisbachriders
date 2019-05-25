import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import classnames from 'classnames'
import Button from '@material-ui/core/Button'
import ProductAttribute from './ProductAttribute'
import ProductImg from './ProductImg'

const mapStateToProps = ({ product }) => {
  return { product }
}

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 15,
    paddingRight: 15,
    display: 'flex',
    justifyContent: 'space-between',
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
      paddingTop: 45,
      paddingBottom: 45,
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
  imgContainer: {
    flexBasis: '60%',
  },
  name: {
    paddingBottom: 10,
    fontWeight: 300,
    textAlign: 'left',
  },
  contentContainer: {
    flexBasis: '30%',
  },
  price: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  red: {
    color: theme.status.red,
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
    marginBottom: 30,
  },
}))

function Product({ product }) {
  const { t } = useTranslation()
  const classes = useStyles()

  console.log(product)
  return (
    <div className={classes.root}>
      {Object.keys(product).length !== 0 && (
        <>
          <div className={classes.imgContainer}>
            <ProductImg images={product.images} />
          </div>
          <div className={classes.contentContainer}>
            <Typography variant="h6" className={classes.name}>
              {product.name}
            </Typography>
            <div className={classes.priceContainer}>
              <Typography variant="h6" className={classes.price}>
                {`€${product.price}`}
              </Typography>
              {!product.in_stock && (
                <Typography className={classnames(classes.price, classes.red)}>
                  {t('products.outOfStock')}
                </Typography>
              )}
            </div>
            {product.attributes.length !== 0 &&
              product.attributes.map(elem => (
                <ProductAttribute attribute={elem} />
              ))}
            <Button variant="contained" color="primary">
              {t('products.addToCart')}
            </Button>
          </div>
        </>
      )}
    </div>
  )
}

export default connect(
  mapStateToProps,
  null
)(Product)
