import React from 'react'
import { graphql } from 'gatsby'
import { makeStyles } from '@material-ui/styles'
import Layout from '../Layout'
import Container from '../ui/Container'
import Sidebar from './Sidebar'

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
  featureImg: {
    width: 600,
  },
}))

export default ({ data }) => {
  const classes = useStyles()
  const post = data.wpgraphql.post
  return (
    <Layout seoTitle={post.title}>
      <Container className={classes.container}>
        <div className={classes.blog}>
          <img
            src={post.featuredImage.link}
            alt="blog feature image"
            className={classes.featureImg}
          />
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
        <div className={classes.sidebar}>
          <Sidebar />
        </div>
      </Container>
    </Layout>
  )
}
export const pageQuery = graphql`
  query GET_POST($id: ID!) {
    wpgraphql {
      post(id: $id) {
        title
        content
        uri
        featuredImage {
          link
        }
        author {
          name
          slug
          avatar {
            url
          }
        }
        tags {
          nodes {
            name
            link
          }
        }
        categories {
          nodes {
            name
            link
          }
        }
      }
    }
  }
`
