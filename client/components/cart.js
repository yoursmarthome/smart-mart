import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'

const Cart = (props) => {
  const { cart } = props

  return (
    <div>
      <h2>Cart</h2>
      {
        !cart ? null :
        cart.map(product => {
          return (
            <li key={product.id}>
              <h4>{product.name}</h4>
            </li>
          )
        })
      }
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
    cart: state.cart
}

export default connect(mapState)(Cart)
