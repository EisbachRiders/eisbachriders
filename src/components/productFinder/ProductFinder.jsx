import React from 'react'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles'
import Img from 'gatsby-image'
import Typography from '@material-ui/core/Typography'
import BrushStroke from '../ui/BrushStroke'
import Container from '../ui/Container'
import clsx from 'clsx'
import FeatherIcon from '../../assets/icons/Feather'
import LeashGuide from './LeashGuide'
import FinGuide from './FinGuide'
import Paper from '@material-ui/core/paper'
import Hidden from '@material-ui/core/Hidden'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 30,
    [theme.breakpoints.up('md')]: {
      paddingTop: 60,
    },
    [theme.breakpoints.up('lg')]: {
      paddingTop: 45,
    },
    [theme.breakpoints.up('xl')]: {
      paddingTop: 90,
    },
  },
  header: {
    marginBottom: 30,
  },
  featureContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  featureText: {
    marginBottom: 30,
  },
  featureImg: {
    height: '40%',
    width: '60%',
    [theme.breakpoints.up('lg')]: {
      marginLeft: 50,
    },
  },
  paper: {
    padding: 15,
    textAlign: 'center',
    boxShadow: 'none',
    zIndex: 200,
    [theme.breakpoints.up('sm')]: {
      flexBasis: '50%',
      marginLeft: -100,
      marginRight: 10,
      marginBottom: 10,
      boxShadow:
        '0px 6px 6px -3px rgba(0,0,0,0.2), 0px 10px 14px 1px rgba(0,0,0,0.14), 0px 4px 18px 3px rgba(0,0,0,0.12)',
    },
    [theme.breakpoints.up('md')]: {
      width: 400,
      marginLeft: -100,
      marginBottom: 0,
    },
  },
  featureMargin: {
    marginLeft: '24%',
    // [theme.breakpoints.up('sm')]: {
    //   marginLeft: 0,
    // },
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  textContainer: {
    flexBasis: '50%',
    justifyContent: 'center',
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 15,
    paddingRight: 15,
    [theme.breakpoints.up('md')]: {
      paddingLeft: 30,
      paddingRight: 30,
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 60,
      paddingRight: 60,
    },
    [theme.breakpoints.up('xl')]: {
      paddingLeft: 100,
      paddingRight: 100,
    },
  },
  containerGuides: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  imgContainer: {
    flexBasis: '50%',
    background: theme.palette.common.white,
  },
  img: {
    height: '100%',
    margin: 'auto',
    [theme.breakpoints.up('md')]: {
      height: 400,
      width: '70%',
    },
  },
  text: {
    color: theme.palette.common.black,
    fontSize: 12,
    [theme.breakpoints.up('md')]: {
      fontSize: 14,
    },
  },
  containerIcon: {
    // display: 'flex',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    width: 18,
    height: 18,
    marginLeft: 5,
  },
  off: {
    color: theme.status.greyLt,
  },
}))

function ProductFinder({ img }) {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography
        variant="h5"
        component="h1"
        align="center"
        className={classes.header}
      >
        {t('productFinder.header')}
      </Typography>
      <Container>
        <div className={classes.featureContainer}>
          <Hidden xsDown>
            <Img
              fluid={img[0].node.fluid}
              alt="surfers walking home"
              className={classes.featureImg}
            />
          </Hidden>
          <Paper className={classes.paper} elevation={10}>
            <div className={classes.featureMargin}>
              <BrushStroke title="Product Finder" />
            </div>
            <Typography className={classes.featureText}>
              Not sure what product is right for your board? Check out our fin
              and leash guides!
            </Typography>
            <div className={classes.container}>
              <LeashGuide />
              <FinGuide />
            </div>
          </Paper>
        </div>
      </Container>
      <div className={classes.container}>
        <div className={classes.textContainer}>
          <div>
            <BrushStroke title="Honeycomb Fiberglass" />
          </div>
          <div className={clsx(classes.containerIcon)}>
            <Typography className={classes.detailText}>
              {t('feature.surfDetail2')}
            </Typography>
            <div>
              <FeatherIcon className={classes.icon} />
              <FeatherIcon className={classes.icon} />
              <FeatherIcon className={clsx(classes.off, classes.icon)} />
            </div>
          </div>
          <Typography className={classes.text} variant="body1">
            Honeycomb fiberglass fins are a lightweight version of the
            fiberglass fins with a honeycomb core.
          </Typography>
        </div>
        <div className={classes.imgContainer}>
          <Img
            fluid={img[3].node.fluid}
            alt="honeycomb"
            className={classes.img}
          />
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.imgContainer}>
          <Img
            fluid={img[1].node.fluid}
            alt="honeycomb"
            className={classes.img}
          />
        </div>
        <div className={classes.textContainer}>
          <div>
            <BrushStroke title="Fiberglass Line" />
          </div>
          <div className={clsx(classes.containerIcon)}>
            <Typography className={classes.detailText}>
              {t('feature.surfDetail2')}
            </Typography>
            <div>
              <FeatherIcon className={classes.icon} />
              <FeatherIcon className={classes.icon} />
              <FeatherIcon className={clsx(classes.off, classes.icon)} />
            </div>
          </div>
          <Typography className={classes.text} variant="body1">
            Fiberglass fins are made of fiberglass tissue filled with resin.
            They are stiffer than the nylon fins and give the opportunity for
            sharp cutbacks and speed generation. The fiberglass fins are bit
            heavier than nylon fins.
          </Typography>
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.textContainer}>
          <div>
            <BrushStroke title="Essential Line" />
          </div>
          <div className={clsx(classes.containerIcon)}>
            <Typography className={classes.detailText}>
              {t('feature.surfDetail2')}
            </Typography>
            <div>
              <FeatherIcon className={classes.icon} />
              <FeatherIcon className={classes.icon} />
              <FeatherIcon className={clsx(classes.off, classes.icon)} />
            </div>
          </div>
          <Typography className={classes.text} variant="body1">
            Nylon fins are the most common found and are an affordable option
            for beginners or river surfing. We offer two types of nylon fins;
            super flex and moderate stiffness. Our super flex fins are very
            flexible and feel rubbery to the touch. They are extremely durable
            and are very unlikely to break or break your fin plug. The tradeoff
            for durability is that, as they are flexible, they offer less
            support. However, they perfectly suited for beginners and for making
            turns with a larger radius. Our modern stiffness fins (the surf
            essential line) will give you more response during turn. While
            stiffer fins in general are more likely to break, our fins are
            designed to break above the tab so not to destroy the fin plug.
          </Typography>
        </div>
        <div className={classes.imgContainer}>
          <Img
            fluid={img[2].node.fluid}
            alt="honeycomb"
            className={classes.img}
          />
        </div>
      </div>
    </div>
  )
}

export default ProductFinder
