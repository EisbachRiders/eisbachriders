import React from 'react'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import ShopItem from './ShopItem'
import {
  productsFins,
  productsLeashes,
  productsOther,
} from '../../data/ProductData'

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
      paddingTop: 90,
      paddingBottom: 90,
      paddingLeft: 170,
      paddingRight: 170,
    },
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 45,
  },
  header: {
    marginBottom: 30,
    textTransform: 'uppercase',
  },
}))

function Shop() {
  const classes = useStyles()
  const { t } = useTranslation()
  return (
    <div className={classes.root}>
      <Typography className={classes.header} variant="h5">
        {t('shop.fins')}
      </Typography>
      <div className={classes.container}>
        {productsFins.map((elem, idx) => (
          <ShopItem product={elem} key={`fins${idx}`} />
        ))}
      </div>
      <Typography className={classes.header} variant="h5">
        {t('shop.leashes')}
      </Typography>
      <div className={classes.container}>
        {productsLeashes.map((elem, idx) => (
          <ShopItem product={elem} key={`fins${idx}`} />
        ))}
      </div>
      <Typography className={classes.header} variant="h5">
        {t('shop.other')}
      </Typography>
      <div className={classes.container}>
        {productsOther.map((elem, idx) => (
          <ShopItem product={elem} key={`fins${idx}`} />
        ))}
      </div>
    </div>
  )
}

export default Shop
