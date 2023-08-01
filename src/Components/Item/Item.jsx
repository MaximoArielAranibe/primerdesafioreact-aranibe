import React from 'react'
import './Item.css'
import { CardContent } from '@mui/material';

export const Item = (props) => {
  return (
    <CardContent>
        <h3 className='product_title'>{props.name}</h3>
        <img className='product_image' src={props.thumbnail} alt={props.brand} />
        <h4 className='product_price'>${props.price}</h4>
        <p className='product_description'>{props.description}</p>
        <hr />
    </CardContent>
    );
}
