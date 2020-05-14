import React, { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import clsx from "clsx"
import { Link } from "gatsby-theme-material-ui"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"
import Container from "../ui/Container"
import Sidebar from "./Sidebar"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"

const useStyles = makeStyles((theme) => ({
  banner: {
    height: 300,
  },
  bannerImg: {
    width: "100%",
    height: "100%",
  },
  header: {
    display: "flex",
    justifyContent: "center",
    borderBottom: `1px solid ${theme.color.gray}`,
  },
  headerItem: {
    padding: 15,
    textTransform: "lowercase",
    fontSize: 18,
    color: theme.color.black,
    "&:hover": {
      color: theme.palette.primary.main,
      textDecoration: "none",
    },
  },
  headerItemActive: {
    color: theme.palette.primary.main,
  },
  paper: {
    padding: 60,
    marginBottom: 30,
    boxShadow: "0 0 70px rgba(0,0,0,.11)",
  },
  link: {
    marginBottom: 30,
    textAlign: "center",
    background: theme.color.black,
    color: theme.color.white,
    opacity: 0.6,
    padding: "30px 90px",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
  },
  blog: {
    display: "flex",
    flexDirection: "column",
    flexBasis: "70%",
  },
  sidebar: {
    display: "flex",
    flexDirection: "column",
    flexBasis: "25%",
  },
  blogItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: 45,
  },
  blogImgLink: {
    width: 300,
    height: 250,
  },
  blogImg: {
    width: 300,
    height: 250,
  },
  blogImgFirst: {
    width: "100%",
    height: 500,
  },
  blogDate: {
    letterSpacing: 3,
    textTransform: "uppercase",
    marginBottom: 5,
  },
  blogExcerptRight: {
    padding: 30,
    marginRight: -80,
    zIndex: 2,
    boxShadow: "0 0 70px rgba(0,0,0,.11)",
  },
  blogExcerptLeft: {
    padding: 30,
    marginLeft: -80,
    zIndex: 2,
    boxShadow: "0 0 70px rgba(0,0,0,.11)",
  },
  blogTitleLink: {
    color: theme.color.black,
    "&:hover": {
      color: theme.palette.primary.main,
      textDecoration: "none",
    },
  },
  blogTitle: {
    fontWeight: 600,
    letterSpacing: 3,
    marginBottom: 15,
    fontSize: 16,
  },
  categories: {
    color: theme.palette.primary.main,
    fontWeight: 700,
  },
  pagination: {
    display: "flex",
    justifyContent: "space-between",
  },
  paginationButton: {
    color: theme.color.white,
    background: theme.palette.primary.main,
    padding: "9px 27px",
    textTransform: "uppercase",
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: 3,
    display: "flex",
    alignItems: "center",
    "&:hover": {
      textDecoration: "none",
      background: theme.palette.primary.light,
    },
  },
  paginationNumberContainer: {
    flexBasis: "30%",
    display: "flex",
    justifyContent: "center",
  },
  paginationNumber: {
    color: theme.palette.primary.main,
    border: `1px solid ${theme.palette.primary.main}`,
    width: 42,
    height: 42,
    marginLeft: 5,
    marginRight: 5,
    textTransform: "uppercase",
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: 3,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      textDecoration: "none",
      color: theme.color.white,
      background: theme.palette.primary.main,
    },
  },
  paginationNumberActive: {
    background: theme.palette.primary.main,
    color: theme.color.white,
    "&:hover": {
      textDecoration: "none",
      background: theme.palette.primary.light,
    },
  },
  placeholder: {
    width: 130,
  },
}))

