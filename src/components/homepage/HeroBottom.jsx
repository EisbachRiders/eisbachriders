import React from 'react'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/styles'
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
    flexBasis: '50%',
  },
  title: {
    color: theme.status.greyLt,
    fontSize: 32,
    letterSpacing: 3,
    textTransform: 'uppercase',
    fontWeight: 600,
    marginBottom: 5,
  },
  margin: {
    marginLeft: 0,
  },
  textContainer: {
    flexBasis: '45%',
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
          sustainable,
        </Typography>
        <Typography className={classes.title} align="center">
          affordable,
        </Typography>
        <Typography className={classes.title} align="right">
          surf equipment
        </Typography>
      </div>
      <div className={classes.textContainer}>
        <Typography className={classes.text}>
          Our mission is to protect our playgrounds - the ocean and rivers that
          provide us so much enjoyment - by supporting local communities and
          efforts to preserve our water sources.
        </Typography>
        <div className={classes.buttonContainer}>
          <Link to="/about/">
            <Button
              color="primary"
              variant="contained"
              className={classes.button}
            >
              Our Story
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default HeroBottom
