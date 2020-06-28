import React, { useState, Fragment } from "react"
import { useTranslation } from "react-i18next"
import SwipeableViews from "react-swipeable-views"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import Popover from "@material-ui/core/Popover"
import Typography from "@material-ui/core/Typography"
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft"
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight"

const useStyles = makeStyles((theme) => ({
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
  const [activeStep, setActiveStep] = useState(0)
  const [anchorEl, setAnchorEl] = useState(new Array(colors.length).fill(null))

  const handleIndexChange = (activeStep) => {
    setActiveStep(activeStep)
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1)
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1)
  }

  const handlePopoverOpen = (event, idx) => {
    let newArr = [...anchorEl]
    newArr[idx] = event.currentTarget
    setAnchorEl(newArr)
  }

  const handlePopoverClose = () => {
    setAnchorEl(new Array(colors.length).fill(null))
  }

  const swipeable = colors.length > 5 && variant !== "long"

  const circle = (color, idx) => (
    <Fragment key={color}>
      <p
        aria-owns={
          Boolean(anchorEl[idx]) ? `mouse-over-popover${idx}` : undefined
        }
        aria-haspopup="true"
        onMouseEnter={(e) => handlePopoverOpen(e, idx)}
        onMouseLeave={handlePopoverClose}
        key={color}
        className={clsx(
          variant === "long" ? classes.circleBig : classes.circle,
          {
            [classes.blue]: color === "Blue",
            [classes.gray]: color === "Grey",
            [classes.seaGlass]: color === "Sea Glass",
            [classes.white]: color === "White",
            [classes.black]: color === "Black",
            [classes.pink]: color === "Pink",
            [classes.orange]: color === "Orange",
            [classes.red]: color === "Red",
            [classes.teal]: color === "Teal" || color === "Turquoise",
            [classes.green]: color === "Green" || color === "Green Glass",
            [classes.yellow]: color === "Yellow",
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
        <Typography>{t(`product.${color}`)}</Typography>
      </Popover>
    </Fragment>
  )

  return (
    <div
      className={swipeable ? classes.containerSpace : classes.containerCenter}
    >
      {swipeable && (
        <>
          <IconButton
            size="small"
            className={classes.backButton}
            aria-label={t("common.scrollRight")}
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            <KeyboardArrowLeft />
          </IconButton>
          <SwipeableViews
            enableMouseEvents
            index={activeStep}
            onChangeIndex={handleIndexChange}
          >
            <div className={classes.containerCenter}>
              {colors.slice(0, 5).map((color, idx) => circle(color, idx))}
            </div>
            <div className={classes.containerCenter}>
              {colors.slice(5).map((color, idx) => circle(color, idx + 5))}
            </div>
          </SwipeableViews>
          <IconButton
            size="small"
            className={classes.nextButton}
            aria-label={t("common.scrollLeft")}
            onClick={handleNext}
            disabled={activeStep === 1}
          >
            <KeyboardArrowRight />
          </IconButton>
        </>
      )}
      {!swipeable && (
        <div className={classes.containerCenter}>
          {colors.map((color, idx) => circle(color, idx))}
        </div>
      )}
    </div>
  )
}

export default Colors
