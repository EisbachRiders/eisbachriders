import { createStore as reduxCreateStore } from 'redux'
import i18n from 'i18next'

export const reducer = (state, action) => {
  // console.log(state)
  // console.log(action)
  switch (action.type) {
    case 'LANGUAGE':
      i18n.changeLanguage(state.lng === 'en' ? 'de' : 'en')
      return {
        ...state,
        lng: state.lng === 'en' ? 'de' : 'en',
      }
    case 'GOOGLEANALYTICS':
      return {
        ...state,
        isGAopen: false,
      }
    case 'PRODUCT':
      return {
        ...state,
        product: action.product,
      }
    case 'CART':
      return {
        ...state,
        cart: action.cart,
      }
    default:
      return state
  }
}

const initialState = { lng: 'en', isGAopen: true, product: {}, cart: [] }

const createStore = () => reduxCreateStore(reducer, initialState)

export default createStore
