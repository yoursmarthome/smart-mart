import axios from 'axios'
import history from '../history'

// NOTE: PLACE TOTAL ON CART

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
const defaultCart = { myCart: [], total: 0 }

/**
 * ACTION CREATORS
 */
const getCart = cart => ({type: GET_CART, cart})

export const clearCart = () => {
  localStorage.removeItem('cart');
  return {type: CLEAR_CART}
}

export const removeItem = id => {
  const currentCart = JSON.parse(localStorage.getItem('cart'))
  currentCart.myCart.forEach((item, index) => {
    if (item.id === id) {
      currentCart.myCart[index].quantity--
      currentCart.total = ((currentCart.total - item.price) * 1).toFixed(2)
      if (currentCart.myCart[index].quantity === 0) currentCart.myCart.splice(index, 1)
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

export const addToCart = (id, price) => {
  const newProduct = {id: id, price: price, quantity: 1}
  let currentCart = JSON.parse(localStorage.getItem('cart'))
  let stringCart = ''
  if (currentCart) {
    let found = false
    currentCart.myCart.forEach((item, index) => {
      if (item.id === id) {
        currentCart.myCart[index].quantity++
        found = true
      }
    })
    if (!found) currentCart.myCart.push(newProduct)
  }
  else {
    currentCart = {myCart: [newProduct], total: 0}
  }
  calcTotal(currentCart)
  stringCart = JSON.stringify(currentCart)
  localStorage.setItem('cart', stringCart)
  return ({type: ADD_TO_CART, currentCart})
}

const calcTotal = (cart) => {
  cart.total = 0
  cart.myCart.map(item => {
    const productPrice = (item.price * 1)
    const currentTotal = ((productPrice * item.quantity) * 1 ).toFixed(2)
    cart.total = ((cart.total + currentTotal) * 1).toFixed(2)
  })
  return cart
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
