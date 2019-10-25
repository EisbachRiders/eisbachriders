import React from 'react'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import surfriderLogo from '../../assets/logos/surfriderLogo.png'
import igsmLogo from '../../assets/logos/igsmLogo.png'

const useStyles = makeStyles(theme => ({
  title: {
    marginBottom: 5,
    textTransform: 'uppercase',
    letterSpacing: 3,
    width: '100%',
    textAlign: 'center',
    zIndex: 1,
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    zIndex: 1,
  },
  logo: {
    height: 50,
    margin: '0 auto',
    width: 'auto',
    [theme.breakpoints.up('md')]: {
      marginLeft: 15,
      marginRight: 15,
    },
  },
}))

function Membership() {
  const classes = useStyles()
  const { t } = useTranslation()
  return (
    <div>
      <Typography className={classes.title}>{t('membership.title')}</Typography>
      <div className={classes.logoContainer}>
        <a
          href="https://www.surfrider.org/"
          target="_blank"
          rel="noopener"
          alt="surf rider website"
        >
          <img src={surfriderLogo} className={classes.logo} alt="surfrider" />
        </a>
        <a
          href="https://www.igsm.info/"
          target="_blank"
          rel="noopener"
          alt="igsm website"
        >
          <img src={igsmLogo} className={classes.logo} alt="igsm" />
        </a>
      </div>
    </div>
  )
}

export default Membership
