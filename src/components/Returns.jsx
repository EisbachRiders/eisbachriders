import React from 'react'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  container: {
    background: theme.status.white,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 30,
    textAlign: 'left',
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 60,
      paddingRight: 60,
      paddingBottom: 30,
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: 90,
      paddingRight: 90,
      paddingBottom: 90,
      paddingTop: 30,
    },
  },
  title: {
    paddingBottom: 15,
    textAlign: 'center',
    textTransform: 'uppercase',
    [theme.breakpoints.up('sm')]: {
      paddingBottom: 30,
      paddingTop: 30,
    },
  },
  subtitle: {
    textTransform: 'uppercase',
  },
  text: {
    fontSize: 12,
    textTransform: 'capitalize',
    wordBreak: 'break-word',
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 30,
      paddingBottom: 30,
    },
  },
}))

function Returns() {
  const classes = useStyles()
  const { t } = useTranslation()
  return (
    <div className={classes.container} id="Returns">
      <Typography variant="h6" className={classes.title}>
        {t('returns.returns')}
      </Typography>
      <Typography variant="subtitle1" className={classes.subtitle}>
        {t('returns.conditions')}
      </Typography>
      <Typography className={classes.text}>{t('returns.text1')}</Typography>
    </div>
  )
}

export default Returns
