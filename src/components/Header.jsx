import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Link from './ui/Link'
import Img from 'gatsby-image'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import Drawer from '@material-ui/core/Drawer'
import MobileHeaderList from '../components/MobileHeaderList'
import ERIcon from '../assets/icons/ER'
import { connect } from 'react-redux'
import MenuIcon from '@material-ui/icons/Menu'
// import Badge from '@material-ui/core/Badge'
// import CartIcon from '@material-ui/icons/ShoppingCart'

const mapStateToProps = ({ lng, cart }) => {
  return { lng, cart }
}

const mapDispatchToProps = dispatch => {
  return { changeLng: () => dispatch({ type: `LANGUAGE` }) }
}

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  belowHeaderImg: { width: '100%' },
  banner: {
    background: theme.status.black,
    color: theme.status.white,
    textAlign: 'center',
    padding: 5,
  },
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
  containerXS: {
    display: 'flex',
    justifyContent: 'space-between',
    flexBasis: '100%',
  },
  logo: {
    marginTop: 5,
    width: 'auto',
    height: 45,
    color: theme.status.black,
  },
  logoDarkTheme: {
    marginTop: 5,
    width: 'auto',
    height: 45,
    color: theme.palette.primary.main,
  },
  button: {
    color: theme.palette.common.black,
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: 700,
    marginLeft: 15,
    '&:hover': {
      color: theme.palette.primary.main,
      background: 'transparent',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 16,
    },
  },
  buttonDarkTheme: {
    color: theme.palette.primary.main,
    fontSize: 14,
    fontWeight: 400,
    marginLeft: 15,
    '&:hover': {
      color: theme.palette.common.black,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 16,
    },
  },
  logoButton: {
    marginRight: 15,
  },
  menuIcon: {
    color: theme.palette.common.black,
  },
  icon: {
    color: theme.palette.common.black,
    fontSize: 22,
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  iconDarkTheme: {
    color: theme.palette.primary.main,
    fontSize: 22,
    '&:hover': {
      color: theme.palette.common.black,
    },
  },
  mobileButton: {
    flexBasis: '50%',
    background: theme.palette.common.black,
    borderRadius: 0,
    height: 57,
    boxShadow: 'none',
  },
  primary: {
    backgroundColor: theme.palette.primary.main,
  },
}))

function Header({ isHomepage, lng, changeLng, cart, img }) {
  console.log(img)
  const classes = useStyles()
  const { t } = useTranslation()
  const [isDrawerOpen, setDrawer] = useState(false)
  const totalItems = cart.length !== 0 ? cart[0].quantity : 0
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appbar}>
        <div className={classes.banner}>Free Shipping on Orders Over 15€!</div>
        <Toolbar className={classes.toolbar}>
          <Link to="/" className={classes.logoButton} aria-label="home">
            <ERIcon
              className={isHomepage ? classes.logo : classes.logoDarkTheme}
            />
          </Link>
          <Hidden xsDown>
            <div>
              <Button
                className={
                  isHomepage ? classes.button : classes.buttonDarkTheme
                }
                href="https://shop.eisbach-riders.com/"
              >
                {t('header.shop')}
              </Button>
              <Button
                className={
                  isHomepage ? classes.button : classes.buttonDarkTheme
                }
                href="https://shop.eisbach-riders.com/cart/"
              >
                {t('header.cart')}
              </Button>
              {/* <Link to="/shop/">
                <Button
                  className={
                    isHomepage ? classes.button : classes.buttonDarkTheme
                  }
                >
                  {t('header.shop')}
                </Button>
              </Link>
              <Link to="/weather/">
                <Button
                  className={
                    isHomepage ? classes.button : classes.buttonDarkTheme
                  }
                >
                  {t('header.weather')}
                </Button>
              </Link>
              <Link to="/cart/">
                <IconButton
                  className={
                    isHomepage ? classes.button : classes.buttonDarkTheme
                  }
                  aria-label="Checkout"
                >
                  <Badge badgeContent={totalItems} color="primary">
                    <CartIcon
                      className={
                        isHomepage ? classes.icon : classes.iconDarkTheme
                      }
                    />
                  </Badge>
                </IconButton>
              </Link> 
               <Button
                className={
                  isHomepage ? classes.button : classes.buttonDarkTheme
                }
                onClick={changeLng}
              >
                {lng === 'en' ? 'de' : 'en'}
              </Button> */}
            </div>
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
                  linkLabels={[t('header.shop')]}
                  lng={lng}
                  changeLng={changeLng}
                />
              </div>
            </Drawer>
          </Hidden>
        </Toolbar>
      </AppBar>
      {!isHomepage && (
        <Img
          fluid={img.node.fluid}
          alt="surfer with leash and board"
          className={classes.belowHeaderImg}
        />
      )}
    </div>
  )
}

Header.propTypes = {
  isHomepage: PropTypes.bool,
  lng: PropTypes.string.isRequired,
  changeLng: PropTypes.func.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
