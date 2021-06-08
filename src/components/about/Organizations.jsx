import * as React from "react"
import { useTranslation } from "react-i18next"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import Avatar from "@material-ui/core/Avatar"
import ListItemText from "@material-ui/core/ListItemText"
import Container from "../ui/Container"
import provideTheSlide from "../../assets/logos/provideTheSlide.png"
import igsmLogo from "../../assets/logos/igsmLogo.png"
import srfLogo from "../../assets/logos/surfriderCircle.png"
import nabuLogo from "../../assets/logos/nabu.png"

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 30,
    marginBottom: 30,
    [theme.breakpoints.up("md")]: {
      marginTop: 50,
      marginBottom: 50,
    },
  },
  flexItem: {
    flexBasis: "100%",
    padding: 30,
    [theme.breakpoints.up("md")]: {
      flexBasis: "50%",
      height: 600,
    },
    [theme.breakpoints.up("lg")]: {
      padding: 60,
    },
  },
  background: {
    background: theme.color.cream,
  },
  background2: {
    background: theme.color.grayLt,
  },
  title: {
    textTransform: "capitalize",
    fontSize: 24,
    fontWeight: 700,
    marginTop: 150,
    marginBottom: 30,
    [theme.breakpoints.up("md")]: {
      fontSize: 36,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 42,
    },
  },
  text: {
    textTransform: "capitalize",
    fontSize: 16,
    [theme.breakpoints.up("md")]: {
      fontSize: 18,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 24,
    },
  },
  avatar: {
    width: 50,
    height: 50,
    marginRight: 15,
    [theme.breakpoints.up("md")]: {
      width: 75,
      height: 75,
      marginRight: 30,
    },
  },
  img: {
    width: "100%",
    height: "100%",
  },
  listItem: {
    marginBottom: 30,
  },
  listText: {
    color: theme.palette.common.black,
  },
  listTextPrimary: {
    fontSize: 16,
    [theme.breakpoints.up("lg")]: {
      fontSize: 18,
    },
  },
}))

function Organizations() {
  const classes = useStyles()
  const { t } = useTranslation()

  const local = [
    {
      name: "Provide the Slide",
      img: provideTheSlide,
      href: "https://providetheslide.com/",
    },
    {
      name: "Interessengemeinschaft Surfen in München",
      img: igsmLogo,
      href: "https://www.igsm.info/",
    },
    {
      name: "NABU",
      img: nabuLogo,
      href: "https://www.nabu.de/",
    },
    {
      name: "Surfrider Foundation",
      img: srfLogo,
      href: "https://www.surfrider.org/",
    },
  ]

  return (
    <Container
      flexWrap="wrap"
      justifyContent="spaceBetween"
      alignItems="center"
      hidden="xs"
      className={classes.root}
    >
      <div className={clsx(classes.flexItem, classes.background)}>
        <p className={classes.title}>{t("about.getInvolved")}</p>
        <p className={classes.text}>{t("about.tagline")}</p>
      </div>

      <List
        component="nav"
        aria-label={t("about.local")}
        className={clsx(classes.flexItem, classes.background2)}
      >
        {local.map(elem => (
          <ListItem
            key={elem.name}
            button
            href={elem.href}
            component="a"
            target="_blank"
            rel="noopener"
            className={classes.listItem}
          >
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <img src={elem.img} className={classes.img} alt={elem.name} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              classes={{
                primary: classes.listTextPrimary,
                secondary: classes.listText,
              }}
              primary={elem.name}
              secondary={t(`about.${elem.name}`)}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  )
}

export default Organizations
