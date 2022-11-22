import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const[cart, setCart] = useState([])

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    } ,[])

    const handleAddToCart = (products) => {
        const newCart = [...cart, products];
        setCart(newCart);
    }
    return (
        <div className='shop'>
            <div>
                <h3>Total Product : {products.length}</h3>
                <div className='products-section'>
                    {
                        products.map(product => <Products products={product} key={product.id} handleAddToCart={handleAddToCart}></Products>)
                    }
                </div>
            </div>
            <div className='shop-small-part'>
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;