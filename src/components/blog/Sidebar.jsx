import React, { Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles'
import Img from 'gatsby-image'
// import List from '@material-ui/core/List'
// import ListItem from '@material-ui/core/ListItem'
// import ListItemText from '@material-ui/core/ListItemText'
// import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
// import Logo from '../../assets/logos/logo.png'
import Newsletter from '../newsletter/Newsletter'

const useStyles = makeStyles(theme => ({
  sidebarTitle: {
    textAlign: 'center',
    fontSize: '1.5rem',
    textTransform: 'uppercase',
    letterSpacing: 3,
    marginBottom: 15,
  },
  sidebarContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 15,
  },
  text: {
    textAlign: 'center',
    marginBottom: 45,
  },
  list: {
    marginBottom: 45,
  },
  categories: {
    color: theme.palette.primary.main,
  },
}))

export default function Sidebar({ categories, blogImg }) {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <div className={classes.sidebar}>
      <Typography className={classes.sidebarTitle}>About</Typography>
      <div className={classes.sidebarContainer}>
        <Img alt="" fluid={blogImg.node.fluid} className={classes.logo} />
      </div>
      <Typography className={classes.text}>
        Follow us on our adventures through Munich and travels around the world
        to learn more about surfing and sustainability!
      </Typography>
      {/* <Typography className={classes.sidebarTitle}>Categories</Typography>
      <List component="nav" aria-label="categories" className={classes.list}>
        {[{ name: 'travel' }, { name: 'guides' }].map(
          elem =>
            elem.name !== 'Uncategorized' && (
              <Fragment key={`category_${elem.name}`}>
                <ListItem button>
                  <ListItemText primary={elem.name} />
                </ListItem>
                <Divider />
              </Fragment>
            )
        )}
      </List> */}
      <Typography className={classes.sidebarTitle}>Newsletter</Typography>
      <div className={classes.sidebarContainer}>
        <Newsletter variant="small" />
      </div>
      {/* <Typography className={classes.sidebarTitle}>
            Instagram
          </Typography> */}
    </div>
  )
}
