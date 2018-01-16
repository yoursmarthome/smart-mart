import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import { clearCart, removeItem, addToCart, fetchProductsForCart } from '../store'
import _ from 'lodash'
import CartItem from './cart-item'

class Cart extends Component {
  componentDidMount() {
    if (this.props.cart.length) {
      this.props.handleFetchProducts(this.props.cart)
    }
  }

  componentWillUpdate(nextProps) {
    if (nextProps.cart.length !== this.props.cart.length) {
      if (nextProps.cart.length) {
        this.props.handleFetchProducts(this.props.cart)
      }
    }
  }

  render() {
    const { cart, cartTotal, products, handleCartClear, view } = this.props

    return (
      <div className="cart-content">
        <div className={this.props.container && 'container'}>
          <div className="row">
            <div className={this.props.column ? 'col-sm-8 col-sm-offset-2 panel panel-default' : 'panel panel-default'}>
              <h2 className="title text-center">
                Cart
              </h2>
              { view === 'checkout' ? null : <a className="clear-cart" onClick={() => handleCartClear()}>Clear Cart</a>  }
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
                  this.props.cart.length ?
                  this.props.cart.reduce((itemCount, item) => {
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
                { view === 'checkout' ? null : <Link to="/checkout"><button className="btn btn-success btn-block">Checkout</button></Link> }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

/**
 * CONTAINER
 */
const mapState = (state) => {
    return {
      cart: state.cart.myCart,
      cartTotal: state.cart.total,
      products: state.cartProducts
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
    },
    handleFetchProducts (cartItems) {
      dispatch(fetchProductsForCart(cartItems))
    }
  }
}

export default connect(mapState, mapDispatch)(Cart)
