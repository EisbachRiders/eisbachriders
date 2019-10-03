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
        'https://shop.eisbach-riders.com/wp-json/wc/v2/products?per_page=50',
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

// const categories = ['Leashes', 'Fins', 'Bundle', 'Apparel', 'Accessories']

// const products = [
//   {
//       "id": 20591,
//       "name": "Coiled Leashes",
//       "slug": "coiled-leashes",
//       "permalink": "https://shop.eisbach-riders.com/product/coiled-leashes/",
//       "date_created": "2019-09-06T13:46:21",
//       "date_created_gmt": "2019-09-06T13:46:21",
//       "date_modified": "2019-09-18T12:01:22",
//       "date_modified_gmt": "2019-09-18T12:01:22",
//       "type": "variable",
//       "status": "publish",
//       "featured": false,
//       "catalog_visibility": "visible",
//       "description": "<div class=\"celwidget aplus-module launchpad-company-logo\" data-cel-widget=\"aplus-launchpad-company-logo\">\n<h3 class=\"a-section a-text-center launchpad-module launchpad-module-company-logo\"><strong style=\"font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;\"><span class=\"a-text-bold\">EISBACH RIDERS Surfboard Coiled Leashes</span></strong></h3>\n</div>\n<div class=\"celwidget aplus-module launchpad-brand-description-left\" data-cel-widget=\"aplus-launchpad-brand-description-left\">\n<div class=\"a-section a-spacing-top-mini launchpad-module launchpad-module-brand-description-left\">\n<div class=\"a-section launchpad-text-left-justify\">\n<ul class=\"a-unordered-list a-vertical a-spacing-none\">\n<li>COMFORTABLE - The extra thick neoprene cuff sits comfortably on your ankle</li>\n<li>COMPATIBLE - Fits any Surfboard or Stand Up Paddling (SUP) Board</li>\n<li>MATERIAL - High-quality materials make the leash durable and the stainless steel double swivel system prevents the leash from tangling</li>\n<li>LENGHT: 10 or 11 ft</li>\n<li>THICKNESS: 7mm strong Urethan cord</li>\n</ul>\n</div>\n<p>&nbsp;</p>\n<h3 class=\"a-spacing-mini\">BOX CONTENT</h3>\n<p>1x Coiled surfboard leash</p>\n</div>\n</div>\n",
//       "short_description": "<ul class=\"a-unordered-list a-vertical a-spacing-none\">\n<li>COMFORTABLE &#8211; The extra thick neoprene cuff sits comfortably on your ankle</li>\n<li>COMPATIBLE &#8211; Fits any Surfboard or Stand Up Paddling (SUP) Board</li>\n<li>MATERIAL &#8211; High-quality materials make the leash durable and the stainless steel double swivel system prevents the leash from tangling</li>\n</ul>\n",
//       "sku": "",
//       "price": "21.90",
//       "regular_price": "",
//       "sale_price": "",
//       "date_on_sale_from": null,
//       "date_on_sale_from_gmt": null,
//       "date_on_sale_to": null,
//       "date_on_sale_to_gmt": null,
//       "price_html": "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&euro;</span>21,90</span> &ndash; <span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&euro;</span>22,90</span> <small class=\"woocommerce-price-suffix\">incl. VAT</small>",
//       "on_sale": false,
//       "purchasable": true,
//       "total_sales": 1,
//       "virtual": false,
//       "downloadable": false,
//       "downloads": [
//       ],
//       "download_limit": -1,
//       "download_expiry": -1,
//       "external_url": "",
//       "button_text": "",
//       "tax_status": "taxable",
//       "tax_class": "",
//       "manage_stock": false,
//       "stock_quantity": null,
//       "in_stock": true,
//       "backorders": "no",
//       "backorders_allowed": false,
//       "backordered": false,
//       "sold_individually": false,
//       "weight": "",
//       "dimensions": {
//           "length": "",
//           "width": "",
//           "height": ""
//       },
//       "shipping_required": true,
//       "shipping_taxable": true,
//       "shipping_class": "",
//       "shipping_class_id": 0,
//       "reviews_allowed": false,
//       "average_rating": "0.00",
//       "rating_count": 0,
//       "related_ids": [
//           20083
//       ],
//       "upsell_ids": [
//       ],
//       "cross_sell_ids": [
//       ],
//       "parent_id": 0,
//       "purchase_note": "",
//       "categories": [
//           {
//               "id": 141,
//               "name": "Leashes",
//               "slug": "leashes"
//           }
//       ],
//       "tags": [
//           {
//               "id": 142,
//               "name": "leash",
//               "slug": "leash"
//           },
//           {
//               "id": 143,
//               "name": "straight",
//               "slug": "straight"
//           }
//       ],
//       "images": [
//           {
//               "id": 20632,
//               "date_created": "2019-09-11T22:47:38",
//               "date_created_gmt": "2019-09-11T22:47:38",
//               "date_modified": "2019-09-11T22:47:38",
//               "date_modified_gmt": "2019-09-11T22:47:38",
//               "src": "https://shop.eisbach-riders.com/wp-content/uploads/2019/09/SUP_coiled_leash.png",
//               "name": "SUP_coiled_leash",
//               "alt": "",
//               "position": 0
//           },
//           {
//               "id": 20630,
//               "date_created": "2019-09-11T22:47:16",
//               "date_created_gmt": "2019-09-11T22:47:16",
//               "date_modified": "2019-09-11T22:47:16",
//               "date_modified_gmt": "2019-09-11T22:47:16",
//               "src": "https://shop.eisbach-riders.com/wp-content/uploads/2019/09/P7120991.jpg",
//               "name": "OLYMPUS DIGITAL CAMERA",
//               "alt": "",
//               "position": 1
//           },
//           {
//               "id": 20631,
//               "date_created": "2019-09-11T22:47:32",
//               "date_created_gmt": "2019-09-11T22:47:32",
//               "date_modified": "2019-09-11T22:47:32",
//               "date_modified_gmt": "2019-09-11T22:47:32",
//               "src": "https://shop.eisbach-riders.com/wp-content/uploads/2019/09/P7120993.jpg",
//               "name": "OLYMPUS DIGITAL CAMERA",
//               "alt": "",
//               "position": 2
//           }
//       ],
//       "attributes": [
//           {
//               "id": 1,
//               "name": "Size",
//               "position": 1,
//               "visible": true,
//               "variation": true,
//               "options": [
//                   "10ft",
//                   "11ft"
//               ]
//           }
//       ],
//       "default_attributes": [
//       ],
//       "variations": [
//           20629,
//           20628
//       ],
//       "grouped_products": [
//       ],
//       "menu_order": 9,
//       "meta_data": [
//           {
//               "id": 35164,
//               "key": "_wpas_done_all",
//               "value": "1"
//           },
//           {
//               "id": 35165,
//               "key": "slide_template",
//               "value": "default"
//           },
//           {
//               "id": 35166,
//               "key": "_yoast_wpseo_primary_product_cat",
//               "value": "141"
//           },
//           {
//               "id": 35167,
//               "key": "sharing_disabled",
//               "value": "1"
//           },
//           {
//               "id": 35168,
//               "key": "pyre_main_top_padding",
//               "value": ""
//           },
//           {
//               "id": 35169,
//               "key": "pyre_main_bottom_padding",
//               "value": ""
//           },
//           {
//               "id": 35170,
//               "key": "pyre_portfolio_width_100",
//               "value": "default"
//           },
//           {
//               "id": 35171,
//               "key": "pyre_hundredp_padding",
//               "value": ""
//           },
//           {
//               "id": 35172,
//               "key": "pyre_display_header",
//               "value": "yes"
//           },
//           {
//               "id": 35173,
//               "key": "pyre_header_100_width",
//               "value": "default"
//           },
//           {
//               "id": 35174,
//               "key": "pyre_combined_header_bg_color",
//               "value": ""
//           },
//           {
//               "id": 35175,
//               "key": "pyre_mobile_header_bg_color",
//               "value": ""
//           },
//           {
//               "id": 35176,
//               "key": "pyre_header_bg",
//               "value": ""
//           },
//           {
//               "id": 35177,
//               "key": "pyre_header_bg_id",
//               "value": ""
//           },
//           {
//               "id": 35178,
//               "key": "pyre_header_bg_full",
//               "value": "no"
//           },
//           {
//               "id": 35179,
//               "key": "pyre_header_bg_repeat",
//               "value": "repeat"
//           },
//           {
//               "id": 35180,
//               "key": "pyre_displayed_menu",
//               "value": "default"
//           },
//           {
//               "id": 35181,
//               "key": "pyre_display_footer",
//               "value": "default"
//           },
//           {
//               "id": 35182,
//               "key": "pyre_display_copyright",
//               "value": "default"
//           },
//           {
//               "id": 35183,
//               "key": "pyre_footer_100_width",
//               "value": "default"
//           },
//           {
//               "id": 35184,
//               "key": "pyre_sidebar_position",
//               "value": "default"
//           },
//           {
//               "id": 35185,
//               "key": "pyre_responsive_sidebar_order",
//               "value": ""
//           },
//           {
//               "id": 35186,
//               "key": "pyre_sidebar_sticky",
//               "value": "default"
//           },
//           {
//               "id": 35187,
//               "key": "pyre_sidebar_bg_color",
//               "value": ""
//           },
//           {
//               "id": 35188,
//               "key": "pyre_slider_type",
//               "value": "no"
//           },
//           {
//               "id": 35189,
//               "key": "pyre_slider",
//               "value": "0"
//           },
//           {
//               "id": 35190,
//               "key": "pyre_wooslider",
//               "value": ""
//           },
//           {
//               "id": 35191,
//               "key": "pyre_revslider",
//               "value": "0"
//           },
//           {
//               "id": 35192,
//               "key": "pyre_elasticslider",
//               "value": "0"
//           },
//           {
//               "id": 35193,
//               "key": "pyre_slider_position",
//               "value": "default"
//           },
//           {
//               "id": 35194,
//               "key": "pyre_avada_rev_styles",
//               "value": "default"
//           },
//           {
//               "id": 35195,
//               "key": "pyre_fallback",
//               "value": ""
//           },
//           {
//               "id": 35196,
//               "key": "pyre_fallback_id",
//               "value": ""
//           },
//           {
//               "id": 35197,
//               "key": "pyre_demo_slider",
//               "value": ""
//           },
//           {
//               "id": 35198,
//               "key": "pyre_page_bg_layout",
//               "value": "default"
//           },
//           {
//               "id": 35199,
//               "key": "pyre_page_bg_color",
//               "value": ""
//           },
//           {
//               "id": 35200,
//               "key": "pyre_page_bg",
//               "value": ""
//           },
//           {
//               "id": 35201,
//               "key": "pyre_page_bg_id",
//               "value": ""
//           },
//           {
//               "id": 35202,
//               "key": "pyre_page_bg_full",
//               "value": "default"
//           },
//           {
//               "id": 35203,
//               "key": "pyre_page_bg_repeat",
//               "value": "default"
//           },
//           {
//               "id": 35204,
//               "key": "pyre_wide_page_bg_color",
//               "value": ""
//           },
//           {
//               "id": 35205,
//               "key": "pyre_wide_page_bg",
//               "value": ""
//           },
//           {
//               "id": 35206,
//               "key": "pyre_wide_page_bg_id",
//               "value": ""
//           },
//           {
//               "id": 35207,
//               "key": "pyre_wide_page_bg_full",
//               "value": "default"
//           },
//           {
//               "id": 35208,
//               "key": "pyre_wide_page_bg_repeat",
//               "value": "default"
//           },
//           {
//               "id": 35209,
//               "key": "pyre_page_title",
//               "value": "default"
//           },
//           {
//               "id": 35210,
//               "key": "pyre_page_title_breadcrumbs_search_bar",
//               "value": "default"
//           },
//           {
//               "id": 35211,
//               "key": "pyre_page_title_text",
//               "value": "default"
//           },
//           {
//               "id": 35212,
//               "key": "pyre_page_title_text_alignment",
//               "value": "default"
//           },
//           {
//               "id": 35213,
//               "key": "pyre_page_title_custom_text",
//               "value": ""
//           },
//           {
//               "id": 35214,
//               "key": "pyre_page_title_text_size",
//               "value": ""
//           },
//           {
//               "id": 35215,
//               "key": "pyre_page_title_line_height",
//               "value": ""
//           },
//           {
//               "id": 35216,
//               "key": "pyre_page_title_font_color",
//               "value": ""
//           },
//           {
//               "id": 35217,
//               "key": "pyre_page_title_custom_subheader",
//               "value": ""
//           },
//           {
//               "id": 35218,
//               "key": "pyre_page_title_custom_subheader_text_size",
//               "value": ""
//           },
//           {
//               "id": 35219,
//               "key": "pyre_page_title_subheader_font_color",
//               "value": ""
//           },
//           {
//               "id": 35220,
//               "key": "pyre_page_title_100_width",
//               "value": "default"
//           },
//           {
//               "id": 35221,
//               "key": "pyre_page_title_height",
//               "value": ""
//           },
//           {
//               "id": 35222,
//               "key": "pyre_page_title_mobile_height",
//               "value": ""
//           },
//           {
//               "id": 35223,
//               "key": "pyre_page_title_bar_bg_color",
//               "value": ""
//           },
//           {
//               "id": 35224,
//               "key": "pyre_page_title_bar_borders_color",
//               "value": ""
//           },
//           {
//               "id": 35225,
//               "key": "pyre_page_title_bar_bg",
//               "value": ""
//           },
//           {
//               "id": 35226,
//               "key": "pyre_page_title_bar_bg_id",
//               "value": ""
//           },
//           {
//               "id": 35227,
//               "key": "pyre_page_title_bar_bg_retina",
//               "value": ""
//           },
//           {
//               "id": 35228,
//               "key": "pyre_page_title_bar_bg_retina_id",
//               "value": ""
//           },
//           {
//               "id": 35229,
//               "key": "pyre_page_title_bar_bg_full",
//               "value": "default"
//           },
//           {
//               "id": 35230,
//               "key": "pyre_page_title_bg_parallax",
//               "value": "default"
//           },
//           {
//               "id": 35231,
//               "key": "_yoast_wpseo_focuskw",
//               "value": "surfboard fins"
//           },
//           {
//               "id": 35232,
//               "key": "_yoast_wpseo_linkdex",
//               "value": "17"
//           },
//           {
//               "id": 35233,
//               "key": "_yoast_wpseo_content_score",
//               "value": "90"
//           },
//           {
//               "id": 35234,
//               "key": "sbg_selected_sidebar",
//               "value": [
//                   "0"
//               ]
//           },
//           {
//               "id": 35235,
//               "key": "sbg_selected_sidebar_replacement",
//               "value": [
//                   "default_sidebar"
//               ]
//           },
//           {
//               "id": 35236,
//               "key": "sbg_selected_sidebar_2",
//               "value": [
//                   "0"
//               ]
//           },
//           {
//               "id": 35237,
//               "key": "sbg_selected_sidebar_2_replacement",
//               "value": [
//                   "default_sidebar"
//               ]
//           }
//       ],
//       "jetpack_publicize_connections": [
//       ],
//       "jetpack_sharing_enabled": false,
//       "_links": {
//           "self": [
//               {
//                   "href": "https://shop.eisbach-riders.com/wp-json/wc/v2/products/20591"
//               }
//           ],
//           "collection": [
//               {
//                   "href": "https://shop.eisbach-riders.com/wp-json/wc/v2/products"
//               }
//           ]
//       }
//   },
//   {
//       "id": 20200,
//       "name": "Premium Surfing Set",
//       "slug": "premium-surfing-set-fiberglass",
//       "permalink": "https://shop.eisbach-riders.com/?post_type=product&p=20200",
//       "date_created": "2019-05-31T18:43:12",
//       "date_created_gmt": "2019-05-31T18:43:12",
//       "date_modified": "2019-05-31T18:50:34",
//       "date_modified_gmt": "2019-05-31T18:50:34",
//       "type": "variable",
//       "status": "draft",
//       "featured": false,
//       "catalog_visibility": "visible",
//       "description": "<div class=\"celwidget aplus-module launchpad-company-logo\" data-cel-widget=\"aplus-launchpad-company-logo\">\n<h3 class=\"a-section a-text-center launchpad-module launchpad-module-company-logo\"><strong style=\"font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;\"><span class=\"a-text-bold\">Eisbach Riders Premium Surfing Set</span></strong></h3>\n</div>\n<div class=\"celwidget aplus-module launchpad-brand-description-left\" data-cel-widget=\"aplus-launchpad-brand-description-left\">\n<div class=\"a-section a-spacing-top-mini launchpad-module launchpad-module-brand-description-left\">\n<div class=\"a-section launchpad-text-left-justify\">\n<p>Everything you need to get your surfing to the next level your new surfboard: Eisbach Rider honeycomb fiberglass fins and fin key, leash and Bee Swell surf wax.</p>\n</div>\n<h3 class=\"a-spacing-mini\">BOX CONTENT</h3>\n<ul>\n<li>FCS or Future Fiberglass Honeycomb Set of 3 fins with one centre fin and the two side fins (right and left)</li>\n<li>Fin key</li>\n<li>Surfboard leash in 5, 6 or 7ft</li>\n<li>Organic handmade surf wax for cold water</li>\n</ul>\n</div>\n</div>\n",
//       "short_description": "<ul class=\"a-unordered-list a-vertical a-spacing-none\">\n<li><span class=\"a-list-item\">BUNDLE &#8211; Ultimate premium surfing set: Eisbach Rider honeycomb fiberglass fins and fin key, leash and Bee Swell surf wax.</span></li>\n<li><span class=\"a-list-item\">COMPATIBLE &#8211; Fits with any surfboard with FCS 1 or Future plug system &#8211; whether it is a bodyboard, shortboard, funboard, windsurfing or kiteboard and is therefore ideal for wave riding, river surfing or paddle boarding.</span></li>\n</ul>\n",
//       "sku": "",
//       "price": "38.90",
//       "regular_price": "",
//       "sale_price": "",
//       "date_on_sale_from": null,
//       "date_on_sale_from_gmt": null,
//       "date_on_sale_to": null,
//       "date_on_sale_to_gmt": null,
//       "price_html": "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&euro;</span>38,90</span> <small class=\"woocommerce-price-suffix\">incl. VAT</small>",
//       "on_sale": false,
//       "purchasable": true,
//       "total_sales": 0,
//       "virtual": false,
//       "downloadable": false,
//       "downloads": [
//       ],
//       "download_limit": -1,
//       "download_expiry": -1,
//       "external_url": "",
//       "button_text": "",
//       "tax_status": "taxable",
//       "tax_class": "",
//       "manage_stock": false,
//       "stock_quantity": null,
//       "in_stock": true,
//       "backorders": "no",
//       "backorders_allowed": false,
//       "backordered": false,
//       "sold_individually": false,
//       "weight": "",
//       "dimensions": {
//           "length": "",
//           "width": "",
//           "height": ""
//       },
//       "shipping_required": true,
//       "shipping_taxable": true,
//       "shipping_class": "",
//       "shipping_class_id": 0,
//       "reviews_allowed": false,
//       "average_rating": "0.00",
//       "rating_count": 0,
//       "related_ids": [
//           19927,
//           19962,
//           20116,
//           19835,
//           19917
//       ],
//       "upsell_ids": [
//       ],
//       "cross_sell_ids": [
//       ],
//       "parent_id": 0,
//       "purchase_note": "",
//       "categories": [
//           {
//               "id": 144,
//               "name": "Bundle",
//               "slug": "bundle"
//           }
//       ],
//       "tags": [
//           {
//               "id": 85,
//               "name": "double tab",
//               "slug": "double-tab"
//           },
//           {
//               "id": 84,
//               "name": "fcs",
//               "slug": "fcs"
//           },
//           {
//               "id": 88,
//               "name": "fin key",
//               "slug": "fin-key"
//           },
//           {
//               "id": 83,
//               "name": "fins",
//               "slug": "fins"
//           },
//           {
//               "id": 91,
//               "name": "future",
//               "slug": "future"
//           },
//           {
//               "id": 86,
//               "name": "nylon",
//               "slug": "nylon"
//           },
//           {
//               "id": 87,
//               "name": "thruster",
//               "slug": "thruster"
//           },
//           {
//               "id": 100,
//               "name": "wax",
//               "slug": "wax"
//           }
//       ],
//       "images": [
//           {
//               "id": 20121,
//               "date_created": "2019-05-15T18:59:54",
//               "date_created_gmt": "2019-05-15T18:59:54",
//               "date_modified": "2019-05-15T18:59:54",
//               "date_modified_gmt": "2019-05-15T18:59:54",
//               "src": "https://shop.eisbach-riders.com/wp-content/uploads/2019/05/P5110396_white.jpg",
//               "name": "OLYMPUS DIGITAL CAMERA",
//               "alt": "",
//               "position": 0
//           },
//           {
//               "id": 20214,
//               "date_created": "2019-05-31T18:47:01",
//               "date_created_gmt": "2019-05-31T18:47:01",
//               "date_modified": "2019-05-31T18:47:01",
//               "date_modified_gmt": "2019-05-31T18:47:01",
//               "src": "https://shop.eisbach-riders.com/wp-content/uploads/2019/05/P5110394_white.jpg",
//               "name": "OLYMPUS DIGITAL CAMERA",
//               "alt": "",
//               "position": 1
//           },
//           {
//               "id": 20122,
//               "date_created": "2019-05-15T19:00:19",
//               "date_created_gmt": "2019-05-15T19:00:19",
//               "date_modified": "2019-05-15T19:00:19",
//               "date_modified_gmt": "2019-05-15T19:00:19",
//               "src": "https://shop.eisbach-riders.com/wp-content/uploads/2019/05/P5110398_white.jpg",
//               "name": "OLYMPUS DIGITAL CAMERA",
//               "alt": "",
//               "position": 2
//           },
//           {
//               "id": 20104,
//               "date_created": "2019-05-15T18:27:10",
//               "date_created_gmt": "2019-05-15T18:27:10",
//               "date_modified": "2019-05-15T18:27:10",
//               "date_modified_gmt": "2019-05-15T18:27:10",
//               "src": "https://shop.eisbach-riders.com/wp-content/uploads/2019/05/P5110388_white.jpg",
//               "name": "OLYMPUS DIGITAL CAMERA",
//               "alt": "",
//               "position": 3
//           },
//           {
//               "id": 20105,
//               "date_created": "2019-05-15T18:27:48",
//               "date_created_gmt": "2019-05-15T18:27:48",
//               "date_modified": "2019-05-15T18:27:48",
//               "date_modified_gmt": "2019-05-15T18:27:48",
//               "src": "https://shop.eisbach-riders.com/wp-content/uploads/2019/05/P5120438_white.jpg",
//               "name": "OLYMPUS DIGITAL CAMERA",
//               "alt": "",
//               "position": 4
//           },
//           {
//               "id": 19825,
//               "date_created": "2019-04-14T15:09:52",
//               "date_created_gmt": "2019-04-14T15:09:52",
//               "date_modified": "2019-04-19T09:04:19",
//               "date_modified_gmt": "2019-04-19T09:04:19",
//               "src": "https://shop.eisbach-riders.com/wp-content/uploads/2019/04/Bee-Swell_squared.png",
//               "name": "Bee Swell wax",
//               "alt": "bee swell wax",
//               "position": 5
//           }
//       ],
//       "attributes": [
//           {
//               "id": 2,
//               "name": "Color",
//               "position": 0,
//               "visible": true,
//               "variation": true,
//               "options": [
//                   "Orange",
//                   "Black",
//                   "Blue"
//               ]
//           },
//           {
//               "id": 3,
//               "name": "Fin Plug",
//               "position": 1,
//               "visible": true,
//               "variation": true,
//               "options": [
//                   "FCS",
//                   "Future"
//               ]
//           },
//           {
//               "id": 1,
//               "name": "Size",
//               "position": 2,
//               "visible": true,
//               "variation": true,
//               "options": [
//                   "5ft",
//                   "6ft",
//                   "7ft"
//               ]
//           }
//       ],
//       "default_attributes": [
//       ],
//       "variations": [
//           20202
//       ],
//       "grouped_products": [
//       ],
//       "menu_order": 2,
//       "meta_data": [
//           {
//               "id": 30970,
//               "key": "_wpas_done_all",
//               "value": "1"
//           },
//           {
//               "id": 30971,
//               "key": "slide_template",
//               "value": "default"
//           },
//           {
//               "id": 30972,
//               "key": "_yoast_wpseo_primary_product_cat",
//               "value": "144"
//           },
//           {
//               "id": 30973,
//               "key": "sharing_disabled",
//               "value": "1"
//           },
//           {
//               "id": 30974,
//               "key": "pyre_main_top_padding",
//               "value": ""
//           },
//           {
//               "id": 30975,
//               "key": "pyre_main_bottom_padding",
//               "value": ""
//           },
//           {
//               "id": 30976,
//               "key": "pyre_portfolio_width_100",
//               "value": "default"
//           },
//           {
//               "id": 30977,
//               "key": "pyre_hundredp_padding",
//               "value": ""
//           },
//           {
//               "id": 30978,
//               "key": "pyre_display_header",
//               "value": "yes"
//           },
//           {
//               "id": 30979,
//               "key": "pyre_header_100_width",
//               "value": "default"
//           },
//           {
//               "id": 30980,
//               "key": "pyre_combined_header_bg_color",
//               "value": ""
//           },
//           {
//               "id": 30981,
//               "key": "pyre_mobile_header_bg_color",
//               "value": ""
//           },
//           {
//               "id": 30982,
//               "key": "pyre_header_bg",
//               "value": ""
//           },
//           {
//               "id": 30983,
//               "key": "pyre_header_bg_id",
//               "value": ""
//           },
//           {
//               "id": 30984,
//               "key": "pyre_header_bg_full",
//               "value": "no"
//           },
//           {
//               "id": 30985,
//               "key": "pyre_header_bg_repeat",
//               "value": "repeat"
//           },
//           {
//               "id": 30986,
//               "key": "pyre_displayed_menu",
//               "value": "default"
//           },
//           {
//               "id": 30987,
//               "key": "pyre_display_footer",
//               "value": "default"
//           },
//           {
//               "id": 30988,
//               "key": "pyre_display_copyright",
//               "value": "default"
//           },
//           {
//               "id": 30989,
//               "key": "pyre_footer_100_width",
//               "value": "default"
//           },
//           {
//               "id": 30990,
//               "key": "pyre_sidebar_position",
//               "value": "default"
//           },
//           {
//               "id": 30991,
//               "key": "pyre_responsive_sidebar_order",
//               "value": ""
//           },
//           {
//               "id": 30992,
//               "key": "pyre_sidebar_sticky",
//               "value": "default"
//           },
//           {
//               "id": 30993,
//               "key": "pyre_sidebar_bg_color",
//               "value": ""
//           },
//           {
//               "id": 30994,
//               "key": "pyre_slider_type",
//               "value": "no"
//           },
//           {
//               "id": 30995,
//               "key": "pyre_slider",
//               "value": "0"
//           },
//           {
//               "id": 30996,
//               "key": "pyre_wooslider",
//               "value": ""
//           },
//           {
//               "id": 30997,
//               "key": "pyre_revslider",
//               "value": "0"
//           },
//           {
//               "id": 30998,
//               "key": "pyre_elasticslider",
//               "value": "0"
//           },
//           {
//               "id": 30999,
//               "key": "pyre_slider_position",
//               "value": "default"
//           },
//           {
//               "id": 31000,
//               "key": "pyre_avada_rev_styles",
//               "value": "default"
//           },
//           {
//               "id": 31001,
//               "key": "pyre_fallback",
//               "value": ""
//           },
//           {
//               "id": 31002,
//               "key": "pyre_fallback_id",
//               "value": ""
//           },
//           {
//               "id": 31003,
//               "key": "pyre_demo_slider",
//               "value": ""
//           },
//           {
//               "id": 31004,
//               "key": "pyre_page_bg_layout",
//               "value": "default"
//           },
//           {
//               "id": 31005,
//               "key": "pyre_page_bg_color",
//               "value": ""
//           },
//           {
//               "id": 31006,
//               "key": "pyre_page_bg",
//               "value": ""
//           },
//           {
//               "id": 31007,
//               "key": "pyre_page_bg_id",
//               "value": ""
//           },
//           {
//               "id": 31008,
//               "key": "pyre_page_bg_full",
//               "value": "default"
//           },
//           {
//               "id": 31009,
//               "key": "pyre_page_bg_repeat",
//               "value": "default"
//           },
//           {
//               "id": 31010,
//               "key": "pyre_wide_page_bg_color",
//               "value": ""
//           },
//           {
//               "id": 31011,
//               "key": "pyre_wide_page_bg",
//               "value": ""
//           },
//           {
//               "id": 31012,
//               "key": "pyre_wide_page_bg_id",
//               "value": ""
//           },
//           {
//               "id": 31013,
//               "key": "pyre_wide_page_bg_full",
//               "value": "default"
//           },
//           {
//               "id": 31014,
//               "key": "pyre_wide_page_bg_repeat",
//               "value": "default"
//           },
//           {
//               "id": 31015,
//               "key": "pyre_page_title",
//               "value": "default"
//           },
//           {
//               "id": 31016,
//               "key": "pyre_page_title_breadcrumbs_search_bar",
//               "value": "default"
//           },
//           {
//               "id": 31017,
//               "key": "pyre_page_title_text",
//               "value": "default"
//           },
//           {
//               "id": 31018,
//               "key": "pyre_page_title_text_alignment",
//               "value": "default"
//           },
//           {
//               "id": 31019,
//               "key": "pyre_page_title_custom_text",
//               "value": ""
//           },
//           {
//               "id": 31020,
//               "key": "pyre_page_title_text_size",
//               "value": ""
//           },
//           {
//               "id": 31021,
//               "key": "pyre_page_title_line_height",
//               "value": ""
//           },
//           {
//               "id": 31022,
//               "key": "pyre_page_title_font_color",
//               "value": ""
//           },
//           {
//               "id": 31023,
//               "key": "pyre_page_title_custom_subheader",
//               "value": ""
//           },
//           {
//               "id": 31024,
//               "key": "pyre_page_title_custom_subheader_text_size",
//               "value": ""
//           },
//           {
//               "id": 31025,
//               "key": "pyre_page_title_subheader_font_color",
//               "value": ""
//           },
//           {
//               "id": 31026,
//               "key": "pyre_page_title_100_width",
//               "value": "default"
//           },
//           {
//               "id": 31027,
//               "key": "pyre_page_title_height",
//               "value": ""
//           },
//           {
//               "id": 31028,
//               "key": "pyre_page_title_mobile_height",
//               "value": ""
//           },
//           {
//               "id": 31029,
//               "key": "pyre_page_title_bar_bg_color",
//               "value": ""
//           },
//           {
//               "id": 31030,
//               "key": "pyre_page_title_bar_borders_color",
//               "value": ""
//           },
//           {
//               "id": 31031,
//               "key": "pyre_page_title_bar_bg",
//               "value": ""
//           },
//           {
//               "id": 31032,
//               "key": "pyre_page_title_bar_bg_id",
//               "value": ""
//           },
//           {
//               "id": 31033,
//               "key": "pyre_page_title_bar_bg_retina",
//               "value": ""
//           },
//           {
//               "id": 31034,
//               "key": "pyre_page_title_bar_bg_retina_id",
//               "value": ""
//           },
//           {
//               "id": 31035,
//               "key": "pyre_page_title_bar_bg_full",
//               "value": "default"
//           },
//           {
//               "id": 31036,
//               "key": "pyre_page_title_bg_parallax",
//               "value": "default"
//           },
//           {
//               "id": 31037,
//               "key": "_yoast_wpseo_focuskw",
//               "value": "surfboard fins"
//           },
//           {
//               "id": 31038,
//               "key": "_yoast_wpseo_linkdex",
//               "value": "21"
//           },
//           {
//               "id": 31039,
//               "key": "_yoast_wpseo_content_score",
//               "value": "60"
//           },
//           {
//               "id": 31040,
//               "key": "sbg_selected_sidebar",
//               "value": [
//                   "0"
//               ]
//           },
//           {
//               "id": 31041,
//               "key": "sbg_selected_sidebar_replacement",
//               "value": [
//                   "default_sidebar"
//               ]
//           },
//           {
//               "id": 31042,
//               "key": "sbg_selected_sidebar_2",
//               "value": [
//                   "0"
//               ]
//           },
//           {
//               "id": 31043,
//               "key": "sbg_selected_sidebar_2_replacement",
//               "value": [
//                   "default_sidebar"
//               ]
//           }
//       ],
//       "jetpack_publicize_connections": [
//       ],
//       "jetpack_sharing_enabled": false,
//       "_links": {
//           "self": [
//               {
//                   "href": "https://shop.eisbach-riders.com/wp-json/wc/v2/products/20200"
//               }
//           ],
//           "collection": [
//               {
//                   "href": "https://shop.eisbach-riders.com/wp-json/wc/v2/products"
//               }
//           ]
//       }
//   },
//   {
//       "id": 20116,
//       "name": "Surfing Starter Set",
//       "slug": "nylon-surfing-starter-set",
//       "permalink": "https://shop.eisbach-riders.com/product/nylon-surfing-starter-set/",
//       "date_created": "2019-05-15T18:56:17",
//       "date_created_gmt": "2019-05-15T18:56:17",
//       "date_modified": "2019-09-23T03:33:12",
//       "date_modified_gmt": "2019-09-23T03:33:12",
//       "type": "variable",
//       "status": "publish",
//       "featured": false,
//       "catalog_visibility": "visible",
//       "description": "<div class=\"celwidget aplus-module launchpad-company-logo\" data-cel-widget=\"aplus-launchpad-company-logo\">\n<h3 class=\"a-section a-text-center launchpad-module launchpad-module-company-logo\"><strong style=\"font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;\"><span class=\"a-text-bold\">Eisbach Riders Surfing Starter Set</span></strong></h3>\n</div>\n<div class=\"celwidget aplus-module launchpad-brand-description-left\" data-cel-widget=\"aplus-launchpad-brand-description-left\">\n<div class=\"a-section a-spacing-top-mini launchpad-module launchpad-module-brand-description-left\">\n<div class=\"a-section launchpad-text-left-justify\">\n<p>Everything you need to catch some waves with your new surfboard: Eisbach Rider fin and fin key, leash and Bee Swell surf wax.</p>\n</div>\n<h3 class=\"a-spacing-mini\">BOX CONTENT</h3>\n<ul>\n<li>FCS or Future Set of 3 fins with one centre fin and the two side fins (right and left)</li>\n<li>Fin key</li>\n<li>Surfboard leash in 5, 6 or 7ft</li>\n<li>Organic handmade surf wax for cold water</li>\n</ul>\n</div>\n</div>\n",
//       "short_description": "<ul class=\"a-unordered-list a-vertical a-spacing-none\">\n<li><span class=\"a-list-item\">BUNDLE &#8211; Ultimate surfing starter set: Eisbach Rider fin and fin key, leash and Bee Swell surf wax.</span></li>\n<li><span class=\"a-list-item\">COMPATIBLE &#8211; Fits with any surfboard with FCS 1 or Future plug system &#8211; whether it is a bodyboard, shortboard, funboard, windsurfing or kiteboard and is therefore ideal for wave riding, river surfing or paddle boarding.</span></li>\n</ul>\n",
//       "sku": "",
//       "price": "38.90",
//       "regular_price": "",
//       "sale_price": "",
//       "date_on_sale_from": null,
//       "date_on_sale_from_gmt": null,
//       "date_on_sale_to": null,
//       "date_on_sale_to_gmt": null,
//       "price_html": "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&euro;</span>38,90</span> <small class=\"woocommerce-price-suffix\">incl. VAT</small>",
//       "on_sale": false,
//       "purchasable": true,
//       "total_sales": 6,
//       "virtual": false,
//       "downloadable": false,
//       "downloads": [
//       ],
//       "download_limit": -1,
//       "download_expiry": -1,
//       "external_url": "",
//       "button_text": "",
//       "tax_status": "taxable",
//       "tax_class": "",
//       "manage_stock": false,
//       "stock_quantity": null,
//       "in_stock": true,
//       "backorders": "no",
//       "backorders_allowed": false,
//       "backordered": false,
//       "sold_individually": false,
//       "weight": "",
//       "dimensions": {
//           "length": "",
//           "width": "",
//           "height": ""
//       },
//       "shipping_required": true,
//       "shipping_taxable": true,
//       "shipping_class": "",
//       "shipping_class_id": 0,
//       "reviews_allowed": false,
//       "average_rating": "0.00",
//       "rating_count": 0,
//       "related_ids": [
//           19890,
//           19755,
//           19835,
//           19962,
//           19883
//       ],
//       "upsell_ids": [
//       ],
//       "cross_sell_ids": [
//       ],
//       "parent_id": 0,
//       "purchase_note": "",
//       "categories": [
//           {
//               "id": 144,
//               "name": "Bundle",
//               "slug": "bundle"
//           }
//       ],
//       "tags": [
//           {
//               "id": 85,
//               "name": "double tab",
//               "slug": "double-tab"
//           },
//           {
//               "id": 84,
//               "name": "fcs",
//               "slug": "fcs"
//           },
//           {
//               "id": 88,
//               "name": "fin key",
//               "slug": "fin-key"
//           },
//           {
//               "id": 83,
//               "name": "fins",
//               "slug": "fins"
//           },
//           {
//               "id": 91,
//               "name": "future",
//               "slug": "future"
//           },
//           {
//               "id": 86,
//               "name": "nylon",
//               "slug": "nylon"
//           },
//           {
//               "id": 87,
//               "name": "thruster",
//               "slug": "thruster"
//           },
//           {
//               "id": 100,
//               "name": "wax",
//               "slug": "wax"
//           }
//       ],
//       "images": [
//           {
//               "id": 20119,
//               "date_created": "2019-05-15T18:59:02",
//               "date_created_gmt": "2019-05-15T18:59:02",
//               "date_modified": "2019-05-15T18:59:02",
//               "date_modified_gmt": "2019-05-15T18:59:02",
//               "src": "https://shop.eisbach-riders.com/wp-content/uploads/2019/05/P5110389_white.jpg",
//               "name": "OLYMPUS DIGITAL CAMERA",
//               "alt": "",
//               "position": 0
//           },
//           {
//               "id": 20120,
//               "date_created": "2019-05-15T18:59:27",
//               "date_created_gmt": "2019-05-15T18:59:27",
//               "date_modified": "2019-05-15T18:59:27",
//               "date_modified_gmt": "2019-05-15T18:59:27",
//               "src": "https://shop.eisbach-riders.com/wp-content/uploads/2019/05/P5110392_white.jpg",
//               "name": "OLYMPUS DIGITAL CAMERA",
//               "alt": "",
//               "position": 1
//           },
//           {
//               "id": 20071,
//               "date_created": "2019-05-15T17:58:22",
//               "date_created_gmt": "2019-05-15T17:58:22",
//               "date_modified": "2019-05-15T17:58:22",
//               "date_modified_gmt": "2019-05-15T17:58:22",
//               "src": "https://shop.eisbach-riders.com/wp-content/uploads/2019/04/P5110286_white.jpg",
//               "name": "OLYMPUS DIGITAL CAMERA",
//               "alt": "",
//               "position": 2
//           },
//           {
//               "id": 20073,
//               "date_created": "2019-05-15T18:00:07",
//               "date_created_gmt": "2019-05-15T18:00:07",
//               "date_modified": "2019-05-15T18:00:07",
//               "date_modified_gmt": "2019-05-15T18:00:07",
//               "src": "https://shop.eisbach-riders.com/wp-content/uploads/2019/04/P5110284_white.jpg",
//               "name": "OLYMPUS DIGITAL CAMERA",
//               "alt": "",
//               "position": 3
//           },
//           {
//               "id": 20104,
//               "date_created": "2019-05-15T18:27:10",
//               "date_created_gmt": "2019-05-15T18:27:10",
//               "date_modified": "2019-05-15T18:27:10",
//               "date_modified_gmt": "2019-05-15T18:27:10",
//               "src": "https://shop.eisbach-riders.com/wp-content/uploads/2019/05/P5110388_white.jpg",
//               "name": "OLYMPUS DIGITAL CAMERA",
//               "alt": "",
//               "position": 4
//           },
//           {
//               "id": 20105,
//               "date_created": "2019-05-15T18:27:48",
//               "date_created_gmt": "2019-05-15T18:27:48",
//               "date_modified": "2019-05-15T18:27:48",
//               "date_modified_gmt": "2019-05-15T18:27:48",
//               "src": "https://shop.eisbach-riders.com/wp-content/uploads/2019/05/P5120438_white.jpg",
//               "name": "OLYMPUS DIGITAL CAMERA",
//               "alt": "",
//               "position": 5
//           },
//           {
//               "id": 19825,
//               "date_created": "2019-04-14T15:09:52",
//               "date_created_gmt": "2019-04-14T15:09:52",
//               "date_modified": "2019-04-19T09:04:19",
//               "date_modified_gmt": "2019-04-19T09:04:19",
//               "src": "https://shop.eisbach-riders.com/wp-content/uploads/2019/04/Bee-Swell_squared.png",
//               "name": "Bee Swell wax",
//               "alt": "bee swell wax",
//               "position": 6
//           }
//       ],
//       "attributes": [
//           {
//               "id": 2,
//               "name": "Color",
//               "position": 0,
//               "visible": true,
//               "variation": true,
//               "options": [
//                   "Orange",
//                   "Black",
//                   "Blue"
//               ]
//           },
//           {
//               "id": 3,
//               "name": "Fin Plug",
//               "position": 1,
//               "visible": true,
//               "variation": true,
//               "options": [
//                   "FCS",
//                   "Future"
//               ]
//           },
//           {
//               "id": 1,
//               "name": "Size",
//               "position": 2,
//               "visible": true,
//               "variation": true,
//               "options": [
//                   "5ft",
//                   "6ft",
//                   "7ft"
//               ]
//           }
//       ],
//       "default_attributes": [
//       ],
//       "variations": [
//           20142,
//           20147,
//           20145,
//           20146,
//           20148,
//           20150,
//           20151,
//           20153,
//           20149,
//           20156,
//           20154,
//           20157
//       ],
//       "grouped_products": [
//       ],
//       "menu_order": 2,
//       "meta_data": [
//           {
//               "id": 29833,
//               "key": "_wpas_done_all",
//               "value": "1"
//           },
//           {
//               "id": 29834,
//               "key": "slide_template",
//               "value": "default"
//           },
//           {
//               "id": 29835,
//               "key": "_yoast_wpseo_primary_product_cat",
//               "value": "144"
//           },
//           {
//               "id": 29836,
//               "key": "sharing_disabled",
//               "value": "1"
//           },
//           {
//               "id": 29837,
//               "key": "pyre_main_top_padding",
//               "value": ""
//           },
//           {
//               "id": 29838,
//               "key": "pyre_main_bottom_padding",
//               "value": ""
//           },
//           {
//               "id": 29839,
//               "key": "pyre_portfolio_width_100",
//               "value": "default"
//           },
//           {
//               "id": 29840,
//               "key": "pyre_hundredp_padding",
//               "value": ""
//           },
//           {
//               "id": 29841,
//               "key": "pyre_display_header",
//               "value": "yes"
//           },
//           {
//               "id": 29842,
//               "key": "pyre_header_100_width",
//               "value": "default"
//           },
//           {
//               "id": 29843,
//               "key": "pyre_combined_header_bg_color",
//               "value": ""
//           },
//           {
//               "id": 29844,
//               "key": "pyre_mobile_header_bg_color",
//               "value": ""
//           },
//           {
//               "id": 29845,
//               "key": "pyre_header_bg",
//               "value": ""
//           },
//           {
//               "id": 29846,
//               "key": "pyre_header_bg_id",
//               "value": ""
//           },
//           {
//               "id": 29847,
//               "key": "pyre_header_bg_full",
//               "value": "no"
//           },
//           {
//               "id": 29848,
//               "key": "pyre_header_bg_repeat",
//               "value": "repeat"
//           },
//           {
//               "id": 29849,
//               "key": "pyre_displayed_menu",
//               "value": "default"
//           },
//           {
//               "id": 29850,
//               "key": "pyre_display_footer",
//               "value": "default"
//           },
//           {
//               "id": 29851,
//               "key": "pyre_display_copyright",
//               "value": "default"
//           },
//           {
//               "id": 29852,
//               "key": "pyre_footer_100_width",
//               "value": "default"
//           },
//           {
//               "id": 29853,
//               "key": "pyre_sidebar_position",
//               "value": "default"
//           },
//           {
//               "id": 29854,
//               "key": "pyre_responsive_sidebar_order",
//               "value": ""
//           },
//           {
//               "id": 29855,
//               "key": "pyre_sidebar_sticky",
//               "value": "default"
//           },
//           {
//               "id": 29856,
//               "key": "pyre_sidebar_bg_color",
//               "value": ""
//           },
//           {
//               "id": 29857,
//               "key": "pyre_slider_type",
//               "value": "no"
//           },
//           {
//               "id": 29858,
//               "key": "pyre_slider",
//               "value": "0"
//           },
//           {
//               "id": 29859,
//               "key": "pyre_wooslider",
//               "value": ""
//           },
//           {
//               "id": 29860,
//               "key": "pyre_revslider",
//               "value": "0"
//           },
//           {
//               "id": 29861,
//               "key": "pyre_elasticslider",
//               "value": "0"
//           },
//           {
//               "id": 29862,
//               "key": "pyre_slider_position",
//               "value": "default"
//           },
//           {
//               "id": 29863,
//               "key": "pyre_avada_rev_styles",
//               "value": "default"
//           },
//           {
//               "id": 29864,
//               "key": "pyre_fallback",
//               "value": ""
//           },
//           {
//               "id": 29865,
//               "key": "pyre_fallback_id",
//               "value": ""
//           },
//           {
//               "id": 29866,
//               "key": "pyre_demo_slider",
//               "value": ""
//           },
//           {
//               "id": 29867,
//               "key": "pyre_page_bg_layout",
//               "value": "default"
//           },
//           {
//               "id": 29868,
//               "key": "pyre_page_bg_color",
//               "value": ""
//           },
//           {
//               "id": 29869,
//               "key": "pyre_page_bg",
//               "value": ""
//           },
//           {
//               "id": 29870,
//               "key": "pyre_page_bg_id",
//               "value": ""
//           },
//           {
//               "id": 29871,
//               "key": "pyre_page_bg_full",
//               "value": "default"
//           },
//           {
//               "id": 29872,
//               "key": "pyre_page_bg_repeat",
//               "value": "default"
//           },
//           {
//               "id": 29873,
//               "key": "pyre_wide_page_bg_color",
//               "value": ""
//           },
//           {
//               "id": 29874,
//               "key": "pyre_wide_page_bg",
//               "value": ""
//           },
//           {
//               "id": 29875,
//               "key": "pyre_wide_page_bg_id",
//               "value": ""
//           },
//           {
//               "id": 29876,
//               "key": "pyre_wide_page_bg_full",
//               "value": "default"
//           },
//           {
//               "id": 29877,
//               "key": "pyre_wide_page_bg_repeat",
//               "value": "default"
//           },
//           {
//               "id": 29878,
//               "key": "pyre_page_title",
//               "value": "default"
//           },
//           {
//               "id": 29879,
//               "key": "pyre_page_title_breadcrumbs_search_bar",
//               "value": "default"
//           },
//           {
//               "id": 29880,
//               "key": "pyre_page_title_text",
//               "value": "default"
//           },
//           {
//               "id": 29881,
//               "key": "pyre_page_title_text_alignment",
//               "value": "default"
//           },
//           {
//               "id": 29882,
//               "key": "pyre_page_title_custom_text",
//               "value": ""
//           },
//           {
//               "id": 29883,
//               "key": "pyre_page_title_text_size",
//               "value": ""
//           },
//           {
//               "id": 29884,
//               "key": "pyre_page_title_line_height",
//               "value": ""
//           },
//           {
//               "id": 29885,
//               "key": "pyre_page_title_font_color",
//               "value": ""
//           },
//           {
//               "id": 29886,
//               "key": "pyre_page_title_custom_subheader",
//               "value": ""
//           },
//           {
//               "id": 29887,
//               "key": "pyre_page_title_custom_subheader_text_size",
//               "value": ""
//           },
//           {
//               "id": 29888,
//               "key": "pyre_page_title_subheader_font_color",
//               "value": ""
//           },
//           {
//               "id": 29889,
//               "key": "pyre_page_title_100_width",
//               "value": "default"
//           },
//           {
//               "id": 29890,
//               "key": "pyre_page_title_height",
//               "value": ""
//           },
//           {
//               "id": 29891,
//               "key": "pyre_page_title_mobile_height",
//               "value": ""
//           },
//           {
//               "id": 29892,
//               "key": "pyre_page_title_bar_bg_color",
//               "value": ""
//           },
//           {
//               "id": 29893,
//               "key": "pyre_page_title_bar_borders_color",
//               "value": ""
//           },
//           {
//               "id": 29894,
//               "key": "pyre_page_title_bar_bg",
//               "value": ""
//           },
//           {
//               "id": 29895,
//               "key": "pyre_page_title_bar_bg_id",
//               "value": ""
//           },
//           {
//               "id": 29896,
//               "key": "pyre_page_title_bar_bg_retina",
//               "value": ""
//           },
//           {
//               "id": 29897,
//               "key": "pyre_page_title_bar_bg_retina_id",
//               "value": ""
//           },
//           {
//               "id": 29898,
//               "key": "pyre_page_title_bar_bg_full",
//               "value": "default"
//           },
//           {
//               "id": 29899,
//               "key": "pyre_page_title_bg_parallax",
//               "value": "default"
//           },
//           {
//               "id": 29900,
//               "key": "_yoast_wpseo_focuskw",
//               "value": "surfboard fins"
//           },
//           {
//               "id": 29901,
//               "key": "_yoast_wpseo_linkdex",
//               "value": "17"
//           },
//           {
//               "id": 29902,
//               "key": "_yoast_wpseo_content_score",
//               "value": "90"
//           },
//           {
//               "id": 29903,
//               "key": "sbg_selected_sidebar",
//               "value": [
//                   "0"
//               ]
//           },
//           {
//               "id": 29904,
//               "key": "sbg_selected_sidebar_replacement",
//               "value": [
//                   "default_sidebar"
//               ]
//           },
//           {
//               "id": 29905,
//               "key": "sbg_selected_sidebar_2",
//               "value": [
//                   "0"
//               ]
//           },
//           {
//               "id": 29906,
//               "key": "sbg_selected_sidebar_2_replacement",
//               "value": [
//                   "default_sidebar"
//               ]
//           }
//       ],
//       "jetpack_publicize_connections": [
//       ],
//       "jetpack_sharing_enabled": false,
//       "_links": {
//           "self": [
//               {
//                   "href": "https://shop.eisbach-riders.com/wp-json/wc/v2/products/20116"
//               }
//           ],
//           "collection": [
//               {
//                   "href": "https://shop.eisbach-riders.com/wp-json/wc/v2/products"
//               }
//           ]
//       }
//   },
//   {
//       "id": 20107,
//       "name": "Trailer Center Fin",
//       "slug": "trailer-center-fin-medium",
//       "permalink": "https://shop.eisbach-riders.com/product/trailer-center-fin-medium/",
//       "date_created": "2019-05-15T18:32:30",
//       "date_created_gmt": "2019-05-15T18:32:30",
//       "date_modified": "2019-09-04T18:09:55",
//       "date_modified_gmt": "2019-09-04T18:09:55",
//       "type": "simple",
//       "status": "publish",
//       "featured": false,
//       "catalog_visibility": "visible",
//       "description": "<div class=\"celwidget aplus-module launchpad-company-logo\" data-cel-widget=\"aplus-launchpad-company-logo\">\n<h3 class=\"a-section a-text-center launchpad-module launchpad-module-company-logo\"><strong style=\"font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;\"><span class=\"a-text-bold\">EISBACH RIDERS Trailer </span></strong><strong style=\"font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;\"><span class=\"a-text-bold\">Knubster Center Keel Fin (medium) - </span></strong><strong style=\"font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;\"><span class=\"a-text-bold\">River Surfing</span></strong></h3>\n</div>\n<div class=\"celwidget aplus-module launchpad-brand-description-left\" data-cel-widget=\"aplus-launchpad-brand-description-left\">\n<div class=\"a-section a-spacing-top-mini launchpad-module launchpad-module-brand-description-left\">\n<div class=\"a-section launchpad-text-left-justify\">\n<p><span class=\"a-text-bold\" style=\"font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;\">The Eisbach Riders k</span><span class=\"a-text-bold\" style=\"font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;\">nubster center keel fin </span><span style=\"font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;\">can be used as center fin enhancement in a quad-set-up or as the third fin in a thruster configuration, especially for river surfing or the citywave. The fin design is suited for any waves as well as for river surfing.</span></p>\n</div>\n<h3 class=\"a-spacing-mini\">ROBUST AND COMPATIBLE</h3>\n<ul class=\"a-unordered-list a-vertical\">\n<li><span class=\"a-list-item\">Fits any surfboard with <span class=\"a-text-bold\">FCS plug system</span> - whether it is a bodyboard, shortboard, funboard, windsurfing or kiteboard and is therefore ideal for wave riding, riversurfing or paddle boarding</span></li>\n<li><span class=\"a-list-item\">High-quality materials make the fin durable</span></li>\n</ul>\n<p>&nbsp;</p>\n<h3 class=\"a-spacing-mini\">FEATURES</h3>\n<ul class=\"a-unordered-list a-vertical\">\n<li>Knubster Center Keel Fin</li>\n<li>Configuration: Thruster</li>\n<li>Material: Fiberglass</li>\n<li>System: Future</li>\n<li>Size: medium - 2.6''\n<ul class=\"a-unordered-list a-vertical\">\n<li>Height: 6.60 cm (2.6'')</li>\n<li>Length: 10.60 cm (4.2'')</li>\n</ul>\n</li>\n</ul>\n<p>&nbsp;</p>\n<h3 class=\"a-spacing-mini\">BOX CONTENT</h3>\n<p>1x Knubster Center Keel Fin</p>\n</div>\n</div>\n",
//       "short_description": "<ul class=\"a-unordered-list a-vertical a-spacing-none\">\n<li><span class=\"a-list-item\">RIVER SURFING &#8211; Center fin in a thruster setup specially designed for <span style=\"font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;\">river surfing or the citywave</span></span></li>\n<li><span class=\"a-list-item\">COMPATIBLE &#8211; Fits with any surfboard with FCS 1 double tab plug system &#8211; whether it is a bodyboard, shortboard, funboard, windsurfing or kiteboard and is therefore ideal for wave riding, river surfing or paddle boarding.</span></li>\n<li><span class=\"a-list-item\">MATERIAL &#8211; High-quality materials make the fins durable</span></li>\n</ul>\n",
//       "sku": "CC-9I9Y-0Z5I",
//       "price": "20.9000",
//       "regular_price": "20.9000",
//       "sale_price": "",
//       "date_on_sale_from": null,
//       "date_on_sale_from_gmt": null,
//       "date_on_sale_to": null,
//       "date_on_sale_to_gmt": null,
//       "price_html": "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&euro;</span>20,90</span> <small class=\"woocommerce-price-suffix\">incl. VAT</small>",
//       "on_sale": false,
//       "purchasable": true,
//       "total_sales": 2,
//       "virtual": false,
//       "downloadable": false,
//       "downloads": [
//       ],
//       "download_limit": -1,
//       "download_expiry": -1,
//       "external_url": "",
//       "button_text": "",
//       "tax_status": "taxable",
//       "tax_class": "",
//       "manage_stock": true,
//       "stock_quantity": 5,
//       "in_stock": true,
//       "backorders": "no",
//       "backorders_allowed": false,
//       "backordered": false,
//       "sold_individually": false,
//       "weight": "",
//       "dimensions": {
//           "length": "",
//           "width": "",
//           "height": ""
//       },
//       "shipping_required": true,
//       "shipping_taxable": true,
//       "shipping_class": "",
//       "shipping_class_id": 0,
//       "reviews_allowed": false,
//       "average_rating": "0.00",
//       "rating_count": 0,
//       "related_ids": [
//           19962,
//           19755,
//           19924,
//           19754,
//           19870
//       ],
//       "upsell_ids": [
//       ],
//       "cross_sell_ids": [
//       ],
//       "parent_id": 0,
//       "purchase_note": "",
//       "categories": [
//           {
//               "id": 70,
//               "name": "Fins",
//               "slug": "fins"
//           }
//       ],
//       "tags": [
//           {
//               "id": 85,
//               "name": "double tab",
//               "slug": "double-tab"
//           },
//           {
//               "id": 84,
//               "name": "fcs",
//               "slug": "fcs"
//           },
//           {
//               "id": 83,
//               "name": "fins",
//               "slug": "fins"
//           },
//           {
//               "id": 87,
//               "name": "thruster",
//               "slug": "thruster"
//           },
//           {
//               "id": 140,
//               "name": "trailer fin",
//               "slug": "trailer-fin"
//           }
//       ],
//       "images": [
//           {
//               "id": 20108,
//               "date_created": "2019-05-15T18:35:17",
//               "date_created_gmt": "2019-05-15T18:35:17",
//               "date_modified": "2019-05-15T18:35:17",
//               "date_modified_gmt": "2019-05-15T18:35:17",
//               "src": "https://shop.eisbach-riders.com/wp-content/uploads/2019/05/P5110355_white.jpg",
//               "name": "OLYMPUS DIGITAL CAMERA",
//               "alt": "",
//               "position": 0
//           },
//           {
//               "id": 20109,
//               "date_created": "2019-05-15T18:35:37",
//               "date_created_gmt": "2019-05-15T18:35:37",
//               "date_modified": "2019-05-15T18:35:37",
//               "date_modified_gmt": "2019-05-15T18:35:37",
//               "src": "https://shop.eisbach-riders.com/wp-content/uploads/2019/05/P5110353_white.jpg",
//               "name": "OLYMPUS DIGITAL CAMERA",
//               "alt": "",
//               "position": 1
//           }
//       ],
//       "attributes": [
//           {
//               "id": 2,
//               "name": "Color",
//               "position": 0,
//               "visible": true,
//               "variation": true,
//               "options": [
//                   "dark blue",
//                   "Black",
//                   "Blue"
//               ]
//           }
//       ],
//       "default_attributes": [
//       ],
//       "variations": [
//       ],
//       "grouped_products": [
//       ],
//       "menu_order": 8,
//       "meta_data": [
//           {
//               "id": 29462,
//               "key": "_wpas_done_all",
//               "value": "1"
//           },
//           {
//               "id": 29463,
//               "key": "slide_template",
//               "value": "default"
//           },
//           {
//               "id": 29464,
//               "key": "_yoast_wpseo_primary_product_cat",
//               "value": "70"
//           },
//           {
//               "id": 29465,
//               "key": "sharing_disabled",
//               "value": "1"
//           },
//           {
//               "id": 29466,
//               "key": "pyre_main_top_padding",
//               "value": ""
//           },
//           {
//               "id": 29467,
//               "key": "pyre_main_bottom_padding",
//               "value": ""
//           },
//           {
//               "id": 29468,
//               "key": "pyre_portfolio_width_100",
//               "value": "default"
//           },
//           {
//               "id": 29469,
//               "key": "pyre_hundredp_padding",
//               "value": ""
//           },
//           {
//               "id": 29470,
//               "key": "pyre_display_header",
//               "value": "yes"
//           },
//           {
//               "id": 29471,
//               "key": "pyre_header_100_width",
//               "value": "default"
//           },
//           {
//               "id": 29472,
//               "key": "pyre_combined_header_bg_color",
//               "value": ""
//           },
//           {
//               "id": 29473,
//               "key": "pyre_mobile_header_bg_color",
//               "value": ""
//           },
//           {
//               "id": 29474,
//               "key": "pyre_header_bg",
//               "value": ""
//           },
//           {
//               "id": 29475,
//               "key": "pyre_header_bg_id",
//               "value": ""
//           },
//           {
//               "id": 29476,
//               "key": "pyre_header_bg_full",
//               "value": "no"
//           },
//           {
//               "id": 29477,
//               "key": "pyre_header_bg_repeat",
//               "value": "repeat"
//           },
//           {
//               "id": 29478,
//               "key": "pyre_displayed_menu",
//               "value": "default"
//           },
//           {
//               "id": 29479,
//               "key": "pyre_display_footer",
//               "value": "default"
//           },
//           {
//               "id": 29480,
//               "key": "pyre_display_copyright",
//               "value": "default"
//           },
//           {
//               "id": 29481,
//               "key": "pyre_footer_100_width",
//               "value": "default"
//           },
//           {
//               "id": 29482,
//               "key": "pyre_sidebar_position",
//               "value": "default"
//           },
//           {
//               "id": 29483,
//               "key": "pyre_responsive_sidebar_order",
//               "value": ""
//           },
//           {
//               "id": 29484,
//               "key": "pyre_sidebar_sticky",
//               "value": "default"
//           },
//           {
//               "id": 29485,
//               "key": "pyre_sidebar_bg_color",
//               "value": ""
//           },
//           {
//               "id": 29486,
//               "key": "pyre_slider_type",
//               "value": "no"
//           },
//           {
//               "id": 29487,
//               "key": "pyre_slider",
//               "value": "0"
//           },
//           {
//               "id": 29488,
//               "key": "pyre_wooslider",
//               "value": ""
//           },
//           {
//               "id": 29489,
//               "key": "pyre_revslider",
//               "value": "0"
//           },
//           {
//               "id": 29490,
//               "key": "pyre_elasticslider",
//               "value": "0"
//           },
//           {
//               "id": 29491,
//               "key": "pyre_slider_position",
//               "value": "default"
//           },
//           {
//               "id": 29492,
//               "key": "pyre_avada_rev_styles",
//               "value": "default"
//           },
//           {
//               "id": 29493,
//               "key": "pyre_fallback",
//               "value": ""
//           },
//           {
//               "id": 29494,
//               "key": "pyre_fallback_id",
//               "value": ""
//           },
//           {
//               "id": 29495,
//               "key": "pyre_demo_slider",
//               "value": ""
//           },
//           {
//               "id": 29496,
//               "key": "pyre_page_bg_layout",
//               "value": "default"
//           },
//           {
//               "id": 29497,
//               "key": "pyre_page_bg_color",
//               "value": ""
//           },
//           {
//               "id": 29498,
//               "key": "pyre_page_bg",
//               "value": ""
//           },
//           {
//               "id": 29499,
//               "key": "pyre_page_bg_id",
//               "value": ""
//           },
//           {
//               "id": 29500,
//               "key": "pyre_page_bg_full",
//               "value": "default"
//           },
//           {
//               "id": 29501,
//               "key": "pyre_page_bg_repeat",
//               "value": "default"
//           },
//           {
//               "id": 29502,
//               "key": "pyre_wide_page_bg_color",
//               "value": ""
//           },
//           {
//               "id": 29503,
//               "key": "pyre_wide_page_bg",
//               "value": ""
//           },
//           {
//               "id": 29504,
//               "key": "pyre_wide_page_bg_id",
//               "value": ""
//           },
//           {
//               "id": 29505,
//               "key": "pyre_wide_page_bg_full",
//               "value": "default"
//           },
//           {
//               "id": 29506,
//               "key": "pyre_wide_page_bg_repeat",
//               "value": "default"
//           },
//           {
//               "id": 29507,
//               "key": "pyre_page_title",
//               "value": "default"
//           },
//           {
//               "id": 29508,
//               "key": "pyre_page_title_breadcrumbs_search_bar",
//               "value": "default"
//           },
//           {
//               "id": 29509,
//               "key": "pyre_page_title_text",
//               "value": "default"
//           },
//           {
//               "id": 29510,
//               "key": "pyre_page_title_text_alignment",
//               "value": "default"
//           },
//           {
//               "id": 29511,
//               "key": "pyre_page_title_custom_text",
//               "value": ""
//           },
//           {
//               "id": 29512,
//               "key": "pyre_page_title_text_size",
//               "value": ""
//           },
//           {
//               "id": 29513,
//               "key": "pyre_page_title_line_height",
//               "value": ""
//           },
//           {
//               "id": 29514,
//               "key": "pyre_page_title_font_color",
//               "value": ""
//           },
//           {
//               "id": 29515,
//               "key": "pyre_page_title_custom_subheader",
//               "value": ""
//           },
//           {
//               "id": 29516,
//               "key": "pyre_page_title_custom_subheader_text_size",
//               "value": ""
//           },
//           {
//               "id": 29517,
//               "key": "pyre_page_title_subheader_font_color",
//               "value": ""
//           },
//           {
//               "id": 29518,
//               "key": "pyre_page_title_100_width",
//               "value": "default"
//           },
//           {
//               "id": 29519,
//               "key": "pyre_page_title_height",
//               "value": ""
//           },
//           {
//               "id": 29520,
//               "key": "pyre_page_title_mobile_height",
//               "value": ""
//           },
//           {
//               "id": 29521,
//               "key": "pyre_page_title_bar_bg_color",
//               "value": ""
//           },
//           {
//               "id": 29522,
//               "key": "pyre_page_title_bar_borders_color",
//               "value": ""
//           },
//           {
//               "id": 29523,
//               "key": "pyre_page_title_bar_bg",
//               "value": ""
//           },
//           {
//               "id": 29524,
//               "key": "pyre_page_title_bar_bg_id",
//               "value": ""
//           },
//           {
//               "id": 29525,
//               "key": "pyre_page_title_bar_bg_retina",
//               "value": ""
//           },
//           {
//               "id": 29526,
//               "key": "pyre_page_title_bar_bg_retina_id",
//               "value": ""
//           },
//           {
//               "id": 29527,
//               "key": "pyre_page_title_bar_bg_full",
//               "value": "default"
//           },
//           {
//               "id": 29528,
//               "key": "pyre_page_title_bg_parallax",
//               "value": "default"
//           },
//           {
//               "id": 29529,
//               "key": "_yoast_wpseo_focuskw",
//               "value": "surfboard fins"
//           },
//           {
//               "id": 29530,
//               "key": "_yoast_wpseo_linkdex",
//               "value": "26"
//           },
//           {
//               "id": 29531,
//               "key": "_yoast_wpseo_content_score",
//               "value": "30"
//           },
//           {
//               "id": 29532,
//               "key": "sbg_selected_sidebar",
//               "value": [
//                   "0"
//               ]
//           },
//           {
//               "id": 29533,
//               "key": "sbg_selected_sidebar_replacement",
//               "value": [
//                   "default_sidebar"
//               ]
//           },
//           {
//               "id": 29534,
//               "key": "sbg_selected_sidebar_2",
//               "value": [
//                   "0"
//               ]
//           },
//           {
//               "id": 29535,
//               "key": "sbg_selected_sidebar_2_replacement",
//               "value": [
//                   "default_sidebar"
//               ]
//           }
//       ],
//       "jetpack_publicize_connections": [
//       ],
//       "jetpack_sharing_enabled": false,
//       "_links": {
//           "self": [
//               {
//                   "href": "https://shop.eisbach-riders.com/wp-json/wc/v2/products/20107"
//               }
//           ],
//           "collection": [
//               {
//                   "href": "https://shop.eisbach-riders.com/wp-json/wc/v2/products"
//               }
//           ]
//       }
//   },
//   {
//       "id": 20100,
//       "name": "Trailer Center Fin",
//       "slug": "trailer-center-fin-future",
//       "permalink": "https://shop.eisbach-riders.com/product/trailer-center-fin-future/",
//       "date_created": "2019-05-15T18:27:09",
//       "date_created_gmt": "2019-05-15T18:27:09",
//       "date_modified": "2019-09-23T03:24:03",
//       "date_modified_gmt": "2019-09-23T03:24:03",
//       "type": "simple",
//       "status": "publish",
//       "featured": false,
//       "catalog_visibility": "visible",
//       "description": "<div class=\"celwidget aplus-module launchpad-company-logo\" data-cel-widget=\"aplus-launchpad-company-logo\">\n<h3 class=\"a-section a-text-center launchpad-module launchpad-module-company-logo\"><strong style=\"font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;\"><span class=\"a-text-bold\">EISBACH RIDERS Trailer </span></strong><strong style=\"font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;\"><span class=\"a-text-bold\">Knubster Center Keel Fin (small) - </span></strong><strong style=\"font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;\"><span class=\"a-text-bold\">River Surfing</span></strong></h3>\n</div>\n<div class=\"celwidget aplus-module launchpad-brand-description-left\" data-cel-widget=\"aplus-launchpad-brand-description-left\">\n<div class=\"a-section a-spacing-top-mini launchpad-module launchpad-module-brand-description-left\">\n<div class=\"a-section launchpad-text-left-justify\">\n<p><span class=\"a-text-bold\" style=\"font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;\">The Eisbach Riders k</span><span class=\"a-text-bold\" style=\"font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;\">nubster center keel fin </span><span style=\"font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;\">can be used as center fin enhancement in a quad-set-up or as the third fin in a thruster configuration, especially for river surfing or the citywave. The fin design is suited for any waves as well as for river surfing.</span></p>\n</div>\n<h3 class=\"a-spacing-mini\">ROBUST AND COMPATIBLE</h3>\n<ul class=\"a-unordered-list a-vertical\">\n<li><span class=\"a-list-item\">Fits any surfboard with <span class=\"a-text-bold\">Futureplug system</span> - whether it is a bodyboard, shortboard, funboard, windsurfing or kiteboard and is therefore ideal for wave riding, riversurfing or paddle boarding</span></li>\n<li><span class=\"a-list-item\">High-quality materials make the fin durable</span></li>\n</ul>\n<p>&nbsp;</p>\n<h3 class=\"a-spacing-mini\">FEATURES</h3>\n<ul class=\"a-unordered-list a-vertical\">\n<li>Knubster Center Keel Fin</li>\n<li>Configuration: Thruster</li>\n<li>Material: Fiberglass</li>\n<li>System: Future</li>\n<li>Size: small - 1.8''\n<ul class=\"a-unordered-list a-vertical\">\n<li>Height: 4.57 cm (1.8'')</li>\n<li>Length: 10.16 cm (4.0'')</li>\n</ul>\n</li>\n</ul>\n<p>&nbsp;</p>\n<h3 class=\"a-spacing-mini\">BOX CONTENT</h3>\n<p>1x Knubster Center Keel Fin</p>\n</div>\n</div>\n",
//       "short_description": "<ul class=\"a-unordered-list a-vertical a-spacing-none\">\n<li><span class=\"a-list-item\">RIVER SURFING &#8211; Center fin in a thruster setup specially designed for <span style=\"font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;\">river surfing or the citywave</span></span></li>\n<li><span class=\"a-list-item\">COMPATIBLE &#8211; Fits with any surfboard with FCS 1 double tab plug system &#8211; whether it is a bodyboard, shortboard, funboard, windsurfing or kiteboard and is therefore ideal for wave riding, river surfing or paddle boarding.</span></li>\n<li><span class=\"a-list-item\">MATERIAL &#8211; High-quality materials make the fins durable</span></li>\n</ul>\n",
//       "sku": "CB-GOV8-ICV9",
//       "price": "20.9000",
//       "regular_price": "20.9000",
//       "sale_price": "",
//       "date_on_sale_from": null,
//       "date_on_sale_from_gmt": null,
//       "date_on_sale_to": null,
//       "date_on_sale_to_gmt": null,
//       "price_html": "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&euro;</span>20,90</span> <small class=\"woocommerce-price-suffix\">incl. VAT</small>",
//       "on_sale": false,
//       "purchasable": true,
//       "total_sales": 2,
//       "virtual": false,
//       "downloadable": false,
//       "downloads": [
//       ],
//       "download_limit": -1,
//       "download_expiry": -1,
//       "external_url": "",
//       "button_text": "",
//       "tax_status": "taxable",
//       "tax_class": "",
//       "manage_stock": true,
//       "stock_quantity": 2,
//       "in_stock": true,
//       "backorders": "no",
//       "backorders_allowed": false,
//       "backordered": false,
//       "sold_individually": false,
//       "weight": "",
//       "dimensions": {
//           "length": "",
//           "width": "",
//           "height": ""
//       },
//       "shipping_required": true,
//       "shipping_taxable": true,
//       "shipping_class": "",
//       "shipping_class_id": 0,
//       "reviews_allowed": false,
//       "average_rating": "0.00",
//       "rating_count": 0,
//       "related_ids": [
//           19798,
//           19924,
//           19917,
//           19912,
//           19751
//       ],
//       "upsell_ids": [
//       ],
//       "cross_sell_ids": [
//       ],
//       "parent_id": 0,
//       "purchase_note": "",
//       "categories": [
//           {
//               "id": 70,
//               "name": "Fins",
//               "slug": "fins"
//           }
//       ],
//       "tags": [
//           {
//               "id": 83,
//               "name": "fins",
//               "slug": "fins"
//           },
//           {
//               "id": 91,
//               "name": "future",
//               "slug": "future"
//           },
//           {
//               "id": 87,
//               "name": "thruster",
//               "slug": "thruster"
//           },
//           {
//               "id": 140,
//               "name": "trailer fin",
//               "slug": "trailer-fin"
//           }
//       ],
//       "images": [
//           {
//               "id": 20106,
//               "date_created": "2019-05-15T18:29:07",
//               "date_created_gmt": "2019-05-15T18:29:07",
//               "date_modified": "2019-05-15T18:29:07",
//               "date_modified_gmt": "2019-05-15T18:29:07",
//               "src": "https://shop.eisbach-riders.com/wp-content/uploads/2019/05/P5110352_white.jpg",
//               "name": "OLYMPUS DIGITAL CAMERA",
//               "alt": "",
//               "position": 0
//           }
//       ],
//       "attributes": [
//           {
//               "id": 2,
//               "name": "Color",
//               "position": 0,
//               "visible": true,
//               "variation": true,
//               "options": [
//                   "dark blue",
//                   "Black",
//                   "Blue"
//               ]
//           }
//       ],
//       "default_attributes": [
//       ],
//       "variations": [
//       ],
//       "grouped_products": [
//       ],
//       "menu_order": 8,
//       "meta_data": [
//           {
//               "id": 29111,
//               "key": "_wpas_done_all",
//               "value": "1"
//           },
//           {
//               "id": 29112,
//               "key": "slide_template",
//               "value": "default"
//           },
//           {
//               "id": 29113,
//               "key": "_yoast_wpseo_primary_product_cat",
//               "value": "70"
//           },
//           {
//               "id": 29114,
//               "key": "sharing_disabled",
//               "value": "1"
//           },
//           {
//               "id": 29115,
//               "key": "pyre_main_top_padding",
//               "value": ""
//           },
//           {
//               "id": 29116,
//               "key": "pyre_main_bottom_padding",
//               "value": ""
//           },
//           {
//               "id": 29117,
//               "key": "pyre_portfolio_width_100",
//               "value": "default"
//           },
//           {
//               "id": 29118,
//               "key": "pyre_hundredp_padding",
//               "value": ""
//           },
//           {
//               "id": 29119,
//               "key": "pyre_display_header",
//               "value": "yes"
//           },
//           {
//               "id": 29120,
//               "key": "pyre_header_100_width",
//               "value": "default"
//           },
//           {
//               "id": 29121,
//               "key": "pyre_combined_header_bg_color",
//               "value": ""
//           },
//           {
//               "id": 29122,
//               "key": "pyre_mobile_header_bg_color",
//               "value": ""
//           },
//           {
//               "id": 29123,
//               "key": "pyre_header_bg",
//               "value": ""
//           },
//           {
//               "id": 29124,
//               "key": "pyre_header_bg_id",
//               "value": ""
//           },
//           {
//               "id": 29125,
//               "key": "pyre_header_bg_full",
//               "value": "no"
//           },
//           {
//               "id": 29126,
//               "key": "pyre_header_bg_repeat",
//               "value": "repeat"
//           },
//           {
//               "id": 29127,
//               "key": "pyre_displayed_menu",
//               "value": "default"
//           },
//           {
//               "id": 29128,
//               "key": "pyre_display_footer",
//               "value": "default"
//           },
//           {
//               "id": 29129,
//               "key": "pyre_display_copyright",
//               "value": "default"
//           },
//           {
//               "id": 29130,
//               "key": "pyre_footer_100_width",
//               "value": "default"
//           },
//           {
//               "id": 29131,
//               "key": "pyre_sidebar_position",
//               "value": "default"
//           },
//           {
//               "id": 29132,
//               "key": "pyre_responsive_sidebar_order",
//               "value": ""
//           },
//           {
//               "id": 29133,
//               "key": "pyre_sidebar_sticky",
//               "value": "default"
//           },
//           {
//               "id": 29134,
//               "key": "pyre_sidebar_bg_color",
//               "value": ""
//           },
//           {
//               "id": 29135,
//               "key": "pyre_slider_type",
//               "value": "no"
//           },
//           {
//               "id": 29136,
//               "key": "pyre_slider",
//               "value": "0"
//           },
//           {
//               "id": 29137,
//               "key": "pyre_wooslider",
//               "value": ""
//           },
//           {
//               "id": 29138,
//               "key": "pyre_revslider",
//               "value": "0"
//           },
//           {
//               "id": 29139,
//               "key": "pyre_elasticslider",
//               "value": "0"
//           },
//           {
//               "id": 29140,
//               "key": "pyre_slider_position",
//               "value": "default"
//           },
//           {
//               "id": 29141,
//               "key": "pyre_avada_rev_styles",
//               "value": "default"
//           },
//           {
//               "id": 29142,
//               "key": "pyre_fallback",
//               "value": ""
//           },
//           {
//               "id": 29143,
//               "key": "pyre_fallback_id",
//               "value": ""
//           },
//           {
//               "id": 29144,
//               "key": "pyre_demo_slider",
//               "value": ""
//           },
//           {
//               "id": 29145,
//               "key": "pyre_page_bg_layout",
//               "value": "default"
//           },
//           {
//               "id": 29146,
//               "key": "pyre_page_bg_color",
//               "value": ""
//           },
//           {
//               "id": 29147,
//               "key": "pyre_page_bg",
//               "value": ""
//           },
//           {
//               "id": 29148,
//               "key": "pyre_page_bg_id",
//               "value": ""
//           },
//           {
//               "id": 29149,
//               "key": "pyre_page_bg_full",
//               "value": "default"
//           },
//           {
//               "id": 29150,
//               "key": "pyre_page_bg_repeat",
//               "value": "default"
//           },
//           {
//               "id": 29151,
//               "key": "pyre_wide_page_bg_color",
//               "value": ""
//           },
//           {
//               "id": 29152,
//               "key": "pyre_wide_page_bg",
//               "value": ""
//           },
//           {
//               "id": 29153,
//               "key": "pyre_wide_page_bg_id",
//               "value": ""
//           },
//           {
//               "id": 29154,
//               "key": "pyre_wide_page_bg_full",
//               "value": "default"
//           },
//           {
//               "id": 29155,
//               "key": "pyre_wide_page_bg_repeat",
//               "value": "default"
//           },
//           {
//               "id": 29156,
//               "key": "pyre_page_title",
//               "value": "default"
//           },
//           {
//               "id": 29157,
//               "key": "pyre_page_title_breadcrumbs_search_bar",
//               "value": "default"
//           },
//           {
//               "id": 29158,
//               "key": "pyre_page_title_text",
//               "value": "default"
//           },
//           {
//               "id": 29159,
//               "key": "pyre_page_title_text_alignment",
//               "value": "default"
//           },
//           {
//               "id": 29160,
//               "key": "pyre_page_title_custom_text",
//               "value": ""
//           },
//           {
//               "id": 29161,
//               "key": "pyre_page_title_text_size",
//               "value": ""
//           },
//           {
//               "id": 29162,
//               "key": "pyre_page_title_line_height",
//               "value": ""
//           },
//           {
//               "id": 29163,
//               "key": "pyre_page_title_font_color",
//               "value": ""
//           },
//           {
//               "id": 29164,
//               "key": "pyre_page_title_custom_subheader",
//               "value": ""
//           },
//           {
//               "id": 29165,
//               "key": "pyre_page_title_custom_subheader_text_size",
//               "value": ""
//           },
//           {
//               "id": 29166,
//               "key": "pyre_page_title_subheader_font_color",
//               "value": ""
//           },
//           {
//               "id": 29167,
//               "key": "pyre_page_title_100_width",
//               "value": "default"
//           },
//           {
//               "id": 29168,
//               "key": "pyre_page_title_height",
//               "value": ""
//           },
//           {
//               "id": 29169,
//               "key": "pyre_page_title_mobile_height",
//               "value": ""
//           },
//           {
//               "id": 29170,
//               "key": "pyre_page_title_bar_bg_color",
//               "value": ""
//           },
//           {
//               "id": 29171,
//               "key": "pyre_page_title_bar_borders_color",
//               "value": ""
//           },
//           {
//               "id": 29172,
//               "key": "pyre_page_title_bar_bg",
//               "value": ""
//           },
//           {
//               "id": 29173,
//               "key": "pyre_page_title_bar_bg_id",
//               "value": ""
//           },
//           {
//               "id": 29174,
//               "key": "pyre_page_title_bar_bg_retina",
//               "value": ""
//           },
//           {
//               "id": 29175,
//               "key": "pyre_page_title_bar_bg_retina_id",
//               "value": ""
//           },
//           {
//               "id": 29176,
//               "key": "pyre_page_title_bar_bg_full",
//               "value": "default"
//           },
//           {
//               "id": 29177,
//               "key": "pyre_page_title_bg_parallax",
//               "value": "default"
//           },
//           {
//               "id": 29178,
//               "key": "_yoast_wpseo_focuskw",
//               "value": "surfboard fins"
//           },
//           {
//               "id": 29179,
//               "key": "_yoast_wpseo_linkdex",
//               "value": "26"
//           },
//           {
//               "id": 29180,
//               "key": "_yoast_wpseo_content_score",
//               "value": "30"
//           },
//           {
//               "id": 29181,
//               "key": "sbg_selected_sidebar",
//               "value": [
//                   "0"
//               ]
//           },
//           {
//               "id": 29182,
//               "key": "sbg_selected_sidebar_replacement",
//               "value": [
//                   "default_sidebar"
//               ]
//           },
//           {
//               "id": 29183,
//               "key": "sbg_selected_sidebar_2",
//               "value": [
//                   "0"
//               ]
//           },
//           {
//               "id": 29184,
//               "key": "sbg_selected_sidebar_2_replacement",
//               "value": [
//                   "default_sidebar"
//               ]
//           }
//       ],
//       "jetpack_publicize_connections": [
//       ],
//       "jetpack_sharing_enabled": false,
//       "_links": {
//           "self": [
//               {
//                   "href": "https://shop.eisbach-riders.com/wp-json/wc/v2/products/20100"
//               }
//           ],
//           "collection": [
//               {
//                   "href": "https://shop.eisbach-riders.com/wp-json/wc/v2/products"
//               }
//           ]
//       }
//   }
// ]
