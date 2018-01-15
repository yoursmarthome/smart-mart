import React, {Component} from 'react'
import {connect} from 'react-redux'
import CategoryPanel from './category-panel'
import ProductPanel from './product-panel'
import {withRouter, Link} from 'react-router-dom'
import {fetchCategoryThunk, fetchProducts, fetchSearchThunk} from '../store'

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      category: 'all',
      search: false,
      searchTerm: ''
    }
  }

  render (){
    const {categories, handleGetSearch} = this.props;
    return (
      <section className="home-content">
        <div className="container">
          <div className="row">
            <div className="col-sm-3 left-sidebar">
              <h2>Categories</h2>
              <div className="panel panel-default category-products">
                <ul className="category-list">
                  <li href="#" className={this.state.category === 'all' ? 'active' : undefined} onClick={() => this.handleSetProducts()} key={0}>ALL PRODUCTS</li>
                  {
                    categories &&
                    categories.map(category => {
                      return <li href="#" className={this.state.category === category.name ? 'active' : undefined} onClick={() => this.handleSetCategory(category)} key={category.id}>{category.name}</li>
                    })
                  }
                </ul>
              </div>
            </div>
            <div className="col-sm-9">
              <div className="col-sm-12">
                <div className="search_box">
                  <div className="input-group">
                  <input onChange={event => this.onInputChange(event.target.value)} value={this.state.term} type="text" className="form-control" placeholder="Search our amazing smart home products" />
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="button" onClick={() => this.handleSetSearch()}>Search</button>
                  </span>
                  </div>
                </div>
              </div>
              <div className="col-sm-12">
                  <hr />
              </div>
              <div className="col-sm-12 product-content">
                <h2 className="product-grid-title">
                {this.state.category === 'all' ? 'ALL PRODUCTS' : this.renderTermOrCategory()}
                </h2>
              </div>
              <div className="product-grid">
                  {
                    this.props.categories.length > 0 &&
                    this.renderProducts()
                  }
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  renderTermOrCategory() {
    return this.state.search ? this.state.searchTerm : this.state.category
  }

  onInputChange(term){
    this.setState({term})
  }

  renderProducts() {
    if (!this.props.products.length) {
      return <div className="col-sm-12"><h2>No Products Found.</h2></div>
    } else {
      return this.props.products.map(product => {
        return <ProductPanel product={product} key={product.id} />
      })
    }
  }

  handleSetSearch() {
    if (this.state.term) {
      this.setState({search: true, category: '', searchTerm: this.state.term},
      () => this.props.handleGetSearch(this.state.term)
      );
    }
  }

  handleSetCategory(category) {
    this.setState({category: category.name, term: '', search: false},
    () => this.props.handleGetCategory(category.id)
    );
  }

  handleSetProducts() {
    this.setState({category: 'all', term: '', search: false},
    () => this.props.handleGetProducts()
    );
  }

  clearFilters() {
    this.setState({
      term: ''
    })
  }
}

const mapState = (state) => {
  return {
    products: state.products,
    categories: state.categories
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleGetCategory(categoryId) {
      dispatch(fetchCategoryThunk(categoryId))
    },
    handleGetProducts() {
      dispatch(fetchProducts())
    },
    handleGetSearch(term) {
      dispatch(fetchSearchThunk(term))
    }
  }
}

export default connect(mapState, mapDispatch)(Home)
