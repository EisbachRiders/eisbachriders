import React, { Component } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import classnames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import Drawer from '@material-ui/core/Drawer'
import Input from '@material-ui/core/Input'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'

import logoWhite from '../assets/logos/logoWhite_small.png'
import { InstagramIcon, FacebookIcon } from '../assets/icons/icons'
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
    backgroundColor: theme.status.black,
  },
  toolbar: {
    paddingLeft: 0,
    paddingRight: 0,
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
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white,
    marginLeft: 0,
    marginRight: 10,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  socialButton: {},
  socialIcon: {
    color: theme.palette.primary.main,
    fontSize: 20,
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
    const { children, classes } = this.props
    const { isOpen } = this.state
    const links = ['/About/', '/Blog/']
    const linkLabels = ['about', 'blog']

    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appbar}>
          <Toolbar className={classes.toolbar}>
            <Hidden smUp>
              <div className={classes.containerXS}>
                <Button
                  className={classes.mobileButton}
                  aria-label="Open drawer"
                >
                  <Link to="/">
                    <img alt="" src={logoWhite} className={classes.logo} />
                  </Link>
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
              <Drawer anchor="right" open={isOpen} onClose={this.handleDrawer}>
                <div
                  tabIndex={0}
                  role="button"
                  onClick={this.handleDrawer}
                  onKeyDown={this.handleDrawer}
                >
                  <MobileHeaderList links={links} linkLabels={linkLabels} />
                </div>
              </Drawer>
            </Hidden>
            <Hidden xsDown>
              <IconButton className={classes.logoButton} aria-label="home">
                <Link to="/">
                  <img alt="" src={logoWhite} className={classes.logo} />
                </Link>
              </IconButton>
              <span>
                {links.map((link, idx) => (
                  // <Link to={link} key={`link_${link}`}>
                  <Button className={classes.button} key={`link_${link}`}>
                    {linkLabels[idx]}
                  </Button>
                  // </Link>
                ))}
              </span>
              <div className={classes.grow} />
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon color="primary" />
                </div>
                <Input
                  placeholder="Search…"
                  disableUnderline
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                />
              </div>
              <IconButton
                aria-label="instagram"
                className={classes.socialButton}
                href="https://www.instagram.com/eisbachriders/"
                target="_blank"
                rel="noopener"
              >
                <InstagramIcon className={classes.socialIcon} />
              </IconButton>
              <IconButton
                aria-label="instagram"
                className={classes.socialButton}
                href="https://www.facebook.com/EisbachRiders/"
                target="_blank"
                rel="noopener"
              >
                <FacebookIcon className={classes.socialIcon} />
              </IconButton>
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

export default withStyles(styles)(Template)
