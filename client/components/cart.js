import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import { clearCart } from '../store'

const Cart = (props) => {
  const { cart, handleCartClear } = props

  return (
    <div>
      {console.log('props', props)}
      <h2>Cart</h2>
      <button onClick={() => handleCartClear()}>Clear Cart</button>
      <ul>
        {
          !cart.length ? <li>No items in cart.</li> :
          cart.map(product => {
            return (
              <li key={product.id}>
                <h4>{product.name}</h4>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
    return {
      cart: state.cart
    }
}

const mapDispatch = (dispatch) => {
  return {
    handleCartClear () {
      dispatch(clearCart())
    }
  }
}

export default connect(mapState, mapDispatch)(Cart)
