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
    width: '100%',
    textAlign: 'center',
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
    <Container variant="center">
      <Typography className={classes.title}>{t('membership.title')}</Typography>
      <div>
        <a href="https://www.surfrider.org/" target="_blank">
          <img src={surfriderLogo} className={classes.logo} />
        </a>
        <a href="https://www.igsm.info/" target="_blank">
          <img src={igsmLogo} className={classes.logo} />
        </a>
      </div>
    </Container>
  )
}

export default Membership
