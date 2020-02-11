import React, { Fragment } from 'react'
import Img from 'gatsby-image'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import Link from '../ui/Link'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
// import Divider from '@material-ui/core/Divider'
import Container from '../ui/Container'
import Sidebar from './Sidebar'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  blog: {
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '70%',
  },
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '25%',
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
    // marginBottom: 45,
    margin: '0 auto',
    width: '50%',
  },
  firstBlogImg: {
    width: '100%',
    height: 400,
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
  title: {
    padding: 30,
    textAlign: 'center',
    fontSize: 30,
  },
  subHeader: {
    padding: 15,
  },
}))

export default function Blog({ posts, blogImg }) {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <div>
      <Typography className={classes.title}>Blog</Typography>
      {/* <Divider />
      <Typography align="center" className={classes.subHeader}>
        Travel Guides Tutorials Surf
      </Typography> */}
      <div className={classes.firstBlogImgContainer}>
        <Img
          alt=""
          fluid={posts[0].node.heroImage.fluid}
          className={classes.firstBlogImg}
        />
        <Link
          className={classes.firstBlogImgLink}
          to={`/blog/${posts[0].node.slug}`}
        >
          <div className={classes.firstBlogTextContainer}>
            <Typography className={classes.firstBlogImgText}>
              {posts[0].node.title}
            </Typography>
          </div>
        </Link>
      </div>

      <Container className={classes.container}>
        <div className={classes.blog}>
          {posts.map(({ node }, idx) => {
            return (
              <div className={classes.blogItem} key={`blogItem_${idx}`}>
                {idx !== 0 && (
                  <Fragment key={`blog_${node.title}`}>
                    <Link
                      to={`/blog/${node.slug}`}
                      className={classes.blogImgLink}
                    >
                      <Img
                        alt={`blog image ${idx}`}
                        fluid={node.heroImage.fluid}
                        className={classes.blogImg}
                      />
                    </Link>
                    <div className={classes.blogExcerpt}>
                      <Typography
                        className={clsx(classes.blogDate, classes.categories)}
                      >
                        {node.tags ? node.tags[0] : ''}
                      </Typography>
                      <Link to={`/blog/${node.slug}`}>
                        <Typography className={classes.blogTitle}>
                          {node.title}
                        </Typography>
                      </Link>
                      <MDXRenderer>
                        {node.description.childMdx.body}
                      </MDXRenderer>
                    </div>
                  </Fragment>
                )}
              </div>
            )
          })}
        </div>
        <div className={classes.sidebar}>
          <Sidebar blogImg={blogImg} />
        </div>
      </Container>
    </div>
  )
}
