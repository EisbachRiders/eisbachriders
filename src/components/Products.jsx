import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import ProductDialog from './ProductDialog'

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  container: {
    flexBasis: '30%',
  },
  img: {
    width: '100%',
  },
  name: {
    paddingTop: 15,
    paddingBottom: 10,
    fontWeight: 600,
    textAlign: 'left',
  },
  price: {
    color: theme.palette.primary.main,
    fontWeight: 600,
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
})

class Products extends Component {
  render() {
    const { images, classes } = this.props
    const products = [
      {
        name: 'Surfboard Thruster Fin Set - FCS Double Tab with Fin Key',
        images: [images[0], images[0], images[0], images[0], images[0]],
        price: '19.90',
        ebay: 'http://www.ebay.de/itm/183498144801',
        amazon: 'https://www.amazon.de/dp/B07K8W2TKK',
        more: [
          'Set of 3 fins with center fin and the two side fins (right and left) with inside profile in standard size G5 / M5.',
          'Fits any surfboard with double tab FCS1 plug system - whether bodyboard, shortboard, funboard or kiteboard, making it ideal for surfing, river surfing, paddle boarding or water sports in general.',
          'High quality materials make the fins durable and flexible.',
          'All our products come in a sustainable and environmentally friendly packaging.',
          "Height: 11.63 cm (4.58'')",
          "Length: 11.13 cm (4.38'')",
          "Thickness: 0.66 cm (0.26'')",
          'Angle: 35.5 degree',
          'Scope of delivery: 3 fin set with fin key',
        ],
      },
      {
        name: 'Surfboard RailProtect - Rail Protection Saver Tape',
        images: [images[2], images[2], images[2], images[2], images[2]],
        price: '24.90',
        ebay: 'http://www.ebay.de/itm/183498197638',
        amazon: 'https://www.amazon.de/dp/B07K8W9TG9',
        more: [
          'The particularly durable diamond structure protects the edges of your board against dings and bumps, thus preventing the ingress of water.',
          'Fits any surfboard up to 6ft (1.83m) - whether its bodyboard, shortboard, funboard or kiteboard, making it ideal for surfing, river surfing, paddle boarding or SUP (stand up paddling).',
          "The two adhesive strips (each 191 x 6.3 cm (6'3 x 2.5)) are easy to attach and will last a long time on your board.",
          'All our products come in a sustainable and environmentally friendly handcrafted packaging.',
          'Scope of delivery: 2 piece set surfboard RailProtect tape',
        ],
      },
      {
        name: 'Surfboard Thruster Fin Set - Future Single Tab with Fin Key',
        images: [images[0], images[0], images[0], images[0], images[0]],
        price: '19.90',
        ebay: 'http://www.ebay.de/itm/183498170584',
        amazon: null,
        more: [
          'Set of 3 fins with center fin and the two side fins (right and left) with inside profile in standard size G5 / M5.',
          'Fits any surfboard with single tab Future plug system - whether bodyboard, shortboard, funboard or kiteboard, making it ideal for surfing, river surfing, paddle boarding or water sports in general.',
          'High quality materials make the fins durable and flexible.',
          'All our products come in a sustainable and environmentally friendly packaging.',
          "Height: 11.63 cm (4.58'')",
          "Length: 11.13 cm (4.38'')",
          "Thickness: 0.66 cm (0.26'')",
          'Angle: 35.5 degree',
          'Scope of delivery: 3 fin set with fin key',
        ],
      },
    ]
    return (
      <div className={classes.root}>
        {products.map((elem, idx) => (
          <div className={classes.container} key={`product${idx}`}>
            <Img
              fluid={elem.images[0].node.fluid}
              alt=""
              className={classes.img}
            />
            <Typography className={classes.name}>{elem.name}</Typography>
            <Typography variant="h6" className={classes.price}>
              {`€${elem.price}`}
              <div>
                <Button style={{ width: '20%' }}>ebay</Button>
                <Button style={{ width: '20%' }}>a</Button>
              </div>
            </Typography>
            <ProductDialog product={elem} />
          </div>
        ))}
      </div>
    )
  }
}

Products.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Products)
