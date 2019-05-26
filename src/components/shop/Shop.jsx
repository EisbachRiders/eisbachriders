import React, { useEffect, useState, Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import ShopItem from './ShopItem'
import CircularProgress from '@material-ui/core/CircularProgress'
import Container from '../ui/Container'

const useStyles = makeStyles(theme => ({
  form: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 45,
  },
  select: {
    width: 200,
  },
  header: {
    marginBottom: 30,
    textTransform: 'uppercase',
  },
}))

const multipleOfFour = array => {
  array.sort((a, b) => a.menu_order - b.menu_order)
  const len = array.length
  const remainder = len % 4
  if (remainder === 1) {
    array.push({})
  } else if (remainder === 2) {
    array.push({}, {})
  } else if (remainder === 3) {
    array.push({}, {}, {})
  }
  return array
}

function Shop() {
  const classes = useStyles()
  const { t } = useTranslation()
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [filter, setFilter] = useState('')

  useEffect(() => {
    const fetchData = () => {
      setLoading(true)
      fetch(
        'https://shop.eisbach-riders.com/wp-json/wc/v2/products?per_page=50	',
        {
          method: 'GET',
          headers: new Headers({
            Authorization:
              'Basic ' +
              new Buffer.from(
                process.env.WOOCOMMERCE_KEY +
                  ':' +
                  process.env.WOOCOMMERCE_SECRET
              ).toString('base64'),
          }),
        }
      )
        .then(r => r.json().then(data => ({ status: r.status, body: data })))
        .then(obj => {
          if (obj.status === 200) {
            const filter = obj.body.filter(elem => elem.status === 'publish')
            const products = multipleOfFour(filter)
            setProducts(products)
            setLoading(false)
          } else {
            console.log('load error')
            setLoading(false)
          }
        })
        .catch(err => {
          setLoading(false)
          console.log('load error: ' + err)
        })
      fetch(
        'https://shop.eisbach-riders.com/wp-json/wc/v2/products/categories',
        {
          method: 'GET',
          headers: new Headers({
            Authorization:
              'Basic ' +
              new Buffer.from(
                process.env.WOOCOMMERCE_KEY +
                  ':' +
                  process.env.WOOCOMMERCE_SECRET
              ).toString('base64'),
          }),
        }
      )
        .then(r => r.json().then(data => ({ status: r.status, body: data })))
        .then(obj => {
          if (obj.status === 200) {
            const categories = []
            obj.body.forEach(elem => {
              elem.name !== 'Uncategorized' ? categories.push(elem.name) : null
            })
            setCategories(categories.reverse())
          } else {
          }
        })
    }
    fetchData()
  }, [])

  const shopItems = elem => {
    const filter = products.filter(
      product => product.categories && product.categories[0].name === elem
    )
    const section = multipleOfFour(filter)
    return section.map((elem, idx) => (
      <ShopItem product={elem} key={`fins${idx}`} />
    ))
  }

  return (
    <Container>
      <div className={classes.form}>
        <FormControl>
          <InputLabel htmlFor="category">Filter</InputLabel>
          <Select
            className={classes.select}
            value={filter}
            onChange={e => setFilter(e.target.value)}
            inputProps={{
              name: 'category',
              id: 'category',
            }}
          >
            <MenuItem value="">
              <em>none</em>
            </MenuItem>
            {categories.map(elem => (
              <MenuItem value={elem} key={`category ${elem}`}>
                {elem}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      {isLoading && <CircularProgress />}
      {!isLoading && filter === '' && (
        <>
          {categories.map(elem => (
            <Fragment key={`section ${elem}`}>
              <Typography className={classes.header} variant="h5">
                {elem}
              </Typography>
              <div className={classes.container}>{shopItems(elem)}</div>
            </Fragment>
          ))}
        </>
      )}
      {!isLoading && filter !== '' && (
        <>
          <Typography className={classes.header} variant="h5">
            {filter}
          </Typography>
          <div className={classes.container}>{shopItems(filter)}</div>
        </>
      )}
    </Container>
  )
}

export default Shop
