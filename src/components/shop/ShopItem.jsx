import React from 'react'
import PropTypes from 'prop-types'
import Link from '../Link'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux'

const mapDispatchToProps = dispatch => {
  return { changeProduct: () => dispatch({ type: `Product` }) }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexBasis: '100%',
    textAlign: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      flexBasis: '30%',
    },
  },
  link: {
    height: 375,
  },
  img: {
    width: '80%',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
    },
  },
  descriptionContainer: {
    height: '100%',
    height: 60,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 30,
    marginBottom: 60,
  },
  name: {
    marginBottom: 5,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 300,
    width: '100%',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
  price: {
    color: theme.status.greyMed,
    fontSize: 18,
    fontWeight: 300,
  },
}))

function ShopItem({ product }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Link to={'/product/'} className={classes.link}>
        <img
          src={product.images[0].src}
          className={classes.img}
          alt={product.name}
        />
      </Link>
      <div className={classes.descriptionContainer}>
        <Typography className={classes.name}>{product.name}</Typography>
        <Typography className={classes.price}>{`€${product.price}`}</Typography>
      </div>
    </div>
  )
}

ShopItem.propTypes = {
  product: PropTypes.object.isRequired,
}

export default connect(mapDispatchToProps)(ShopItem)
