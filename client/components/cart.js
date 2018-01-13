import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import { clearCart, removeItem, addToCart } from '../store'
import _ from 'lodash'
import Checkout from './checkout'

function Cart (props){
  const { cart, cartTotal, products, handleCartClear, handleItemRemove, handleAddToCart } = props
  return (
    <div className="cart-content">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h2>Cart</h2>
            <button onClick={() => handleCartClear()}>Clear Cart</button>
            <ul>
              {
                cart.length && products.length ?
                cart.map(item => {
                  const product = _.find(products, { id: item.id })
                  return (
                    <li key={item.id}>
                      <button className='remove-item-cart' onClick={() => handleAddToCart(item.id, product.price)}>+</button>
                      <h4>{product.name}</h4>
                      <h4>{item.quantity}</h4>
                      <h4>{'$'+ ((+product.price * +item.quantity).toFixed(2))}</h4>
                      <button className='remove-item-cart' onClick={() => handleItemRemove(item.id)}>-</button>
                    </li>
                  )
                }) :
                <li>No items in cart.</li>
              }
            </ul>
            <div>
              {
                'Total: $' + cartTotal
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
    return {
      cart: state.cart.myCart,
      cartTotal: state.cart.total,
      products: state.products
    }
}

const mapDispatch = (dispatch) => {
  return {
    handleCartClear () {
      dispatch(clearCart())
    },
    handleItemRemove (id) {
      dispatch(removeItem(id))
    },
    handleAddToCart (id, price) {
      dispatch(addToCart(id, price))
    }
  }
}

export default connect(mapState, mapDispatch)(Cart)
