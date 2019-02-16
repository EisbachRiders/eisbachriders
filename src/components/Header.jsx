import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import i18n from '../i18n/i18n'
import { withTranslation } from 'react-i18next'
import withRoot from '../withRoot'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Hidden from '@material-ui/core/Hidden'
import Button from '@material-ui/core/Button'
import MobileHeaderList from '../components/MobileHeaderList'
import ERIcon from '../assets/icons/ER'

const styles = theme => ({
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
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 60,
      paddingRight: 60,
      justifyContent: 'space-between',
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
    fontSize: 18,
    fontWeight: 700,
    letterSpacing: 1.5,
    '&:hover': {
      color: theme.palette.secondary.main,
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
})

function Header({ isHomepage, classes, t }) {
  const [language, setLanguage] = useState('en')

  const handleLanguageChange = () => {
    const lng = this.state.language === 'en' ? 'de' : 'en'
    i18n.changeLanguage(lng)
    setLanguage(lng)
  }

  const links = ['/shop/', 'contact']

  const linkLabels = [t('header.shop'), t('header.contact')]

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        className={isHomepage ? classes.appbar : classes.appbarDarkTheme}
      >
        <Toolbar className={classes.toolbar}>
          <Link to="/" className={classes.logoButton}>
            <ERIcon className={classes.logo} />
          </Link>
          <Hidden xsDown>
            <div>
              {links.map((link, idx) => (
                <Link key={`link_${link}`} to={link}>
                  <Button className={classes.button}>{linkLabels[idx]}</Button>
                </Link>
              ))}
              <Button className={classes.button} onClick={handleLanguageChange}>
                {language === 'en' ? 'de' : 'en'}
              </Button>
            </div>
          </Hidden>
          <Hidden xsUp>
            <MobileHeaderList />
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  isHomepage: PropTypes.bool,
}

export default withTranslation()(withRoot(withStyles(styles)(Header)))
