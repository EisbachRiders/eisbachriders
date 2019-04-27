import React from 'react'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

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
      paddingBottom: 45,
    },
  },
  listItem: {
    padding: 0,
  },
  link: {
    paddingLeft: 60,
    fontSize: 12,
  },
}))

function Payment() {
  const classes = useStyles()
  const { t } = useTranslation()
  return (
    <div className={classes.container} id="Payment">
      <Typography variant="h6" className={classes.title}>
        {t('payment.payment')}
      </Typography>
      <Typography variant="subtitle1" className={classes.subtitle}>
        {t('payment.paypal')}
      </Typography>
      <Typography className={classes.text}>
        {t('payment.paypalText')}
      </Typography>
      <Typography variant="subtitle1" className={classes.subtitle}>
        {t('payment.wire')}
      </Typography>
      <Typography className={classes.text}>{t('payment.wireText')}</Typography>
      <List>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary={t('payment.bank1')}
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary={t('payment.bank2')}
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary={t('payment.bank3')}
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText
            classes={{ primary: classes.text }}
            primary={t('payment.bank4')}
          />
        </ListItem>
      </List>
    </div>
  )
}

export default Payment
