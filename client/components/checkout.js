import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import { writeFirstName, writeLastName, writeEmail, 
  writePhone, writeStreet, writeStreet2, changeState, writeZip,
  postOrder } from '../store'
import Cart from './cart'
import _ from 'lodash'

const Checkout = (props) => {
  const { cart, products, checkout, stateList, 
    handleFirstNameChange, handleLastNameChange, handleStreet1Change, handleStreet2Change, handleStateChange, handleZipChange,
    handlePhoneChange, handleEmailChange, handleSubmit, warningList } = props

  return (
    <div>
      <h2>Checkout</h2>
      <form id="new-message-form" onSubmit={evt => handleSubmit(checkout, evt)}>
        <div className="input-group input-group-lg">
          <input
            className="form-control"
            type="text"
            name="firstName"
            value={checkout.firstName}
            onChange={handleFirstNameChange}
            placeholder="First Name"
          />
          <input
            className="form-control"
            type="text"
            name="lastName"
            value={checkout.lastName}
            onChange={handleLastNameChange}
            placeholder="Last Name"
          />
          <input
            className="form-control"
            type="text"
            name="email"
            value={checkout.email}
            onChange={handleEmailChange}
            placeholder="Email"
          />
          <input
            className="form-control"
            type="text"
            name="phone"
            value={checkout.phone}
            onChange={handlePhoneChange}
            placeholder="Phone Number"
          />
          <input
            className="form-control"
            type="text"
            name="streetAddress"
            value={checkout.street1}
            onChange={handleStreet1Change}
            placeholder="Street Address"
          />
          <input
            className="form-control"
            type="text"
            name="streetAddress2"
            value={checkout.street2}
            onChange={handleStreet2Change}
            placeholder="Street Address 2"
          />
          <select
            className="form-control"
            type="text"
            name="content"
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
          <input
            className="form-control"
            type="text"
            name="zipcode"
            value={checkout.zip}
            onChange={handleZipChange}
            placeholder="Zip Code"
          />
          <span className="input-group-btn">
            <button className="btn btn-default" type="submit">Enter</button>
          </span>
        </div>
      </form>
      <Cart view='checkout' />
    </div>
  )
}

const mapState = (state) => {
  return {
    cart: state.cart,
    products: state.products,
    checkout: state.checkout,
    stateList: ["AK","AL","AR","AZ","CA","CO","CT","DC","DE","FL","GA","GU","HI","IA","ID", 
      "IL","IN","KS","KY","LA","MA","MD","ME","MH","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY",
      "OH","OK","OR","PA","PR","PW","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WI","WV","WY"],
    warningList: {
      'warnings': null,
      'name': 'Invalid first or last name.',
      'email': 'Invalid email.',
      'phone': 'Invalid phone number - number must include area code.',
      'street': 'Invalid street address.',
      'zip': 'Invalid zip code.'
    }
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
    handleSubmit (checkout, evt) {
      evt.preventDefault()
      if (!firstName || !lastName) console.log(ownProps.warningList)
      dispatch(postOrder(checkout, ownProps.history))
    }
  }
}

export default connect(mapState, mapDispatch)(Checkout)
