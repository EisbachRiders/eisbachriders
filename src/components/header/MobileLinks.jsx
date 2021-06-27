import * as React from "react"
import { useTranslation } from "react-i18next"
import Link from "../ui/Link"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import MenuIcon from "@material-ui/icons/Menu"
import Contact from "../contact/Contact"

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />
}

function StyledListItemText(props) {
  return <ListItemText sx={{ textTransform: "capitalize" }} {...props} />
}

export default function MobileLinks({ links, products }) {
  const [drawer, setDrawer] = React.useState(false)
  const { t } = useTranslation()

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

  return (
    <Box sx={{ display: { xs: "block", md: "none" } }}>
      <Button aria-label="menu" onClick={toggleDrawer(true)}>
        <MenuIcon
          sx={{
            color: theme => theme.color.black,
            width: 48,
            height: 48,
          }}
        />
      </Button>
      <SwipeableDrawer
        anchor="right"
        open={drawer}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <List
          component="nav"
          aria-label="website navigation"
          sx={{ minWidth: 300 }}
        >
          {links.map((elem, idx) => (
            <Link to={`/${elem}`} key={`link${idx}`}>
              <ListItem button>
                <StyledListItemText primary={t(`links.${elem}`)} />
              </ListItem>
            </Link>
          ))}
          <Contact variant="header" />
        </List>
      </SwipeableDrawer>
    </Box>
  )
}
