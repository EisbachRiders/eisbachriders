import React from 'react'
import Img from 'gatsby-image'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Container from '../ui/Container'
import surfriderLogo from '../../assets/logos/surfriderLogo.png'
import igsmLogo from '../../assets/logos/igsmLogo.png'

const useStyles = makeStyles(theme => ({
  container: {
    position: 'relative',
  },
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
    zIndex: 1,
  },
  logo: {
    height: 80,
    margin: '0 auto',
    width: 'auto',
    [theme.breakpoints.up('md')]: {
      height: 100,
      marginLeft: 15,
      marginRight: 15,
    },
  },
  backgroundImg: {
    zIndex: 0,
    left: 0,
    bottom: 0,
    width: '100%',
    objectFit: 'cover',
    height: '100%',
    [theme.breakpoints.up('md')]: {
      objectFit: 'fill',
      height: 150,
    },
  },
}))

function Membership({ waveImg }) {
  const classes = useStyles()
  const { t } = useTranslation()
  return (
    <Container variant="center" background="grey" className={classes.container}>
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
      {waveImg && (
        <Img
          fluid={waveImg.node.fluid}
          alt="wave background"
          className={classes.backgroundImg}
          imgStyle={{ objectFit: 'fill' }}
          style={{ position: 'absolute' }}
        />
      )}
    </Container>
  )
}

export default Membership
