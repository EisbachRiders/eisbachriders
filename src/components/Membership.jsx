import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import surfriderLogo from '../assets/logos/surfriderLogo.png'
import igsmLogo from '../assets/logos/igsmLogo.png'

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 15,
    paddingRight: 15,
    textAlign: 'center',
    background: theme.palette.primary.main,
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 60,
      paddingRight: 60,
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: 90,
      paddingRight: 90,
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 170,
      paddingRight: 170,
    },
    [theme.breakpoints.up('xl')]: {
      paddingLeft: 400,
      paddingRight: 400,
    },
  },
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

function Membership({ img, waveImg }) {
  const classes = useStyles()
  const { t } = useTranslation()
  return (
    <div className={classes.root}>
      <Typography className={classes.title}>{t('membership.title')}</Typography>
      <div>
        <img src={surfriderLogo} className={classes.logo} />
        <img src={igsmLogo} className={classes.logo} />
      </div>
    </div>
  )
}

Membership.propTypes = {
  //   img: PropTypes.object.isRequired,
  //   waveImg: PropTypes.object.isRequired,
}

export default Membership
