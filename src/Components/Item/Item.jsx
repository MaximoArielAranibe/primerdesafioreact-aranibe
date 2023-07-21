import React from 'react'
import './Item.css'

export const Item = (props) => {
  return (
    <div className='product_container'>
        <h3 className='product_title'>{props.name}</h3>
        <img className='product_image' src={props.thumbnail} alt={props.brand} />
        <h4 className='product_price'>{props.price}</h4>
        <p className='product_description'>{props.description}</p>
    </div>
    );
}
