import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Cart from '../cart/Cart'
import MyTotal from './Total'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 15,
    paddingRight: 15,
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 60,
      paddingRight: 60,
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: 45,
      paddingBottom: 90,
      paddingLeft: 170,
      paddingRight: 170,
    },
  },
}))

function Checkout() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Cart />
      <MyTotal />
    </div>
  )
}

export default Checkout
