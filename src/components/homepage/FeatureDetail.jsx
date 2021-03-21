import React, { Fragment } from "react"
import { StaticImage } from "gatsby-plugin-image"
import clsx from "clsx"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Hidden from "@material-ui/core/Hidden"
import SurfIcon from "../../assets/icons/Surf"
import FeatherIcon from "../../assets/icons/Feather"

const useStyles = makeStyles(theme => ({
  root: {
    flexBasis: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 30,
    [theme.breakpoints.up("md")]: {
      flexBasis: "30%",
      flexDirection: "column",
      marginRight: 30,
    },
  },
  flex: {
    display: "flex",
  },
  containerDetail: {
    flexBasis: "30%",
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
  },
  bottom1: {
    marginBottom: 0,
    [theme.breakpoints.up("lg")]: {
      marginBottom: 45,
    },
  },
  bottom2: {
    marginBottom: 5,
  },
  title: {
    textTransform: "uppercase",
    textAlign: "right",
    fontSize: 16,
    marginBottom: 15,
  },
  containerIcon: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    width: 18,
    height: 18,
    marginLeft: 5,
  },
  off: {
    color: theme.color.gray,
  },
  barOn: {
    width: 18,
    height: 5,
    marginLeft: 5,
    background: theme.color.gray,
  },
  barOff: {
    width: 18,
    height: 5,
    marginLeft: 5,
    background: theme.color.black,
  },
}))

function FeatureDetail() {
  const classes = useStyles()
  const { t } = useTranslation()

  const details = ["response", "img", "experience"]

  return (
    <div className={classes.root}>
      {details.map((elem, idx) => (
        <Fragment key={`detail${idx}`}>
          {elem === "img" && (
            <Hidden mdUp>
              <div className={classes.containerDetail}>
                <StaticImage
                  src="../../assets/websiteImages/single-tab-honeycomb-fin-green.png"
                  alt="featured product"
                  placeholder="blurred"
                  className={classes.img}
                />
              </div>
            </Hidden>
          )}
          {elem === "response" && (
            <div className={clsx(classes.containerDetail, classes.bottom1)}>
              <Typography className={classes.title} variant="h5">
                {t(`feature.${elem}`)}
              </Typography>
              <div className={clsx(classes.containerIcon, classes.bottom2)}>
                <Typography className={classes.detailText}>
                  {t("feature.surfDetail2")}
                </Typography>
                <div>
                  <FeatherIcon className={classes.icon} />
                  <FeatherIcon className={classes.icon} />
                  <FeatherIcon className={clsx(classes.off, classes.icon)} />
                </div>
              </div>
              <div className={classes.containerIcon}>
                <Typography className={classes.detailText}>
                  {t("feature.surfDetail1")}
                </Typography>
                <div>
                  <SurfIcon className={classes.icon} />
                  <SurfIcon className={classes.icon} />
                  <SurfIcon className={classes.icon} />
                </div>
              </div>
            </div>
          )}
          {elem === "experience" && (
            <div className={classes.containerDetail}>
              <Typography className={classes.title} variant="h5">
                {t(`feature.${elem}`)}
              </Typography>
              <div className={clsx(classes.containerIcon, classes.bottom)}>
                <Typography className={classes.detailText}>
                  {t("feature.beginner")}
                </Typography>
                <div className={classes.flex}>
                  <div className={classes.barOn} />
                  <div className={classes.barOn} />
                  <div className={classes.barOn} />
                  <div className={classes.barOn} />
                </div>
              </div>
              <div className={classes.containerIcon}>
                <Typography className={classes.detailText}>
                  {t("feature.intermediate")}
                </Typography>
                <div className={classes.flex}>
                  <div className={classes.barOff} />
                  <div className={classes.barOff} />
                  <div className={classes.barOff} />
                  <div className={classes.barOn} />
                </div>
              </div>
              <div className={classes.containerIcon}>
                <Typography className={classes.detailText}>
                  {t("feature.pro")}
                </Typography>
                <div className={classes.flex}>
                  <div className={classes.barOff} />
                  <div className={classes.barOff} />
                  <div className={classes.barOff} />
                  <div className={classes.barOff} />
                </div>
              </div>
            </div>
          )}
        </Fragment>
      ))}
    </div>
  )
}

export default FeatureDetail
