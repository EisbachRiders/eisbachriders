import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import logo from '../../assets/logos/ER_full.png'
import ContactUs from './ContactUs'
// import InstagramIcon from '../../assets/icons/Instagram'
// import Button from '@material-ui/core/Button'
// import FacebookIcon from '../../assets/icons/Facebook'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
  img: {
    width: 100,
    marginBottom: 30,
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  button: {
    marginBottom: 30,
  },
  iconButton: {
    borderColor: theme.status.finDarker,
    borderRadius: 0,
    minWidth: 0,
    padding: 8,
    marginRight: 30,
    '&:hover, &:focus': {
      borderColor: theme.palette.primary.main,
      '& $icon': {
        color: theme.palette.primary.main,
      },
    },
    [theme.breakpoints.up('sm')]: {
      marginRight: 15,
    },
  },
  icon: {
    width: 18,
    height: 18,
    color: theme.status.black,
  },
}))

function FooterLogo() {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <img src={logo} className={classes.img} alt="logo" />
      <ContactUs />
    </div>
  )
}

export default FooterLogo
