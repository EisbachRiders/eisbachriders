import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/styles'
import { useTranslation } from 'react-i18next'
import HeaderLinkIcon from './HeaderLinkIcon'
import InstagramIcon from '../../assets/icons/Instagram'
import FacebookIcon from '../../assets/icons/Facebook'
import Badge from '@material-ui/core/Badge'
import CartIcon from '@material-ui/icons/ShoppingCart'

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
}))

function Banner({ cartItems }) {
  const classes = useStyles()
  const { t } = useTranslation()

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
        {/* <HeaderLinkIcon to="/cart/" ariaLabel="cart">
          <Badge badgeContent={cartItems} color="primary">
            <CartIcon />
          </Badge>
        </HeaderLinkIcon> */}
      </div>
    </div>
  )
}

Banner.propTypes = {
  cartItems: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
}

export default Banner
