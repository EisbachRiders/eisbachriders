import React from 'react'
import PropTypes from 'prop-types'
import Link from '../Link'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux'
import classnames from 'classnames'

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
    marginBottom: 30,
    [theme.breakpoints.up('sm')]: {
      flexBasis: '22%',
    },
  },
  border: {
    border: `1px solid ${theme.status.grey}`,
  },
  img: {
    width: '80%',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
    },
  },
  descriptionContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  name: {
    marginBottom: 5,
    fontSize: 14,
    textTransform: 'uppercase',
    fontWeight: 300,
    width: '100%',
  },
  price: {
    color: theme.status.greyMed,
    fontSize: 14,
    fontWeight: 300,
    marginBottom: 5,
  },
  circle: {
    marginBottom: 15,
    height: 15,
    width: 15,
    borderRadius: '50%',
    margin: '0 auto',
  },
  blue: {
    background: theme.status.blue,
  },
  grey: {
    background: theme.status.grey,
  },
  white: {
    border: `1px solid ${theme.palette.common.black}`,
    background: theme.status.white,
  },
  black: {
    background: theme.status.black,
  },
}))

function ShopItem({ product }) {
  const classes = useStyles()
  const placeholder = !product.images
  return (
    <div
      className={classnames(classes.root, {
        [classes.border]: !placeholder,
      })}
    >
      {!placeholder && (
        <>
          <Link to={'/product/'}>
            <img
              src={product.images[0].src}
              className={classes.img}
              alt={product.name}
            />
          </Link>
          <div className={classes.descriptionContainer}>
            <Typography className={classes.name}>{product.name}</Typography>
            <div>
              <Typography className={classes.price}>{`€${
                product.price
              }`}</Typography>
              <div
                className={classnames(classes.circle, {
                  [classes.blue]:
                    product.attributes.length !== 0
                      ? product.attributes[0].options[0] === 'Blue'
                      : null,
                  [classes.grey]:
                    product.attributes.length !== 0
                      ? product.attributes[0].options[0] === 'Grey'
                      : null,
                  [classes.white]:
                    product.attributes.length !== 0
                      ? product.attributes[0].options[0] === 'White'
                      : null,
                  [classes.black]:
                    product.attributes.length !== 0
                      ? product.attributes[0].options[0] === 'Black'
                      : null,
                })}
              />
            </div>
          </div>
        </>
      )}
    </div>
  )
}

ShopItem.propTypes = {
  product: PropTypes.object.isRequired,
}

export default connect(mapDispatchToProps)(ShopItem)
