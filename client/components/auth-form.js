import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'

/**
 * COMPONENT
 */
const AuthForm = (props) => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <div className="login-content">
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-sm-offset-4 well">
            <h2 className="title text-center login-title">Login</h2>
            <form className="" onSubmit={handleSubmit} name={name}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input name="email" className="form-control"  type="text" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input name="password" className="form-control" type="password" />
              </div>
              <div>
                <button className="btn btn-default" type="submit">{displayName}</button>
              </div>
              {error && error.response && <div> {error.response.data === 'Validation error: Validation isEmail on email failed' && 'Please Enter A Valid Email'} </div>}
              {error && error.response && <div> {error.response.data === 'Validation error: Validation notEmpty on password failed' && 'Please Enter A Valid Password'} </div>}
              {error && error.response && <div> {error.response.data === 'Validation error: Validation isEmail on email failed,\nValidation error: Validation notEmpty on password failed' && 'Please Enter A Valid Email and Password'} </div>}
            </form>
            <a href="/auth/google"><div className="google-signin"></div></a><br/>
            <a href="/auth/facebook"><div className="facebook-signin"></div></a>
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = (state) => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = (state) => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleSubmit (evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
