import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {getCategory, addToCart} from '../store'

const PastOrders = (props) => {
  //const { product,  } = props
  console.log(props)
   return (
      <div>
        <h2> Past Orders</h2>
      </div>
   )
}

/**
 * CONTAINER
 */
const mapState = (state, ownProps) => {
  console.log(state)
  // const orderId = Number(ownProps.match.params.id)
  // return {
  //   product: state.orders.find(order => order.id === orderId)
  // }
}

// const mapDispatch = (dispatch) => {
//   return {
//     // handleAddToCart (id, price) {
//     //   dispatch(addToCart(id, price))
//     }
//   }
// }

// export default connect(mapState, mapDispatch)(PastOrders)
export default connect(mapState)(PastOrders)
