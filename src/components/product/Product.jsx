import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import classnames from 'classnames'
import Button from '@material-ui/core/Button'
import ProductAttribute from './ProductAttribute'
import ProductImg from './ProductImg'
import ProductDescription from './ProductDescription'
import Counter from '../counter/Counter'
import Container from '../ui/Container'

const mapStateToProps = ({ product }) => {
  return { product }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     addToCart: (product,quantity) => dispatch({ type: `PRODUCT`, product }),
//   }
// }

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  imgContainer: {
    flexBasis: '50%',
  },
  name: {
    paddingBottom: 10,
    fontWeight: 300,
    textAlign: 'left',
  },
  contentContainer: {
    flexBasis: '40%',
  },
  priceContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  price: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  red: {
    color: theme.status.red,
  },
  divider: {
    marginBottom: 60,
    marginTop: 60,
    borderBottom: `1px solid ${theme.status.grey}`,
  },
}))

function Product({ product }) {
  const { t } = useTranslation()
  const classes = useStyles()
  const [quantity, setQuantity] = useState(1)

  const handleRemove = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1)
    }
  }

  const handleAdd = () => {
    if (quantity < 15 || quantity < product.stock_quantity) {
      setQuantity(quantity + 1)
    }
  }

  const handleCart = () => {}

  return (
    <Container>
      {Object.keys(product).length !== 0 && (
        <div>
          <div className={classes.container}>
            <div className={classes.imgContainer}>
              <ProductImg images={product.images} />
            </div>
            <div className={classes.contentContainer}>
              <Typography variant="h6" className={classes.name}>
                {product.name}
              </Typography>
              <div
                dangerouslySetInnerHTML={{ __html: product.short_description }}
                className={classes.text}
              />
              <div className={classes.priceContainer}>
                <Typography variant="h6" className={classes.price}>
                  {`€${product.price}`}
                </Typography>
                {!product.in_stock && (
                  <Typography
                    className={classnames(classes.price, classes.red)}
                  >
                    {t('products.outOfStock')}
                  </Typography>
                )}
              </div>
              {product.attributes.length !== 0 &&
                product.attributes.map(elem => (
                  <ProductAttribute
                    attribute={elem}
                    key={`attribute_${elem.name}`}
                  />
                ))}
              <div className={classes.priceContainer}>
                <Counter
                  handleRemove={handleRemove}
                  handleAdd={handleAdd}
                  value={quantity}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleCart}
                >
                  {t('products.addToCart')}
                </Button>
              </div>
            </div>
          </div>
          <div className={classes.divider} />
          <ProductDescription product={product} />
        </div>
      )}
    </Container>
  )
}

export default connect(
  mapStateToProps,
  null
)(Product)
