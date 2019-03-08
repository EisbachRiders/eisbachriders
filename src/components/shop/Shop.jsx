import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import ShopItem from './ShopItem'
// import {
//   productsFins,
//   productsLeashes,
//   productsOther,
// } from '../../data/ProductData'

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

function Shop(data) {
  const classes = useStyles()
  const { t } = useTranslation()
  //const [products, setProducts] = useState([])
  const [isLoading, setLoading] = useState(false)

  const products = data.data.test.multipleCharacters

  const handleTest = () => {
    setLoading(true)
    fetch(process.env.BILLBEE, {
      method: 'GET',
      headers: new Headers({
        'Access-Control-Allow-Origin': 'http://localhost:8000',
        Authorization:
          'Basic ' +
          new Buffer.from(
            process.env.BILLBEE_USER + ':' + process.env.BILLBEE_PASSWORD
          ).toString('base64'),
        'X-Billbee-Api-Key': process.env.BILLBEE_KEY,
      }),
    })
      .then(response => {
        console.log(response)
        if (response.status === 200) {
          setProducts(response.data)
          setLoading(false)
        } else {
          console.log('load error')
          setLoading(false)
        }
      })
      .catch(err => {
        console.log('load error: ' + err)
        setLoading(false)
      })
  }

  return (
    <div className={classes.root}>
      <Typography className={classes.header} variant="h5">
        {t('shop.fins')}
      </Typography>
      <button onClick={handleTest}>test</button>
      <div className={classes.container}>
        {products.map((elem, idx) => (
          <img
            src={elem.image}
            alt={elem.name}
            style={{ width: 300 }}
            key={`fins${idx}`}
          />
          // <ShopItem product={elem} key={`fins${idx}`} />
        ))}
      </div>
      {/* <Typography className={classes.header} variant="h5">
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
      </div> */}
    </div>
  )
}

export default Shop
