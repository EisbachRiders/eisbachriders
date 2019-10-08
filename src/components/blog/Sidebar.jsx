import React, { Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import { StaticQuery, graphql } from 'gatsby'
import { makeStyles } from '@material-ui/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import Logo from '../../assets/logos/logoBlack.png'
import Newsletter from '../newsletter/Newsletter'
import Link from '../ui/Link'

const useStyles = makeStyles(theme => ({
  sidebarTitle: {
    textAlign: 'center',
    fontSize: '1.5rem',
    textTransform: 'uppercase',
    letterSpacing: 3,
    marginBottom: 15,
  },
  sidebarContainer: {
    textAlign: 'center',
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

export default function Sidebar() {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <StaticQuery
      query={graphql`
        query {
          wpgraphql {
            categories {
              nodes {
                name
                slug
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <>
            <Typography className={classes.sidebarTitle}>
              {t('header.about')}
            </Typography>
            <div className={classes.sidebarContainer}>
              <img src={Logo} alt="logo" className={classes.logo}></img>
            </div>
            <Typography className={classes.text}>
              {t('blog.aboutUs')}
            </Typography>
            <Typography className={classes.sidebarTitle}>
              {t('blog.categories')}
            </Typography>
            <List
              component="nav"
              aria-label="categories"
              className={classes.list}
            >
              {data.wpgraphql.categories.nodes.map(
                (elem, idx) =>
                  elem.name !== 'Uncategorized' && (
                    <Fragment key={`category_${idx}`}>
                      <Link to={`/blog/category/${elem.slug}`}>
                        <ListItem button>
                          <ListItemText primary={elem.name} />
                        </ListItem>
                      </Link>
                      <Divider />
                    </Fragment>
                  )
              )}
            </List>
            <Typography className={classes.sidebarTitle}>
              {t('newsletter.newsletter')}
            </Typography>
            <div className={classes.sidebarContainer}>
              <Newsletter variant="small" />
            </div>
            {/* <Typography className={classes.sidebarTitle}>
                {t('instagram.sectionTitle')}
              </Typography> */}
          </>
        )
      }}
    />
  )
}
