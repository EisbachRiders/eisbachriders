import React from 'react'
import Link from '../ui/Link'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.status.black,
  },
  copyright: {
    fontSize: 12,
    textTransform: 'capitalize',
    color: theme.palette.common.white,
    letterSpacing: 3,
    padding: 5,
  },
  link: {
    color: theme.palette.common.white,
    border: 'none',
    background: 'transparent',
    textDecoration: 'none',
    cursor: 'pointer',
    paddingLeft: 5,
    paddingRight: 5,
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
}))

function FooterBanner() {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <div className={classes.container}>
      <Typography variant="body2" align="center" className={classes.copyright}>
        &copy; Eisbach Riders |{' '}
        <Link to="/imprint/" className={classes.link}>
          {t('footer.imprint')}
        </Link>
        |{' '}
        <Link to="/privacy/" className={classes.link}>
          {t('footer.privacy')}
        </Link>
      </Typography>
    </div>
  )
}

export default FooterBanner
