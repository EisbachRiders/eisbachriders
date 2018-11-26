import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import classnames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Products from './Products'
import Newletter from './Newletter'

const styles = theme => ({
  container1: {
    display: 'flex',
    flexWrap: 'wrap',
    height: 500,
    background: theme.status.black,
  },
  container2: {
    textAlign: 'center',
    padding: 90,
    background: theme.status.white,
  },
  img: {
    width: '100%',
    height: 500,
  },
  imgContainer1: {
    flexBasis: '50%',
  },
  textContainer1: {
    flexBasis: '50%',
    padding: 90,
  },
  title: {
    textTransform: 'uppercase',
    width: '100%',
    textAlign: 'center',
    letterSpacing: 3,
    paddingBottom: 30,
  },
  titleAbout: {
    color: theme.palette.primary.main,
  },
  titleProducts: {
    color: theme.palette.black,
  },
  text: {
    color: theme.palette.common.white,
  },
})

const Homepage = props => {
  const { img1, img2, img3, img4, classes } = props

  return (
    <Fragment>
      <Newletter />
      <div className={classes.container1}>
        <div className={classes.imgContainer1}>
          <img src={img1} className={classes.img} />
          {/* <Img fluid={img1.node.fluid} alt="" className={classes.img} /> */}
        </div>
        <div className={classes.textContainer1} id="about">
          <Typography
            className={classnames(classes.title, classes.titleAbout)}
            variant="h5"
          >
            who we are
          </Typography>
          <Typography className={classes.text} variant="subtitle1">
            Eisbach Riders is a young local surf brand from Munich and offers
            equipment for surfing. Whether you are in the sea, in the river or
            on the city wave. We, Michael and Robin, are passionate surfers
            ourselves and value quality products at comparable prices. Packed in
            sustainable and environmentally friendly packaging, we will ship as
            fast as possible so that you can jump right back into the water with
            a smile on your face.
          </Typography>
        </div>
      </div>
      <div className={classes.container2} id="products">
        <Typography
          className={classnames(classes.title, classes.titleProducts)}
          variant="h5"
        >
          products
        </Typography>
        <Products images={[img2, img3, img4]} />
      </div>
    </Fragment>
  )
}

Homepage.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Homepage)
