import React from 'React'

export default function StarRating(props) {
  const rating = props.product.rating;

  return (
    <div>
     {
       <img className="star-rating" src={`/assets/stars/Star_rating_${rating}_of_5.png`} />
     }
    </div>
  )
}
