import React from 'react'
import Img from 'gatsby-image'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}))

function BestSellers() {
  const classes = useStyles()
  const bestSellers = [img1, img2, img3]
  return (
    <Container>
      <Typography>Best Sellers</Typography>
      <div className={classes.container}>
        {bestSellers.map(elem => (
          <Img
            fluid={elem.node.fluid}
            alt={`category ${title}`}
            className={classes.img}
            imgStyle={{ objectPosition: 'center center' }}
          />
        ))}
      </div>
    </Container>
  )
}

export default BestSellers
