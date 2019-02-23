import { createStore as reduxCreateStore } from 'redux'
import i18n from 'i18next'

const reducer = (state, action) => {
  if (action.type === 'LANGUAGE') {
    i18n.changeLanguage(state.lng === 'en' ? 'de' : 'en')
    return Object.assign({}, state, {
      lng: state.lng === 'en' ? 'de' : 'en',
    })
  }
  if (action.type === 'GOOGLEANALYTICS') {
    return Object.assign({}, state, {
      isGAopen: false,
    })
  }
  return state
}

const initialState = { count: 0, lng: 'en', isGAopen: true }

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore
