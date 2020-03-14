import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Img from 'gatsby-image'
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
  featureImg: {
    height: 600,
  },
  h1: {
    marginBottom: 30,
  },
}))

export default function BlogPost({ post, blogImg, instagram }) {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <div className={classes.blog}>
        <h1 className={classes.h1}>{post.title}</h1>
        <Img
          fluid={post.heroImage.fluid}
          alt="blog feature image"
          className={classes.featureImg}
        />
        <MDXRenderer>{post.body.childMdx.body}</MDXRenderer>
      </div>
      <div className={classes.sidebar}>
        <Sidebar blogImg={blogImg} instagram={instagram} />
      </div>
    </Container>
  )
}
