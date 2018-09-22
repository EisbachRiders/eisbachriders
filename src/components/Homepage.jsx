import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Newletter from './Newletter'

const styles = theme => ({
  container1: {
    display: 'flex',
    flexWrap: 'wrap',
    height: 500,
    background: theme.status.black,
  },
  container2: {
    display: 'flex',
    flexWrap: 'wrap',
    textAlign: 'center',
    height: 700,
    background: theme.status.white,
  },
  container3: {
    display: 'flex',
    flexWrap: 'wrap',
    height: 600,
    background: theme.status.black,
  },
  img: {
    width: '100%',
    height: 500,
  },
  img2: {
    width: '100%',
    height: 700,
  },
  img4: {
    width: '100%',
    height: 600,
  },
  imgContainer1: {
    flexBasis: '50%',
  },
  textContainer1: {
    flexBasis: '50%',
    padding: 90,
  },
  imgContainer2: {
    flexBasis: '33%',
  },
  textContainer2: {
    flexBasis: '33%',
    padding: 90,
    color: theme.status.black,
  },
  imgContainer3: {
    flexBasis: '67%',
  },
  textContainer3: {
    flexBasis: '33%',
    padding: 90,
    color: theme.status.black,
  },
  title: {
    textTransform: 'uppercase',
    color: theme.palette.primary.main,
    letterSpacing: 3,
    paddingBottom: 15,
  },
  text: {
    color: theme.palette.common.white,
  },
  title2: {
    textTransform: 'uppercase',
    color: theme.status.black,
    letterSpacing: 3,
    paddingBottom: 15,
  },
  text2: {
    color: theme.status.black,
    textTransform: 'uppercase',
    paddingBottom: 45,
  },
})

const Homepage = props => {
  const { img1, img2, img3, img4, classes } = props

  return (
    <Fragment>
      <Newletter />
      <div className={classes.container1}>
        <div className={classes.imgContainer1}>
          <Img fluid={img1.node.fluid} alt="" className={classes.img} />
        </div>
        <div className={classes.textContainer1}>
          <Typography className={classes.title} variant="headline">
            who we are
          </Typography>
          <Typography className={classes.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </div>
      </div>
      <div className={classes.container2}>
        <div className={classes.textContainer2}>
          <Typography className={classes.title2} variant="subheading">
            surf
          </Typography>
          <Typography className={classes.text2} variant="headline">
            View our winter collection
          </Typography>
          <Button variant="outlined" color="primary" className={classes.button}>
            Read more
          </Button>
        </div>
        <div className={classes.imgContainer2}>
          <Img fluid={img2.node.fluid} alt="" className={classes.img2} />
        </div>
        <div className={classes.imgContainer2}>
          <Img fluid={img3.node.fluid} alt="" className={classes.img2} />
        </div>
      </div>
      <div className={classes.container3}>
        <div className={classes.textContainer3}>
          <Typography className={classes.title} variant="headline">
            who we are
          </Typography>
          <Typography className={classes.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </div>
        <div className={classes.imgContainer3}>
          <Img fluid={img4.node.fluid} alt="" className={classes.img4} />
        </div>
      </div>
    </Fragment>
  )
}

Homepage.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Homepage)
