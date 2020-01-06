import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListSubheader from '@material-ui/core/ListSubheader'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import ListItemText from '@material-ui/core/ListItemText'
import BrushStroke from '../ui/BrushStroke'
import Container from '../ui/Container'
import oceana from '../../assets/images/about/oceana.png'
import oceanconservancy from '../../assets/images/about/oceanconservancy.png'
import oceancleanup from '../../assets/images/about/oceancleanup.png'
import worldcleanupday from '../../assets/images/about/worldcleanupday.png'
import igsmLogo from '../../assets/logos/igsmLogo.png'
import srfLogo from '../../assets/images/about/surfrider.png'
import wirmachenwelleLogo from '../../assets/images/about/wirmachenwelle.png'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    [theme.breakpoints.up('sm')]: {
      flexWrap: 'nowrap',
    },
  },
  container: {
    flexBasis: '100%',
    [theme.breakpoints.up('sm')]: {
      flexBasis: '50%',
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: 30,
      paddingBottom: 30,
    },
    [theme.breakpoints.up('lg')]: {
      paddingTop: 45,
    },
  },
  containerRight: {
    [theme.breakpoints.up('md')]: {
      paddingLeft: 75,
    },
  },
  containerLeft: {
    [theme.breakpoints.up('md')]: {
      paddingRight: 75,
    },
  },
  margin: {
    [theme.breakpoints.up('sm')]: {
      marginLeft: '15%',
    },
  },
  imgContainer: {
    flexBasis: '100%',
    [theme.breakpoints.up('sm')]: {
      flexBasis: '50%',
    },
  },
  img: {
    height: 200,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      height: 300,
      width: '100%',
    },
    [theme.breakpoints.up('md')]: {
      height: 400,
      width: '100%',
    },
  },
  img2: {
    height: 200,
    width: '100%',
  },
  text: {
    textAlign: 'justify',
    color: theme.palette.common.black,
    fontSize: 12,
    [theme.breakpoints.up('md')]: {
      fontSize: 14,
    },
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  listText: {
    color: theme.palette.common.black,
  },
  listTextPrimary: {
    fontWeight: 'bold',
  },
}))

