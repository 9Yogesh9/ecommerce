import React, { useEffect } from 'react';
import SingleItem from './SingleItem';
import { useSelector } from 'react-redux';

import {
    selectCart
} from '../features/cartSlice';

const Cart = () => {
    const cartItems = useSelector(selectCart);

    return (
        <>
            <div className='main_cart'>
                <div className="cart_page">
                    <h1 className='cart_bg'>Your Cart</h1>
                    {cartItems.map((item => <SingleItem item={item} key={item.id} cart={true} />))}
                </div>
                <div className="cart_amount">
                    <h1>Total Amount</h1>
                    <h1>&#x20B9; {cartItems.reduce(
                        (accumulator, currentValue) => accumulator + currentValue.stock * currentValue.price, 0)
                    }</h1>
                </div>
            </div>
        </>
    )
}

export default Cart