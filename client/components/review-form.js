import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
// import { writeFirstName, writeLastName, writeEmail,
//   writePhone, writeStreet, writeStreet2, changeState, writeZip,
//   postOrder, clearCart } from '../store'
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
    const { product } = this.props
    console.log(product)
    return (
      <div>
        <h3> Write a Review</h3>
        <form>
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
        </form>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapState)(ReviewForm)