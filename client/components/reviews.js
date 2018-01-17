import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchReviews } from '../store'

class Reviews extends Component {
  componentDidMount() {
    if (this.props.product) {
      this.props.handleFetchReviews(this.props.product.id)
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.product !== this.props.product) {
      this.props.handleFetchReviews(this.props.product.id)
    }
  }

  render() {
    const { reviews } = this.props

    return (
      <div>
        <div className="col-sm-12">
          <h3> User Reviews </h3>
          {
            !reviews.length
            ? <h4>There are no reviews for this product yet.</h4>
            : reviews.map((review) => {
              return (
                <div key={review.id}>
                  <h4> {review.title} </h4>
                  <p> Rating: {review.rating} </p>
                  <p> Description: {review.content} </p>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    reviews: state.reviews
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleFetchReviews (productId) {
      dispatch(fetchReviews(productId))
    }
  }
}

export default connect(mapState, mapDispatch)(Reviews)
