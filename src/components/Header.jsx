import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Link from './Link'
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
import CartIcon from '@material-ui/icons/ShoppingCart'
import { connect } from 'react-redux'
import MenuIcon from '@material-ui/icons/Menu'

const mapStateToProps = ({ lng }) => {
  return { lng }
}

const mapDispatchToProps = dispatch => {
  return { changeLng: () => dispatch({ type: `LANGUAGE` }) }
}

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  appbar: {
    boxShadow: 'none',
    backgroundColor: 'transparent',
  },
  appbarDarkTheme: {
    boxShadow: 'none',
    backgroundColor: theme.status.greyBlue,
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
    fontSize: 48,
    color: theme.status.black,
  },
  button: {
    color: theme.palette.common.black,
    fontSize: 24,
    fontWeight: 700,
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  logoButton: {
    marginRight: 15,
  },
  menuIcon: {
    color: theme.palette.common.black,
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

function Header({ isHomepage, lng, changeLng }) {
  const classes = useStyles()
  const { t } = useTranslation()
  const [isDrawerOpen, setDrawer] = useState(false)

  const links = [/shop/]
  const linkLabels = [t('header.shop')]

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        className={isHomepage ? classes.appbar : classes.appbarDarkTheme}
      >
        <Toolbar className={classes.toolbar}>
          <Link to="/" className={classes.logoButton} aria-label="home">
            <ERIcon className={classes.logo} />
          </Link>
          <Hidden xsDown>
            <div>
              {links.map((link, idx) => (
                <Link key={`link_${link}`} to={link}>
                  <Button className={classes.button}>{linkLabels[idx]}</Button>
                </Link>
              ))}{' '}
              <Link to={'/checkout/'}>
                <IconButton className={classes.button} aria-label="Checkout">
                  <CartIcon />
                </IconButton>
              </Link>
              <Button className={classes.button} onClick={changeLng}>
                {lng === 'en' ? 'de' : 'en'}
              </Button>
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
                  links={links}
                  linkLabels={linkLabels}
                  lng={lng}
                  changeLng={changeLng}
                />
              </div>
            </Drawer>
          </Hidden>
        </Toolbar>
      </AppBar>
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
