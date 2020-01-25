import React from 'react'
import Img from 'gatsby-image'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  container: {
    flexBasis: '100%',
    height: 300,
    marginBottom: 30,
    transform: 'translateZ(0)',
    [theme.breakpoints.up('sm')]: {
      height: 250,
      marginBottom: 0,
      flexBasis: '45%',
    },
    [theme.breakpoints.up('lg')]: {
      height: 350,
      marginBottom: 0,
      flexBasis: '45%',
    },
  },
  img: {
    width: '100%',
    height: 300,
    [theme.breakpoints.up('sm')]: {
      height: 250,
    },
    [theme.breakpoints.up('lg')]: {
      height: 350,
    },
  },
  content: {
    background: 'rgba(0, 0, 0, 0.25)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'absolute',
    top: 0,
  },
  title: {
    margin: 0,
    fontSize: 18,
    letterSpacing: 3,
    fontWeight: 700,
    color: '#FFFFFF',
    textTransform: 'capitalize',
  },
  subtitle: {
    fontSize: 18,
    letterSpacing: 3,
    textTransform: 'uppercase',
    marginBottom: 30,
    color: '#FFFFFF',
  },
  button: {
    color: '#FFFFFF',
    border: '2px solid #FFFFFF',
    fontWeight: 'bold',
    background: 'rgba(255,255,255,0.2)',
    padding: '10px 20px',
  },
}))

function ShopCategory({ img, title, subtitle }) {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Img
        fluid={img.node.fluid}
        alt={`category ${title}`}
        className={classes.img}
        imgStyle={{ objectPosition: 'center center' }}
      />
      <div className={classes.content}>
        <p className={classes.title}>{title}</p>
        <p className={classes.subtitle}>{subtitle}</p>
        <Button
          variant="outlined"
          className={classes.button}
          onClick={() => console.log('test')}
        >
          View Collection
        </Button>
      </div>
    </div>
  )
}

export default ShopCategory
