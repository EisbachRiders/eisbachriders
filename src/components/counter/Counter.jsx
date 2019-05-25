import React from 'react'
import { makeStyles } from '@material-ui/styles'
import classnames from 'classnames'
import IconButton from '@material-ui/core/IconButton'
import MinusIcon from '@material-ui/icons/Minus'

const useStyles = makeStyles(theme => ({
  form: { width: '100%', marginBottom: 30 },
  formControl: {
    width: '100%',
  },
}))

function Counter() {
  const classes = useStyles()

  return (
    <>
      <IconButton>
        <MinusIcon />
      </IconButton>
      <Input />
      <IconButton>
        <PlusIcon />
      </IconButton>
    </>
  )
}

export default Counter
