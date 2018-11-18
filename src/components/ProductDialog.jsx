import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import SwipeableViews from 'react-swipeable-views'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const styles = theme => ({
  more: {
    width: '100%',
  },
  dialogContainer: {
    display: 'flex',
  },
  dialogImg: {
    flexBasis: '60%',
  },
  dialogContent: {
    flexBasis: '40%',
  },
  dialogTitle: {
    textAlign: 'center',
  },
  closeButton: {
    float: 'right',
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

class ProductDialog extends Component {
  state = {
    isDialogOpen: false,
  }

  handleDialogOpen = idx => {
    this.setState({
      isDialogOpen: true,
    })
  }

  handleDialogClose = () => {
    this.setState({ isDialogOpen: false })
  }

  render() {
    const { product, classes } = this.props
    const { isDialogOpen } = this.state
    console.log(product)
    return (
      <div className={classes.root}>
        <Button
          variant="contained"
          className={classes.more}
          onClick={this.handleDialogOpen}
        >
          More
        </Button>
        <Dialog
          open={isDialogOpen}
          onClose={this.handleDialogClose}
          maxWidth="md"
        >
          <DialogTitle id="dialog-title" className={classes.dialogTitle}>
            {product.name}
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.handleDialogClose}
              className={classes.closeButton}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <div className={classes.dialogContainer}>
              <div className={classes.dialogImg}>
                <SwipeableViews>
                  {product.images.map((img, idx) => (
                    <Img
                      key={`img${idx}`}
                      fluid={img.node.fluid}
                      alt=""
                      className={classes.img}
                    />
                  ))}
                </SwipeableViews>
              </div>
              <div className={classes.dialogContent}>
                <Typography variant="h6" className={classes.price}>
                  {product.price}
                </Typography>
                <List>
                  {product.more.map((item, idx) => (
                    <ListItem>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    )
  }
}

ProductDialog.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ProductDialog)
