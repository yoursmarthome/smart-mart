// import React from 'react'
// import {connect} from 'react-redux'
// import {withRouter, Link} from 'react-router-dom'
// // import { clearCart, removeItem, addToCart } from '../store'
// import _ from 'lodash'

// const Checkout = (props) => {
//   const { cart, products, handleCartClear, handleItemRemove, handleAddToCart, total} = props

//   return (
//     <div>
//       <h2>Checkout</h2>
//       <ul>
//         {
//           cart.length && products.length ? 
//           cart.map(item => {
//             const product = _.find(products, { id: item.id})
//             let productPrice = parseInt(product.price)
//             total += (product.price * item.quantity)
//             return (
//               <li key={item.id}>
//                 <button className='remove-item-cart' onClick={() => handleAddToCart(item.id)}>+</button>
//                 <h4>{product.name}</h4>
//                 <h4>{item.quantity}</h4>
//                 <button className='remove-item-cart' onClick={() => handleItemRemove(item.id)}>-</button>
//               </li>
//             )
//           }) 
//           : 
//           <li>No items in cart.</li>
//         }
//       </ul>
//       {/* need to display total here! */}
//       <div>
//         {
//           '$' + {total}
//         }
//       </div>
//     </div>
//   )
// }

// /**
//  * CONTAINER
//  */
// const mapState = (state) => {
//     return {
//       cart: state.cart,
//       products: state.products
//     }
// }

// const mapDispatch = (dispatch) => {
//   return {
//     handleCartClear () {
//       dispatch(clearCart())
//     },
//     handleItemRemove (id) {
//       dispatch(removeItem(id))
//     },
//     handleAddToCart (id) {
//       dispatch(addToCart(id))
//     }
//   }
// }

// export default connect(mapState, mapDispatch)(Checkout)
