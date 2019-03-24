import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.status.greyBlue,
    flexBasis: '30%',
    padding: 30,
  },
  title: {
    textTransform: 'uppercase',
    paddingTop: 30,
    paddingBottom: 30,
    marginBottom: 30,
    fontWeight: 600,
    borderBottom: `.5px solid ${theme.status.grey}`,
  },
  subtitle: {
    textTransform: 'uppercase',
    marginBottom: 30,
  },
  button: {},
}))

function Total() {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>{t('checkout.total')}</Typography>
      <Typography className={classes.subtitle}>
        {t('checkout.subtotal')}
      </Typography>
      <Typography className={classes.subtitle}>
        {t('checkout.shipping')}
      </Typography>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        fullWidth
      >
        {t('checkout.pay')}
      </Button>
    </div>
  )
}

Total.propTypes = {}

export default Total
