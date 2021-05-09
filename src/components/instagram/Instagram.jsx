import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Link from "../ui/Link"
import { makeStyles } from "@material-ui/core/styles"
import FavoriteIcon from "@material-ui/icons/Favorite"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridGap: 5,
    [theme.breakpoints.up("sm")]: {
      marginBottom: 60,
    },
  },

  flexContainer: {
    aspectRatio: 1,
    color: "#FFF",
    position: "relative",
    textAlign: "center",
    background: "#000",
    border: `1px solid ${theme.color.blueGray}`,
    "&:hover $img": {
      opacity: 0.4,
    },
    "&:hover $overlay": {
      opacity: 1,
    },
  },
  img: {
    width: "100%",
    opacity: 1,
  },
  overlay: {
    position: "absolute",
    width: "100%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    opacity: 0,
  },
  likesContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#FFF",
  },
  likes: {
    color: "#FFF",
    fontWeight: 700,
  },
}))

const InstagramWidget = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      allInstaNode(sort: { fields: timestamp, order: DESC }, limit: 3) {
        edges {
          node {
            likes
            id
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div className={classes.root}>
      {data?.allInstaNode.edges.map((elem, idx) => (
        <Link
          key={`instagram_photo_${idx}`}
          className={classes.flexContainer}
          href={`https://www.instagram.com/p/${elem.node.id}/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={classes.img}>
            <GatsbyImage
              image={getImage(
                elem.node.localFile.childImageSharp.gatsbyImageData
              )}
              alt={`instagram ${idx}`}
              objectFit="contain"
              style={{ display: "block" }}
            />
          </div>
          <div className={classes.overlay}>
            <div className={classes.likesContainer}>
              <FavoriteIcon className={classes.icon} />
              <div className={classes.likes}>{elem.node.likes}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default InstagramWidget
