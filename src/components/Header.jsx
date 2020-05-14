import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import clsx from "clsx"
import { Link } from "gatsby-theme-material-ui"
import { makeStyles } from "@material-ui/styles"
import IconButton from "@material-ui/core/IconButton"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Hidden from "@material-ui/core/Hidden"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import LanguageIcon from "@material-ui/icons/Language"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import MenuIcon from "@material-ui/icons/Menu"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import PinterestIcon from "@material-ui/icons/Pinterest"
import Container from "./ui/Container"
import logo from "../assets/logos/logo.svg"

const useStyles = makeStyles((theme) => ({
  appbar: {
    zIndex: 200,
    background: "transparent",
    boxShadow: "none",
  },
  transparentBackground: {
    background: "transparent",
  },
  colorBackground: {
    background: theme.color.white,
  },
  toolbar: {
    width: "100%",
    justifyContent: "space-between",
  },
  logo: {
    width: 100,
    [theme.breakpoints.up("xs")]: {
      width: 50,
    },
  },
  linkContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  link: {
    textTransform: "uppercase",
    color: theme.color.black,
    "&:hover": {
      color: theme.palette.primary.main,
      textDecoration: "none",
    },
    [theme.breakpoints.up("md")]: {
      letterSpacing: 2,
      fontSize: 24,
      fontWeight: 700,
    },
  },
  icon: {
    color: theme.color.white,
    width: 18,
    height: 18,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  menuIcon: {
    color: theme.color.black,
    width: 48,
    height: 48,
  },
  listItem: {
    margin: "15px 30px 15px 15px",
    [theme.breakpoints.up("md")]: {
      margin: "0 30px 0 0",
    },
  },
  listItemLast: {
    margin: 15,
    [theme.breakpoints.up("md")]: {
      margin: 0,
    },
  },
  listItemMobile: {
    borderBottom: `1px solid ${theme.color.gray}`,
    textAlign: "center",
  },
}))

function Header({ handleSetLang }) {
  const [anchorEl, setAnchorEl] = useState(null)
  const [drawer, setDrawer] = useState(false)
  const classes = useStyles()
  const { t } = useTranslation()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (lang) => {
    setAnchorEl(null)
    handleSetLang(lang)
  }

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }
    setDrawer(open)
  }

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  const links = ["eisbach", "blog", "shop", "about"]
  const mobileLinks = ["contact", "customerService"]

  return (
    <AppBar
      position="sticky"
      className={clsx(
        classes.appbar,
        trigger ? classes.colorBackground : classes.transparentBackground
      )}
    >
      <Container
        alignItems="center"
        justifyContent="flexEnd"
        background="black"
        padding="none"
      >
        <IconButton
          href="https://www.facebook.com/EisbachRiders/"
          aria-label="facebook"
          size="small"
        >
          <FacebookIcon className={classes.icon} />
        </IconButton>
        <IconButton
          href="https://www.instagram.com/eisbachriders/"
          aria-label="instagram"
          size="small"
        >
          <InstagramIcon className={classes.icon} />
        </IconButton>
        <IconButton
          href="https://www.pinterest.com/eisbachriders/"
          aria-label="pinterest"
          size="small"
        >
          <PinterestIcon className={classes.icon} />
        </IconButton>
        <IconButton
          aria-controls="simple-menu"
          aria-label="language"
          aria-haspopup="true"
          onClick={handleClick}
          size="small"
        >
          <LanguageIcon className={classes.icon} alt="language" />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => handleClose("en")}>EN</MenuItem>
          <MenuItem onClick={() => handleClose("de")}>DE</MenuItem>
        </Menu>
      </Container>
      <Container padding="none">
        <Toolbar className={classes.toolbar} disableGutters>
          <Link to="/">
            <img
              src={logo}
              className={classes.logo}
              alt="eisbach riders logo"
            />
          </Link>
          <Hidden smDown>
            <List
              component="nav"
              aria-label="website navigation"
              className={classes.linkContainer}
            >
              {links.map((elem, idx) => (
                <ListItem
                  button
                  key={`navItem${idx}`}
                  className={
                    idx === links.length - 1
                      ? classes.listItemLast
                      : classes.listItem
                  }
                >
                  <Link to={`/${elem}`} className={classes.link}>
                    {t(`links.${elem}`)}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Hidden>
          <Hidden mdUp>
            <IconButton aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon className={classes.menuIcon} />
            </IconButton>
            <SwipeableDrawer
              anchor="right"
              open={drawer}
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(true)}
            >
              <List
                component="nav"
                aria-label="website navigation"
                className={classes.linkContainer}
              >
                {links.map((elem, idx) => (
                  <ListItem
                    button
                    key={`navItem${idx}`}
                    className={classes.listItem}
                  >
                    <Link to="/" className={classes.link}>
                      {t(`links.${elem}`)}
                    </Link>
                  </ListItem>
                ))}
                {mobileLinks.map((elem, idx) => (
                  <ListItem
                    button
                    key={`navItem${idx}`}
                    className={classes.listItemMobile}
                  >
                    <Link to="/" className={classes.link}>
                      {t(`links.${elem}`)}
                    </Link>
                  </ListItem>
                ))}
              </List>
            </SwipeableDrawer>
          </Hidden>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
