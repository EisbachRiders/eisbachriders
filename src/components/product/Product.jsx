import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import ProductImg from './ProductImg'

const mapStateToProps = ({ product }) => {
  return { product }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexBasis: '30%',
    textAlign: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  img: {
    width: '80%',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
    },
  },
  descriptionContainer: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 15,
    paddingLeft: 15,
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'center',
      paddingRight: 0,
      paddingLeft: 0,
    },
  },
  price: {
    color: theme.palette.primary.main,
    fontWeight: 600,
    marginRight: 15,
    fontSize: 16,
    [theme.breakpoints.up('md')]: {
      fontSize: 20,
    },
  },
  fullWidth: {
    width: '100%',
  },
}))

function Product({ product }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <ProductImg images={product.images} />
      <div className={classes.descriptionContainer}>
        <Typography className={classes.name}>{product.name}</Typography>
        <div className={classes.fullWidth}>
          <div className={classes.priceContainer}>
            <Typography variant="h6" className={classes.price}>
              {`€${product.price}`}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(
  mapStateToProps,
  null
)(Product)
