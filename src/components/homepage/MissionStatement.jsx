import React from "react"
import clsx from "clsx"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Container from "../ui/Container"
import { Link } from "gatsby-theme-material-ui"

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  headerContainer: {
    flexBasis: "100%",
    [theme.breakpoints.up("md")]: {
      flexBasis: "45%",
    },
    [theme.breakpoints.up("lg")]: {
      flexBasis: "35%",
    },
  },
  title: {
    color: theme.color.greyLt,
    fontFamily: "secondary",
    fontSize: 15,
    letterSpacing: 4,
    fontWeight: 600,
    marginBottom: 5,
    [theme.breakpoints.up("lg")]: {
      fontSize: 18,
    },
  },
  margin: {
    marginLeft: 0,
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    flexBasis: "100%",
    marginBottom: theme.spacing.md,
    [theme.breakpoints.up("md")]: {
      flexBasis: "45%",
    },
    [theme.breakpoints.up("lg")]: {
      flexBasis: "55%",
    },
  },
  text: {
    marginBottom: 15,
  },
  link: {
    textDecoration: "none",
    textTransform: "uppercase",
    textAlign: "center",
    letterSpacing: 3,
    background: theme.palette.primary.main,
    color: theme.color.white,
    fontSize: 16,
    fontWeight: 500,
    padding: "15px 45px",
    "&:hover": {
      textDecoration: "none",
      background: theme.palette.primary.light,
    },
    [theme.breakpoints.up("sm")]: {
      width: "fit-content",
    },
  },
}))

function MissionStatement() {
  const classes = useStyles()
  const { t } = useTranslation()
  return (
    <Container variant="center" className={classes.container}>
      <div className={classes.headerContainer}>
        <Typography
          className={clsx(classes.title, classes.margin)}
          align="left"
        >
          {t("homepage.sustainable")}
        </Typography>
        <Typography className={classes.title} align="center">
          {t("homepage.community")}
        </Typography>
        <Typography className={classes.title} align="right">
          {t("homepage.surf")}
        </Typography>
      </div>
      <div className={classes.textContainer}>
        <Typography className={classes.text}>
          {t("homepage.mission")}
        </Typography>
        <Link to="/about/" className={classes.link}>
          {t("homepage.ourStory")}
        </Link>
      </div>
    </Container>
  )
}

export default MissionStatement
