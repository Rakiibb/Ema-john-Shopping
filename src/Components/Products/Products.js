import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Products.css'

const Products = (props) => {
    const {img, name, price, stock, ratings} = props.products
    return (
        <div className='single-product'>
            <img src={img} alt=''/>
            <h1>{name}</h1>
            <h2>Price : ${price}</h2>
            <div className='product-last-part'>
                 <p>Ratings : {ratings}</p>
                 <p>In stock : {stock}</p>
            </div>
            <button className='button' onClick={() => props.handleAddToCart(props.products)}>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Products;