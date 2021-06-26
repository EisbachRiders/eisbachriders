import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import FavoriteIcon from "@material-ui/icons/Favorite"
import Box from "@material-ui/core/Box"

const InstagramWidget = () => {
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
  let results = data || []

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridGap: 5,
        }}
      >
        {results.length > 0 &&
          data.allInstaNode.edges.map((elem, idx) => (
            <a
              key={`instagram_photo_${idx}`}
              href={`https://www.instagram.com/p/${elem.node.id}/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Box
                sx={{
                  aspectRatio: 1,
                  color: "#FFF",
                  position: "relative",
                  textAlign: "center",
                  background: "#000",
                  border: theme => `1px solid ${theme.color.blueGray}`,
                  ":hover div": {
                    opacity: 1,
                  },
                }}
              >
                <Box sx={{ width: "100%", opacity: 1 }} id="instaBox">
                  <GatsbyImage
                    image={getImage(
                      elem.node.localFile.childImageSharp.gatsbyImageData
                    )}
                    alt={`instagram ${idx}`}
                    objectFit="contain"
                    style={{ display: "block" }}
                  />
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    width: "100%",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    opacity: 0,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#FFF",
                    }}
                  >
                    <FavoriteIcon />
                    <Box sx={{ color: "#FFF", fontWeight: 700 }}>
                      {elem.node.likes}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </a>
          ))}
      </Box>
    </>
  )
}

export default InstagramWidget
