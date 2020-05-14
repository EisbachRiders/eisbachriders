import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/styles"
import clsx from "clsx"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  container: {
    display: "flex",
    width: "100%",
    padding: `30px 30px`,
    [theme.breakpoints.up("sm")]: {
      padding: `30px 45px`,
    },
    [theme.breakpoints.up("lg")]: {
      padding: `30px 60px`,
    },
    [theme.breakpoints.up("xl")]: {
      width: 1440,
      padding: `30px 0`,
    },
  },
  containerSlim: {
    display: "flex",
    width: "100%",
    padding: `0 30px`,
    [theme.breakpoints.up("sm")]: {
      padding: `0 60px`,
    },
    [theme.breakpoints.up("xl")]: {
      width: 1440,
      padding: 0,
    },
  },
  secondary: {
    background: theme.palette.primary.light,
  },
  primary: {
    background: theme.palette.primary.main,
  },
  black: {
    background: theme.color.almostBlack,
  },
  gray: {
    background: theme.color.gray,
  },
  flexStart: {
    justifyContent: "flex-start",
  },
  flexEnd: {
    justifyContent: "flex-end",
  },
  center: {
    justifyContent: "center",
  },
  spaceBetween: {
    justifyContent: "space-between",
  },
  spaceAround: {
    justifyContent: "space-around",
  },
  alignflexStart: {
    alignItems: "flex-start",
  },
  alignflexEnd: {
    alignItems: "flex-end",
  },
  aligncenter: {
    alignItems: "center",
  },
  flexWrap: {
    flexWrap: "wrap",
  },
  flexColumn: {
    flexDirection: "column",
  },
}))

function Container({
  children,
  justifyContent,
  alignItems,
  flexDirection,
  flexWrap,
  background,
  padding,
  className: classNameProp,
}) {
  const classes = useStyles()
  return (
    <div
      className={clsx(classes.root, {
        [classes[background]]: background,
      })}
    >
      <div
        className={clsx(
          {
            [classes[justifyContent]]: justifyContent !== undefined,
            [classes.flexWrap]: flexWrap !== "nowrap",
            [classes[`align${alignItems}`]]: alignItems !== undefined,
            [classes.container]: padding !== "none",
            [classes.containerSlim]: padding === "none",
            [classes.flexColumn]: flexDirection === "column",
          },
          classNameProp
        )}
      >
        {children}
      </div>
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.bool,
  ]),
  background: PropTypes.oneOf(["secondary", "primary", "black", "gray"]),
  justifyContent: PropTypes.oneOf([
    "flexStart",
    "flexEnd",
    "center",
    "spaceBetween",
    "spaceAround",
  ]),
  alignItems: PropTypes.oneOf(["flexStart", "flexEnd", "center"]),
  padding: PropTypes.oneOf(["none", null]),
}

export default Container
