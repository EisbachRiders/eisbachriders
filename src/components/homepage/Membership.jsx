import React from 'react'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Container from '../ui/Container'
import surfriderLogo from '../../assets/logos/surfriderLogo.png'
import igsmLogo from '../../assets/logos/igsmLogo.png'

const useStyles = makeStyles(theme => ({
  title: {
    marginBottom: 5,
    textTransform: 'uppercase',
    letterSpacing: 3,
  },
  logo: {
    marginLeft: 15,
    marginRight: 15,
    height: 100,
    width: 'auto',
  },
}))

function Membership() {
  const classes = useStyles()
  const { t } = useTranslation()
  return (
    <Container variant="center" background="primary">
      <Typography className={classes.title}>{t('membership.title')}</Typography>
      <div>
        <img src={surfriderLogo} className={classes.logo} />
        <img src={igsmLogo} className={classes.logo} />
      </div>
    </Container>
  )
}

export default Membership
