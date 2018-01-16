import React from 'react'
import {connect} from 'react-redux'
import ReactImageMagnify from 'react-image-magnify';
import AddToCartButton from './add-to-cart-btn'
import StarRating from './star-rating'
import Reviews from './reviews'
import ReviewForm from './review-form'

const SingleProduct = (props) => {
  const { product } = props

  return (
    <div className="single-product-content">
      <div className="container">
        <div className="row">
        {
          !product ? null :
          <div>
            <div className="col-sm-4 single-product_img">
              <ReactImageMagnify {...{
                  smallImage: {
                      isFluidWidth: true,
                      src: product.photo,
                      srcSet: [
                          `${product.photo} 687w`,
                          `${product.photo} 770w`,
                          `${product.photo} 861w`,
                          `${product.photo} 955w`
                      ].join(', '),
                      sizes: '(min-width: 480px) 30vw, 80vw'
                  },
                  largeImage: {
                      alt: '',
                      src: product.photo,
                      width: 1200,
                      height: 1200
                  }
              }} />
            </div>
            <div className="col-sm-8">
              <h3>{product.name}</h3>
              <StarRating {...props} />
              <p>{product.description}</p>
              <h4>${product.price}</h4>
              <AddToCartButton product={product} />
            </div>
          </div>
        }
        </div>
      </div>
      <div>
        <Reviews product={product} />
        <ReviewForm product={product} />
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state, ownProps) => {
  const productId = Number(ownProps.match.params.id)
  return {
    product: state.products.find(product => product.id === productId)
  }
}

export default connect(mapState)(SingleProduct)
