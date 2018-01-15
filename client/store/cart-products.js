import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_PRODUCTS_FOR_CART = 'GET_PRODUCTS_FOR_CART'

/**
 * INITIAL STATE
 */
const defaultProducts = []

/**
 * ACTION CREATORS
 */
// const getProduct = product => ({type: GET_PRODUCT, product})
const getProductsForCart = products => ({type: GET_PRODUCTS_FOR_CART, products})

/**
 * THUNK CREATORS
 */
export function fetchProductsForCart (cartItems){
  let idArray = []
  const defaultCart = []

  cartItems.forEach(item => {
    idArray.push(item.id);
  })

  const idString = idArray.join(',');

  console.log(idString);

  return function thunk (dispatch) {
    axios.get(`/api/cart/${idString}`)
    .then(res =>
      dispatch(getProductsForCart(res.data || defaultCart)))
    .catch(err => console.log(err))
  }
}

/**
 * REDUCER
 */
export default function (state = defaultProducts, action) {
  switch (action.type) {
    case GET_PRODUCTS_FOR_CART:
      return action.products
    default:
      return state
  }
}
