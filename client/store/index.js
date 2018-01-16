import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import user from './user'
import products from './products'
import categories from './categories'
import cart from './cart'
import checkout from './checkout'
import cartProducts from './cart-products'
import orders from './orders'
import reviews from './reviews'

const reducer = combineReducers(
  {user, products, categories, cart, checkout, cartProducts, orders, reviews}
)

const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './products'
export * from './categories'
export * from './cart'
export * from './checkout'
export * from './cart-products'
export * from './reviews'
export * from './orders'
