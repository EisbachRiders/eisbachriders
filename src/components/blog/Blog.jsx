import React, { Fragment } from 'react'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import Link from '../ui/Link'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Container from '../ui/Container'
import Sidebar from './Sidebar'
import Instagram from '../instagram/Instagram'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const useStyles = makeStyles(theme => ({
  title: {
    padding: 30,
    textAlign: 'center',
    fontSize: 30,
  },
  banner: {
    display: 'flex',
    height: 500,
  },
  bannerImg: {
    flexBasis: '20%',
    opacity: 0.6,
  },
  bannerImgMiddle: {
    flexGrow: 1,
    marginLeft: 10,
    marginRight: 10,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  link: {
    marginBottom: 30,
    textAlign: 'center',
    background: theme.status.black,
    color: theme.status.white,
    opacity: 0.6,
    padding: '30px 90px',
  },
  bannerTag: {
    textTransform: 'uppercase',
  },
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

export default function Blog({ posts, blogImg, instagram, blogHeaders }) {
  const classes = useStyles()
  const { t } = useTranslation()

  const featured = posts.find(x => x.node.tags[0].includes('featured'))
  console.log(featured)
  return (
    <div>
      <Typography className={classes.title}>Blog</Typography>
      <div className={classes.banner}>
        <BackgroundImage
          Tag="div"
          className={classes.bannerImg}
          fluid={blogHeaders[0].node.fluid}
          opacity={0.6}
          background="#fff"
          style={{ opacity: 0.6 }}
        ></BackgroundImage>
        <BackgroundImage
          Tag="div"
          className={clsx(classes.bannerImg, classes.bannerImgMiddle)}
          fluid={featured.node.heroImage.fluid}
          style={{ backgroundPosition: 'center bottom' }}
        >
          <Link to={`/blog/${featured.node.slug}`} className={classes.link}>
            <p className={classes.bannerTag}>
              {featured.node.tags ? featured.node.tags[1] : 'adventure'}
            </p>
            <h2 className={classes.bannerText}>{featured.node.title}</h2>
          </Link>
        </BackgroundImage>
        <BackgroundImage
          Tag="div"
          className={classes.bannerImg}
          fluid={blogHeaders[1].node.fluid}
        ></BackgroundImage>
      </div>

      <Container className={classes.container}>
        <div className={classes.blog}>
          {posts.map(({ node }, idx) => (
            <>
              {node.slug !== featured.node.slug && idx !== 0 && (
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
              )}
            </>
          ))}
        </div>
        <div className={classes.sidebar}>
          <Sidebar blogImg={blogImg} />
        </div>
      </Container>
      {/* <Instagram images={instagram} /> */}
    </div>
  )
}
