import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'

const useStyles = makeStyles(theme => ({
  form: { width: '100%', marginBottom: 30 },
  formControl: {
    width: '100%',
  },
  menuItem: {
    textTransform: 'capitalize',
  },
}))

function ProductAttribute({ attribute, selected, onChange, name }) {
  const classes = useStyles()
  return (
    <form autoComplete="off" className={classes.form}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor={attribute.name}>{attribute.name}</InputLabel>
        <Select
          value={selected}
          onChange={onChange}
          inputProps={{
            name: name,
            id: attribute.name,
          }}
        >
          {attribute.options.map(elem => (
            <MenuItem
              value={elem}
              key={`attribute${elem}`}
              className={classes.menuItem}
            >
              {elem}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </form>
  )
}

export default ProductAttribute
