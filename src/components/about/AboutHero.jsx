import React from 'react'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Hidden from '@material-ui/core/Hidden'
import logo from '../../assets/logos/logo.png'
import Container from '../ui/Container'
import Img from 'gatsby-image'

const useStyles = makeStyles(theme => ({
  container: {
    background: `linear-gradient(to bottom, ${theme.status.greyBlue} 50%, #fff 50%)`,
    flexDirection: 'column',
    display: 'flex',
  },
  textContainer: {
    display: 'flex',
    alignItems: 'center',
    height: 400,
  },
  paper: {
    padding: 15,
    zIndex: 2,
    textAlign: 'center',
    boxShadow: 'none',
    [theme.breakpoints.up('sm')]: {
      flexBasis: '50%',
      marginLeft: -100,
      marginRight: 10,
      marginBottom: 10,
      boxShadow:
        '0px 6px 6px -3px rgba(0,0,0,0.2), 0px 10px 14px 1px rgba(0,0,0,0.14), 0px 4px 18px 3px rgba(0,0,0,0.12)',
    },
    [theme.breakpoints.up('md')]: {
      width: 600,
      padding: 30,
      marginLeft: -100,
      marginBottom: 0,
    },
  },
  logo: {
    width: 75,
  },
  title: {
    textTransform: 'uppercase',
    fontWeight: 700,
    letterSpacing: 3,
    paddingBottom: 5,
    fontSize: 16,
  },
  text: {
    textAlign: 'justify',
  },
  img: {
    height: 200,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '75%',
      height: 400,
    },
  },
}))

function AboutHero({ img }) {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <Container className={classes.container}>
      <div className={classes.textContainer}>
        <Hidden xsDown>
          <Img
            objectPosition="top"
            fluid={img.node.fluid}
            alt="group of friends walking"
            className={classes.img}
          />
        </Hidden>
        <Paper className={classes.paper} elevation={10}>
          <img src={logo} alt="ER logo" className={classes.logo} />
          <Typography className={classes.text}>{t('about.mission')}</Typography>
        </Paper>
      </div>
      <Hidden smUp>
        <Img
          objectPosition="top"
          fluid={img.node.fluid}
          alt="group of friends walking"
          className={classes.img}
        />
      </Hidden>
    </Container>
  )
}

export default AboutHero
