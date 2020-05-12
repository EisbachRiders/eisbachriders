import React from 'react'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import BagItem from './CartItem'
import Container from '../ui/Container'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: 30,
    marginRight: 30,
  },
  title: {
    textTransform: 'uppercase',
    paddingTop: 30,
    paddingBottom: 30,
    marginBottom: 30,
    fontWeight: 600,
    borderBottom: `.5px solid ${theme.status.grey}`,
  },
}))

function Cart() {
  const classes = useStyles()
  const { t } = useTranslation()
  const cart = [
    {
      img: '../../assets/images/FCS/img1.jpg',
      name: 'fin number item',
      price: 14,
      quantity: 1,
    },
    {
      img: '../../assets/images/FCS/img1.jpg',
      name: 'fin number 2',
      price: 24,
      quantity: 2,
    },
  ]
  return (
    <Container>
      <Typography className={classes.title}>{t('checkout.myBag')}</Typography>
      {cart.map((elem, idx) => (
        <BagItem item={elem} key={`bagItem${idx}`} />
      ))}
      <Typography className={classes.total}>{t('checkout.total')}</Typography>
    </Container>
  )
}

Cart.propTypes = {}

export default Cart
