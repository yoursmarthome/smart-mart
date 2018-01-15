import React from 'react'

export default function CategoryPanel (props) {
  const {category} = props;
  return (
    <div className="col-sm-4">
      <div className="category-panel panel panel-default text-center">
        <img className="img-responsive" src={category.photo} />
        <p className="category-name">{category.name}</p>
        <button className="btn btn-default">View Products</button>
      </div>
    </div>
  )
}
