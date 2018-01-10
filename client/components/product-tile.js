import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {addToCart} from '../store'

const ProductTile = (props) => {
  const { product, handleAddToCart } = props

  return (

    <div>
      <Link to={`/products/${product.id}`}>
        <img src={product.photo} />
        <h5>{product.price}</h5>
      </Link>
      <button onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
    </div>
  )
}

const mapDispatch = (dispatch) => {
  return {
    handleAddToCart (id) {
      dispatch(addToCart(id))
    }
  }
}

export default connect(null, mapDispatch)(ProductTile)
