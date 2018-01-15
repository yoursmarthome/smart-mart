import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import { clearCart, removeItem, addToCart } from '../store'
import _ from 'lodash'
import CartItem from './cart-item'

function Cart (props){
  const { cart, cartTotal, products, handleCartClear, handleItemRemove, handleAddToCart, view } = props
  return (
    <div className="cart-content">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2 panel panel-default">
            <h2 className="title text-center">
              Cart
            </h2>
            <a className="clear-cart" onClick={() => handleCartClear()}>Clear Cart</a>
            <ul className="cart-list">
              {
                cart.length && products.length ?
                cart.map(item => {
                  const product = _.find(products, { id: item.id })
                  return <CartItem key={item.id} item={item} product={product} view={view || 'cart'}/>
                }) :
                <li>No items in cart.</li>
              }
            </ul>
            <div className="text-center cart-totals">
              <h4><span className="not-bold">
                {'Items: '}
              </span>
              {
                props.cart.length ?
                props.cart.reduce((itemCount, item) => {
                  itemCount += item.quantity
                  return itemCount
                }, 0) :
                '0'
              }
              <span className="not-bold">
                {' | Total: $' }
              </span>
              {
                cartTotal
              }
              </h4>
              <div className="col-sm-4 col-sm-offset-4">
                <Link to='/checkout'><button className="btn btn-success btn-block">Checkout</button></Link>
              </div>
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
