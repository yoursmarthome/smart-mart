import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_CART = 'GET_CART'
const ADD_TO_CART = 'ADD_TO_CART'

/**
 * INITIAL STATE
 */
const defaultCart = []

/**
 * ACTION CREATORS
 */
const getCart = cart => ({type: GET_CART, cart})

/**
 * THUNK CREATORS
 */
// export const fetchCart = () =>
//   dispatch =>
//     axios.get('/api/categories')
//       .then(res =>
//         dispatch(getCategories(res.data || defaultProduct)))
//       .catch(err => console.log(err))

export const fetchCart = () => {
  const currentCart = JSON.parse(localStorage.getItem('cart'))
  if (currentCart) return ({type: ADD_TO_CART, product: currentCart})
  else return ({type: ADD_TO_CART, product: defaultCart})
}

export const addToCart = (product) => {
  const currentCart = JSON.parse(localStorage.getItem('cart'))
  let stringCart = ''
  console.log('currentCart', currentCart)
  if (currentCart) {
    currentCart.push(product) // believe this was becoming '2'
    stringCart = JSON.stringify(currentCart)
  }
  else {
    stringCart = JSON.stringify([product])
  }
  console.log('stringCart', stringCart)
  localStorage.setItem('cart', stringCart) 
  return ({type: ADD_TO_CART, product})
}

/**
 * REDUCER
 */
export default function (state = defaultCart, action) {
  let newState = Object.assign([], state)
  switch (action.type) {
    case GET_CART:
      return action.cart
    case ADD_TO_CART:
      return newState.concat(action.product)
    default:
      return state
  }
}
