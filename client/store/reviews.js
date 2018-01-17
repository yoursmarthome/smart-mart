import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_REVIEWS = 'GET_REVIEWS'
const GET_REVIEW = 'GET_REVIEW'

/**
 * INITIAL STATE
 */
const defaultReviews = []

/**
 * ACTION CREATORS
 */

const getReviews = reviews => ({ type: GET_REVIEWS, reviews })
const getReview = review => ({ type: GET_REVIEW, review })

/**
 * THUNK CREATORS
 */

export const fetchReviews = (productId) => 
  dispatch =>
    axios.get(`/api/reviews/${productId}`)
      .then(res => 
        dispatch(getReviews(res.data || defaultReviews)))
      .catch(err => console.log(err))

export const postReview = (review) =>
  dispatch =>
    axios.post('/api/reviews', review)
      .then(res => 
        dispatch(getReview(res.data)))
      .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function (state = defaultReviews, action) {
  switch (action.type) {
    case GET_REVIEWS:
      return action.reviews
    case GET_REVIEW:
      return Object.assign([action.review], state)
    default:
      return state
  }
}
