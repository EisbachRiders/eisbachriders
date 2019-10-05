import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Link from '../ui/Link'
import clsx from 'clsx'
import Img from 'gatsby-image'
import { useTranslation } from 'react-i18next'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import Drawer from '@material-ui/core/Drawer'
import MenuIcon from '@material-ui/icons/Menu'
import MobileHeaderList from './MobileHeaderList'
import ERIcon from '../../assets/icons/ER'
import HeaderLink from './HeaderLink'
import HeaderLinkIcon from './HeaderLinkIcon'
import Banner from './Banner'
import { Location } from '@reach/router'

const mapStateToProps = ({ lng, cart }) => {
  return { lng, cart }
}

const mapDispatchToProps = dispatch => {
  return { changeLng: () => dispatch({ type: `LANGUAGE` }) }
}

const useStyles = makeStyles(theme => ({
  appbar: {
    boxShadow: 'none',
    backgroundColor: theme.status.white,
    borderBottom: `1px solid ${theme.status.grey}`,
  },
  toolbar: {
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'space-between',
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 60,
      paddingRight: 60,
    },
  },
  logo: {
    marginTop: 5,
    width: 'auto',
    height: 45,
    color: theme.status.black,
  },
  belowHeaderImg: {
    width: '100%',
    height: 100,
    [theme.breakpoints.up('sm')]: {
      height: 150,
    },
    [theme.breakpoints.up('md')]: {
      height: 300,
    },
  },
  spacer: {
    marginTop: 60,
    [theme.breakpoints.up('sm')]: {
      marginTop: 80,
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: 100,
    },
  },
}))

function Header({ isHomepage, lng, changeLng, cart, img }) {
  const classes = useStyles()
  const { t } = useTranslation()
  const [isDrawerOpen, setDrawer] = useState(false)

  const isActive = true
  return (
    <>
      <AppBar position="fixed" className={classes.appbar}>
        <Hidden smDown>
          <Banner
            isActive={isActive}
            cartItems={cart.length !== 0 ? cart[0].quantity : 0}
          />
        </Hidden>

        <Toolbar className={classes.toolbar}>
          <Link to="/" aria-label="home">
            <ERIcon className={classes.logo} />
          </Link>
          <Hidden xsDown>
            <Location>
              {({ location }) => (
                <div>
                  <HeaderLink
                    to="/eisbach/"
                    isActive={location.pathname == '/eisbach/'}
                    title={t('header.weather')}
                  />
                  <HeaderLink
                    to="/faq/"
                    isActive={location.pathname == '/faq/'}
                    title={t('header.faq')}
                  />
                  {/* <HeaderLink
                    to="/productFinder/"
                    isActive={location.pathname == '/productFinder/'}
                    title={t('header.products')}
                  /> */}
                  <HeaderLink
                    to="/about/"
                    isActive={location.pathname == '/about/'}
                    title={t('header.about')}
                  />
                  <HeaderLink
                    to="/blog/"
                    isActive={location.pathname == '/blog/'}
                    title={t('header.blog')}
                  />
                  <HeaderLink
                    to="/shop/"
                    isActive={location.pathname == '/shop/'}
                    title={t('header.shop')}
                    href="https://shop.eisbach-riders.com/"
                  />
                  <HeaderLink
                    to="/cart/"
                    isActive={location.pathname == '/cart/'}
                    title={t('header.cart')}
                    href="https://shop.eisbach-riders.com/cart/"
                  />
                  {/* <HeaderLink onClick={changeLng} isActive={isActive}>
                {lng === 'en' ? 'de' : 'en'}
              </HeaderLink> */}
                </div>
              )}
            </Location>
          </Hidden>
          <Hidden smUp>
            <IconButton
              onClick={() => setDrawer(true)}
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon color="primary" />
            </IconButton>
            <Drawer
              anchor="right"
              open={isDrawerOpen}
              onClose={() => setDrawer(false)}
            >
              <div
                tabIndex={0}
                role="button"
                onClick={() => setDrawer(false)}
                onKeyDown={() => setDrawer(false)}
              >
                <MobileHeaderList
                  linkLabels={[
                    t('header.shop'),
                    t('header.cart'),
                    t('header.weather'),
                    t('header.faq'),
                    // t('header.products'),
                    // t('header.blog'),
                    t('header.about'),
                    t('header.products'),
                  ]}
                  lng={lng}
                  changeLng={changeLng}
                />
              </div>
            </Drawer>
          </Hidden>
        </Toolbar>
      </AppBar>
      {!isHomepage && img && (
        <Img
          fluid={img.node.fluid}
          alt="surfer with leash and board"
          className={classes.belowHeaderImg}
        />
      )}
      {!isHomepage && !img && <div className={classes.spacer}></div>}
    </>
  )
}

Header.propTypes = {
  isActive: PropTypes.bool,
  lng: PropTypes.string.isRequired,
  changeLng: PropTypes.func.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
