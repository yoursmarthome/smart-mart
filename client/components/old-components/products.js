import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {getCategory} from '../store'
import Cart from './cart';
import ProductPanel from './product-panel';


class Products extends Component {
  constructor(props) {
    super(props)

    this.state ={
      category: {},
      term: '',
      filtered: [],
      searching: false
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.clearFilters = this.clearFilters.bind(this)
  }

  render() {
    return (
      <div>

      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
        <button className="search" onClick={this.handleSearch}>
          search
        </button>
      </div>

      <Cart />

        <h3>Products</h3>
        <div className="product-container">
          <ul className="category-list">
          <button className="clearCategories" onClick={this.clearFilters}>
            Clear Filters
          </button>
            <h2>Filter by Category</h2>
            {
              this.props.categories.map(category => {
                return (
                  <li key={category.id}>
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

            {
              !this.state.searching ?
                this.renderAllProducts() :
                this.renderFilteredProducts()
            }


          </ul>
        </div>
      </div>
    )
  }

  onInputChange(input){
    this.setState({term: input})
  }

  handleCategorySelect(category) {
    this.setState({searching: true, category},
      () => this.handleCategoryFilter()
    )
  }

  handleSearch() {
    console.log('searching')
    const filtered = this.props.products.filter(product => {
      return product.name === this.state.term
    })
    this.setState({searching: true, filtered})
  }

  renderAllProducts() {
    return this.props.products.map(product => {
      return <ProductPanel product={product} key={product.id} />
    })
  }

  renderFilteredProducts() {
    if (this.state.filtered.length) {
      return this.state.filtered.map(product => {
        return <ProductPanel product={product} key={product.id} />
      })
    } else {
      return <p> No Products Found </p>
    }
  }

  handleCategoryFilter() {
    const filtered = this.props.products.filter(product => {
      return product.categoryId === this.state.category.id
    })
    this.setState({filtered})
  }

  clearFilters() {
    this.setState({
      category: {},
      term: '',
      filtered: [],
      searching: false
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