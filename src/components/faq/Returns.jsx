import React from 'react'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Container from '../ui/Container'

const useStyles = makeStyles(theme => ({
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
    <Container>
      <Typography variant="h6" variantMapping="h1" className={classes.title}>
        {t('returns.returns')}
      </Typography>
      <Typography variant="subtitle1" className={classes.subtitle}>
        {t('returns.conditions')}
      </Typography>
      <Typography className={classes.text}>{t('returns.text1')}</Typography>
    </Container>
  )
}

export default Returns
