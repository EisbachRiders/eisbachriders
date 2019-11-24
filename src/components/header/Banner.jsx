import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'
import InstagramIcon from '../../assets/icons/Instagram'
import FacebookIcon from '../../assets/icons/Facebook'
import HeaderLinkIcon from './HeaderLinkIcon'
import Badge from '@material-ui/core/Badge'
import IconButton from '@material-ui/core/IconButton'
import CartIcon from '@material-ui/icons/ShoppingCart'
import Link from '../ui/Link'

const useStyles = makeStyles(theme => ({
  banner: {
    background: theme.status.black,
    color: theme.status.white,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  flexItem: {
    flexBasis: '30%',
  },
  flexStart: {
    textAlign: 'left',
  },
  flexEnd: {
    textAlign: 'right',
  },
  text: {
    margin: 0,
    verticalAlign: 'middle',
  },
  icon: {
    fill: theme.status.white,
  },
}))

function Banner({ cart }) {
  const classes = useStyles()
  const { t } = useTranslation()
  let cartItems = 0
  cart.forEach(elem => {
    cartItems += elem.quantity
  })
  console.log(cart)
  console.log(cartItems)

  return (
    <div className={classes.banner}>
      <div className={clsx(classes.flexItem, classes.flexStart)}>
        <HeaderLinkIcon
          href="https://www.facebook.com/EisbachRiders/"
          ariaLabel="facebook"
        >
          <FacebookIcon />
        </HeaderLinkIcon>
        <HeaderLinkIcon
          href="https://www.instagram.com/eisbachriders/"
          ariaLabel="instagram"
        >
          <InstagramIcon />
        </HeaderLinkIcon>
      </div>
      <p className={clsx(classes.flexItem, classes.text)}>
        {t('banner.shipping')}
      </p>
      <div className={clsx(classes.flexItem, classes.flexEnd)}>
        <Link to="/cart/">
          <IconButton
            className={classes.button}
            color="inherit"
            aria-label="cart"
          >
            <Badge badgeContent={cartItems} color="primary">
              <CartIcon className={classes.icon} />
            </Badge>
          </IconButton>
        </Link>
      </div>
    </div>
  )
}

Banner.propTypes = {
  cartItems: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
}

export default Banner
