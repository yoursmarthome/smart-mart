import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import { postReview } from '../store'
import _ from 'lodash'

class ReviewForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      content: '',
      rating: 5
    }
  }

  render() {
    const { product, user, handleSubmit } = this.props

    return (
      <div className="review-form">
        { !user.id 
        ? <div className="col-sm-12">
            <h3>Sign In Or Sign Up To Leave a Review!</h3>
          </div>
        : <div className="col-sm-12">
            <h3> Write a Review</h3>
            <form
              onSubmit={evt => handleSubmit(this.state, user.id, product.id, evt)}
            >
              <label> Title </label>
              <input
                className="form-control"
                type="text"
                name="title"
                value={this.state.title}
                onChange={evt => this.setState({title: evt.target.value})}
                placeholder="Title"
              />
              <label> Review Description </label>
              <input
                className="form-control"
                type="text"
                name="content"
                value={this.state.content}
                onChange={evt => this.setState({content: evt.target.value})}
                placeholder="Review Description"
              />
              <label> Rate the Product </label>
              <select
                className="form-control"
                type="text"
                name="rating"
                value={this.state.rating}
                onChange={evt => this.setState({rating: evt.target.value})}
              >
                <option value={1}> 1 </option>
                <option value={2}> 2 </option>
                <option value={3}> 3 </option>
                <option value={4}> 4 </option>
                <option value={5}> 5 </option>
              </select>
              <button type="submit">Submit Review</button>
            </form>
          </div>
        }
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    user: state.user
  }
}


const mapDispatch = (dispatch) => {
  return {
    handleSubmit(review, userId, productId, evt) {
      evt.preventDefault()
      review.userId = userId
      review.productId = productId
      dispatch(postReview(review))
    }
  }
}

export default connect(mapState, mapDispatch)(ReviewForm)
