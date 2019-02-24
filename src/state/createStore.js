import { createStore as reduxCreateStore } from 'redux'
import i18n from 'i18next'

export const reducer = (state, action) => {
  switch (action.type) {
    case 'LANGUAGE':
      i18n.changeLanguage(state.lng === 'en' ? 'de' : 'en')
      return {
        lng: state.lng === 'en' ? 'de' : 'en',
        isGAopen: state.isGAopen,
      }
    case 'GOOGLEANALYTICS':
      return {
        isGAopen: false,
        lng: state.lng,
      }
    default:
      return state
  }
}

const initialState = { lng: 'en', isGAopen: true }

const createStore = () => reduxCreateStore(reducer, initialState)

export default createStore
