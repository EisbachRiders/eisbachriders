import React from "react"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListSubheader from "@material-ui/core/ListSubheader"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import Avatar from "@material-ui/core/Avatar"
import ListItemText from "@material-ui/core/ListItemText"
import Container from "../ui/Container"
import oceana from "../../assets/logos/oceana.png"
import provideTheSlide from "../../assets/logos/provideTheSlide.png"
import oceanconservancy from "../../assets/logos/oceanconservancy.png"
import oceancleanup from "../../assets/logos/oceancleanup.png"
import igsmLogo from "../../assets/logos/igsmLogo.png"
import srfLogo from "../../assets/logos/surfriderLogo.png"
import wirmachenwelleLogo from "../../assets/logos/wirmachenwelle.png"

const useStyles = makeStyles((theme) => ({
  header: {
    textTransform: "capitalize",
    width: "100%",
    fontFamily: "secondary",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 30,
  },
  avatar: {
    width: 50,
    height: 50,
    marginRight: 15,
    [theme.breakpoints.up("md")]: {
      width: 100,
      height: 100,
      marginRight: 30,
    },
  },
  img: {
    width: "100%",
    height: "100%",
  },
  listItem: {
    alignItems: "flex-start",
    [theme.breakpoints.up("md")]: {
      alignItems: "center",
    },
  },
  listText: {
    color: theme.palette.common.black,
  },
  listTextPrimary: {
    fontWeight: "bold",
  },
}))

function Organizations() {
  const classes = useStyles()
  const { t } = useTranslation()

  const local = [
    {
      name: "provide the slide",
      img: provideTheSlide,
      href: "https://providetheslide.com/",
    },
    {
      name: "Interessengemeinschaft Surfen in München",
      img: igsmLogo,
      href: "https://www.igsm.info/",
    },
    {
      name: "Wirmachenwelle",
      img: wirmachenwelleLogo,
      href: "https://wirmachenwelle.org/",
    },
    {
      name: "Surfrider Foundation",
      img: srfLogo,
      href: "https://www.surfrider.org/",
    },
  ]
  const global = [
    {
      name: "Ocean Conservancy",
      img: oceanconservancy,
      href: "https://oceanconservancy.org/",
    },
    {
      name: "The Ocean Cleanup",
      img: oceancleanup,
      href: "https://theoceancleanup.com/",
    },
    {
      name: "Oceana",
      img: oceana,
      href: "https://oceana.org/",
    },
  ]

  return (
    <Container>
      <p className={classes.header}>{t("about.getInvolved")}</p>
      <List
        component="nav"
        aria-label={t("about.local")}
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            {t("about.local")}
          </ListSubheader>
        }
      >
        {local.map((elem) => (
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
      <List
        component="nav"
        aria-label={t("about.global")}
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            {t("about.global")}
          </ListSubheader>
        }
      >
        {global.map((elem) => (
          <ListItem
            key={elem.name}
            button
            href={elem.href}
            component="a"
            target="_blank"
            rel="noopener"
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
