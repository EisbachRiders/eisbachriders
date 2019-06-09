import React from 'react'
import { makeStyles } from '@material-ui/styles'
import IconButton from '@material-ui/core/IconButton'
import RemoveIcon from '@material-ui/icons/Remove'
import AddIcon from '@material-ui/icons/Add'
import InputBase from '@material-ui/core/InputBase'
import InputLabel from '@material-ui/core/InputLabel'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
  },
  input: {
    width: 32,
  },
  inputProp: {
    textAlign: 'right',
  },
}))

function Counter({ handleRemove, handleAdd, value }) {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <IconButton className={classes.iconButton} onClick={() => handleRemove()}>
        <RemoveIcon />
      </IconButton>
      <form className={classes.container} noValidate autoComplete="off">
        <InputLabel htmlFor="counter" className="visually-hidden">
          Quantity
        </InputLabel>
        <InputBase
          id="counter"
          readOnly
          className={classes.input}
          classes={{ input: classes.inputProp }}
          value={value}
          margin="none"
          type="number"
        />
      </form>
      <IconButton className={classes.iconButton} onClick={() => handleAdd()}>
        <AddIcon />
      </IconButton>
    </div>
  )
}

export default Counter
