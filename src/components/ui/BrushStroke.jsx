import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import brushStrokeImg from '../../assets/images/brushStroke.svg'

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    textAlign: 'center',
    width: 300,
    height: 75,
    marginBottom: 15,
  },
  title: {
    textTransform: 'uppercase',
    fontWeight: 700,
    paddingBottom: 5,
    width: '100%',
    fontSize: 16,
    paddingRight: 45,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  img: {
    width: '100%',
    height: '100%',
  },
}))

function BrushStroke({ title }) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <img src={brushStrokeImg} alt="brush stroke" className={classes.img} />
      <Typography className={classes.title} variant="h5">
        {title}
      </Typography>
    </div>
  )
}

BrushStroke.propTypes = {
  title: PropTypes.string.isRequired,
}

export default BrushStroke
