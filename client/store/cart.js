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
  const product = JSON.parse(localStorage.getItem('cart'))
  if (product) return ({type: ADD_TO_CART, product})
  else return ({type: ADD_TO_CART, product: defaultCart})
}

export const addToCart = (product) => {
  const currentCart = JSON.parse(localStorage.getItem('cart'))
  console.log('currentCart', currentCart)
  if (currentCart) {
    const finalCart = currentCart.push(product)
    console.log('finalCart', finalCart)
    localStorage.setItem('cart', finalCart)
  }
  else {
    const stringCart = JSON.stringify([product])
    localStorage.setItem('cart', stringCart) 
  }
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
