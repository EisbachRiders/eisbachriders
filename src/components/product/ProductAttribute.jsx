import React, { useState, useEffect, useRef } from 'react'
import { makeStyles } from '@material-ui/styles'
import classnames from 'classnames'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'

const useStyles = makeStyles(theme => ({
  form: { width: '100%', marginBottom: 30 },
  formControl: {
    width: '100%',
  },
}))

function ProductAttribute({ attribute }) {
  const classes = useStyles()
  const [value, setValue] = useState('')
  const inputLabel = useRef(null)
  const [labelWidth, setLabelWidth] = useState(0)
  // useEffect(() => {
  //   setLabelWidth(inputLabel.current.offsetWidth)
  // }, [])

  console.log(attribute)
  return (
    <form autoComplete="off" className={classes.form}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor={attribute.name}>{attribute.name}</InputLabel>
        <Select
          value={value}
          onChange={e => setValue(e.target.value)}
          inputProps={{
            name: attribute.name,
            id: attribute.name,
          }}
        >
          {attribute.options.map(elem => (
            <MenuItem value={elem}>{elem}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </form>
  )
}

export default ProductAttribute
