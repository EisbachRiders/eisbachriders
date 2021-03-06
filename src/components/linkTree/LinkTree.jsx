import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { makeStyles } from "@material-ui/styles"
import Container from "../ui/Container"
import logo from "../../assets/logos/logo.png"

const useStyles = makeStyles(theme => ({
  logo: {
    width: 100,
  },
  h1: {
    marginBottom: 30,
  },
  container: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    width: "100%",
  },
  item: {
    flexBasis: "100%",
    textAlign: "center",
    marginBottom: 30,
    background: theme.color.black,
    [theme.breakpoints.up("sm")]: {
      flexBasis: "45%",
      marginBottom: 45,
    },
  },
  img: {
    height: 400,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      height: 270,
    },
    [theme.breakpoints.up("md")]: {
      height: 370,
    },
    [theme.breakpoints.up("lg")]: {
      height: 500,
    },
  },
  text: {
    fontSize: 14,
    color: theme.color.white,
    "&:hover": {
      color: theme.palette.primary.main,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 18,
      flexBasis: "49%",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 32,
    },
  },
}))

function LinkTree() {
  const classes = useStyles()

  const links = [
    {
      title: "Eisbach Riders",
      img: (
        <StaticImage
          src="../../assets/websiteImages/website.png"
          alt="Eisbach Riders"
          className={classes.img}
        />
      ),
      link: "https://eisbach-riders.com/",
    },
    {
      title: "SWS Shop",
      img: (
        <StaticImage
          src="../../assets/websiteImages/sustainable-surf-solutions-mobile-en.png"
          alt="SWS Shop"
          className={classes.img}
        />
      ),
      link: "https://secondwavesurfing.com/shop/",
    },
    {
      title: "Recycled Quick-Lock Touring Fin",
      img: (
        <StaticImage
          src="../../assets/websiteImages/quickLockAD-mobile.png"
          alt="Recycled Quick-Lock Touring Fin"
          className={classes.img}
        />
      ),
      link:
        "https://secondwavesurfing.com/blog/eisbach-riders-a-touring-fin-made-of-recycled-waste-material-for-stand-up-paddling-with-the-quick-lock-system/",
    },
    {
      title: "1% for the Planet",
      img: (
        <StaticImage
          src="../../assets/websiteImages/eisbach-riders-joins-1-percent-for-the-planet.png"
          alt="1% for the Planet"
          className={classes.img}
        />
      ),
      link:
        "https://secondwavesurfing.com/blog/eisbach-riders-joins-1-percent-for-the-planet/",
    },
  ]

  return (
    <Container
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      padding="none"
    >
      <img src={logo} alt="logo" className={classes.logo}></img>
      <h1 className={classes.h1}>Eisbach Riders</h1>
      <div className={classes.container}>
        {links.map((elem, idx) => (
          <div className={classes.item} key={`link${idx}`}>
            <a href={elem.link} target="_blank" rel="noopener noreferrer">
              {elem.img}
              <p className={classes.text}>{elem.title}</p>
            </a>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default LinkTree
