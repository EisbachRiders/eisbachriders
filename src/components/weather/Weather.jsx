import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import classnames from 'classnames'

import Container from '../ui/Container'

const mapStateToProps = ({ product, lng, cart }) => {
  return { product, lng, cart }
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: cart => dispatch({ type: `CART`, cart }),
  }
}

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

function Product({ product, cart, addToCart }) {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <Container>
      <Typography variant="h6" className={classes.name}>
        weather
      </Typography>
    </Container>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product)
