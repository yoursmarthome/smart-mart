import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addToCart} from '../store'

class AddToCartButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addAlert: false
    }
  }

  render() {
    const { product} = this.props

    return (
      <div>
        {
          this.state.addAlert ?
          <button className="btn btn-default no-border" ><span className="glyphicon glyphicon-ok" aria-hidden="true" /> Added to Cart!</button> :
          this.renderAddButton(product)
        }
      </div>
    )
  }

  renderAddButton(product) {
    return (
      <button className="btn btn-default" onClick={() => this.handleAddToCart(product.id, product.price)}>Add To Cart</button>
    );
  }

  handleAddToCart(id, price) {
    this.showAlert();
    this.props.handleAddToCartDispatch(id, price)
  }

  showAlert() {
    this.setState({addAlert: true}, () => {
      setTimeout(this.hideAlert.bind(this), 500);
    })
  }

  hideAlert() {
    this.setState({addAlert: false})
  }

}

const mapDispatch = (dispatch) => {
  return {
    handleAddToCartDispatch (id, price) {
      dispatch(addToCart(id, price))
    }
  }
}

export default connect(null, mapDispatch)(AddToCartButton)
