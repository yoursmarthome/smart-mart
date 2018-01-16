import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import { fetchOrders } from '../store'

class PastOrders extends Component {

  componentDidMount() {
   this.props.handleFetchOrders(this.props.user.id)
  }

  render() {

    console.log(this.props.orders)
    return (
      <div>
        <div>
          <h3> Past Orders </h3>
        </div>
        {
          this.props.orders.map(order => (
            order.lineItems.map( lineItem => (
              <div key={lineItem.id}>
                <div className="col-sm-1">
                  <ul className="list-inline qty-list">
                    <li>Order Id: {order.id}</li>
                  </ul>
                </div>
                <div className="col-sm-1">
                 <img src={lineItem.product.photo} className="img-responsive" />
                </div>
                <div className="col-sm-5">
                  <h4> {lineItem.product.name} </h4>
                </div>
                <div className="col-sm-3">
                  <ul className="list-inline qty-list">
                    <li>Qty: {lineItem.quantity}</li>
                  </ul>
                </div>
                <div className="col-sm-2">
                  <p>Price: <strong>{'$' + ((+lineItem.product.price * +lineItem.quantity).toFixed(2))}</strong></p>
                </div>
                <div className="col-sm-12">
                  <hr />
                </div>
              </div>
            ))
          ))
        }
       </div>
    )
  }
}
/**
 * CONTAINER
 */
const mapState = (state, ownProps) => {


  return {
    user: state.user,
    orders: state.orders
  }
}

 const mapDispatch = (dispatch) => {
  return {
    handleFetchOrders (id) {
      dispatch(fetchOrders(id))
    }
  }
 }

export default connect(mapState, mapDispatch)(PastOrders)
