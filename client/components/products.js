import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'

const Products = (props) => {
  const { products } = props

  return (
    <div>
      <h3>Products</h3>
      <div className="product-container">
        <ul className="product-list">
        {
          products.map(product => {
            return (
              <li>
                {product.name}
              </li>
            )
          })
        }
        </ul>
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    products: state.products
  }
}

export default connect(mapState)(Products)

/**
 * PROP TYPES
 */
// Main.propTypes = {
//   children: PropTypes.object,
//   handleClick: PropTypes.func.isRequired,
//   isLoggedIn: PropTypes.bool.isRequired
// }
