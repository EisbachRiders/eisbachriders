import React from 'react'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Container from '../ui/Container'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  img: {
    width: '100%',
  },
}))

function Instagram({ images }) {
  const classes = useStyles()
  const { t } = useTranslation()

  const posts = images.edges.slice(0, 6)

  return (
    <div className={classes.container}>
      {posts.map((elem, idx) => (
        <div key={`instagram_photo_${idx}`}>
          <img
            src={elem.node.preview}
            alt={elem.node.caption}
            className={classes.img}
          />
        </div>
      ))}
    </div>
  )
}

export default Instagram
