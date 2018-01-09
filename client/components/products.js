import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {getCategory} from '../store'

class Products extends Component {
  constructor(props) {
    super(props)

    this.state ={
      category: {}
    }
  }

  render() {
    return (
      <div>
        <h3>Products</h3>
        <div className="product-container">
          <ul className="category-list">
            <h2>Filter by Category</h2>
            {
              this.props.categories.map(category => {
                return (
                  <li>
                    <a onClick={() => this.handleCategorySelect(category)}>
                      {category.name}
                    </a>
                  </li>
                )
              })
            }
          </ul>
          <ul className="product-list">
            <h2>Products</h2>
            {this.state.category.id ? this.renderFilteredProducts(): this.renderAllProducts()}
          </ul>
        </div>
      </div>
    )
  }

  handleCategorySelect(category) {
    this.setState({category})
  }

  renderAllProducts() {
    return this.props.products.map(product => {
      return (
        <li>
          {product.name}
        </li>
      )
    })
  }

  renderFilteredProducts() {
    return this.props.products.filter(product => {
      return product.categoryId === this.state.category.id
    }).map(product => {
      return (
        <li>
          {product.name}
        </li>
      )
    })
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    products: state.products,
    categories: state.categories
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
