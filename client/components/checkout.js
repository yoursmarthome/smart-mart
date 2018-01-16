import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import { writeFirstName, writeLastName, writeEmail,
  writePhone, writeStreet, writeStreet2, changeState, writeZip,
  postOrder, clearCart } from '../store'
import Cart from './cart'
import _ from 'lodash'
import PaymentForm from './payment-form'

class Checkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'checkout'
    }

    this.paymentCallback = this.paymentCallback.bind(this);
  }

  render() {
    return (
      <div className="checkout-content">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 title-col">
              <h2>Checkout</h2>
            </div>

            {this.state.view === 'checkout' ? this.renderCheckoutForm() : this.renderDone()}

          </div>
        </div>
      </div>
    )
  }

  paymentCallback(token) {
    // console.log('payment callBack', token)
    const {checkout, cart, user} = this.props;
    this.props.handleSubmit(checkout, token, cart, user);
    this.setState({view: 'done'});
  }

  renderCheckoutForm() {
    const { checkout, stateList,
      handleFirstNameChange, handleLastNameChange, handleStreet1Change, handleStreet2Change, handleStateChange, handleZipChange,
      handlePhoneChange, handleEmailChange, handleSubmit } = this.props

    return (
          <div>
            <div className="col-sm-4">
              <form id="new-message-form">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    className="form-control"
                    type="text"
                    name="firstName"
                    value={checkout.firstName}
                    onChange={handleFirstNameChange}
                    placeholder="First Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    className="form-control"
                    type="text"
                    name="lastName"
                    value={checkout.lastName}
                    onChange={handleLastNameChange}
                    placeholder="Last Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    className="form-control"
                    type="text"
                    name="email"
                    value={checkout.email}
                    onChange={handleEmailChange}
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    className="form-control"
                    type="text"
                    name="phone"
                    value={checkout.phone}
                    onChange={handlePhoneChange}
                    placeholder="Phone Number"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="streetAddress">Street Address</label>
                  <input
                    className="form-control"
                    type="text"
                    name="streetAddress"
                    value={checkout.street1}
                    onChange={handleStreet1Change}
                    placeholder="Street Address"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="streetAddress2">Street Address 2</label>
                  <input
                    className="form-control"
                    type="text"
                    name="streetAddress2"
                    value={checkout.street2}
                    onChange={handleStreet2Change}
                    placeholder="Street Address 2"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="state">State</label>
                  <select
                    className="form-control"
                    type="text"
                    name="state"
                    value={checkout.state}
                    onChange={handleStateChange}
                    placeholder="State"
                  >
                    {
                      stateList.map(state => {
                          return <option key={state} value={`${state}`}>{state}</option>
                      })
                  }
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="zipcode">Zip Code</label>
                  <input
                    className="form-control"
                    type="text"
                    name="zipcode"
                    value={checkout.zip}
                    onChange={handleZipChange}
                    placeholder="Zip Code"
                  />
                  {/* <span className="input-group-btn">
                    <button className="btn btn-default" type="submit">Enter</button>
                  </span> */}
                </div>
              </form>
              <PaymentForm callback={this.paymentCallback} />
            </div>
            <div className="col-sm-8">
              <Cart view="checkout" />
            </div>
          </div>
    )
  }

  renderDone() {
    return (
      <div className="col-sm-12">
        <h2>Order Complete. Thanks!</h2>
      </div>
    )
  }

}

const mapState = (state) => {
  return {
    cart: state.cart,
    products: state.products,
    user: state.user,
    checkout: state.checkout,
    stateList: ["AK","AL","AR","AZ","CA","CO","CT","DC","DE","FL","GA","GU","HI","IA","ID",
      "IL","IN","KS","KY","LA","MA","MD","ME","MH","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY",
      "OH","OK","OR","PA","PR","PW","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WI","WV","WY"]
  }
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    handleFirstNameChange (evt) {
      dispatch(writeFirstName(evt.target.value))
    },
    handleLastNameChange (evt) {
      dispatch(writeLastName(evt.target.value))
    },
    handleStreet1Change (evt) {
      dispatch(writeStreet(evt.target.value))
    },
    handleStreet2Change (evt) {
      dispatch(writeStreet2(evt.target.value))
    },
    handleStateChange (evt) {
      dispatch(changeState(evt.target.value))
    },
    handleZipChange (evt) {
      dispatch(writeZip(evt.target.value))
    },
    handlePhoneChange (evt) {
      dispatch(writePhone(evt.target.value))
    },
    handleEmailChange (evt) {
      dispatch(writeEmail(evt.target.value))
    },
    handleSubmit (checkout, token, cart, user) {
      dispatch(postOrder(checkout, token, cart, user, ownProps.history))
      dispatch(clearCart())
    }
  }
}

export default connect(mapState, mapDispatch)(Checkout)