const Blog = ({ posts, tag, numPages, currentPage }) => {
  const classes = useStyles()
  const { t } = useTranslation()
  const data = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { in: "blogBanner.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const tags = ["home", "lifestyle", "travel", "gear", "community"]

  return (
    <>
      <div className={classes.banner}>
        <Img
          alt={`surfers sitting in water`}
          fluid={data.fileName.childImageSharp.fluid}
          placeholderStyle={{ backgroundColor: `blue` }}
          className={classes.bannerImg}
          imgStyle={{ objectPosition: "top center" }}
        />
      </div>
      <div className={classes.header}>
        {tags.map((elem) => (
          <Link
            key={`link${elem}`}
            to={elem === "home" ? "/blog" : `/tags/${elem}`}
            className={clsx(classes.headerItem, {
              [classes.headerItemActive]: elem === tag,
            })}
          >
            {t(`links.${elem}`)}
          </Link>
        ))}
      </div>

      <Container className={classes.container}>
        <div className={classes.blog}>
          {posts &&
            posts.map((elem, idx) =>
              idx === 0 ? (
                <Paper
                  className={classes.paper}
                  square
                  elevation={0}
                  key={`post_${idx}`}
                >
                  <Typography
                    className={clsx(classes.blogDate, classes.categories)}
                  >
                    {elem.node.frontmatter.tags
                      ? elem.node.frontmatter.tags[0]
                      : ""}
                  </Typography>
                  <Link
                    to={elem.node.fields.slug}
                    className={classes.blogTitleLink}
                  >
                    <Typography className={classes.blogTitle}>
                      {elem.node.frontmatter.title}
                    </Typography>
                  </Link>
                  <Link
                    to={elem.node.fields.slug}
                    className={classes.blogImgLink}
                  >
                    <Img
                      alt={`blog image ${idx}`}
                      fluid={
                        elem.node.frontmatter.featuredImage.childImageSharp
                          .fluid
                      }
                      className={classes.blogImgFirst}
                    />
                  </Link>
                  <p>{elem.node.frontmatter.description}</p>
                </Paper>
              ) : (
                <Fragment key={`post_${idx}`}>
                  <div className={classes.blogItem} key={`blogItem_${idx}`}>
                    <Fragment key={`blog_${elem.node.frontmatter.title}`}>
                      {idx % 2 !== 0 && (
                        <Link
                          to={elem.node.fields.slug}
                          className={classes.blogImgLink}
                        >
                          <Img
                            alt={`blog image ${idx}`}
                            fluid={
                              elem.node.frontmatter.featuredImage
                                .childImageSharp.fluid
                            }
                            className={classes.blogImg}
                          />
                        </Link>
                      )}
                      <Paper
                        className={
                          idx % 2 !== 0
                            ? classes.blogExcerptLeft
                            : classes.blogExcerptRight
                        }
                        square
                        elevation={0}
                      >
                        <Typography
                          className={clsx(classes.blogDate, classes.categories)}
                        >
                          {elem.node.frontmatter.tags
                            ? elem.node.frontmatter.tags[0]
                            : ""}
                        </Typography>
                        <Link
                          to={elem.node.fields.slug}
                          className={classes.blogTitleLink}
                        >
                          <Typography className={classes.blogTitle}>
                            {elem.node.frontmatter.title}
                          </Typography>
                        </Link>
                        <p>{elem.node.excerpt}</p>
                      </Paper>
                      {idx % 2 === 0 && (
                        <Link
                          to={elem.node.fields.slug}
                          className={classes.blogImgLink}
                        >
                          <Img
                            alt={`blog image ${idx}`}
                            fluid={
                              elem.node.frontmatter.featuredImage
                                .childImageSharp.fluid
                            }
                            className={classes.blogImg}
                          />
                        </Link>
                      )}
                    </Fragment>
                  </div>
                </Fragment>
              )
            )}
          {currentPage && numPages > 1 && (
            <div className={classes.pagination}>
              {currentPage !== 1 ? (
                <Link
                  to={`/blog/${currentPage - 1}`}
                  rel="prev"
                  className={classes.paginationButton}
                >
                  <ChevronLeftIcon className={classes.marginRight} />
                  {t("common.previous")}
                </Link>
              ) : (
                <div className={classes.placeholder} />
              )}
              <div className={classes.paginationNumberContainer}>
                {new Array(numPages).fill(0).map((e, idx) => (
                  <Link
                    to={idx === 0 ? "/blog" : `/blog/${idx + 1}`}
                    rel={idx}
                    className={clsx(classes.paginationNumber, {
                      [classes.paginationNumberActive]: idx + 1 === currentPage,
                    })}
                    key={`blogPage${idx}`}
                  >
                    {idx + 1}
                  </Link>
                ))}
              </div>
              {currentPage !== numPages ? (
                <Link
                  to={`/blog/${currentPage + 1}`}
                  rel="next"
                  className={classes.paginationButton}
                >
                  {t("common.next")}
                  <ChevronRightIcon className={classes.marginLeft} />
                </Link>
              ) : (
                <div className={classes.placeholder} />
              )}
            </div>
          )}
        </div>
        <div className={classes.sidebar}>
          <Sidebar />
        </div>
      </Container>
    </>
  )
}

export default Blog
