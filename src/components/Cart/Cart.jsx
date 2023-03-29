import React from 'react';
import Product from '../product/Product';
import './Cart.css';

const Cart = ({cart}) => {
    let total = 0;
    let totalShipping = 0;
    for(const product of cart){
        total += product.price;
        totalShipping += product.shipping;
    }
    const tax = total*7/100;
    const grandTotal = total+totalShipping+tax;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6 style={{fontSize:"21px", fontWeight:"400"}}>Grand Total: ${grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;