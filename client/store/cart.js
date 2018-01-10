import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_CART = 'GET_CART'
const ADD_TO_CART = 'ADD_TO_CART'
const CLEAR_CART = 'CLEAR_CART'
const REMOVE_ITEM = 'REMOVE_ITEM'

/**
 * INITIAL STATE
 */
const defaultCart = []

/**
 * ACTION CREATORS
 */
const getCart = cart => ({type: GET_CART, cart})
export const clearCart = () => {
  localStorage.removeItem('cart');
  return {type: CLEAR_CART}
}

export const removeItem = id => {
  console.log(id)
  const currentCart = JSON.parse(localStorage.getItem('cart'))
  currentCart.forEach((item, index) => {
    console.log(item)
    if (item.id === id) {
      currentCart[index].quantity--
      console.log('hitting foudn item!')
      if (currentCart[index].quantity === 0) currentCart.splice(index, 1)
    }
  })
  let stringCart = JSON.stringify(currentCart)
  localStorage.setItem('cart', stringCart)
  return {type: REMOVE_ITEM, currentCart}
}

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
  if (currentCart !== null) return ({type: ADD_TO_CART, currentCart})
  else return ({type: ADD_TO_CART, currentCart: defaultCart})
}

export const addToCart = (id) => {
  const newProduct = {id: id, quantity: 1}
  let currentCart = JSON.parse(localStorage.getItem('cart'))
  let stringCart = ''
  if (currentCart) {
    let found = false
    currentCart.forEach((item, index) => {
      if (item.id === id) {
        currentCart[index].quantity++
        found = true
      }
    })
    if (!found) currentCart.push(newProduct)
    stringCart = JSON.stringify(currentCart)
  }
  else {
    currentCart = [newProduct]
    stringCart = JSON.stringify(currentCart)
  }
  localStorage.setItem('cart', stringCart)
  return ({type: ADD_TO_CART, currentCart})
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
      return action.currentCart
    case CLEAR_CART:
      return defaultCart
    case REMOVE_ITEM:
      return action.currentCart
    default:
      return state
  }
}
