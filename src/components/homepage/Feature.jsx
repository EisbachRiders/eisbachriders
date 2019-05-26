import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/styles'
import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import BrushStroke from '../ui/BrushStroke'
import FeatureDetail from './FeatureDetail'
import Container from '../ui/Container'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    [theme.breakpoints.up('md')]: {
      flexWrap: 'nowrap',
    },
    [theme.breakpoints.up('lg')]: {
      alignItems: 'center',
    },
  },
  title: {
    textTransform: 'uppercase',
    textAlign: 'center',
    paddingTop: 15,
    [theme.breakpoints.up('sm')]: {
      paddingTop: 15,
      paddingBottom: 15,
    },
  },
  containerInfo: {
    flexBasis: '100%',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      textAlign: 'left',
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
      marginLeft: 30,
      flexBasis: '30%',
    },
  },
  containerImg: {
    flexBasis: '30%',
  },
  detailText: {
    textTransform: 'capitalize',
    color: theme.status.greyDk,
    fontSize: 12,
    marginBottom: 15,
    [theme.breakpoints.up('md')]: {
      fontSize: 14,
    },
  },
  img: {
    width: '60%',
    margin: '0 auto',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
    },
  },
  button: {
    color: theme.status.black,
  },
  margin: {
    marginLeft: '15%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: 0,
    },
  },
}))

function Feature({ img }) {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <Container>
      <Typography className={classes.title} variant="h5">
        {t('feature.featuredProduct')}
      </Typography>
      <div className={classes.container}>
        <Hidden xsDown>
          <FeatureDetail img={img} />
        </Hidden>
        <Hidden only={['sm']}>
          <div className={classes.containerImg}>
            <Img
              fluid={img.node.fluid}
              alt={t('feature.featureProduct')}
              className={classes.img}
            />
          </div>
        </Hidden>
        <div className={classes.containerInfo}>
          <div className={classes.margin}>
            <BrushStroke title="Honeycomb Fin" />
          </div>
          <Typography className={classes.detailText}>
            {t('feature.text')}
          </Typography>
          <Button
            color="primary"
            variant="outlined"
            className={classes.button}
            href="https://shop.eisbach-riders.com/product/double-tab-honeycomb-fins/"
          >
            {t('common.more')}
          </Button>
        </div>
      </div>
    </Container>
  )
}

Feature.propTypes = {
  img: PropTypes.object.isRequired,
}

export default Feature
