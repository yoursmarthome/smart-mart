import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
// const GET_PRODUCT = 'GET_PRODUCT'
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
    axios.get('/api/products')
      .then(res =>
        dispatch(getProducts(res.data || defaultProduct)))
      .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function (state = defaultProducts, action) {
  // let newState = Object.assign([], state)
  switch (action.type) {
    case GET_PRODUCTS:
      return action.products
    // case GET_PRODUCT:
    //   return newState.concat(action.product)
    default:
      return state
  }
}
