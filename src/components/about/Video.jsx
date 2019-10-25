import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Hidden from '@material-ui/core/Hidden'
import Button from '@material-ui/core/Button'
import erLogo from '../../assets/logos/ER_minimal_black.svg'
import Container from '../ui/Container'
import ReactPlayer from 'react-player'
import video from '../../assets/images/aboutMovie.mp4'
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
  img: {
    height: '60%',
    width: '60%',
    [theme.breakpoints.up('lg')]: {
      marginLeft: 50,
    },
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
    width: 100,
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
  video: {
    zIndex: 1,
    opacity: 1,
    display: 'block',
    width: '80%',
    height: 'auto',
    transition: '.5s ease',
    backfaceVisibility: 'hidden',
  },
  button: {
    transition: '.5s ease',
    opacity: 0,
    position: 'absolute',
    top: '80%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    MsTransform: 'translate(-50%, -50%)',
    textAlign: 'center',
  },
  buttonContainer: {},
  videoContainer: {
    position: 'relative',
    width: '100%',
    '&:hover': {
      '&.video': {
        opacity: 0.3,
      },
      '&.button': {
        opacity: 1,
      },
    },
  },
  img2: {
    height: 200,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '75%',
      height: 400,
    },
  },
}))

function Video({ img }) {
  const classes = useStyles()
  const { t } = useTranslation()
  const [playing, setPlaying] = useState(true)

  return (
    <Container className={classes.container}>
      <div className={classes.textContainer}>
        <Hidden xsDown>
          <Img
            objectPosition="top"
            fluid={img.node.fluid}
            alt="group of friends walking"
            className={classes.img2}
          />
          {/* <div className={classes.videoContainer}>
            <ReactPlayer
              url={video}
              width="100%"
              height="100%"
              playing={playing}
              className={classes.video}
            />
            <div className={classes.buttonContainer}>
              <Button
                onClick={() => setPlaying(false)}
                className={classes.button}
              >
                Stop
              </Button>
              <Button
                onClick={() => setPlaying(true)}
                className={classes.button}
              >
                Play
              </Button>
            </div>
          </div> */}
        </Hidden>
        <Paper className={classes.paper} elevation={10}>
          <img
            src={erLogo}
            alt="eisbach riders logo"
            className={classes.logo}
          />
          <Typography className={classes.text}>{t('about.mission')}</Typography>
        </Paper>
      </div>
      <Hidden smUp>
        <Img
          objectPosition="top"
          fluid={img.node.fluid}
          alt="group of friends walking"
          className={classes.img2}
        />
      </Hidden>
    </Container>
  )
}

export default Video
