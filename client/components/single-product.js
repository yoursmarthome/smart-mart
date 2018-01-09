import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'

const SingleProduct = (props) => {
  const { product } = props

  return (
    <div>
      {
        !product ? null :
        <div>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
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

export default connect(mapState)(SingleProduct)
