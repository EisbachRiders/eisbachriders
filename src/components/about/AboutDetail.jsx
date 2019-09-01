import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'
import BrushStroke from '../ui/BrushStroke'
import Container from '../ui/Container'

const useStyles = makeStyles(theme => ({
  root: { display: 'flex' },
  container: {
    flexBasis: '100%',
    [theme.breakpoints.up('sm')]: {
      flexBasis: '50%',
    },
    [theme.breakpoints.up('md')]: {
      paddingRight: 75,
      paddingTop: 30,
      paddingBottom: 30,
    },
    [theme.breakpoints.up('lg')]: {
      paddingTop: 45,
    },
  },
  margin: {
    marginLeft: '15%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: 0,
    },
  },
  imgContainer: {
    flexBasis: '50%',
  },
  img: {
    height: '100%',
    [theme.breakpoints.up('md')]: {
      height: 400,
      width: '100%',
    },
  },
  text: {
    color: theme.palette.common.black,
    fontSize: 12,
    [theme.breakpoints.up('md')]: {
      fontSize: 14,
    },
  },
}))

function AboutDetail({ title, img, variant, ariaLabel }) {
  const classes = useStyles()
  const { t } = useTranslation()
  return (
    <div className={classes.root}>
      {variant === 'left' && (
        <Container className={classes.container}>
          <div className={classes.margin}>
            <BrushStroke title={title} />
          </div>
          <Typography className={classes.text} variant="body1">
            {t('about.message')}
          </Typography>
        </Container>
      )}
      <Hidden xsDown>
        <div className={classes.imgContainer}>
          <Img fluid={img} alt={ariaLabel} className={classes.img} />
        </div>
      </Hidden>
      {variant === 'right' && (
        <Container className={classes.container}>
          <div className={classes.margin}>
            <BrushStroke title={title} />
          </div>
          <Typography className={classes.text} variant="body1">
            {t('about.message')}
          </Typography>
        </Container>
      )}
    </div>
  )
}

AboutDetail.propTypes = {
  img: PropTypes.object.isRequired,
}

export default AboutDetail
