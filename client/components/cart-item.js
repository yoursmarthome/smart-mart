import React from 'react'
import {connect} from 'react-redux'
import {removeItem, addToCart} from '../store'

function CartItem (props) {
  const {item, product, handleAddToCart, handleItemRemove} = props;
  return (
    <li key={item.id} className="row text-left cart-item">
      <div className="col-sm-1">
        <img src={product.photo} className="img-responsive" />
      </div>
      <div className="col-sm-6">
        <p>{product.name}</p>
      </div>
      <div className="col-sm-3">
        <ul className="list-inline qty-list">
          <li>Qty: {item.quantity}</li>
          <li><button className="btn btn-default remove-item-btn" onClick={() => handleItemRemove(item.id)}>-</button></li>
          <li><button className="btn btn-default add-item-btn" onClick={() => handleAddToCart(item.id, product.price)}>+</button></li>
          <li><a className="remove">Remove</a></li>
        </ul>
      </div>
      <div className="col-sm-2">
        <p>Price: <strong>{'$' + ((+product.price * +item.quantity).toFixed(2))}</strong></p>
      </div>
      <div className="col-sm-12">
        <hr />
      </div>
    </li>
  )
}

const mapDispatch = (dispatch) => {
  return {
    handleItemRemove (id) {
      dispatch(removeItem(id))
    },
    handleAddToCart (id, price) {
      dispatch(addToCart(id, price))
    }
  }
}

export default connect(null, mapDispatch)(CartItem)
