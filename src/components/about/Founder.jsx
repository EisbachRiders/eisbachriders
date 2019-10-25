import React from 'react'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Typography from '@material-ui/core/Typography'
import Container from '../ui/Container'
import Img from 'gatsby-image'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  imgContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'column',
    },
  },
  img: {
    marginBottom: 15,
    width: 150,
    [theme.breakpoints.up('sm')]: {
      marginBottom: 15,
      width: 200,
      height: 200,
    },
  },
  right: {
    textAlign: 'right',
  },
  text: {
    marginBottom: 30,

    [theme.breakpoints.up('sm')]: {
      marginBottom: 30,
      marginLeft: 60,
      marginRight: 60,
    },
  },
  text2: {
    marginTop: 30,
  },
  title: {
    marginBottom: 45,
  },
}))

function Founder({ img }) {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <Container>
      <Typography align="center" variant="h5" className={classes.title}>
        Founders
      </Typography>
      <div className={classes.container}>
        <div className={classes.imgContainer}>
          <Img fluid={img[0].node.fluid} alt="ceo2" className={classes.img} />
          <Img
            fluid={img[1].node.fluid}
            alt="ceo1"
            className={clsx(classes.img, classes.right)}
          />
        </div>
        <div>
          <Typography align="center" className={classes.text}>
            {t('about.us1')}
          </Typography>
          <Typography align="center" className={classes.text}>
            {t('about.us2')}
          </Typography>
          <Typography align="center" className={classes.text}>
            {t('about.us3')}
          </Typography>
        </div>
      </div>
    </Container>
  )
}

export default Founder
