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
import test1 from '../../assets/images/FCS/img1.jpg'
import test2 from '../../assets/images/FCS/img2.jpg'

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

  let product = {
    attributes: [
      { id: 2, name: 'Color', position: 0, visible: true, variation: true },
    ],
    length: 1,
    average_rating: '0.00',
    backordered: false,
    backorders: 'no',
    backorders_allowed: false,
    button_text: '',
    catalog_visibility: 'visible',
    categories: [{ id: 70, name: 'Fins', slug: 'fins' }],
    cross_sell_ids: [],
    date_created: '2019-04-14T09:32:57',
    date_created_gmt: '2019-04-14T09:32:57',
    date_modified: '2019-05-26T07:00:40',
    date_modified_gmt: '2019-05-26T07:00:40',
    date_on_sale_from: null,
    date_on_sale_from_gmt: null,
    date_on_sale_to: null,
    date_on_sale_to_gmt: null,
    default_attributes: [],
    description: '<div>This is a test</div>',
    dimensions: { length: '', width: '', height: '' },
    downloadable: false,
    id: 19755,
    images: [{ src: test1 }, { src: test2 }],
    permalink:
      'https://shop.eisbach-riders.com/product/double-tab-nylon-black/',
    price: '19.90',
    price_html: '<span>price html</span>',
    purchasable: true,
    purchase_note: '',
    rating_count: 0,
    regular_price: '',
    related_ids: [19927, 19937, 19962, 19798, 19870],
    reviews_allowed: false,
    sale_price: '',
    shipping_class: '',
    shipping_class_id: 0,
    shipping_required: true,
    shipping_taxable: true,
    short_description: '<div>short description</div>',
    sku: '',
    slug: 'double-tab-nylon-black',
    sold_individually: false,
    status: 'publish',
    stock_quantity: null,
    tags: [
      { id: 85, name: 'double tab', slug: 'double-tab' },
      { id: 84, name: 'fcs', slug: 'fcs' },
      { id: 88, name: 'fin key', slug: 'fin-key' },
      { id: 83, name: 'fins', slug: 'fins' },
      { id: 86, name: 'nylon', slug: 'nylon' },
      { id: 87, name: 'thruster', slug: 'thruster' },
    ],
    tax_class: '',
    tax_status: 'taxable',
    total_sales: 9,
    type: 'variable',
    upsell_ids: [],
    variations: [19833, 19768],
    virtual: false,
    weight: '',
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
