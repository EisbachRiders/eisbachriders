import React, { useState, Fragment } from "react"
import { useTranslation } from "react-i18next"

import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import Popover from "@material-ui/core/Popover"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(theme => ({
  containerSpace: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    height: 15,
    width: 15,
    borderRadius: "50%",
    margin: "0 5px",
  },
  circleBig: {
    height: 30,
    width: 30,
    borderRadius: "50%",
    margin: "0 5px",
  },
  blue: {
    background: theme.color.blue,
  },
  gray: {
    background: theme.color.gray,
  },
  white: {
    border: `1px solid ${theme.palette.common.black}`,
    background: theme.color.white,
  },
  black: {
    background: theme.color.black,
  },
  pink: {
    background: theme.color.pink,
  },
  yellow: {
    background: theme.color.yellow,
  },
  orange: {
    background: theme.color.orange,
  },
  green: {
    background: theme.color.green,
  },
  teal: {
    background: theme.color.tealDk,
  },
  seaGlass: {
    background: theme.color.seaGlass,
  },
  popover: {
    pointerEvents: "none",
  },
  paper: {
    padding: 5,
  },
}))

function Colors({ colors, variant }) {
  const classes = useStyles()
  const { t } = useTranslation()
  const [anchorEl, setAnchorEl] = useState(new Array(colors.length).fill(null))

  const handlePopoverOpen = (event, idx) => {
    let newArr = [...anchorEl]
    newArr[idx] = event.currentTarget
    setAnchorEl(newArr)
  }

  const handlePopoverClose = () => {
    setAnchorEl(new Array(colors.length).fill(null))
  }

  const circle = (color, idx) => (
    <Fragment key={color.name}>
      <p
        aria-owns={
          Boolean(anchorEl[idx]) ? `mouse-over-popover${idx}` : undefined
        }
        aria-haspopup="true"
        onMouseEnter={e => handlePopoverOpen(e, idx)}
        onMouseLeave={handlePopoverClose}
        key={color.name}
        className={clsx(
          variant === "large" ? classes.circleBig : classes.circle,
          {
            [classes.blue]: color.name === "blue",
            [classes.gray]: color.name === "grey",
            [classes.seaGlass]: color.name === "sea glass",
            [classes.white]: color.name === "white",
            [classes.black]: color.name === "black",
            [classes.pink]: color.name === "pink",
            [classes.orange]: color.name === "orange",
            [classes.gray]: color.name === "gray",
            [classes.red]: color.name === "red",
            [classes.teal]: color.name === "teal" || color.name === "turquoise",
            [classes.green]:
              color.name === "green" || color.name === "green glass",
            [classes.yellow]: color.name === "yellow",
          }
        )}
      />
      <Popover
        id={`mouse-over-popover${idx}`}
        className={classes.popover}
        open={Boolean(anchorEl[idx])}
        classes={{
          paper: classes.paper,
        }}
        anchorEl={anchorEl[idx]}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography>{t(`product.${color.name}`)}</Typography>
      </Popover>
    </Fragment>
  )

  return (
    <div className={classes.containerCenter}>
      <div className={classes.containerCenter}>
        {colors.map((color, idx) => circle(color, idx))}
      </div>
    </div>
  )
}

export default Colors
