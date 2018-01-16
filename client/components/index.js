/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Main} from './main'
export {default as UserHome} from './user-home'
export {default as SingleProduct} from './single-product'
export {default as Checkout} from './checkout'
export {default as Home} from './home'
export {default as Cart} from './cart'
export {default as CartItem} from './cart-item'
export {default as PaymentForm} from './payment-form'
export {default as AddToCartButton} from './add-to-cart-btn'
export {Login, Signup} from './auth-form'
