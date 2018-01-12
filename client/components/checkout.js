import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import { writeFirstName } from '../store'
import _ from 'lodash'

const Checkout = (props) => {
  const { cart, products, checkoutEntry, stateList, 
    handleFirstNameChange, handleLastNameChange, handleStreet1Change, handleStreet2Change, handlStateChange, handleZipChange,
    handlePhoneChange, handleEmailChange, handleSubmit } = props
    // onSubmit={evt => handleSubmit(checkoutEntry, evt)}
  return (
    <form id="new-message-form" >
      <div className="input-group input-group-lg">
        <input
          className="form-control"
          type="text"
          name="firstName"
          value={checkoutEntry.firstName}
          onChange={handleFirstNameChange}
          placeholder="First name"
        />
        {/* <input
          className="form-control"
          type="text"
          name="lastName"
          value={checkoutEntry.lastName}
          onChange={handleLastNameChange}
          placeholder="Last name"
        />
        <input
          className="form-control"
          type="text"
          name="email"
          value={checkoutEntry.email}
          onChange={handleEmailChange}
          placeholder="Email"
        />
        <input
          className="form-control"
          type="text"
          name="phone"
          value={checkoutEntry.phone}
          onChange={handlePhoneChange}
          placeholder="Phone Number"
        />
        <input
          className="form-control"
          type="text"
          name="streetAddress"
          value={checkoutEntry.street1}
          onChange={handleStreet1Change}
          placeholder="Street Address"
        />
        <input
          className="form-control"
          type="text"
          name="streetAddress2"
          value={checkoutEntry.street2}
          onChange={handleStreet2Change}
          placeholder="Street Address 2"
        />
        <select
          className="form-control"
          type="text"
          name="content"
          value={newStateEntry}
          onChange={handlStateChange}
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
          value={checkoutEntry.zip}
          onChange={handleZipChange}
          placeholder="Zipcode"
        /> */}
        <span className="input-group-btn">
          <button className="btn btn-default" type="submit">Enter</button>
        </span>
      </div>
    </form>
  );
}

const mapState = (state) => {
  return {
    cart: state.cart,
    products: state.products,
    checkoutEntry: state.checkoutEntry,
    stateList: ["AK","AL","AR","AZ","CA","CO","CT","DC","DE","FL","GA","GU","HI","IA","ID", 
      "IL","IN","KS","KY","LA","MA","MD","ME","MH","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY",
      "OH","OK","OR","PA","PR","PW","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WI","WV","WY"]
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleFirstNameChange (evt) {
      dispatch(writeFirstName(evt.target.value))
    },
    handleLastNameChange () {
      dispatch()
    },
    handleStreet1Change () {
      dispatch()
    },
    handleStreet2Change () {
      dispatch()
    },
    handleStateChange () {
      dispatch()
    },
    handleZipChange () {
      dispatch()
    },
    handlePhoneChange () {
      dispatch()
    },
    handleEmailChange () {
      dispatch()
    },
    handleSubmit () {
      dispatch()
    }
  }
}

// const mapDispatch = (dispatch) => {
// return {
//   handleCartClear () {
//     dispatch(clearCart())
//   },
//   handleItemRemove (id) {
//     dispatch(removeItem(id))
//   },
//   handleAddToCart (id, price) {
//     dispatch(addToCart(id, price))
//   }
// }

export default connect(mapState, mapDispatch)(Checkout)
