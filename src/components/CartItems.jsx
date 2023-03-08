import React from 'react';

import '../index.css';

const CartItems = ({ item }) => {
    return (
        <div className='cart_item'>
            <div className='item_image_container'>
                <img src={item.image} className="item_image" alt={`product{$item.id}`} />
            </div>
            <div className='item_name'>
                {item.name}
            </div>
            <div className='item_stock'>
                {item.stock}
            </div>
            <div>
                {item.price}
            </div>
        </div>
    )
}

export default CartItems;