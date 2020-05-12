import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles'
import Badge from '@material-ui/core/Badge'
import CartIcon from '@material-ui/icons/ShoppingCart'
import InstagramIcon from '../../assets/icons/Instagram'
import FacebookIcon from '../../assets/icons/Facebook'
import HeaderLinkIcon from './HeaderLinkIcon'
import HeaderLink from './HeaderLink'

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
    flexBasis: '20%',
  },
  start: {
    textAlign: 'left',
  },
  end: {
    textAlign: 'right',
  },
  text: {
    flexGrow: 1,
    margin: 0,
  },
  icon: {
    fill: theme.status.white,
  },
}))

function Banner({ cart, lng, changeLng }) {
  const classes = useStyles()
  const { t } = useTranslation()
  let cartItems = 0
  cart.forEach(elem => {
    cartItems += elem.quantity
  })

  return (
    <div className={classes.banner}>
      <div className={clsx(classes.flexItem, classes.start)}>
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
      <p className={clsx(classes.text)}>{t('banner.shipping')}</p>
      <div className={clsx(classes.flexItem, classes.end)}>
        {process.env.NODE_ENV === 'development' && (
          <>
            <HeaderLink
              onClick={changeLng}
              inverse
              title={lng === 'en' ? 'de' : 'en'}
            />
            <HeaderLinkIcon to="/cart/" ariaLabel="cart">
              <Badge badgeContent={cartItems} color="primary">
                <CartIcon className={classes.icon} />
              </Badge>
            </HeaderLinkIcon>
          </>
        )}
      </div>
    </div>
  )
}

Banner.propTypes = {
  cart: PropTypes.array.isRequired,
}

export default Banner
