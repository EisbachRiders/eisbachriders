import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import BagItem from './BagItem'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: 30,
    marginRight: 30,
  },
  title: {
    textTransform: 'uppercase',
    paddingTop: 30,
    paddingBottom: 30,
    marginBottom: 30,
    fontWeight: 600,
    borderBottom: `.5px solid ${theme.status.grey}`,
  },
}))

function Bag() {
  const classes = useStyles()
  const { t } = useTranslation()
  const bag = [
    {
      img: '../../assets/images/FCS/img1.jpg',
      name: 'fin number item',
      price: 14,
      quantity: 1,
    },
    {
      img: '../../assets/images/FCS/img1.jpg',
      name: 'fin number 2',
      price: 24,
      quantity: 2,
    },
  ]
  return (
    <div className={classes.root}>
      <Typography className={classes.title}>{t('checkout.myBag')}</Typography>
      {bag.map((elem, idx) => (
        <BagItem item={elem} key={`bagItem${idx}`} />
      ))}
      <Typography className={classes.total}>{t('checkout.total')}</Typography>
    </div>
  )
}

Bag.propTypes = {}

export default Bag
