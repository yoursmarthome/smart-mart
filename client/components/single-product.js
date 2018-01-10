import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {getCategory, addToCart} from '../store'

const SingleProduct = (props) => {
  const { product, handleAddToCart } = props

  return (
    <div>
      {
        !product ? null :
        <div>
          <img src={product.photo} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <button onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
        </div>
      }
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state, ownProps) => {
  const productId = Number(ownProps.match.params.id)
  console.log(productId)
  return {
    product: state.products.find(product => product.id === productId)
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleAddToCart (id) {
      dispatch(addToCart(id))
    }
  }
}

export default connect(mapState, mapDispatch)(SingleProduct)
