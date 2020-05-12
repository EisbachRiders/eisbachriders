import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MuiLink from '@material-ui/core/Link'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  flexItem: {
    flexBasis: '30%',
  },
  img: {
    width: '100%',
  },
}))

function Instagram({ images }) {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      {images.map((elem, idx) => (
        <MuiLink
          key={`instagram_photo_${idx}`}
          className={classes.flexItem}
          href={`https://www.instagram.com/p/${elem.node.id}/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={elem.node.localFile.childImageSharp.fluid.srcWebp}
            alt={`instagram image ${idx}`}
            className={classes.img}
          />
        </MuiLink>
      ))}
    </div>
  )
}

export default Instagram
