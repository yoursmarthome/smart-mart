import React, {Component} from 'react'
import {connect} from 'react-redux'
import CategoryPanel from './category-panel'
import ProductPanel from './product-panel'
import {withRouter, Link} from 'react-router-dom'

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    }
  }

  render (){
    return (
      <section className="home-content">
        <div className="container">
          <div className="row">
            <div className="col-sm-3 left-sidebar">
              <h2>Categories</h2>
              <div className="panel panel-default category-products">
                <ul>
                  {
                    this.props.categories &&
                    this.props.categories.map(category => {
                      return <li href="#" key={category.id}>{category.name}</li>
                    })
                  }
                </ul>
              </div>
            </div>
            <div className="col-sm-9">
              <div className="col-sm-12">
                <div className="search_box">
                  <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search our amazing smart home products" />
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="button">Search</button>
                  </span>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 product-content">
                <h2 className="title text-center">Our Products</h2>
              </div>
              <div className="product-grid">
                  {
                    this.props.categories &&
                    !this.props.products ?
                    this.props.categories.map(category => {
                      return <CategoryPanel key={category.id} category={category} />
                    }) :
                    this.renderProducts()
                  }
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  onInputChange(input){
    this.setState({term: input})
  }

  handleSearch() {
    {/* dispatch action to make axios request to get products that match the search */}
  }

  renderProducts() {
    return this.props.products.map(product => {
      return <ProductPanel product={product} key={product.id} />
    })
  }

  handleCategoryFilter() {
    {/* dispatch action to make axios request to get products for category */}
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

export default connect(mapState)(Home)
