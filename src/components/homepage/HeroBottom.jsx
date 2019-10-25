import React from 'react'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Container from '../ui/Container'
import Button from '@material-ui/core/Button'
import Link from '../ui/Link'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerContainer: {
    flexBasis: '100%',
    [theme.breakpoints.up('md')]: {
      flexBasis: '50%',
    },
  },
  title: {
    color: theme.status.greyLt,
    fontSize: 15,
    letterSpacing: 3,
    textTransform: 'uppercase',
    fontWeight: 600,
    marginBottom: 5,
    [theme.breakpoints.up('lg')]: {
      fontSize: 32,
    },
  },
  margin: {
    marginLeft: 0,
  },
  textContainer: {
    flexBasis: '100%',
    [theme.breakpoints.up('md')]: {
      flexBasis: '45%',
    },
  },
  buttonContainer: {
    textAlign: 'right',
  },
  button: {
    color: theme.status.black,
  },
  text: {
    fontWeight: 12,
  },
}))

function HeroBottom() {
  const classes = useStyles()
  const { t } = useTranslation()
  return (
    <Container variant="center" className={classes.container}>
      <div className={classes.headerContainer}>
        <Typography
          className={clsx(classes.title, classes.margin)}
          align="left"
        >
          {t('hero.sustainable')}
        </Typography>
        <Typography className={classes.title} align="center">
          {t('hero.community')}
        </Typography>
        <Typography className={classes.title} align="right">
        {t('hero.surf')}
        </Typography>
      </div>
      <div className={classes.textContainer}>
        <Typography className={classes.text}>
        {t("hero.summary")}
        </Typography>
        <div className={classes.buttonContainer}>
          <Link to="/about/">
            <Button
              color="primary"
              variant="contained"
              className={classes.button}
            >
              {t("hero.story")}
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default HeroBottom
