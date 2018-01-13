import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {addToCart} from '../store'

const ProductPanel = (props) => {
  const { product, handleAddToCart } = props

  return (
    <div className="col-sm-4">
      <div className="category-panel panel panel-default text-center">
        <Link to={`/products/${product.id}`}>
          <img className="img-responsive" src={product.photo} />
          <p className="category-name">{product.name}</p>
        </Link>
          <p className="product-price">${product.price}</p>
        <button className="btn btn-default add-to-cart" onClick={() => handleAddToCart(product.id, product.price)}>Add To Cart</button>
      </div>
    </div>
  )
}

const mapDispatch = (dispatch) => {
  return {
    handleAddToCart (id, price) {
      dispatch(addToCart(id, price))
    }
  }
}

export default connect(null, mapDispatch)(ProductPanel)
