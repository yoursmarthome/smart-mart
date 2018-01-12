import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
// import { clearCart, removeItem, addToCart } from '../store'
import _ from 'lodash'

 const Checkout = (props) => {
//   const { cart, products, handleCartClear, handleItemRemove, handleAddToCart, total} = props
const { name, checkOutEntry, handleChange, handleSubmit } = props;
const stateList = ["AK","AL","AR","AZ","CA","CO","CT","DC","DE","FL","GA","GU","HI","IA","ID", "IL","IN","KS","KY","LA","MA","MD","ME","MH","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY","OH","OK","OR","PA","PR","PW","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WI","WV","WY"]
  return (
    <form id="new-message-form" onSubmit={evt => handleSubmit(name, checkOutEntry, evt)}>
      <div className="input-group input-group-lg">
        <input
          className="form-control"
          type="text"
          name="content"
          value={newFirstNameEntry}
          onChange={handleFirstNameChange}
          placeholder="Fist name"
        />
        <input
          className="form-control"
          type="text"
          name="content"
          value={newLastNameEntry}
          onChange={handleLastNameChange}
          placeholder="Last name"
        />
        <input
          className="form-control"
          type="text"
          name="Street Address"
          value={newStreetEntry}
          onChange={handleStreetChange}
          placeholder="Street Address"
        />
        <input
          className="form-control"
          type="text"
          name="Street Address 2"
          value={newStreet2Entry}
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
          {
            ...stateList.map(state => {
                return <option key={state} value={`${state}`}>{state}</option>
            })
        }
        />
        <span className="input-group-btn">
          <button className="btn btn-default" type="submit">Chat!</button>
        </span>
      </div>
    </form>
  );
}
const mapStateToProps = function (state, ownProps) {
  return {
    newMessageEntry: state.newMessageEntry,
    name: state.name
  };
};

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    handleChange (evt) {
      dispatch(writeMessage(evt.target.value));
    },
    handleSubmit (name, content, evt) {
      evt.preventDefault();

      const { channelId } = ownProps;

      dispatch(postMessage({ name, content, channelId }));
      dispatch(writeMessage(''));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewMessageEntry);



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
}

export default connect(Checkout)
