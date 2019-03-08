import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import img1 from '../../assets/images/FCS/img1.jpg'
import img2 from '../../assets/images/FCS/img2.jpg'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  img: {
    boxShadow:
      '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)',
  },
}))

function BagItem({ item }) {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <div className={classes.root}>
      t67tfc cvg89b jno0-pokm ,lp;-=p[;l.]{' '}
      <Typography className={classes.quantity}>{item.quantity}</Typography>
      <Typography className={classes.price}>
        {item.price * item.quantity}
      </Typography>
    </div>
  )
}

BagItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default BagItem
