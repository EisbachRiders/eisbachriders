import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Box from "@material-ui/core/Box"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import Container from "@material-ui/core/Container"
import Link from "../ui/Link"
import Topbar from "./Topbar"
import MobileLinks from "./MobileLinks"
import DesktopLinks from "./DesktopLinks"

function Header({ location }) {
  const [openProducts, setOpenProducts] = React.useState(false)
  const anchorRef = React.useRef(null)

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(openProducts)

  React.useEffect(() => {
    if (prevOpen.current === true && openProducts === false) {
      anchorRef.current.focus()
    }

    prevOpen.current = openProducts
  }, [openProducts])

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  const links = ["urban", "products", "sustainable", "about"]
  const products = [
    "fins",
    "leashes",
    "accessories",
    "essential-line",
    "sustainable-line",
    "performance-line",
  ]

  return (
    <AppBar
      position="sticky"
      sx={{
        background: trigger ? theme => theme.color.white : "transparent",
        boxShadow: "none",
        zIndex: 200,
      }}
    >
      <Topbar />
      <Container>
        <Toolbar
          sx={{ width: "100%", justifyContent: "space-between" }}
          disableGutters
        >
          <Link to="/">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: {
                  xs: 50,
                  md: 60,
                  lg: 70,
                },
              }}
            >
              <StaticImage
                src="../../assets/logos/logo.svg"
                alt="eisbach riders"
                placeholder="blurred"
                quality={100}
              />
            </Box>
          </Link>
          <DesktopLinks links={links} products={products} location={location} />
          <MobileLinks links={links} products={products} />
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
