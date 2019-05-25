import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const useStyles = makeStyles(theme => ({
  img: {
    width: '100%',
  },
}))

function ProductDescription({ product }) {
  const classes = useStyles()
  const { t } = useTranslation()
  const [value, setValue] = useState(0)

  function handleChange(event, newValue) {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <Tabs value={value} onChange={handleChange}>
        <Tab label={t('products.description')} />
        <Tab label={t('products.additional')} />
      </Tabs>
      {value === 0 && (
        <div
          dangerouslySetInnerHTML={{ __html: product.description }}
          className={classes.text}
        />
      )}
      {value === 1 && (
        <div
          dangerouslySetInnerHTML={{ __html: product.additional_info }}
          className={classes.text}
        />
      )}
    </div>
  )
}

export default ProductDescription
