import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/styles"
import Typography from "@material-ui/core/Typography"
import Container from "../ui/Container"
import Link from "../ui/Link"
import SwipeableViews from "react-swipeable-views"
import { autoPlay } from "react-swipeable-views-utils"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const finSteps = [
  {
    label: "single tab fin sustainable",
    img: (
      <StaticImage
        src="../../assets/websiteImages/single-tab-fin-black-sustainable.png"
        alt="single tab fin sustainable"
        placeholder="blurred"
      />
    ),
  },
  {
    label: "double tab fin sustainable",
    img: (
      <StaticImage
        src="../../assets/websiteImages/double-tab-fin-black-sustainable.png"
        alt="double tab fin sustainable"
        placeholder="blurred"
      />
    ),
  },
  {
    label: "quick lock fin",
    img: (
      <StaticImage
        src="../../assets/websiteImages/quick-lock-touring-transparent.png"
        alt="quick lock fin"
        placeholder="blurred"
      />
    ),
  },
  {
    label: "9inch us box",
    img: (
      <StaticImage
        src="../../assets/websiteImages/9-inch-us-box.png"
        alt="9inch us box"
        placeholder="blurred"
      />
    ),
  },
]

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.color.cream,
    marginBottom: 30,
    [theme.breakpoints.up("xl")]: {
      width: 1440,
      padding: `30px 60px`,
      marginBottom: 60,
    },
  },

  title: {
    fontSize: 32,
    marginBottom: 10,

    [theme.breakpoints.up("md")]: {
      fontSize: 52,
      marginBottom: 30,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 72,
      marginBottom: 30,
    },
  },
  text: {
    fontSize: 12,

    [theme.breakpoints.up("md")]: {
      fontSize: 24,
    },
  },
  flexbox: {
    flexBasis: "50%",
  },
  image: {
    width: "100%",
    margin: "0 auto",
    [theme.breakpoints.up("md")]: {
      width: "80%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "70%",
    },
  },
}))

function SustainableLine() {
  const classes = useStyles()
  const { t } = useTranslation()
  const [activeStep, setActiveStep] = React.useState(0)

  const handleStepChange = step => {
    setActiveStep(step)
  }

  return (
    <Link to="/products/sustainable-line">
      <Container
        alignItems="center"
        justifyContent="spaceBetween"
        className={classes.root}
      >
        <div className={classes.flexbox}>
          <Typography className={classes.title}>
            Sustainable <br /> Line
          </Typography>
          <Typography className={classes.text}>
            {t("product.sustainable-line")}
          </Typography>
        </div>
        <div className={classes.flexbox}>
          <div className={classes.image}>
            <AutoPlaySwipeableViews
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {finSteps.map((step, index) => (
                <div key={step.label}>
                  {Math.abs(activeStep - index) <= 2 ? step.img : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
          </div>
        </div>
      </Container>
    </Link>
  )
}

export default SustainableLine
