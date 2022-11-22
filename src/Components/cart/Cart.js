import React from 'react';

const Cart = (props) => {
    return (
        <div>
            <h1>Order Summary</h1>
                <h1>Selected Item's : {props.cart.length}</h1>
        </div>
    );
};

export default Cart;