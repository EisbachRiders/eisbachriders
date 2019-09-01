import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Container from '../ui/Container'
import AboutDetail from './AboutDetail'
import Hidden from '@material-ui/core/Hidden'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles(theme => ({
  videoContainer: {
    height: 500,
  },
  topContainer: {
    display: 'flex',
    height: 300,
  },
  container: {
    display: 'flex',
    height: 500,
  },
  topContainerText: {
    margin: 60,
    textAlign: 'center',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontWeight: 'bold',
  },
  pictureContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  imgCeo: {
    marginBottom: 15,
    width: 200,
    height: 200,
  },
  text: {
    width: '50%',
  },
  ceoContainer: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  paper: {
    padding: 15,
    zIndex: 200,
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
      width: 400,
      marginLeft: -100,
      marginBottom: 0,
    },
  },
  img1: {
    height: '60%',
    width: '60%',
    [theme.breakpoints.up('lg')]: {
      marginLeft: 50,
    },
  },
  textContainer: {
    display: 'flex',
    alignItems: 'center',
  },
}))

function About({ img }) {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <div>
      <div className={classes.topContainer}>
        <Img
          fluid={img[0].node.fluid}
          alt="trash from ocean"
          className={classes.img}
        />
        <div className={classes.topContainerText}>
          <Typography className={classes.title}>About Us</Typography>
          <Typography>
            We are Munich based surf accessories brand that focuses on community
            and sustainability.
          </Typography>
        </div>
        <Img
          fluid={img[1].node.fluid}
          alt="community trash clean up"
          className={classes.img}
        />
      </div>
      <Container>
        <div className={classes.textContainer}>
          <Hidden xsDown>
            <Img
              fluid={img[0].node.fluid}
              alt="video"
              className={classes.img1}
            />
          </Hidden>
          <Paper className={classes.paper} elevation={10}>
            <Typography>About Us</Typography>
            <Typography>
              {' '}
              We are Munich based surf accessories brand that focuses on
              community and sustainability. We are Munich based surf accessories
              brand that focuses on community and sustainability. We are Munich
              based surf accessories brand that focuses on community and
              sustainability. We are Munich based surf accessories brand that
              focuses on community and sustainability.
            </Typography>
          </Paper>
        </div>
      </Container>

      <AboutDetail
        title="Community"
        img={img[2].node.fluid}
        variant="left"
        ariaLabel="surfers walking together"
      />
      <AboutDetail
        title="Sustainability"
        img={img[3].node.fluid}
        variant="right"
        ariaLabel="sustainable packaging"
      />

      {/* <div className={classes.videoContainer}>
        <Img
          fluid={img[0].node.fluid}
          alt="trash from ocean"
          className={classes.img}
        />
      </div> */}
      <Container className={classes.ceoContainer}>
        <div className={classes.pictureContainer}>
          <Img
            fluid={img[4].node.fluid}
            alt="ceo1"
            className={classes.imgCeo}
          />
          <Typography>Michael</Typography>
        </div>
        <div className={classes.pictureContainer}>
          <Img
            fluid={img[5].node.fluid}
            alt="ceo2"
            className={classes.imgCeo}
          />
          <Typography>Robin</Typography>
        </div>
      </Container>
    </div>
  )
}

About.propTypes = {
  img: PropTypes.array.isRequired,
}

export default About
