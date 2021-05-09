import React, { useState, useEffect, useRef } from "react"
import { useTranslation } from "react-i18next"
import clsx from "clsx"
import Link from "./ui/Link"
import { makeStyles } from "@material-ui/styles"
import IconButton from "@material-ui/core/IconButton"
import Button from "@material-ui/core/Button"
import ClickAwayListener from "@material-ui/core/ClickAwayListener"
import Grow from "@material-ui/core/Grow"
import Paper from "@material-ui/core/Paper"
import Popper from "@material-ui/core/Popper"
import MenuItem from "@material-ui/core/MenuItem"
import MenuList from "@material-ui/core/MenuList"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Hidden from "@material-ui/core/Hidden"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import MenuIcon from "@material-ui/icons/Menu"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import PinterestIcon from "@material-ui/icons/Pinterest"
import Container from "./ui/Container"
import Contact from "./Contact"
import logo from "../assets/logos/logo.svg"

const useStyles = makeStyles(theme => ({
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
  languageButton: {
    color: theme.color.white,
    minWidth: 50,
  },
  linkContainer: {
    flexBasis: "80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      justifyContent: "flex-end",
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
      fontSize: 12,
      fontWeight: 700,
    },
    [theme.breakpoints.up("lg")]: {
      letterSpacing: 2,
      fontSize: 24,
      fontWeight: 700,
    },
  },
  linkActive: {
    textDecoration: "none",
    borderBottom: `2px solid ${theme.palette.primary.main}`,
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
  listItemRoot: {
    width: "auto",
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
  productsLink: {
    color: theme.color.black,
    "&:hover": {
      textDecoration: "none",
    },
  },
  buttonOverride: {
    padding: 0,
    margin: 0,
    "&:hover": {
      background: "transparent",
    },
  },
  sub: {
    paddingLeft: 45,
  },
}))

function Header({ location }) {
  const [drawer, setDrawer] = useState(false)
  const [openProducts, setOpenProducts] = useState(false)
  const classes = useStyles()
  const anchorRef = useRef(null)
  const { i18n, t } = useTranslation()

  const handleSetLang = () => {
    let newLng = i18n.language === "en" ? "de" : "en"
    i18n.changeLanguage(newLng)
  }

  const toggleDrawer = open => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }
    setDrawer(open)
  }

  const handleToggleProducts = () => {
    setOpenProducts(prevOpen => !prevOpen)
  }

  const handleCloseProducts = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }

    setOpenProducts(false)
  }

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault()
      setOpenProducts(false)
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(openProducts)
  useEffect(() => {
    if (prevOpen.current === true && openProducts === false) {
      anchorRef.current.focus()
    }

    prevOpen.current = openProducts
  }, [openProducts])

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  const links = ["urban", "products", "sustainable", "shop", "about"]
  const products = [
    "surfboard-fins",
    "sup-longboard-fins",
    "leashes",
    "accessories",
  ]

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
          rel="noopener"
          target="_blank"
        >
          <FacebookIcon className={classes.icon} />
        </IconButton>
        <IconButton
          href="https://www.instagram.com/eisbachriders/"
          aria-label="instagram"
          size="small"
          rel="noopener"
          target="_blank"
        >
          <InstagramIcon className={classes.icon} />
        </IconButton>
        <IconButton
          href="https://www.pinterest.com/eisbachriders/"
          aria-label="pinterest"
          size="small"
          rel="noopener"
          target="_blank"
        >
          <PinterestIcon className={classes.icon} />
        </IconButton>
        <Button
          onClick={() => handleSetLang()}
          className={classes.languageButton}
        >
          {i18n.language}
        </Button>
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
          <Hidden mdDown>
            <List
              component="nav"
              aria-label="website navigation"
              className={classes.linkContainer}
            >
              {links.map((elem, idx) => (
                <ListItem
                  button
                  key={`navItem${elem}`}
                  classes={{ root: classes.listItemRoot }}
                  className={
                    idx === links.length - 1
                      ? classes.listItemLast
                      : classes.listItem
                  }
                >
                  {elem === "shop" ? (
                    <a
                      href="https://secondwavesurfing.com/shop"
                      className={clsx(classes.link, {
                        [classes.linkActive]: elem === location,
                      })}
                    >
                      {t(`links.${elem}`)}
                    </a>
                  ) : elem === "products" ? (
                    <>
                      <Link
                        to="/products"
                        ref={anchorRef}
                        aria-controls={
                          openProducts ? "menu-list-grow" : undefined
                        }
                        aria-haspopup="true"
                        onMouseOver={handleToggleProducts}
                        className={clsx(classes.link, classes.buttonOverride)}
                      >
                        {elem}
                      </Link>
                      <Popper
                        open={openProducts}
                        anchorEl={anchorRef.current}
                        role={undefined}
                        transition
                        disablePortal
                      >
                        {({ TransitionProps, placement }) => (
                          <Grow
                            {...TransitionProps}
                            style={{
                              transformOrigin:
                                placement === "bottom"
                                  ? "center top"
                                  : "center bottom",
                            }}
                          >
                            <Paper>
                              <ClickAwayListener
                                onClickAway={handleCloseProducts}
                              >
                                <MenuList
                                  autoFocusItem={openProducts}
                                  id="menu-list-grow"
                                  onKeyDown={handleListKeyDown}
                                >
                                  {products.map(elem => (
                                    <Link
                                      key={`product_link_${elem}`}
                                      to={`/products/${elem}`}
                                      className={classes.productsLink}
                                    >
                                      <MenuItem
                                        onClick={handleCloseProducts}
                                        key={`product_link_${elem}`}
                                      >
                                        {t(`product.${elem}`)}
                                      </MenuItem>
                                    </Link>
                                  ))}
                                </MenuList>
                              </ClickAwayListener>
                            </Paper>
                          </Grow>
                        )}
                      </Popper>
                    </>
                  ) : (
                    <Link
                      to={`/${elem}`}
                      className={clsx(classes.link, {
                        [classes.linkActive]: elem === location,
                      })}
                    >
                      {t(`links.${elem}`)}
                    </Link>
                  )}
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
                <ListItem button className={classes.listItemMobile}>
                  <Link to="/urban" className={classes.link}>
                    {t("links.urban")}
                  </Link>
                </ListItem>
                <ListItem button className={classes.listItemMobile}>
                  <Link to="/products" className={classes.link}>
                    {t("links.products")}
                  </Link>
                </ListItem>
                <ListItem
                  button
                  className={clsx(classes.sub, classes.listItemMobile)}
                >
                  <Link to="/products/surfboard-fins" className={classes.link}>
                    {t("product.surfboard-fins")}
                  </Link>
                </ListItem>
                <ListItem
                  button
                  className={clsx(classes.sub, classes.listItemMobile)}
                >
                  <Link
                    to="/products/sup-longboard-fins"
                    className={classes.link}
                  >
                    {t("product.sup-longboard-fins")}
                  </Link>
                </ListItem>
                <ListItem
                  button
                  className={clsx(classes.sub, classes.listItemMobile)}
                >
                  <Link to="/products/leashes" className={classes.link}>
                    {t("product.leashes")}
                  </Link>
                </ListItem>
                <ListItem
                  button
                  className={clsx(classes.sub, classes.listItemMobile)}
                >
                  <Link to="/products/accessories" className={classes.link}>
                    {t("product.accessories")}
                  </Link>
                </ListItem>
                <ListItem
                  button
                  className={clsx(classes.sub, classes.listItemMobile)}
                >
                  <Link to="/products/apparel" className={classes.link}>
                    {t("product.apparel")}
                  </Link>
                </ListItem>
                <ListItem button className={classes.listItemMobile}>
                  <Link to="/recycled-fins" className={classes.link}>
                    {t("links.recycled-fins")}
                  </Link>
                </ListItem>
                <ListItem button className={classes.listItemMobile}>
                  <Link to="/about" className={classes.link}>
                    {t("links.about")}
                  </Link>
                </ListItem>
                <Contact variant="header" />
              </List>
            </SwipeableDrawer>
          </Hidden>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
