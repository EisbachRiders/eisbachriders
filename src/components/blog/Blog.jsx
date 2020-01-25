import React, { Fragment } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { useTranslation } from 'react-i18next'
// import Img from 'gatsby-image'
import clsx from 'clsx'
import Link from '../ui/Link'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import Container from '../ui/Container'
import Logo from '../../assets/logos/ER_full.png'
import Newsletter from '../newsletter/Newsletter'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  blog: {
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '60%',
  },
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '30%',
  },
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
  firstBlogImgContainer: {
    position: 'relative',
    textAlign: 'center',
    marginBottom: 45,
  },
  firstBlogImg: {
    width: '100%',
  },
  firstBlogTextContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: theme.status.black,
    opacity: 0.5,
  },
  firstBlogImgText: {
    color: theme.status.white,
    padding: 45,
    fontWeigh: 600,
    fontSize: 24,
    opacity: 1,
  },
  firstBlogImgText2: {
    color: theme.status.white,
    padding: 45,
    fontWeigh: 600,
    fontSize: 18,
  },
  blogItem: {
    display: 'flex',
    marginBottom: 45,
  },
  blogImgLink: {
    width: 250,
    height: 200,
  },
  blogImg: {
    width: 250,
    height: 200,
  },
  blogDate: {
    letterSpacing: 3,
    textTransform: 'uppercase',
    marginBottom: 5,
  },
  blogExcerpt: {
    margin: 30,
  },
  blogTitle: {
    fontWeight: 600,
    letterSpacing: 3,
    marginBottom: 15,
    fontSize: 16,
  },
  categories: {
    color: theme.palette.primary.main,
  },
}))

export default function Blog() {
  const [expanded, setExpanded] = React.useState(null)
  const classes = useStyles()
  const { t } = useTranslation()

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  const formatDate = date => {
    const d = new Date(date)
    const months = [
      'JAN',
      'FEB',
      'MAR',
      'APR',
      'MAY',
      'JUN',
      'JUL',
      'AUG',
      'SEP',
      'OCT',
      'NOV',
      'DEC',
    ]
    const day = d.getDay()
    const month = months[d.getMonth()]
    const year = d.getFullYear()
    return `${month} ${day}, ${year}`
  }

  return (
    <StaticQuery
      query={graphql`
        query {
          wpgraphql {
            categories {
              nodes {
                name
              }
            }
            posts {
              nodes {
                title(format: RENDERED)
                uri
                content
                date
                excerpt(format: RENDERED)
                featuredImage {
                  link
                }
                categories {
                  nodes {
                    name
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <Container className={classes.container}>
            <div className={classes.blog}>
              <div className={classes.firstBlogImgContainer}>
                <Link
                  className={classes.firstBlogImgLink}
                  to={`/blog/${data.wpgraphql.posts.nodes[0].uri}`}
                >
                  <img
                    src={data.wpgraphql.posts.nodes[0].featuredImage.link}
                    alt="blog image 1"
                    className={classes.firstBlogImg}
                  />
                </Link>
                <div className={classes.firstBlogTextContainer}>
                  <Typography className={classes.firstBlogImgText}>
                    {data.wpgraphql.posts.nodes[0].title}
                  </Typography>
                  <Typography className={classes.firstBlogImgText2}>
                    {formatDate(data.wpgraphql.posts.nodes[0].date)}
                  </Typography>
                </div>
              </div>
              {data.wpgraphql.posts.nodes.map((elem, idx) => (
                <div className={classes.blogItem} key={`blogItem_${idx}`}>
                  {idx !== 0 && (
                    <Fragment key={`blog_${elem.title}`}>
                      <Link
                        to={`/blog/${elem.uri}`}
                        className={classes.blogImgLink}
                      >
                        <img
                          src={elem.featuredImage.link}
                          alt={`blog image ${idx}`}
                          className={classes.blogImg}
                        />
                      </Link>
                      <div className={classes.blogExcerpt}>
                        <Typography
                          className={clsx(classes.blogDate, classes.categories)}
                        >
                          {elem.categories.nodes[0].name}
                        </Typography>
                        <Link to={`/blog/${elem.uri}`}>
                          <Typography className={classes.blogTitle}>
                            {elem.title}
                          </Typography>
                        </Link>
                        <div
                          dangerouslySetInnerHTML={{ __html: elem.excerpt }}
                        />
                      </div>
                    </Fragment>
                  )}
                </div>
              ))}
            </div>
            <div className={classes.sidebar}>
              <Typography className={classes.sidebarTitle}>About</Typography>
              <div className={classes.sidebarContainer}>
                <img src={Logo} alt="logo" className={classes.logo}></img>
              </div>
              <Typography className={classes.text}>
                Follow us on our adventures through Munich and travels around
                the world to learn more about surfing and sustainability!
              </Typography>
              <Typography className={classes.sidebarTitle}>
                Categories
              </Typography>

              <List
                component="nav"
                aria-label="categories"
                className={classes.list}
              >
                {data.wpgraphql.categories.nodes.map(
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
              </List>

              <Typography className={classes.sidebarTitle}>
                Newsletter
              </Typography>
              <div className={classes.sidebarContainer}>
                <Newsletter variant="small" />
              </div>
              {/* <Typography className={classes.sidebarTitle}>
                Instagram
              </Typography> */}
            </div>
          </Container>
        )
      }}
    />
  )
}
