import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {addToCart} from '../store'
import AddToCartButton from './add-to-cart-btn'
import StarRating from './star-rating'

export default function ProductPanel(props) {
  const { product } = props

  return (
    <div className="col-sm-4">
      <div className="category-panel panel panel-default text-center">
        <Link to={`/products/${product.id}`}>
          <img className="img-responsive" src={product.photo} />
          <p className="category-name">{product.name}</p>
        </Link>
          <StarRating {...props} />
          <p className="product-price">${product.price}</p>
          <AddToCartButton product={product} />
      </div>
    </div>
  )
}
