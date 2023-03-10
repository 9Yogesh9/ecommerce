import React from 'react';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';

import '../index.css';

import {
    setQuantity
} from '../features/cartSlice';

import {
    // addProducts,
    // removeProducts,
    addQuantity,
    subtractQuantity,
    // selectProduct
} from '../features/productSlice';

const CartItems = ({ item }) => {
    // const products = useSelector(selectProduct);
    const dispatch = useDispatch();

    const AddQuantity = () => {
        // console.log("ADD ");
        // console.log(item);
        // console.log("Before " + item.stock);

        if (item.stock - 1 >= 0) {
            dispatch(subtractQuantity(item));
        } else {
            console.log("Out of stock !")
        }

        dispatch(setQuantity());

        // console.log("After " + item.stock);
    }

    const SubtractQuantity = () => {
        if (item.stock + 1 < 11) {
            dispatch(addQuantity(item));
        } else {
            console.log("Max Quantity Exceded !")
        }
        dispatch(setQuantity());
    }


    return (
        <div className='cart_item'>
            <div className='item_image_container'>
                <img src={item.image} className="item_image" alt={`product{$item.id}`} />
            </div>
            <div className='name_stock'>
                <div className='item_name'>
                    {item.name}
                </div>
                <div className='item_data'>
                    <div className='item_stock'>
                        In Stock : {item.stock ? item.stock : "Out of stock !"}
                    </div>
                    <div className='item_price'>
                        &#x20B9; {item.price}
                    </div>
                </div>
            </div>
            <div className='add_to_cart'>
                {item.stock ?
                    <button className='add_to_cart_btn' onClick={() => AddQuantity()}>Add to Cart</button>
                    :
                    <button className='add_to_cart_btn' disabled>Not Available</button>}
            </div>
            <div onClick={() => AddQuantity()}><AiFillPlusCircle /></div>
            <div onClick={() => SubtractQuantity()}><AiFillMinusCircle /></div>
        </div>
    )
}

export default CartItems;