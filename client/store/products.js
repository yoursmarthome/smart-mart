import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_PRODUCTS = 'GET_PRODUCTS'

/**
 * INITIAL STATE
 */
const defaultProducts = []

/**
 * ACTION CREATORS
 */
// const getProduct = product => ({type: GET_PRODUCT, product})
const getProducts = products => ({type: GET_PRODUCTS, products})

/**
 * THUNK CREATORS
 */
export const fetchProducts = () =>
  dispatch =>
    axios.get('/api/products/')
      .then(res =>
        dispatch(getProducts(res.data || defaultProduct)))
      .catch(err => console.log(err))

export const fetchCategoryThunk = (categoryId) =>
  dispatch =>
    axios.get(`/api/categories/${categoryId}`)
      .then(res =>
        dispatch(getProducts(res.data || defaultProduct)))
      .catch(err => console.log(err))

export const fetchSearchThunk = (term) =>
  dispatch =>
    axios.get(`/api/search/${term}`)
      .then(res =>
        dispatch(getProducts(res.data || defaultProduct)))
      .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function (state = defaultProducts, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.products
    default:
      return state
  }
}
