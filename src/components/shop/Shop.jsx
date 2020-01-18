import React from 'react'
import { useTranslation } from 'react-i18next'
import Img from 'gatsby-image'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Container from '../ui/Container'

// const categories = ['Leashes', 'Fins', 'Bundle', 'Apparel', 'Accessories']

const useStyles = makeStyles(theme => ({
  imgContainer: {
    width: '100%',
    height: 350,
    [theme.breakpoints.up('md')]: {
      height: 600,
    },
    [theme.breakpoints.up('xl')]: {
      height: 1000,
    },
  },
  img: {
    zIndex: -5,
    left: 0,
    top: 0,
    width: '100%',
    height: 350,
    [theme.breakpoints.up('md')]: {
      height: 600,
    },
    [theme.breakpoints.up('xl')]: {
      height: 1000,
    },
  },
}))

function Shop({ images }) {
  const classes = useStyles()
  const { t } = useTranslation()
  console.log(images)

  return (
    <div>
      <div className={classes.imgContainer}>
        <Img
          fluid={images[0].node.fluid}
          alt="new year new adventures"
          className={classes.img}
          imgStyle={{ objectPosition: 'center center' }}
          style={{ position: 'absolute' }}
        />
      </div>
      <Container className={classes.container}>
        <div className={classes.row}>cat 1</div>
        <div className={classes.row}>ca 2</div>
      </Container>
    </div>
  )
}

export default Shop
