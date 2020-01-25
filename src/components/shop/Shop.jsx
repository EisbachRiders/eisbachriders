import React from 'react'
import { useTranslation } from 'react-i18next'
import Img from 'gatsby-image'
import { makeStyles } from '@material-ui/core/styles'
import Hidden from '@material-ui/core/Hidden'
import Container from '../ui/Container'
import ShopCategory from './ShopCategory'

const useStyles = makeStyles(theme => ({
  img: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginBottom: 15,
      height: 300,
    },
    [theme.breakpoints.up('md')]: {
      marginBottom: 15,
      height: 400,
    },
    [theme.breakpoints.up('xl')]: {
      height: 700,
    },
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    [theme.breakpoints.up('sm')]: {
      marginBottom: 45,
    },
    [theme.breakpoints.up('md')]: {
      marginBottom: 60,
    },
  },
  rowImg: {
    flexBasis: '100%',
    width: '100%',
    height: 300,
    marginBottom: 30,
    [theme.breakpoints.up('sm')]: {
      height: 250,
      marginBottom: 0,
      flexBasis: '45%',
    },
    [theme.breakpoints.up('lg')]: {
      height: 350,
      marginBottom: 0,
      flexBasis: '45%',
    },
  },
}))

function Shop({ images }) {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <>
      <Hidden smUp>
        <Img
          fluid={images[0].node.fluid}
          alt="new year new adventures"
          className={classes.img}
          imgStyle={{ objectPosition: 'center center' }}
        />
      </Hidden>
      <Hidden xsDown xlUp>
        <Img
          fluid={images[1].node.fluid}
          alt="new year new adventures"
          className={classes.img}
          imgStyle={{ objectPosition: 'center center' }}
        />
      </Hidden>
      <Hidden lgDown>
        <Img
          fluid={images[2].node.fluid}
          alt="new year new adventures"
          className={classes.img}
          imgStyle={{ objectPosition: 'center center' }}
        />
      </Hidden>
      <Container className={classes.container}>
        <div className={classes.row}>
          <ShopCategory
            img={images[3]}
            title="fins"
            subtitle="for every board"
          />
          <ShopCategory
            img={images[4]}
            title="leashes"
            subtitle="get the best fit"
          />
        </div>
        <div className={classes.row}>
          <ShopCategory
            img={images[5]}
            title="apparel"
            subtitle="sleek & stylish"
          />
          <ShopCategory
            img={images[6]}
            title="accessories"
            subtitle="everything you need"
          />
        </div>
      </Container>
    </>
  )
}

export default Shop
