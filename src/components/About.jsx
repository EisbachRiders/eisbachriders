import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 15,
    paddingRight: 15,
    background: theme.status.greyBlue,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 60,
      paddingRight: 60,
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: 60,
      paddingBottom: 60,
      paddingLeft: 90,
      paddingRight: 90,
    },
    [theme.breakpoints.up('lg')]: {
      paddingTop: 45,
      paddingBottom: 90,
      paddingLeft: 170,
      paddingRight: 170,
    },
  },
  textContainer: {
    zIndex: 2,
    flexBasis: '100%',
    paddingBottom: 30,
    paddingRight: 15,
    paddingLeft: 15,
    [theme.breakpoints.up('sm')]: {
      flexBasis: '60%',
    },
    [theme.breakpoints.up('md')]: {
      marginBottom: 60,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    [theme.breakpoints.up('lg')]: {
      paddingTop: 45,
      paddingRight: 60,
      marginBottom: 90,
    },
  },
  imgContainer: {
    flexBasis: '40%',
    marginBottom: 45,
    zIndex: 2,
  },
  sideText: {
    position: 'relative',
    float: 'right',
    marginTop: -100,
    marginRight: 0,
    transform: 'rotate(-270deg)',
    WebkitTransform: 'rotate(-270deg)',
    MozTransform: 'rotate(-270deg)',
    MsTransform: 'rotate(-270deg)',
    OTransform: 'rotate(-270deg)',
    filter: 'progid:DXImageTransform.Microsoft.BasicImage(rotation=3)',
    [theme.breakpoints.up('sm')]: {
      marginTop: -150,
      marginRight: 0,
    },
    [theme.breakpoints.up('md')]: {
      marginTop: -150,
      marginRight: 0,
    },
  },
  img: {
    width: 200,
    height: 150,
    margin: '0 auto',
    [theme.breakpoints.up('md')]: {
      width: '80%',
      height: '80%',
    },
  },
  backgroundImg: {
    zIndex: 1,
    left: 0,
    bottom: 0,
    width: '100%',
    objectFit: 'fill',
    height: 150,
  },
  title: {
    textTransform: 'uppercase',
    fontWeight: 700,
    fontSize: 16,
    [theme.breakpoints.up('md')]: {
      fontSize: 36,
    },
  },
  text: {
    paddingTop: 30,
    color: theme.palette.common.black,
    fontSize: 12,
    [theme.breakpoints.up('md')]: {
      fontSize: 14,
    },
  },
}))

function About({ img, waveImg }) {
  const classes = useStyles()
  const { t } = useTranslation()
  return (
    <div className={classes.root} id="about">
      <div className={classes.textContainer}>
        <Typography className={classes.title} variant="h5">
          {t('about.sectionTitle1')}
        </Typography>
        <Typography className={classes.title} variant="h5">
          {t('about.sectionTitle2')}
        </Typography>
        <Typography className={classes.text} variant="body1">
          {t('about.message')}
        </Typography>
      </div>
      <Hidden xsDown>
        <div className={classes.imgContainer}>
          <Img
            fluid={img.node.fluid}
            alt="two surfers in ocean"
            className={classes.img}
          />
          {/* <Typography className={classes.sideText}>
            Surf Accessories from Munich
          </Typography> */}
        </div>
      </Hidden>
      <Img
        fluid={waveImg.node.fluid}
        alt="wave background"
        className={classes.backgroundImg}
        imgStyle={{ objectFit: 'fill' }}
        style={{ position: 'absolute' }}
      />
    </div>
  )
}

About.propTypes = {
  img: PropTypes.object.isRequired,
  waveImg: PropTypes.object.isRequired,
}

export default About
