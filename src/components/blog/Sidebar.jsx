import React from 'react'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles'
import Img from 'gatsby-image'
import Typography from '@material-ui/core/Typography'
import NewsletterBlog from '../newsletter/NewsletterBlog'
import BrushStroke from '../ui/BrushStroke'
import Link from '../ui/Link'
import Instagram from '../instagram/Instagram'

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
    marginBottom: 60,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 15,
  },
  text: {
    textAlign: 'center',
    marginBottom: 75,
  },
  list: {
    marginBottom: 45,
  },
  categories: {
    color: theme.palette.primary.main,
  },
  margin: {
    marginLeft: '10%',
  },
  link: {
    color: theme.palette.primary.main,
  },
}))

export default function Sidebar({ blogImg, instagram }) {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <div className={classes.sidebar}>
      <div className={classes.margin}>
        <BrushStroke title="About" />
      </div>
      <div className={classes.sidebarContainer}>
        <Img alt="" fluid={blogImg.node.fluid} className={classes.logo} />
      </div>
      <Typography className={classes.text}>
        {t('sidebar.about')}
        <Link to="/about" className={classes.link}>
          {t('sidebar.more')}
        </Link>
      </Typography>

      <div className={classes.margin}>
        <BrushStroke title="Subscribe" />
      </div>

      <div className={classes.sidebarContainer}>
        <NewsletterBlog />
      </div>

      <div className={classes.margin}>
        <BrushStroke title="Instagram" />
      </div>

      <Instagram images={instagram} />
    </div>
  )
}
