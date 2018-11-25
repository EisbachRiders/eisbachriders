import React, { Component } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import classnames from 'classnames'
import withRoot from '../withRoot'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import Drawer from '@material-ui/core/Drawer'
import MenuIcon from '@material-ui/icons/Menu'

import logoWhite from '../assets/logos/logoWhite_small.png'
import MobileHeaderList from './MobileHeaderList'
import Footer from './Footer'

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  appbar: {
    boxShadow: 'none',
    backgroundColor: 'transparent',
  },
  appbarDarkTheme: {
    boxShadow: 'none',
    backgroundColor: theme.palette.primary.main,
  },
  toolbar: {
    paddingLeft: 0,
    paddingRight: 0,
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
    width: 40,
  },
  button: {
    color: theme.palette.common.white,
    fontSize: 18,
    letterSpacing: 1.5,
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
    borderRadius: 0,
    height: 57,
    boxShadow: 'none',
  },
  primary: {
    backgroundColor: theme.palette.primary.main,
  },
})
class Template extends Component {
  state = {
    isOpen: false,
  }

  handleDrawer = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    const { children, imprint, classes } = this.props
    const { isOpen } = this.state
    const links = ['/About/', '/Products/', 'contact']
    const linkLabels = ['about', 'products', 'contact']

    return (
      <div className={classes.root}>
        <AppBar
          position="static"
          className={imprint ? classes.appbarDarkTheme : classes.appbar}
        >
          <Toolbar className={classes.toolbar}>
            <Hidden smUp>
              <div className={classes.containerXS}>
                <Button
                  className={classes.mobileButton}
                  aria-label="Open drawer"
                >
                  {/* <Link to="/"> */}
                  <img alt="" src={logoWhite} className={classes.logo} />
                  {/* </Link> */}
                </Button>
                <Button
                  aria-label="menu"
                  className={classnames(classes.mobileButton, classes.primary)}
                  onClick={this.handleDrawer}
                  color="primary"
                >
                  <MenuIcon className={classes.menuIcon} />
                </Button>
              </div>
              {!imprint && (
                <Drawer
                  anchor="right"
                  open={isOpen}
                  onClose={this.handleDrawer}
                >
                  <div
                    tabIndex={0}
                    role="button"
                    onClick={this.handleDrawer}
                    onKeyDown={this.handleDrawer}
                  >
                    <MobileHeaderList links={links} linkLabels={linkLabels} />
                  </div>
                </Drawer>
              )}
            </Hidden>
            <Hidden xsDown>
              <IconButton className={classes.logoButton} aria-label="home">
                <Link to="/">
                  <img alt="" src={logoWhite} className={classes.logo} />
                </Link>
              </IconButton>
              {!imprint && (
                <div>
                  {links.map((link, idx) => (
                    // <Link to={link} key={`link_${link}`}>
                    <Button
                      className={classes.button}
                      key={`link_${link}`}
                      href={`#${linkLabels[idx]}`}
                    >
                      {linkLabels[idx]}
                    </Button>
                    // </Link>
                  ))}
                </div>
              )}
            </Hidden>
          </Toolbar>
        </AppBar>
        {children}
        <Footer />
      </div>
    )
  }
}

Template.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withRoot(withStyles(styles)(Template))