function AboutDetail({ img }) {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <>
      <Container className={classes.root}>
        <div className={clsx(classes.container, classes.containerLeft)}>
          <div className={classes.margin}>
            <BrushStroke title="Community" />
          </div>
          <Typography className={classes.text} variant="body1">
            {t('about.community')}
          </Typography>
        </div>
        <div className={classes.imgContainer}>
          <Img
            fluid={img[1].node.fluid}
            alt="surfers walking together"
            className={classes.img}
          />
        </div>
      </Container>

      <Container className={classes.root}>
        <Hidden xsDown>
          <div className={classes.imgContainer}>
            <Img
              fluid={img[0].node.fluid}
              alt="group picking up trash"
              className={classes.img}
            />
          </div>
        </Hidden>
        <div className={clsx(classes.container, classes.containerRight)}>
          <div className={classes.margin}>
            <BrushStroke title="sustainability" />
          </div>
          <Typography className={classes.text} variant="body1">
            {t('about.sustainability')}
          </Typography>
        </div>
        <Hidden smUp>
          <div className={classes.imgContainer}>
            <Img
              fluid={img[0].node.fluid}
              alt="group picking up trash"
              className={classes.img}
            />
          </div>
        </Hidden>
      </Container>

      {/* <div className={classes.root}>
        <Hidden xsDown>
          <Img
            fluid={img[1].node.fluid}
            alt="picking up trash"
            className={classes.img2}
          />
          <Img
            fluid={img[1].node.fluid}
            alt="picking up trash"
            className={classes.img2}
          />
          <Img
            fluid={img[1].node.fluid}
            alt="picking up trash"
            className={classes.img2}
          />
        </Hidden>
      </div> */}

      <Container>
        <Typography align="center" variant="h5">
          Get Involved
        </Typography>
        <div className={classes.container}>
          <List
            component="nav"
            aria-label="local organizations"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Local Organizations
              </ListSubheader>
            }
          >
            <ListItem
              button
              href="https://www.igsm.info/"
              component="a"
              target="_blank"
              rel="noopener"
            >
              <ListItemAvatar>
                <Avatar>
                  <img src={igsmLogo} className={classes.avatar} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                classes={{
                  primary: classes.listTextPrimary,
                  secondary: classes.listText,
                }}
                primary="Interessengemeinschaft Surfen in München"
                secondary="The Interessengemeinschaft Surfen in München eV is a registered association that takes care of all matters relating to river surfing in Munich. They are committed to preserving existing waves in and around the city, fighting for new surf spots, negotiating with the city's political organs and helping the youth to practice this sport."
              />
            </ListItem>
            <ListItem
              button
              href="https://wirmachenwelle.org/"
              component="a"
              target="_blank"
              rel="noopener"
            >
              <ListItemAvatar>
                <Avatar>
                  <img src={wirmachenwelleLogo} className={classes.avatar} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                classes={{
                  primary: classes.listTextPrimary,
                  secondary: classes.listText,
                }}
                primary="Wirmachenwelle"
                secondary="Wir Machen Welle is the first Germany-wide surf organization that works with the social and therapeutic effect of the sport. The program 'Surf's Up Germany', promotes the personal growth of young people among themselves and everyone involved. They create a unique and sustainable experience that not only shows young people different perspectives, but motivates them to positively change their future 'world of life and work' and community. 'Wirmachenwelle' is committed to greater equal opportunities in the development and training of young people. They are convinced that surfing not only changes the life of each individual but makes it better."
              />
            </ListItem>
            <ListItem
              button
              href="https://www.surfrider.org/"
              component="a"
              target="_blank"
              rel="noopener"
            >
              <ListItemAvatar>
                <Avatar>
                  <img src={srfLogo} className={classes.avatar} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                classes={{
                  primary: classes.listTextPrimary,
                  secondary: classes.listText,
                }}
                primary="Surfrider Foundation"
                secondary="The Surfrider Foundation is dedicated to the protection and enjoyment of the world's ocean, waves and beaches through a powerful activist network."
              />
            </ListItem>
          </List>
          <List
            component="nav"
            aria-label="global organizations"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Global Organizations
              </ListSubheader>
            }
          >
            <ListItem
              button
              href="https://oceanconservancy.org/"
              component="a"
              target="_blank"
              rel="noopener"
            >
              <ListItemAvatar>
                <Avatar>
                  <img src={oceanconservancy} className={classes.avatar} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                classes={{
                  primary: classes.listTextPrimary,
                  secondary: classes.listText,
                }}
                primary="Ocean Conservancy"
                secondary="Ocean Conservancy is working with you to protect the ocean from today’s greatest global challenges. The Ocean Conservancy creates science-based solutions for a healthy ocean and the wildlife and communities that depend on it."
              />
            </ListItem>
            <ListItem
              button
              href="https://theoceancleanup.com/"
              component="a"
              target="_blank"
              rel="noopener"
            >
              <ListItemAvatar>
                <Avatar>
                  <img src={oceancleanup} className={classes.avatar} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                classes={{
                  primary: classes.listTextPrimary,
                  secondary: classes.listText,
                }}
                primary="The Ocean Cleanup"
                secondary="The Ocean Cleanup is a non-profit organization, developing advanced technologies to rid the world’s oceans of plastic. By utilizing the ocean currents to our advantage, our passive drifting systems are estimated to clean up half the Great Pacific Garbage Patch in 5 years’ time."
              />
            </ListItem>
            <ListItem
              button
              href="https://oceana.org/"
              component="a"
              target="_blank"
              rel="noopener"
            >
              <ListItemAvatar>
                <Avatar>
                  <img src={oceana} className={classes.avatar} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                classes={{
                  primary: classes.listTextPrimary,
                  secondary: classes.listText,
                }}
                primary="Oceana"
                secondary="An international organization focused solely on oceans, dedicated to achieving measurable change by conducting specific, science-based policy campaigns with fixed deadlines and articulated goals."
              />
            </ListItem>
          </List>

          {/*   <List
            component="nav"
            aria-label="trash pickup"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Trash Pickups
              </ListSubheader>
            }
          >
          <ListItem
              button
              href="https://www.worldcleanupday.org/"
              component="a"
              target="_blank"
              rel="noopener"
            >
              <ListItemAvatar>
                <Avatar>
                  <img src={worldcleanupday} className={classes.avatar} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                classes={{
                  primary: classes.listTextPrimary,
                  secondary: classes.listText,
                }}
                primary="World Cleanup Day is September 21st!!"
                secondary="Be a part of a global effort to clean up our planet. Join a local group and volunteer your time, organize your own team, donate, or simple go out yourself and make a difference (don't forget to download the TrashOut app, that's what we will do since our team is currently travelling)!!"
              />
            </ListItem> 
          </List>*/}
        </div>
      </Container>
    </>
  )
}

AboutDetail.propTypes = {
  img: PropTypes.array.isRequired,
}

export default AboutDetail
