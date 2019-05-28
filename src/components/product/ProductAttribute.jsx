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

function ProductAttribute({ attribute, selected, onChange, name }) {
  const classes = useStyles()

  return (
    <form autoComplete="off" className={classes.form}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor={attribute.name}>{attribute.name}</InputLabel>
        <Select
          value={selected.value}
          onChange={onChange}
          inputProps={{
            name,
            id: attribute.name,
          }}
        >
          {attribute.options.map(elem => (
            <MenuItem value={elem} key={`attribute${elem}`}>
              {elem}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </form>
  )
}

export default ProductAttribute
