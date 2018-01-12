import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const WRITE_FIRST_NAME = 'WRITE_FIRST_NAME'

/**
 * INITIAL STATE
 */
const defaultCheckout = {
  firstName: ''
}

/**
 * ACTION CREATORS
 */
// const getProduct = product => ({type: GET_PRODUCT, product})
const writeFirstName = firstName => ({type: WRITE_FIRST_NAME, firstName})

// /**
//  * THUNK CREATORS
//  */
// export const fetchProducts = () =>
//   dispatch =>
//     axios.get('/api/products')
//       .then(res =>
//         dispatch(getProducts(res.data || defaultProduct)))
//       .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function (state = defaultCheckout, action) {
  let newState = Object.assign({}, state)
  switch (action.type) {
    case WRITE_FIRST_NAME:
      newState.firstName = action.firstName
      return newState
    default:
      return state
  }
}
