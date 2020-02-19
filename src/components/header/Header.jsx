import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Link from '../ui/Link'
// import clsx from 'clsx'
import Img from 'gatsby-image'
import { useTranslation } from 'react-i18next'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
// import Button from '@material-ui/core/Button'
import Drawer from '@material-ui/core/Drawer'
import MenuIcon from '@material-ui/icons/Menu'
import MobileHeaderList from './MobileHeaderList'
import logo from '../../assets/logos/logo.png'
import HeaderLink from './HeaderLink'
// import HeaderLinkIcon from './HeaderLinkIcon'
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
    background: theme.status.white,
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
    height: 40,
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
    marginTop: 50,
    [theme.breakpoints.up('sm')]: {
      marginTop: 104,
    },
    [theme.breakpoints.up('md')]: {
      marginTop: 80,
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: 98,
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
        <Hidden xsDown>
          <Banner
            isActive={isActive}
            cart={cart ? cart : []}
            lng={lng}
            changeLng={changeLng}
          />
        </Hidden>

        <Toolbar className={classes.toolbar}>
          <Link to="/" aria-label="home">
            <img src={logo} alt="" className={classes.logo} />
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
                  {process.env.NODE_ENV === 'development' && (
                    <HeaderLink
                      to="/productFinder/"
                      isActive={location.pathname == '/productFinder/'}
                      title={t('header.products')}
                    />
                  )}
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
                    to={
                      process.env.NODE_ENV === 'development' ? '/shop/' : null
                    }
                    isActive={location.pathname == '/shop/'}
                    title={t('header.shop')}
                    href="https://shop.eisbach-riders.com/"
                  />
                  {process.env.NODE_ENV !== 'development' && (
                    <HeaderLink
                      isActive={location.pathname == '/cart/'}
                      title={t('header.cart')}
                      href="https://shop.eisbach-riders.com/cart/"
                    />
                  )}
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

export default connect(mapStateToProps, mapDispatchToProps)(Header)
