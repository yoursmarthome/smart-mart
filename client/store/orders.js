import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_ORDERS = 'GET_ORDERS'

/**
 * INITIAL STATE
 */
const defaultOrder = []

/**
 * ACTION CREATORS
 */

const getOrders = orders => ({type: GET_ORDERS, orders})

/**
 * THUNK CREATORS
 */
export const fetchOrders = (userId) =>
  dispatch =>
    axios.get(`/api/orders/${userId}`)
      .then(res =>
        dispatch(getOrders(res.data || defaultOrder)))
      .catch(err => console.log(err))



/**
 * REDUCER
 */
export default function (state = defaultOrder, action) {
  switch (action.type) {
    case GET_ORDERS:
      return action.orders
    default:
      return state
  }
}
