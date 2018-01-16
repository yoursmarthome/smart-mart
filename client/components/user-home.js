import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import PastOrders from './past-orders'

/**
 * COMPONENT
 */
export const UserHome = (props) => {
  const {email} = props

  return (
    <div className="user-home-content">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3>Welcome, {email}</h3>
            <PastOrders />
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
