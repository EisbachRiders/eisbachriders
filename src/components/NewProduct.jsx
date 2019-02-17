import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Hidden from '@material-ui/core/Hidden'
import ProductDialog from './ProductDialog'
import { newProduct } from '../data/ProductData'

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 15,
    paddingRight: 15,
    background: `linear-gradient(to bottom, ${
      theme.status.greyBlue
    } 50%, #fff 50%)`,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 60,
      paddingRight: 60,
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: 45,
      paddingBottom: 45,
      paddingLeft: 170,
      paddingRight: 170,
    },
  },
  img: {
    height: 'auto',
    width: '60%',
    [theme.breakpoints.up('md')]: {
      marginLeft: 50,
    },
  },
  paper: {
    padding: 30,
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    alignItems: 'center',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      flexBasis: '50%',
      marginLeft: -100,
    },
    [theme.breakpoints.up('md')]: {
      width: 400,
      margin: -100,
    },
  },
  logo: {
    width: 125,
  },
  title: {
    textTransform: 'uppercase',
    fontWeight: 700,
    letterSpacing: 3,
    paddingBottom: 5,
    fontSize: 16,
  },
}))

function NewProduct({ img, detailImg }) {
  const classes = useStyles()
  const { t } = useTranslation()
  const [isDialogOpen, setDialog] = useState(false)

  return (
    <div className={classes.root} id="products">
      <Hidden xsDown>
        <Img
          fluid={img.node.fluid}
          alt={t('newProduct.imgAlt')}
          className={classes.img}
        />
      </Hidden>
      <Paper className={classes.paper} elevation={10}>
        <Img
          fluid={detailImg.node.fluid}
          alt={t('newProduct.logo')}
          className={classes.logo}
        />
        <Typography className={classes.title}>Bee Swell Surf Wax</Typography>
        <Typography>{t('newProduct.text')}</Typography>
        <ProductDialog
          product={newProduct[0]}
          buttonText={t('newProduct.more')}
          handleDialogOpen={() => setDialog(true)}
          handleDialogClose={() => setDialog(false)}
          isDialogOpen={isDialogOpen}
        />
      </Paper>
    </div>
  )
}

NewProduct.propTypes = {
  img: PropTypes.object.isRequired,
  detailImg: PropTypes.object.isRequired,
}

export default NewProduct
