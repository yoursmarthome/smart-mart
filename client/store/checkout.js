import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_ORDER = 'GET_ORDER'

const WRITE_FIRST_NAME = 'WRITE_FIRST_NAME'
const WRITE_LAST_NAME = 'WRITE_LAST_NAME'
const WRITE_EMAIL = 'WRITE_EMAIL'
const WRITE_PHONE = 'WRITE_PHONE'
const WRITE_STREET = 'WRITE_STREET'
const WRITE_STREET2 = 'WRITE_STREET2'
const CHANGE_STATE = 'CHANGE_STATE'
const WRITE_ZIP = 'WRITE_ZIP'

/**
 * INITIAL STATE
 */
const defaultCheckout = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  street: '',
  street2: '',
  state: 'AK',
  zip: ''
}

/**
 * ACTION CREATORS
 */
// const getProduct = product => ({type: GET_PRODUCT, product})
export const getOrder = order => ({ type: GET_ORDER, order })

export const writeFirstName = firstName => ({ type: WRITE_FIRST_NAME, firstName })
export const writeLastName = lastName => ({ type: WRITE_LAST_NAME, lastName })
export const writeEmail = email => ({ type: WRITE_EMAIL, email })
export const writePhone = phone => ({ type: WRITE_PHONE, phone })
export const writeStreet = street => ({ type: WRITE_STREET, street })
export const writeStreet2 = street2 => ({ type: WRITE_STREET2, street2 })
export const changeState = state => ({ type: CHANGE_STATE, state })
export const writeZip = zip => ({ type: WRITE_ZIP, zip })

// /**
//  * THUNK CREATORS
//  */
export function postOrder(checkout, history) {
  console.log('checkout', checkout)
  return function thunk(dispatch) {
    return axios.post('/api/orders', checkout)
      .then(res => res.data)
      .then(order => {
        const action = getOrder(order)
        dispatch(action)
        // history.push()  where should user be routed to? confirmation page?
      })
  }
}

/**
 * REDUCER
 */
export default function (state = defaultCheckout, action) {
  let newState = Object.assign({}, state)
  switch (action.type) {
    case GET_ORDER:
      return action.order
    case WRITE_FIRST_NAME:
      newState.firstName = action.firstName
      return newState
    case WRITE_LAST_NAME:
      newState.lastName = action.lastName
      return newState
    case WRITE_EMAIL:
      newState.email = action.email
      return newState
    case WRITE_PHONE:
      newState.phone = action.phone
      return newState
    case WRITE_STREET:
      newState.street = action.street
      return newState
    case WRITE_STREET2:
      newState.street2 = action.street2
      return newState
    case CHANGE_STATE:
      newState.state = action.state
      return newState
    case WRITE_ZIP:
      newState.zip = action.zip
      return newState
    default:
      return state
  }
}
